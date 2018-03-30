require 'markdown_helper'

class MarkdownHelperWrapper
  include MarkdownHelper
end

describe MarkdownHelperWrapper do

  let(:text) { "hello **world**" }
  let(:output) { "<p>hello <strong>world</strong></p>\n" }
  let(:markdown_link) { "[hiring](https://www.makersacademy.com/employers)" }
  let(:anchor_tag) { "<p><a href=\"https://www.makersacademy.com/employers\">hiring</a></p>\n" }

  it "converts text into markdown" do
    expect(subject.markdown(text)).to eq(output)
  end

  it "converts markdown links to anchor tags" do
    expect(subject.markdown(markdown_link)).to eq(anchor_tag)
  end
end
