$(function() {
  $('nav a').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});


var sections = $('section');
var nav = $('nav');
var navHeight = nav.outerHeight();
var sectionHeights = [];
var currentSectionIndex = 0;

sections.each(function() {
  sectionHeights.push($(this).outerHeight());
});

function scrollToSection(index) {
  currentSectionIndex = index;
  $('html, body').stop().animate({
    scrollTop: sections.eq(index).offset().top
  }, 1000);
}

$(window).on('wheel', function(event) {
  var delta = event.originalEvent.deltaY;
  var newIndex = currentSectionIndex + (delta > 0 ? 1 : -1);

  if (newIndex >= 0 && newIndex < sections.length) {
    scrollToSection(newIndex);
  }
});

$(window).on('load', function() {
  scrollToSection(0);
});



