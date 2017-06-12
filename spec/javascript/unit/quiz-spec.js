'use strict';

var fs = require('fs');
const { JSDOM } = require('jsdom');

var htmlSource = fs.readFileSync("./source/partials/_quiz-question.html.erb", "utf8");
const { window } = new JSDOM(
  htmlSource +
  '<div class="email-capture-row"></div>'
);
const { document } = window.window;
global.window = window;
global.document = document;
global.$ = global.jQuery = require("../../../source/javascripts/vendor/jquery");

require("../../../source/javascripts/quiz.js.erb");

describe("quiz", function() {

  beforeEach(function() {
    $(".quiz-row").quiz();
  });

  it("renders the question properly", function() {
    var renderedQuestion = document.querySelector("#quiz-question").textContent;
    var question = "If you enter this series of commands into a computer, what " +
                   "would you expect the output to be.a = 10b = 20a = b";
    expect(renderedQuestion).toEqual(question);
  })

  it("renders the first label properly", function() {
    var label1 = document.querySelector("#quiz-answer-label-1").textContent;
    expect(label1).toEqual("a = ");
  })

  it("renders the second label properly", function() {
    var label2 = document.querySelector("#quiz-answer-label-2").textContent;
    expect(label2).toEqual("b = ");
  })

  it("returns the proper respond if correct values are submitted", function() {
    $("#quiz-answer-input-1").val(20);
    $("#quiz-answer-input-2").val(20);
    $("#quiz-submit").trigger("click");
    var renderedRespond = document.querySelector("#quiz-result").textContent;
    var respond = "Your answer is correct!";
    expect(renderedRespond).toEqual(respond);
  })

  it("returns the proper respond if incorrect values are submitted", function() {
    $("#quiz-answer-input-1").val(18);
    $("#quiz-answer-input-2").val(20);
    $("#quiz-submit").trigger("click");
    var renderedRespond = document.querySelector("#quiz-result").textContent;
    var respond = "Your answer: a = 18, b = 20The correct answer is: a = 20, " +
                  "b = 20Think of this in the same way a computer would. Or even" +
                  " better, try it out in IRB";
    expect(renderedRespond).toEqual(respond);
  })

  it("removes whitespace from both ends of the input values", function() {
    $("#quiz-answer-input-1").val("      20  ");
    $("#quiz-answer-input-2").val("  20       ");
    $("#quiz-submit").trigger("click");
    var renderedRespond = document.querySelector("#quiz-result").textContent;
    var respond = "Your answer is correct!";
    expect(renderedRespond).toEqual(respond);
  })

})
