$(document).ready(function(){
  // console.log(123)

  var crust1 =$("input#c1").val();
  var crust2 =$("input#c2").val();
  var crust3 =$("input#c3").val();
  console.log(crust1,crust2,crust3)
  if (crust1=="" || crust2=="" || crust3==""){
    alert("Do you want any special crusts? Please choose above options")
  }else{
    alert("Hi, we are happy to serve you please place your order!")
  }
 
  $("#bt1").click(function(){
    var siz = [];
    $.each($("input[class='size']:checked"), function(){
        siz.push($(this).val());
    });
    alert("Pizza size added to cart are: " + siz.join(", "));
});
$("#btn1").click(function() { 
  $(".myselect :selected").each(function() {; 
  alert(this.value); 
    }); 
  });
});

function prices(size,crust,topping){
  let pie={name:"Pie", price:200}
  let small={name:"Small", price:600}
  let medium={name:"Medium", price:800}
  let large={name:"Large",price:1000}
  let mega={name:"Mega", price:1200}
  var pizzaSize=[Pie,Small,Medium,Large,Mega];

  let crispy={name:"Crispy", size:"small",price:50}
  let crispy={name:"Crispy", size:"medium",price:100}
  let crispy={name:"Crispy", size:"large",price:150}
  let crispy={name:"Crispy", size:"mega",price:200}

  let stuffed={name:"Stuffed", size:"small",price:100}
  let stuffed={name:"Stuffed", size:"medium",price:150}
  let stuffed={name:"Stuffed", size:"large",price:200}
  let stuffed={name:"Stuffed",  size:"mega",price:250}

  let gFree={name:"Glutten-Free", size:"small", price:150}
  let gFree={name:"Glutten-Free", size:"medium", price:200}
  let gFree={name:"Glutten-Free", size:"large", price:250}
  let gFree={name:"Glutten-Free", size:"mega", price:300}
  this.crust=[Crispy,Stuffed,Glutten-Free]

  let tops={name:["Bacon","Macon","Pinepples","Gorgonzola and Mushroom","Black-Olives"],
  size:["small"], price:[50,50,0,0,0], size:["medium"],price:[100,100,50,50,50], size:["large"], price:[150,150,100,100,100],
  size:["mega"],price:[200,200,150,150,150]
  }
  this.topping=[Bacon,Macon,Pinepples,Gorgonzola and Mushroom,Black-Olives]
}


























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














$("#address1").click(function(){
  alert("We are happy to serve you to your preferred location, This attracts a delivery Charge of Ksh. 100.00");
});
