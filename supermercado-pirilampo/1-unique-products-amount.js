const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => stockProducts.length;
console.log(getUniqueProductsAmount());

module.exports = { getUniqueProductsAmount };
