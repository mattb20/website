# Converts strings to URL-friendly slugs
module SlugHelper
  def slug(string)
    string.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end
end