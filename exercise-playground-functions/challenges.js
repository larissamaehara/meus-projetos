// const menu = require('./mcDonalds');
// const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
function footballPoints(wins, ties) {
  let numberPoints = wins * 3 + ties;
  return numberPoints;
}

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
function addMusics(artistName, musicName, musicTime) {
  let musicList = {
    artist: artistName,
    music: musicName,
    musicTime,
  };
  return playlist.push(musicList);
}

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
function moreExpensive(data, category) {
  let moreExpensiveProduct = data[category][0].price;
  let productName = '';
  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].price >= moreExpensiveProduct) {
      moreExpensiveProduct = data[category][index].price;
      productName = data[category][index].name;
    }
  }
  return `O produto mais caro é: ${productName}, que custa: R$${moreExpensiveProduct.toFixed(2)}.`;
}

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
function checkItem(data, category, item) {
  let itemFound = false;
  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].name === item) {
      itemFound = true;
    }
  }
  return itemFound;
}

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
const addNewItem = (data, category, item, ...info) => {
  if (checkItem(data, category, item)) {
    return `O produto: "${item}" já existe!`;
  }
  const newItem = {
    name: item,
    price: info[0],
    ingredients: info[1],
    calories: info[2],
  };
  data[category].push(newItem);

  return newItem;
};

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
function counterGender(data) {
  const amountsOfGender = {
    male: 0,
    female: 0,
  };
  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].gender === 'male') {
      amountsOfGender.male += 1;
    } else {
      amountsOfGender.female += 1;
    }
  }
  return amountsOfGender;
}
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
const filterState = (data, state) => {
  const listedByState = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].address.state === state) {
      listedByState.push(data.guests[index]);
    }
  }
  return listedByState;
};

// Requisito 9 - Crie uma função que altera a propriedade `picture`
function changePicture(data, link) {
  const pictureLink = data.guests;
  for (let index = 0; index < pictureLink.length; index += 1) {
    pictureLink[index].picture = link;
  }
  return pictureLink;
}

// Requisito 10 - Crie um função que gera um relatório
function generateReport(data) {
  let agesSum = 0;
  const countryArray = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    agesSum += data.guests[index].age;
    if (!countryArray.includes(data.guests[index].country)) {
      countryArray.push(data.guests[index].country);
    }
  }
  infos = {
    totalGuests: data.guests.length,
    totalGender: counterGender(data),
    avgAge: parseFloat((agesSum / data.guests.length).toFixed(2)),
    countries: countryArray.sort(),
  };
  return infos;
}

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  addMusics: typeof addMusics === 'function' ? addMusics : () => {},
  playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : () => {},
  checkItem: typeof checkItem === 'function' ? checkItem : () => {},
  addNewItem: typeof addNewItem === 'function' ? addNewItem : () => {},
  counterGender: typeof counterGender === 'function' ? counterGender : () => {},
  filterState: typeof filterState === 'function' ? filterState : () => {},
  changePicture: typeof changePicture === 'function' ? changePicture : () => {},
  generateReport:
    typeof generateReport === 'function' ? generateReport : () => {},
};
