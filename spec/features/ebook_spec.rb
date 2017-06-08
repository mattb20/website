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

  describe "quiz setup", js: true do

    scenario "unhides email-capture area" do
      expect(page).to have_selector("div.email-capture-row", :text => "")
    end

    xscenario "shows the quiz question" do
      question = "If you enter this series of commands into a computer, what "\
                 "would you expect the output to be. a = 10 b = 20 a = b"
      expect(page).to have_css("div#quiz-question", :text => question)
    end

    scenario "shows 2 fields for the answers" do
      expect(page).to have_css("input#quiz-answer-input-1")
      expect(page).to have_css("input#quiz-answer-input-2")
    end

    xscenario "answer fields have the proper labels" do
      expect(page).to have_selector("label#quiz-answer-label-1", :text => "a = ")
      expect(page).to have_selector("label#quiz-answer-label-2", :text => "b = ")
    end

  end

  describe "quiz logic", js: true do
    xscenario "shows proper result if correct values are added" do
      fill_in("quiz-answer-input-1", with: 20)
      fill_in("quiz-answer-input-2", with: 20)
      click_button("quiz-submit", wait: 100)

      expect(page).to have_selector("div#quiz-result", :text => "Your answer is correct!")
    end
  end
end
