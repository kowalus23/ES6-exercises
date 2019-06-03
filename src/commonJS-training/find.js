const shoppingItems = require('./object_information');

const findItem = shoppingItems.find(({category}) => category === 'food');

console.log(`first found item in category is ${ findItem.name } for $${ findItem.price }`);
console.log(findItem);