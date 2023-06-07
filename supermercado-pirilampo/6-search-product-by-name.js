const stockProducts = require('./data.json');

const searchProductByName = (product) => {
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === product) {
      const description = stockProducts[index].description;
      const price = stockProducts[index].price;
      const productInfo = {
        description,
        formattedPrice: `R$ ${price}`,
      };
      return productInfo;
    }
  }
  return null;
};

module.exports = { searchProductByName };
