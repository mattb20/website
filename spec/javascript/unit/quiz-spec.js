'use strict';

var fs = require('fs');
const { JSDOM } = require('jsdom');

var htmlSource = fs.readFileSync("./source/partials/_quiz-question.html.erb", "utf8");
const { window } = new JSDOM(
  htmlSource +
  '<div class="email-capture-row"></div>'
);
global.document = window.window;
global.window = window;
global.$ = global.jQuery = require("../../../source/javascripts/vendor/jquery");

require("../../../source/javascripts/quiz.js.erb");

describe("quiz", function() {

  beforeEach(function() {
    $(".quiz-row").quiz();
  });

  describe("setup", function() {
    it("renders the question properly", function() {
      var renderedQuestion = $("#quiz-question").text();
      var question = "If you enter this series of commands into a computer, what " +
                     "would you expect the output to be.a = 10b = 20a = b";
      expect(renderedQuestion).toEqual(question);
    })

    it("renders the first label properly", function() {
      var label1 = $("#quiz-answer-label-1").text();
      expect(label1).toEqual("a = ");
    })

    it("renders the second label properly", function() {
      var label2 = $("#quiz-answer-label-2").text();
      expect(label2).toEqual("b = ");
    })
  })

  describe("evaluation", function() {
    it("returns the proper response if correct values are submitted", function() {
      $("#quiz-answer-input-1").val(20);
      $("#quiz-answer-input-2").val(20);
      $("#quiz-submit").trigger("click");
      var renderedResponse = $("#quiz-result-text").text();
      var response = "You're correct!";
      expect(renderedResponse).toEqual(response);
    })

    it("returns the proper response if incorrect values are submitted", function() {
      $("#quiz-answer-input-1").val(18);
      $("#quiz-answer-input-2").val(20);
      $("#quiz-submit").trigger("click");
      var renderedResponse = $("#quiz-result-text").text();
      var response = "Your answer: a = 18, b = 20The correct answer is: a = 20, " +
                    "b = 20Think of this in the same way a computer would. Or even" +
                    " better, try it out in IRB";
      var responseClass = $("#quiz-result-text").attr("class");
      expect(renderedResponse).toEqual(response);
    })

    it("removes whitespace from both ends of the input values", function() {
      $("#quiz-answer-input-1").val("      20  ");
      $("#quiz-answer-input-2").val("  20       ");
      $("#quiz-submit").trigger("click");
      var renderedResponse = $("#quiz-result-text").text();
      var response = "You're correct!";
      expect(renderedResponse).toEqual(response);
    })

    it("changes the background color of response msg if correct values submitted", function() {
      $("#quiz-answer-input-1").val(20);
      $("#quiz-answer-input-2").val(20);
      $("#quiz-submit").trigger("click");
      var responseClass = $("#quiz-result-text").attr("class");
      var classValue = "quiz-result-correct";
      expect(responseClass).toEqual(classValue);
    })

    it("does not change the background color of response msg if incorrect values submitted", function() {
      $("#quiz-answer-input-1").val(19);
      $("#quiz-answer-input-2").val("aaaa");
      $("#quiz-submit").trigger("click");
      var responseClass = $("#quiz-result-text").attr("class");
      expect(responseClass).toBeUndefined();
    })

  })
})
