const products = [{name: 'PC Mouse'}]
const product = products[0]

// Falsy values - false, 0, empty string, null, undefined, NaN
// objects and everything else, are truthy 

if(product){
  console.log('Product found')
} else {
  console.log('No product found')
}