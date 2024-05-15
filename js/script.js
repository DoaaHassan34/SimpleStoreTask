
var allProducts = document.querySelectorAll("#All-Products .product-item");
var productShow =document.querySelector("#products-list");
var totalPrice_btn = document.querySelector("#total-price-btn");
var totalPrice_display = document.querySelector("#total-price-text");

var totalPrice=0;

//choosing products
allProducts.forEach(function (item){

    var add = item.querySelector('a');

    //add function
    add.onclick = function(){
    totalPrice += +(item.getAttribute("price"))
    productShow.innerHTML += item.textContent + "<hr>"
   }

})
  

// button payment
totalPrice_btn.onclick = function(){
    totalPrice_display.innerHTML = totalPrice + "$";
}