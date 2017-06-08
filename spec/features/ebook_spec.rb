require 'spec_helper'

feature "ebook", :type => :feature do
  before do
    visit '/ebook'
  end

  describe "static content" do
    scenario "has the correct title header" do
      expect(page).to have_selector 'h1'
      within 'h1' do
        expect(page).to have_content "Learn Ruby In 15 Minutes"
      end
    end

    scenario "has the correct subheader" do
      expect(page).to have_css("h4#ebook-subheader", :text => "Download the guide")
    end

    scenario "has the correct intro" do
      content = "Get a free copy of our Learn Ruby In 15 Minutes e-book by signing "\
                "up to our newsletter. It's perfect for anyone that is interested "\
                "in taking the plunge by learning to code. It is a good start into "\
                "the Ruby language if you've never had any experience before and "\
                "we've made it as easy to understand as possible."

      expect(page).to have_css("p#ebook-intro", :text => content)
    end
  end

end
