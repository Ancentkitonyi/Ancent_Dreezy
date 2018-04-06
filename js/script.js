$(document).ready(function() {

$("p")
    .wrapInner("<span>")

$("p br")
    .before("<span class='spacer'>")
    .after("<span class='spacer'>");

$('button').mouseenter(function() {
  $('button').fadeIn('slow','0.5');
});
//offset()-distace (sticky)from top of the window
var stickyTop = $(".sticky").offset().top;

//how far i have scrolled
$(window).scroll(function() {
  var windowTop = $(window).scrollTop();

  //monitor past the original location of the sticky element
  if (windowTop > stickyTop) {

    //if so, change the sticky element to fised positioning
    $(".sticky").addClass("stuck");
  }
   else {
    $(".sticky").removeClass("stuck");
  }
  });

    //added accordion
  var allPanels = $('.accordion > dd').hide();

  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

  // $('progress').each(function() {
  //   var max = $(this).val();
  //   $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
	// 		});




});
