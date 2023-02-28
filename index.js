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
      scrollTop: $(this).offset().top + 900
  }, 400);
});

$(".row li i").click(function() {
  console.log('roight');
  $(this).parents("ul").animate({
      scrollLeft: "+=1000px"
  }, 400);
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
    <ol class="gridGrid" style="margin-bottom: 8rem">
    <li><a href="01.html">
    1
    </a></li>
    <li><a href="02.html">
    2
    </a></li>
    <li><a href="03.html">
    3
    </a></li>
    <li><a href="04.html">
    4
    </a></li>
    <li><a href="05.html">
    5
    </a></li>
    <li><a href="06.html">
    6
    </a></li>
    <li><a href="06.html">
    7
    </a></li>
    <li><a href="07.html">
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
// flipcards

$('.flipCard').on("click", function() {
  $(this).children('.flip').css("transform", "rotateY(90deg)");
  $(this).children('.unFlip').css("transform", "rotateY(0deg)");
});

$('.TFbutton').on("click", function() {
  $(this).fadeOut();
  $(this).next(".displayNone").slideToggle();
});



// definition boxes

$('.flowButton').on("click", function() {
  const factor = $(this).attr("id");
  $(this).parent().next(".mapBox").empty();
  for (let name in tabDescription) {
    if  (factor === name) {
      $(this).parent().next(".mapBox").append((tabDescription[name]));
      $(this).parent().next(".mapBox").slideDown(400);
    }
  }
});

$('.defs > i').on("click", function() {
  console.log('x');
  $(this).prev(".mapBox").slideUp(200);
});