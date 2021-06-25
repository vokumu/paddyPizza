function Pizza(size,crust,toppings, number) {
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings=toppings;
    this.number=number;
  }
Pizza.prototype.getPrice = function(){
    if(this.pizzaSize == 'small'){
        return "1";
    }
    else if(this.pizzaSize == 'medium'){
        return "2";
    }
    else if(this.pizzaSize == 'large'){
        return "3";
    }
}


$(document).ready(function(){
    $('#myForm').submit(function(event){
        event.preventDefault();
        var mySize=$('#mySize').val();
        var myCrust=$('#myCrust').val();
        var myToppings =$('#myToppings').val();
        var myNumber=$('.count').val();
        var newPizza = new Pizza(mySize,myCrust,myToppings,myNumber);
        console.log(myNumber);
    

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