$(document).ready(function(){
  $(".color-item").click(function(event){
    var color_item = event.target;
    var colorClass = $(color_item).attr('class').replace('color-item', '').trim();
    $("body").attr('class', colorClass);
  });
});
