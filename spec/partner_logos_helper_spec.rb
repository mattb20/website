require 'partner_logos_helper'

class PartnerLogosHelperWrapper
  include PartnerLogosHelper
end

describe PartnerLogosHelperWrapper do
  it "fetches a list of available partner logos" do
    test_logo = "test-logo.png"
    expect(subject.fetch_logos).not_to be_empty
  end

  it "outputs human friendly titles for alt text and title" do
    full_path_logo = "hiring-partners/test-logo.png"
    expect(subject.alt_text_from_filename(full_path_logo)).to eq "Test Logo"
  end
end
