
$(document).ready(function(){  
  for(var i=0 ; i<10 ; i++) {
    $('<div class="item"><img src="/assets/img/groupmuse/'+i+'.jpg" style="height: 300px;width: auto;margin: auto;"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
    $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#carousel-example-generic').carousel();
});