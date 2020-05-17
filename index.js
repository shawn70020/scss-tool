
$(document).ready(function () {
  
  $('.jq-hamburger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.jq_header_list').slideToggle();
  });


  $('.jq_question_list_title').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active').parent().siblings().find('.jq_question_list_title').removeClass('active');
    $(this).siblings('.jq_question_list_text').slideToggle().parent().siblings().find('.jq_question_list_text').slideUp();
  });


  function ani(value,time) {
    let name = `am-order${time}`
    $(value).addClass(name)
  }

  function anil(value,go) {
    $(value).each(function(index){
      let num = index+go;
      let name = `am-order${num}`;
      $(this).addClass(name);
    });
  }

  let animation = function (){
    ani('.jq_logo',1);
    anil('.jq_header_list li',6);
    ani('.jq_header_banner_msg',10);
    ani('.jq_header_banner_slogan',11);
  }

  animation();

});

