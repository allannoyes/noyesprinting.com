$('#design').scroll(function(){

  var imageScroll = $(this).scrollTop();

  // var y_scroll_pos = window.pageYOffset;
  // var scroll_pos_test = 1400;             // set to whatever you want it to be
  //
  // if(y_scroll_pos > scroll_pos_test) {

    $('.artwork-collage').css({
      'transform' : 'translate( 0,' + imageScroll /-10 +'%)'
    });

    // }

   console.log(imageScroll);



});
