require 'lib/current_page_helper'
require 'lib/partner_logos_helper'
require 'lib/markdown_helper'

###
# Compass
###

activate :directory_indexes
activate :meta_tags

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
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
helpers CurrentPageHelper, PartnerLogosHelper, MarkdownHelper

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'
sprockets.append_path File.join root, 'bower_components'

configure :development do
  activate :livereload
  set :mixpanel_token, 'f3e503bb7803dd7089f5b4124baa03a4'

  # custom setting for switching off analytics in development
  set :run_analytics, false
end

# Build-specific configuration
configure :build do

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  set :run_analytics, true

  set :mixpanel_token, 'b839b30fbe0796d650ae20e7eae6d0d1'
end
