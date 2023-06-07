const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const productsOnSale = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      const description = stockProducts[index].description;
      const price = stockProducts[index].price;
      const productInfo = {
        description,
        formattedPrice: `R$ ${price}`,
        onSale: stockProducts[index].onSale,
      };
      productsOnSale.push(productInfo);
    }
  }
  return productsOnSale;
};

module.exports = { getProductsOnSale };
