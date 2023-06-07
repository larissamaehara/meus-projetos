const stockProducts = require('./data.json');

const searchProductsByBrand = (productBrand) => {
  const brandList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === productBrand) {
      const description = stockProducts[index].description;
      const price = stockProducts[index].price;
      const productInfo = {
        description,
        formattedPrice: `R$ ${price}`,
      };
      brandList.push(productInfo);
    }
  }
  return brandList;
};

module.exports = { searchProductsByBrand };
