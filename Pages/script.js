$(document).ready(function(){
  $(".hide").hide();
  
  $(".marker-thailand").click(function(){
    $(".hide").hide();
    $(".thailand-txt").fadeIn(300);
  });

  $(".marker-vietnam").click(function(){
    $(".hide").hide();
    $(".vietnam-txt").fadeIn(300);
  });

  $(".marker-uae").click(function(){
    $(".hide").hide();
    $(".uae-txt").fadeIn(300);
  });

  $(".marker-turkey").click(function(){
    $(".hide").hide();
    $(".turkey-txt").fadeIn(300);
  });
});