const shoppingItems = require('./object_information');

const newItem = {
    name: 'pear',
    price: 0.99,
    category: 'food',
    quantity: 2
};

const mapThroughItems = shoppingItems.map(({ name, price, quantity}) => {
    return `${ name } | $${ price } | ${quantity}`
});

console.log(mapThroughItems);