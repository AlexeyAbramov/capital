$(document).ready(function () {
  $('form').submit(e => e.preventDefault())
  $("#services__btn").click(function () {
    $(".items-specialization__item.hidden").hasClass("active")
      ? $(".items-specialization__item.hidden").removeClass("active")
      : $(".items-specialization__item.hidden").addClass("active");
  });
  $('.question-answer__item').click(function(){
    $(this).toggleClass('active');
    $(this).find('.switch').toggleClass('active');
    $(this).find('.question-answer__text').toggleClass('hidden');
  })
});
