require 'spec_helper'

feature "ebook", :type => :feature do
  before do
    visit '/ebook'
  end

  scenario "has the correct title header" do
    expect(page).to have_selector 'h1'
    within 'h1' do
      expect(page).to have_content "Learn Ruby In 15 Minutes"
    end
  end
end
