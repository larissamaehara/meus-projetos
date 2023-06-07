// Requisito 1 - Crie a função verifyPalindrome
// Função que inverte a palavra
function drow(word) {
  let reverse = '';

  for (let index = word.length - 1; index >= 0; index -= 1) {
    reverse += word[index];
  }

  return reverse;
}
// Função que verifica se a palavra invertida é igual a ela mesma (Palíndromo)
function verifyPalindrome(word) {
  const loweredCaseWord = word.toLowerCase();
  const reverse = drow(loweredCaseWord);
  const palindrome = loweredCaseWord === reverse;

  return palindrome;
}
// console.log(verifyPalindrome('arara'));
// console.log(verifyPalindrome('desenvolvimento'));

// Requisito 2 - Crie a função getHighestIndex
// Função recebe um array de números inteiros, NÃO REPETIDO;
// Percorre o array buscando o INDICE do maior número presente no array;
function getHighestIndex(array) {
  let highestIndex = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[highestIndex] < array[index]) {
      highestIndex = index;
    }
  }

  return highestIndex;
}
// console.log(getHighestIndex([2, 3, 6, 7, 10, 1]));
// console.log(getHighestIndex([9, 1, 3, 5, 7]));
// console.log(getHighestIndex([-9, -1, -3, -5, -7]));

// Requisito 3 - Crie a função getSmallestIndex
// Função recebe um array de números inteiros, NÃO REPETIDO;
// Percorre o array buscando o INDICE do menor número presente no array;
function getSmallestIndex(array) {
  let smallestIndex = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[smallestIndex] > array[index]) {
      smallestIndex = index;
    }
  }

  return smallestIndex;
}
// console.log(getSmallestIndex([2, 3, 6, 7, 10, 1]));
// console.log(getSmallestIndex([2, 4, 6, 7, 10, 0, -3]));

// Requisito 4 - Crie a função getLongestWord
// A função recebe como parâmetro um array de strings, NÃO REPETIDAS;
// Retorna a palavra com a maior quantidade de caracteres;
function getLongestWord(array) {
  let longestWord = array[0];

  for (let index = 0; index < array.length; index += 1) {
    let currentWord = array[index];

    if (longestWord.length < currentWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

// console.log(getLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
// console.log(getLongestWord(['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix']));

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences
// A função recebe como parâmetro um array de números inteiros;
// Retorna a QUANTIDADE de vezes que o maior número se repete dentro do array;
function countHighestNumberMaxOccurrences(arraynumbers) {
  let highestNumberCounter = 0;
  let countbigger = arraynumbers[0];
  for (let index = 0; index < arraynumbers.length; index += 1) {
    if (arraynumbers[index] > countbigger) {
      countbigger = arraynumbers[index];
      highestNumberCounter = 0;
    }
    if (arraynumbers[index] === countbigger) {
      highestNumberCounter += 1;
    }
  }
  return highestNumberCounter;
}

// console.log(countHighestNumberMaxOccurrences([9, 1, 2, 3, 9, 5, 7]));
// console.log(countHighestNumberMaxOccurrences([0, 4, 4, 4, 9, 2, 1]));
// console.log(countHighestNumberMaxOccurrences([0, 0, 0]));

// De olho na dica: Utilize console.log() para testar as funções localmente
// mas remova antes de fazer o push

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => { }),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => { }),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => { }),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => { }),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => { }),
};
