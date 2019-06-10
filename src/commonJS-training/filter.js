const shoppingItems = require('./object_information');

console.log('//////// FILTER //////');

const foodItemsDestructuring = shoppingItems.filter(({name}) => name === 'Carrots');
const foodItemsRegular = shoppingItems.filter(item => item.name === 'Carrots');

console.log(foodItemsDestructuring);
console.log(foodItemsRegular);



