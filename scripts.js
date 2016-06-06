var toggleOverlay = function(){
    $('.project').mouseenter(function(){
      $(this).addClass('hover');
    })
    .mouseleave(function(){
      $(this).removeClass('hover');
    })
  }

$(function(){

console.log('loaded');

toggleOverlay();

});
