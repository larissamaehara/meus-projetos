const colorCatalog = [
  '#FF0000', // Red
  '#F94144', // Imperial red
  '#FF8700', // UT orange
  '#F3722C', // Orange
  '#F9844A', // Coral
  '#FFD300', // Gold
  '#F9C74F', // Saffron
  '#DEFF0A', // Chartreuse
  '#A1FF0A', // Spring bud
  '#90BE6D', // Pistachito
  '#0AFF99', // Spring green
  '#5c8001', // Olive gree
  '#43AA8B', // Zomp
  '#00509d', // Nice blue
  '#0AEFFF', // Eletric Blue
  '#147DF5', // Azure
  '#580AFF', // Eletric indigo
  '#577590', // Payne's gray
  '#BE0AFF', // Eletric purple
  '#E499FF', // Violet
  '#ffc8dd', // Baby pink
  '#060606', // Black
];
// Capturando elementos que vão ser utilizados:
// Atribuição de variáveis iniciais:
let initialColor = 'whitesmoke';
const initialSize = 5;
const pixelBoardUnit = document.getElementById('pixel-board');
const pixelElementList = document.getElementsByClassName('pixel');
const colorPaletteUnit = document.getElementById('color-palette');
const colorElementList = document.getElementsByClassName('color');
const clearButton = document.getElementById('clear-board');
const randomColorButton = document.getElementById('button-random-color');
const createBoardInput = document.getElementById('board-size');
const createBoardButton = document.getElementById('generate-board');

// Cor inicial da paleta - defininco classe color para as cores individuais da paleta
const setColor = (color) => {
  initialColor = color.target.style.backgroundColor;
  for (let index = 0; index < colorElementList.length; index += 1) {
    colorElementList[index].className = 'color';
  }
  color.target.classList.add('selected'); //
};

// Criando um array randomico de cores não repetidas
const getRandomColorList = (colorList) => {
  const randomColorList = [];
  for (let index = 0; index < 4; index += 1) {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    if (!randomColorList.includes(colorList[randomIndex])) {
      randomColorList.push(colorList[randomIndex]);
    } else {
      index -= 1;
    }
  }
  return randomColorList;
};

// Criando a paleta de cores
const createColorPalette = () => {
  const colorList = getRandomColorList(colorCatalog);
  colorList.forEach((color) => {
    const colorElement = document.createElement('div');
    colorElement.classList.add('color');
    colorElement.style.backgroundColor = color;
    colorElement.addEventListener('click', setColor);
    colorPaletteUnit.appendChild(colorElement);
  });
};

// Função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores
const colorIn = (e) => {
  e.target.style.backgroundColor = initialColor;
  localStorage.setItem('pixelBoard', pixelBoardUnit.innerHTML);
};

const recoverBoard = () => {
  pixelBoardUnit.innerHTML = localStorage.getItem('pixelBoard');
  for (let index = 0; index < pixelElementList.length; index += 1) {
    pixelElementList.item(index).addEventListener('click', colorIn);
  }
};

// Determina definido o tamanho do quadro com 5 até no max 50 quadrados
const getFitSize = (size) => {
  let boardSize;
  if (size < 5) {
    boardSize = 5;
  } else if (size > 50) {
    boardSize = 50;
  } else {
    boardSize = size;
  }
  return boardSize;
};

const createNewBoard = (size) => {
  pixelBoardUnit.innerHTML = '';
  const boardSize = getFitSize(size);
  const table = document.createElement('table');
  for (let line = 0; line < boardSize; line += 1) {
    const tableLine = document.createElement('tr');
    for (let column = 0; column < boardSize; column += 1) {
      const tableData = document.createElement('td');
      tableData.classList.add('pixel');
      tableData.style.backgroundColor = 'white';
      tableData.addEventListener('click', colorIn);
      tableLine.appendChild(tableData);
    }
    table.appendChild(tableLine);
  }
  pixelBoardUnit.appendChild(table);
};
// Quadro permanece ao recarregar a página
const createBoard = (size) => {
  if (localStorage.getItem('pixelBoard')) {
    recoverBoard();
  } else {
    createNewBoard(size);
  }
};

const clearBoard = () => {
  for (let index = 0; index < pixelElementList.length; index += 1) {
    pixelElementList.item(index).style.backgroundColor = 'white';
  }
};

const createRandomColorPalette = () => {
  const currentSize = colorElementList.length;
  for (let index = 0; index < currentSize; index += 1) {
    colorElementList.item(0).remove();
  }
  createColorPalette();
};

// Criação do quadro de acordo com o numero digitado pelo usuário
const createOtherSizeBoard = (size) => {
  localStorage.removeItem('pixelBoard');
  if (!size) {
    alert('Board inválido!');
    return;
  }
  createNewBoard(createBoardInput.value);
  localStorage.setItem('boardSize', size);
  localStorage.setItem('pixelBoard', pixelBoardUnit.innerHTML);
};

// Evento dos botões
clearButton.addEventListener('click', clearBoard);
randomColorButton.addEventListener('click', createRandomColorPalette);
createBoardButton.addEventListener('click', () =>
  createOtherSizeBoard(createBoardInput.value));

createColorPalette();
createBoard(initialSize);
