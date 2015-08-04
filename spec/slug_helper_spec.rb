require 'slug_helper'

class SlugHelperWrapper
  include SlugHelper
end

describe SlugHelperWrapper do

  let(:string) { "Alice 'Jimmy' Jameson" }
  let(:slug) { "alice-jimmy-jameson" }

  it "converts strings to slugs" do
    expect(subject.slug(string)).to eq(slug)
  end
end
