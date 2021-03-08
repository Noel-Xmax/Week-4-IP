$(document).ready(function(){

$('.item1').click(function(){
  $(".col-md-4").toggle();
  $("descr").toggle();
});
$('.item2').click(function(){
  $("#c1,#c2,#c3").toggle();
});
$('.item3').click(function(){
  $("#t1,#t2,#t3,#t4,#t5,#t6,#t7").toggle();
});
$('.item4').click(function(){
  $("#col-md-3").toggle();
});
$('#men').click(function(){
  $(".card-menu").slideDown();
});
$('#sz').click(function(){
  $(".card-sizes").slideDown();
});
$('#prz').click(function(){
  $(".card-crusts,.card-toppings").toggle();
});
$('#active').click(function(){
  $(".card-menu,.card-crusts,.card-toppings,.item4,.card-sizes,.card-prices").toggle();
});















});
$("#address1").click(function(){
  alert("We are happy to serve you to your preferred location, This attracts a delivery Charge of Ksh. 100.00");
});