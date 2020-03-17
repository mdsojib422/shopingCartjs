;(function($){
    'use strick';

    function plus_quantiy(quantity_plus_btn,quantity_btn,quantity_price){

        const plus_btn = document.getElementById(quantity_plus_btn);

        plus_btn.addEventListener("click",() => {          
            const quantity = document.getElementById(quantity_btn); 
            quantity.value++;
            document.getElementById(quantity_price).innerHTML = 1219 * Number(quantity.value);
          
            
            

        });
        

    }    
    plus_quantiy("plus_quantity","quantity","quantity_price");
    plus_quantiy("cover_plus_quantity","cover_quantity","cover_quantity_price");

    function minus_quantiy(nimus_quantity,quantity_st,quantity_price){

        const plus_btn = document.getElementById(nimus_quantity);

        plus_btn.addEventListener("click",() => {
       
            const quantity = document.getElementById(quantity_st);
            const price_text = document.getElementById(quantity_price).innerHTML;

            if(quantity.value > 1 && price_text > 1219){

                quantity.value--;               
                document.getElementById(quantity_price).innerHTML = price_text - 1219;
                
               

            }
          

        });
        

    }    
    minus_quantiy("minus_quantity","quantity","quantity_price");
    minus_quantiy("cover_minus_quantity","cover_quantity","cover_quantity_price");



    function Subtotal(){
    var mobilePrice = document.getElementById("quantity_price").innerHTML; 
    var cover_price = document.getElementById("cover_quantity_price").innerHTML;    
    document.getElementById("subtotal").innerHTML = Number(mobilePrice) + Number(cover_price);
    }    
    function total(){
        var subtotalPrice = document.getElementById("subtotal").innerHTML; 
        var txprice = document.getElementById("tax").innerHTML;            
        document.getElementById("total").innerHTML = Number(subtotalPrice) + Number(txprice);
        }    
    setInterval(function(){Subtotal();},200);
    setInterval(function(){total();},200);
})(jQuery)