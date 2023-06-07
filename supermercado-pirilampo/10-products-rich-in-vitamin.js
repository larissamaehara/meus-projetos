const stockProducts = require('./data.json');

const vitaminsProduct = (vitamins) => {
  let vitaminsArray = [];
  for (let index = 0; index < vitamins.length; index += 1) {
    vitaminsArray.push(vitamins[index].join(' - '));
  }
  return vitaminsArray;
};
const getProductsRichInVitamin = () => {
  let productListVitamin = [];
  for (let index2 = 0; index2 < stockProducts.length; index2 += 1) {
    if (
      Object.keys(stockProducts[index2].nutritionalInfo).includes('vitamins')
    ) {
      let vitamins = Object.entries(stockProducts[index2].nutritionalInfo.vitamins);
      let vitaminsList = vitaminsProduct(vitamins);
      productListVitamin.push({
        description: stockProducts[index2].description,
        formattedPrice: `R$ ${stockProducts[index2].price}`,
        vitaminsInformation: vitaminsList,
      });
    }
  }
  return productListVitamin;
};

module.exports = { getProductsRichInVitamin };
