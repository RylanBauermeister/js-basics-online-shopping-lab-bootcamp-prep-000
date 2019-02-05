var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var objItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 };
 cart.push(objItem);
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  var result = "In your cart,";
  for(var i = 0; i < cart.length; i++){
    result += `${i === cart.length-1 ? ' and ' : ' you have '} ${cart[i].itemName} at $${itemPrice}`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
