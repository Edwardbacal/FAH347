$('.padB').on("click", function() {
  $(this).next(".displayNone").slideToggle();
});

$('#ess').on("click", function() {
  $("#journal").slideUp();
  $("#essay").slideToggle();
});

$('#jour').on("click", function() {
  $("#essay").slideUp();

  $("#journal").slideToggle();
});