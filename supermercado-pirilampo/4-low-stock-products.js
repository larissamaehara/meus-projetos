const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStockProductsList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      const name = stockProducts[index].productName;
      const quantity = stockProducts[index].quantityInStock;
      lowStockProductsList.push(`${name}: ${quantity} unidades`);
    }
  }
  return lowStockProductsList;
};

module.exports = { getLowStockProducts };
