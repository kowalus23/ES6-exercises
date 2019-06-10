const shoppingItems = require('./object_information');

console.log('//////// REDUCE //////');

const shoppingItemsSum = shoppingItems.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(`Total price is $${ shoppingItemsSum.toFixed(2) }`);

// mix filter + reduce
const priceOfFood = shoppingItems
  .filter(({category}) => category === 'food')
  .reduce((acc, {price}) => acc + price, 0);

console.log(`Price of all Food stuff is $${priceOfFood.toFixed(2)}`);