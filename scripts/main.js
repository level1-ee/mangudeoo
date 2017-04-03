$( document ).ready(function() {
  var rellax = new Rellax('.parallax');
  $('.c-faq__item-label').on('click', function() {
    $('.c-faq__item-answer').hide();
    $('.c-faq__item-label').removeClass('current');
    $(this).addClass('current');
    $(this).next('.c-faq__item-answer').slideDown('fast');
  })
});
