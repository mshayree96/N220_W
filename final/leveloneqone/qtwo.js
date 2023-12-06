function cPrice(){
    var price=parseFloat(document.getElementById("price").value);
    var discountCode=document.getElementById("discountCode").value;
    var newPrice=document.getElementById('newPrice');
    var amountSaved=document.getElementById('amountSaved');
    
   

    discountCode=discountCode.toUpperCase();
    console.log(discounts[discountCode]);
    if(discountCode in discounts){
      
        var discountedPrice=price - (price * discounts[discountCode] );
        var finalPrice = discountedPrice+discountedPrice* 0.08;
        var saved= price - finalPrice;
        newPrice.innerHTML= finalPrice;
        amountSaved.innerHTML=saved;

    }else{
        newPrice.innerHTML= price;
        amountSaved.innerHTML="0.00";
        

    }
}


const discounts={
    SAVE20:0.20,
    JOLLYDAYS:0.15,
    HOLIDAY10:0.10
}