const shoppingItems = require('./object_information');

const filter = () => {
  const foodItemsDestructuring = shoppingItems.filter(({name}) => name === 'Carrots');
  const foodItemsRegular = shoppingItems.filter(item => item.name === 'Carrots');
  console.log(foodItemsDestructuring);
  console.log(foodItemsRegular);
};

export default filter;

