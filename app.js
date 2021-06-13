/*
 * Title: Product Cart Logic 
 * Description:  Add product and  remove product  on cart and also increment and decrrnt logic  
 * Author: SMR saimon(Sultan Mahmud )
 * Date: 14/06/21
 *
 */

const allProducts = [
  { id: 1, name: "laptop", quentity: 4, prie: 340, ratting: 5, holeSell: 300 },
  {
    id: 2,
    quentity: 4,
    name: "laptop",
    prie: "340",
    ratting: 5,
    holeSell: 300,
  },
  {
    id: 3,
    quentity: 4,
    name: "laptop",
    prie: "340",
    ratting: 5,
    holeSell: 300,
  },
];

// product increment/decrement 

const incressProductQuentity = (id) => {
  const productIndex = allProducts.findIndex((x) => x.id === id);
  const product = allProducts[productIndex];
  product.quentity++;
  return allProducts.splice(productIndex, 1, product);
};

const newProducts = incressProductQuentity(2);
// console.log(newProducts);

// add to cart products

let newCart = [];
const addToCartProduct = (id) => {
  product = allProducts.find((x) => x.id === id);
  const index = newCart.indexOf(product);

  if (index === -1) {
    newCart.push(product);
    
  } else {
    console.log("Product already addeded");
  }
};
addToCartProduct(1);

// Remove products from cart 
const removeProductFromCart=(id)=>{

    const remainingCart= newCart.filter(x=>x.id !== id)
      return remainingCart

}
console.log(removeProductFromCart(1))











