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

$(document).ready(function(){
    $('#myForm').submit(function(event){
        event.preventDefault();
        var mySize=$('#mySize').val();
        var myCrust=$('#myCrust').val();
        var myToppings =$('#myToppings').val();
        var myNumber=$('.count').val();
        var newPizza = new Pizza(mySize,myCrust,myToppings);
        var price=newPizza.getSizePrice()+newPizza.getCrustPrice()+newPizza.getToppingsPrice()
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