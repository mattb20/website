require "web_helper"

class WebHelperWrapper
  include WebHelper
end

describe WebHelperWrapper do

  subject(:web_helper) { described_class.new }

  it "converts strings to links" do
    string = "What is the best thing about Makers?"
    expect(web_helper.string_to_link(string)).to eq("what-is-the-best-thing-about-makers")
  end
end
