const shoppingItems = require('./object_information');

const mapThroughItems = shoppingItems.map(({ name, price, quantity}) => {
    return `${ name } | $${ price } | ${quantity}`
});

console.log(mapThroughItems);