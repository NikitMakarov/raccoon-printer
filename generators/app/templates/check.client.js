HtmlacademyTask.setup(function () {
  this.setView(<%= view %>);
  this.setRunner(<%= runner %>);
  this.setChecker(<%= checker %>, function () {});
  this.setAnswers([]);
});
