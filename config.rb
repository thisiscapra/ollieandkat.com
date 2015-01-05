Time.zone = "US/Eastern"

# Blog activation

activate :blog do |blog|
  blog.layout = "blog"
  blog.sources = "blog/{year}-{month}-{day}-{title}.html"
  blog.permalink = "blog/{title}.html"
  blog.paginate = true
  blog.per_page = 10
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  blog.taglink = "tags/{tag}.html"
end

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", layout: false

page "/feed.xml", layout: false
page "/404.html", :layout => false
page "/sitemap.xml", :layout => false

#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, :host => "thisiscapra.dev", :apply_js_live => true, :apply_css_live => true
end

# Methods defined in the helpers block are available in templates
helpers do
  # Set the page title
  def page_title
    if content_for?(:title)
      "#{yield_content(:title)} - O&K"
    else
      "Ollie & Kat"
    end
  end
  # Set the page description
  def page_description
    if content_for?(:description)
      "#{yield_content(:description)}"
    else
      "We are Ollie &amp; Kat, and this is our blog about moving to Canada and documenting our travels and experiences."
    end
  end
  # Active nav items
  def nav_active(page)
    current_page.url.start_with?(page) ? {:class => 'active'} : {}
  end
  # Custom page classes
  def custom_page_classes
    "page-#{page_classes} #{yield_content(:page_class) if content_for?(:page_class)}"
  end
  # Custom background images on header
  def featured_image
    if content_for?(:featured_image)
      "style='background-image:url(#{yield_content(:featured_image)});'"
    end
  end
  # Tag lists
  def sentence_tag_list(article)
    if tags = article.tags
      content_tag(:div, class: :tags) do
        "This article was filed under " +
        article.tags.map{|t| link_to t, "/tags/#{t}"}.to_sentence +
        "."
      end
    end
  end
  # Pretty dates
  def pretty_date(date)
    date.strftime('%B %d, %Y')
  end
end

# Fix bug with build errors and typography fonts
ignore 'fonts/*'

after_build do |builder|
  print "After_build fixes... "
  FileUtils.cp_r(Dir['source/fonts/'],'build/')
  puts "done."
end

activate :directory_indexes

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
