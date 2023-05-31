/*
*This function calculates the total price for a new order
* @param {Array} products cartProducts: Array of Objects
* @return {number} Total Price
*/

export const totalPrice = (products) => {
  let sum = 0
  products.forEach( product =>sum += product.price)
  return sum
}