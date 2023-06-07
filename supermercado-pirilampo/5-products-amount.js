const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let totalProducts = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    totalProducts += stockProducts[index].quantityInStock;
  }
  return totalProducts;
};

module.exports = { getProductsAmount };
