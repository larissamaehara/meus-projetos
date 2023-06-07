const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const productList = [];
  // eslint-disable-next-line no-empty
  for (let index = 0; index < stockProducts.length; index += 1) {
    productList.push(stockProducts[index].productName);
  }
  return productList;
};

module.exports = { getUniqueProductsName };
