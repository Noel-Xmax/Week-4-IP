$(document).ready(function(){
  console.log(123)
function pizzaCosting(crusts,toppings,size){
this.toppings=toppings,
this.size= size,
this.crusts=crusts,


pizzaCosting.prototype.toppingPrice=function(){
  if (this.toppings.length != 0){
    var priceOfTopping=this.toppings.length + 150;
    return priceOfTopping;
  }else{
    alert("Are you sure you need no extra topping?")
  }
}

pizzaCosting.prototype.pSize =function(){
  if (this.size ==="Pie"){
    return 200;
  }
  if (this.size ==="Small"){
    return 600;
  }
  if (this.size ==="Medium"){
    return 800;
  }
  if (this.size ==="Large"){
    return 1000;
  }
  if (this.size ==="Mega"){
    return 1200;
  }else{
    alert("Please select your preferred size.");
  }
}

pizzaCosting.prototype.Pcrust =function(){
  if (this.crust ==="Crispy"){
    return 50
  }
  if (this.crust ==="Stuffed"){
    return 150
  }
  if (this.crust==="Glutten-Free"){
    return 200
  }else{
    alert("please add a crust");
  }
}


pizzaCosting.prototype.totalCost= function(tAmount,cAmount,sAmount){
  var orderCost = tAmount+cAmount+sAmount;
  $('#btn1a').html(orderCost)
}

var pizzaCosting;
$("#show-Bill").show();
 var toppingsChosen=$("#pickt option:selected").val();
 var toppingsChosenA=[];
 $("input:option[name=toppings]:selected").each(function(){
   toppingsChosen=$(this).val();
   toppingsChosenA.push(toppingsChosen);
   $("#displayToppings").text(toppingsChosen + ",");
 });

 var sizeChosen=$("#picksS option:selected").val();
 var sizeChosenArray=[];
 $("input:option[name=sizes]:selected").each(function(){
   sizeChosen=$(this).val();
   sizeChosenArray.push(sizeChosen);
   $("#displaySize").text(sizeChosen + ",");
 });

 var sidesChosen=$("#tpick option:selected").val();
 var sidesChosenArray=[];
 $("input:option[name=sides]:selected").each(function(){
   sidesChosen=$(this).val();
   sidesChosenArray.push(sidesChosen);
   $("#displaySides").text(sidesChosen + ",");
 });
 var burgerChosen=$("#pickb option:selected").val();
 var burgerChosenArray=[];
 $("input:option[name=burgers]:selected").each(function(){
   burgerChosen=$(this).val();
   burgerChosenArray.push(burgerChosen);
   $("#displayBurger").text(burgerChosen + ",");
 });

 var crustChosen=$("input: checkbox[name:crust].checked").val();
 $("#displayCrust").text(crustChosen);
 };
 let  newPizza="";
pizzaCosting=newPizza (toppingsChosenA,sizeChosenArray,sizeChosenArray+burgerChosenrray);

var toppingsCost=pizzaCosting.toppingPrice();
var sizeCost=pizzaCosting.pSize();
var crustCost=pizzaCosting.Pcrust();
 pizzaCosting.totalPizzaCost(totalCost+sizeCost+crustCost);



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
  });











    // var crust1 =$("input#c1").val();
    // //   var crust2 =$("input#c2").val();
    //   var crust3 =$("input#c3").val();
    //   console.log(crust1,crust2,crust3)
    //   if (crust1=="" || crust2=="" || crust3==""){
    //     alert("Do you want any special crusts? Please choose above options")
    //   }else{
    //     alert("Hi, we are happy to serve you please place your order!")
    //   }
     
    //   $("#bt1a").click(function(){
    //     var Size = [];
    //     $.each($("input[class='size']:checked"), function(){
    //         size.push($(this).val());
    //     });
    //     alert("Pizza size added to cart are: " + size.join(", "));
    // });
    // $("#btn1a").click(function() { 
    //   $(".myselect :selected").each(function() {; 
    //   alert(this.value); 
    //     }); 
    //   });
    // });
    
    // function prices(size,crust,topping){
    //   let pie={name:"Pie", price:200}
    //   let small={name:"Small", price:600}
    //   let medium={name:"Medium", price:800}
    //   let large={name:"Large",price:1000}
    //   let mega={name:"Mega", price:1200}
    //   var pizzaSize=[Pie,Small,Medium,Large,Mega];
    
    //   let crispyS={name:"Crispy", size:"small",price:50}
    //   let crispyM={name:"Crispy", size:"medium",price:100}
    //   let crispyl={name:"Crispy", size:"large",price:150}
    //   let crispyMg={name:"Crispy", size:"mega",price:200}
    
    //   let stuffedS={name:"Stuffed", size:"small",price:100}
    //   let stuffedM={name:"Stuffed", size:"medium",price:150}
    //   let stuffedL={name:"Stuffed", size:"large",price:200}
    //   let stuffedMg={name:"Stuffed",  size:"mega",price:250}
    
    //   let gFreeS={name:"Glutten-Free", size:"small", price:150}
    //   let gFreeM={name:"Glutten-Free", size:"medium", price:200}
    //   let gFreeL={name:"Glutten-Free", size:"large", price:250}
    //   let gFreeMg={name:"Glutten-Free", size:"mega", price:300}
    //   this.crust=[Crispy,Stuffed,Glutten-Free]
    
    //   let tops={name:["Bacon","Macon","Pinepples","Gorgonzola-Mushroom","Black-Olives"],
    //   size:["small","medium","large","mega"], price:[50,100,150,200]
    //   }
    //   this.topping=[Bacon,Macon,Pinepples,Gorgonzola-Mushroom,Black-Olives]
    // }