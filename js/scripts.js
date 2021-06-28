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
            if(this.pizzaSize == 'small'){
                toppingPrice=toppingPrice+200;
            }
            else if(this.pizzaSize == 'medium'){
                toppingPrice=toppingPrice+300;
            }
            else if(this.pizzaSize == 'large'){
                toppingPrice=toppingPrice+400;
            }
        }
        else if(meatTopings.includes(toppings[i])){
            if(this.pizzaSize == 'small'){
                toppingPrice=toppingPrice+300;
            }
            else if(this.pizzaSize == 'medium'){
                toppingPrice=toppingPrice+400;
            }
            else if(this.pizzaSize == 'large'){
                toppingPrice=toppingPrice+500;
            }

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
        var price=newPizza.getSizePrice()+newPizza.getCrustPrice()+newPizza.getToppingsPrice();
        var delivery=document.getElementById("delivery");
        var location="";
        deliveryCost=0;
        if(delivery.checked == true){
            alert("You have selected delivery as part of your options you will be charged an extra KSH 300 for delivery.");
            location=prompt("Where should the delivery be made?");
            deliveryCost=300;
            price=(price*myNumber)+deliveryCost;
            alert("Your Pizza will be deivered in "+location);
            

        }
        else{
            price=price*myNumber;

        }
        $('.orderForm').hide();
        $('.order').show();
        $( "#showOrder" ).click(function() {
            $("ul#order-list").append('<li><p class="card-title pricing-card-title">Size Price:  ' + newPizza.getSizePrice() + "</p></li>");
            $("ul#order-list").append('<li><p class="card-title pricing-card-title">Crust Price:  ' + newPizza.getCrustPrice() + "</p></li>");
            $("ul#order-list").append('<li><p class="card-title pricing-card-title">Toppings Price:  ' + newPizza.getToppingsPrice() + "</p></li>");
            $("ul#order-list").append('<li><p class="card-title pricing-card-title">Delivery cost:  ' + deliveryCost + "</p></li>");
            $("ul#order-list").append('<li><p class="card-title pricing-card-title">Number of Pizzas:  ' + myNumber + "</p></li>");
            $("ul#order-list").append('<li><h2 class="card-title pricing-card-title">Total KSH ' + price + "</h2></li>");
            $('#showOrder').hide();
            $('#makePayment').show();
          });
          $( "#makePayment" ).click(function() {
              alert('Thank your choosing us your order will be arriving soon');
              window.location.href = 'index.html';
          });
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