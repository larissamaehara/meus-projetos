const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const allergyOrIntoleranceInfo = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (Object.keys(stockProducts[index]).includes('allergyOrIntolerance')) {
      const allergy = stockProducts[index].allergyOrIntolerance;
      let alert = `Pode conter: ${Object.values(allergy).join(' ')}`;
      allergyOrIntoleranceInfo.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        allergyOrIntoleranceMessage: `${alert}`,
      });
    }
  }
  return allergyOrIntoleranceInfo;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
