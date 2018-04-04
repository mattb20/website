module ImageHelper
  CDN_URL = "https://assets.makersacademy.com"

  def image_path(path)
    "#{CDN_URL}/images/#{path}"
  end
end
