module WebHelper

  def string_to_link(string)
    string.gsub(/[^\s\w]/, '').downcase.gsub(' ', '-')
  end
end
