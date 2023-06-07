const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const outOfStockProductsList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      outOfStockProductsList.push(stockProducts[index].productName);
    }
  }
  return outOfStockProductsList;
};

module.exports = { getOutOfStockProducts };
