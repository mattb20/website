module PartnerLogosHelper
  LOGOS_DIR = "source/images/hiring-partners"
  RENDERED_DIR = "hiring-partners"

  def fetch_logos
    strip_directories!(Dir.entries(LOGOS_DIR)).map { |logo| prepend_path(logo)  }
  end

  def output_logo_tags(logos=fetch_logos)
    logos.map do | logo |
      "<img src='#{RENDERED_DIR}/#{logo}' />"
    end
  end

  private

  def strip_directories!(paths)
    paths.delete_if { | path | path[0] == "." }
    paths.delete_if { | path | [".", ".."].include? path }
  end

  def prepend_path(logo)
    "#{RENDERED_DIR}/#{logo}"
  end
end