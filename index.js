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





const menu = `
  <header id="siteMenu" style="position: fixed; top: 0; right: -150vw; background: #fff; transition: .4s ease-out; overflow-y: scroll; z-index: 99; height: 100vh;">

 
    <h2 style="margin-top: 3.5rem;">
    FAH347: Cubism and Related Movements
    </h2>
    <ol class="grid2">
    <li class="padB">
    <a class="closer" href="index.html">
    <h4>
    Home
    </h4>
    </a>
    </li>
    <li class="padB">
    <a class="closer" href="index.html#details">
    <h4>
    Details
    </h4>
    </a>
    </li>
    <li class="padB">
    <a class="closer" href="index.html#assignments">
    <h4>
    Assignments
    </h4>
    </a>
    </li>
    <li class="padB">
    <a class="closer" href="index.html#schedule">
    <h4>
    Schedule
    </h4>
    </a>
    </li>
    </ol>

    <h3>
    Jump to class
    </h3>
    <ol class="gridGrid">
    <li><a href="01.html">
    1
    </a></li>
    <li><a href="#">
    2
    </a></li>
    <li><a href="#">
    3
    </a></li>
    <li><a href="#">
    4
    </a></li>
    <li><a href="#">
    5
    </a></li>
    <li><a href="#">
    6
    </a></li>
    <li>

    </li>
    <li><a href="#">
    7
    </a></li>
    <li><a href="#">
    8
    </a></li>
    <li><a href="#">
    9
    </a></li>
    <li><a href="#">
    10
    </a></li>
    <li><a href="#">
    11
    </a></li>
    <li><a href="#">
    12
    </a></li>
    </ol>
  </header>
`

$('#menu').on("click", function(e) {
  e.preventDefault();
  $('#siteMenu').css("right", "0")
  $('#closeMenu').fadeIn();
});

$('#closeMenu').on("click", function() {
  $('#siteMenu').css("right", "-150vw")
  $(this).fadeOut();
});

$('body').on("click", "a.closer", function() {
  $('#siteMenu').css("right", "-150vw")
  $('#closeMenu').fadeOut();
});


$(document ).ready(function() {
  $("body").append(menu);
});


$(".down").click(function() {
  $('html, body').animate({
      scrollTop: $(this).offset().top + 780
  }, 400);
});