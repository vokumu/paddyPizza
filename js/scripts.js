function Pizza(size,crust,toppings) {
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings=toppings;
  }
Pizza.prototype.getSizePrice = function(){
    sizePrice=0;
    if(this.pizzaSize == 'small'){
        sizePrice=100;
    }
    else if(this.pizzaSize == 'medium'){
        sizePrice=200;
    }
    else if(this.pizzaSize == 'large'){
        sizePrice=300;
    }
    return sizePrice;
}
Pizza.prototype.getCrustPrice = function(){
    crustPrice=0;
    if(this.pizzaCrust == 'Crispy'){
        crustPrice=500;
    }
    else if(this.pizzaCrust == 'Stuffed'){
        crustPrice=800;
    }
    else if(this.pizzaCrust == 'Glutten Free'){
        crustPrice=1000;
    }
    return crustPrice;
}
Pizza.prototype.getToppingsPrice = function(){
    toppingPrice=0;
    vegToppings=['Pineapple','Mushrooms','Spinach','Olives','Hot chillies','Onions','Broccoli','Sweet Corn','Garlic']
    meatTopings=['Shrimps','Chicken','Tuna','Bacon','Ham']
    toppings=this.pizzaToppings
    for(i=0; i<toppings.length;i++){
        if(vegToppings.includes(toppings[i])){
            toppingPrice=toppingPrice+200;
        }
        else if(meatTopings.includes(toppings[i])){
            toppingPrice=toppingPrice+300;

        }
    }
    return toppingPrice;
}
function getDeliveryPrice(location){
    deliveryPrice=0
    westLocations=['Westlands','Riverside'];
    eastLocations=['Donholm','Buruburu'];
    centralLocations=['CBD','Ngara'];
    if(westLocations.includes(location)){
        deliveryPrice=deliveryPrice+200;
    }
    else if(eastLocations.includes(location)){
        deliveryPrice=deliveryPrice+300;
    }
    else if(centralLocations.includes(location)){
        deliveryPrice=deliveryPrice+0;
    }
    return deliveryPrice;
}

function showMe (box) {
    var chboxs = document.getElementById("div1").style.display;
    var vis = "none";
        if(chboxs=="none"){
         vis = "block"; }
        if(chboxs=="block"){
         vis = "none"; }
    document.getElementById(box).style.display = vis;
}
$(document).ready(function(){
    $('#myForm').submit(function(event){
        event.preventDefault();
        var mySize=$('#mySize').val();
        var myCrust=$('#myCrust').val();
        var myToppings =$('#myToppings').val();
        var myNumber=$('.count').val();
        var newPizza = new Pizza(mySize,myCrust,myToppings);
        var price=newPizza.getSizePrice()+newPizza.getCrustPrice()+newPizza.getToppingsPrice();
        var delivery=$('#location').val();
        if(delivery === ""){
            price=price
        }
        else{
            price=price+getDeliveryPrice(delivery)
        }
        price=price*myNumber;
        console.log(price);
    });

    $('.count').prop('disabled', true);
    $(document).on('click','.plus',function(){
     $('.count').val(parseInt($('.count').val()) + 1 );
    });
    $(document).on('click','.minus',function(){
        $('.count').val(parseInt($('.count').val()) - 1 );
            if ($('.count').val() == 0) {
                $('.count').val(1);
            }
        });
});