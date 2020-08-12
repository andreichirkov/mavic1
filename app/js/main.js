$(function(){

  // $('.products__slider').slick({
  //
  // })

  // $('.questions__item-title').on('click', function () {
  //
  //   $('.questions__item').removeClass('.questions__item-title-active');
  //   $(this).parent().addClass('.questions__item-active')
  // })



  $('.questions__item-title').on('click', function() {

    var activeAnswer = $(this).next();
    var allAnswer = $('.questions__item-text');

    allAnswer.not(activeAnswer).slideUp(300);
    activeAnswer.slideToggle(300)
  })

  $('#fullpage').fullpage({
    autoScrolling:true,
    scrollHorizontally: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    sectionSelector: '.page-section',
    menu: '#menu'
  });

  
});