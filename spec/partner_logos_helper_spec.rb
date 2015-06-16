require 'partner_logos_helper'

class PartnerLogosHelperWrapper
  include PartnerLogosHelper
end

describe PartnerLogosHelperWrapper do
  let(:test_logo) { "test-logo.png" }
  it "fetches a list of available partner logos" do
    expect(subject.fetch_logos).not_to be_empty
  end

  it "outputs image tags for each partner logo" do
    expect(subject.output_logo_tags([test_logo])[0]).to eq "<img src='hiring-partners/test-logo.png' />"
  end
end