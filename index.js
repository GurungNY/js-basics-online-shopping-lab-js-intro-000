var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  let toAdd = {
    'itemName': item,
    'itemPrice': Math.floor(Math.random()*100)
  }
  cart.push(toAdd)

  return `${item} has been added to your cart.`

}

function cartItem(itemName) {
  itemName = item

  for (let i = 0; i < itemName.length; i++) {
    return {
      itemName: itemName,
      itemPrice: price(1, 100)
    }
  }
}

function price(min, max) {
  // min = 0
  // max = 101
  return math.floor(math.random() * (max - min)) + min;
}

function viewCart() {

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
