$(document).ready ( function () {
  var pictureArr = ['http://www.astonhotels.com/assets/slides/690x380-Hawaii-Turtle.jpg','http://www.colbybrownphotography.com/assets/Hawaii_4461.jpg', 'http://www.hawaiiactive.com/img/pictures/kauai-kalalau-valley-lookout.jpg'];

  var  i = 0;
  $('.slider').append('<img width = "600px" height="600px" src="'+pictureArr[i]+'" alt="">');


$('.fa-arrow-circle-o-right').on('click', function (){

  if (i == pictureArr.length-1){
    i = 0;
  } else {
    i++;
  }
  $('.slider').empty();
  $('.slider').append('<img width = "600px" height="600px" src="'+pictureArr[i]+'" alt="">');

});


$('.fa-arrow-circle-o-left').on('click', function () {
  if (i == 0) {
    i = 2;
    $('.slider').empty();
    $('.slider').append('<img width = "600px" height="600px" src="'+pictureArr[i]+'" alt="">');

  } else {
    i--;
    $('.slider').empty();
    $('.slider').append('<img width = "600px" height="600px" src="'+pictureArr[i]+'" alt="">');

  }

});

})
