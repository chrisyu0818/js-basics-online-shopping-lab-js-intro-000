var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 101)})
   return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length ===0) {
    return "Your shopping cart is empty."
  } else {
    for (let i=0; i<cart.length; i++) {
      if(cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else {
      var str = 'In your cart, you have ';

      while(i <= cart.length-1)
      {
        str = str + `${cart[i].itemName} at $${cart[i].itemPrice}, `
        i++;
      }
      str = str + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      return str;
    }
  }
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
