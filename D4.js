/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let area = function (l1, l2) {
  return l1 * l2;
};
const risultatoArea = area(5, 10);
console.log(risultatoArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  if (n1 !== n2) {
    return n1 + n2;
  } else {
    return (n1 + n2) * 3;
  }
};
const numSum = crazySum(8, 8);
console.log(numSum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1, n2 = 19) {
  if (n1 >= n2) {
    return Math.abs(n1 - n2) * 3;
  } else {
    return Math.abs(n1 - n2);
  }
};
const numDiff = crazyDiff(10);
console.log(numDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n3) {
  if ((n3 >= 20 && n3 <= 100) || n3 == 400) {
    return true;
  } else return false;
};
const numBoundary = boundary(400);
console.log(numBoundary);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (s1) {
  if (s1.toUpperCase().startsWith("EPICODE")) {
    return s1;
  } else {
    return "EPICODE" + s1;
  }
};
const stringEpify = epify("epicodeblabla");
console.log(stringEpify);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n1) {
  if (n1 % 3 === 0) {
    return (n1 = "Il numero è un multiplo di 3 ");
  }
  if (n1 % 7 === 0) {
    return (n1 = "Il numero è un multiplo di 7");
  }
};
const numCheck = check3and7(9);
console.log(numCheck);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (s1) {
  const letters = s1.split("");
  console.log(letters);
  const reversed = letters.reverse();
  console.log(reversed);
  const joined = reversed.join("");
  console.log(joined);
  return joined;
};

const stringReverse = reverseString("EPICODE");
console.log(stringReverse);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (s1) {
  const stringWords = s1.split(" ");
  const sentence = [];
  for (let i = 0; i < stringWords.length; i++) {
    const singleWord = stringWords[i];
    const firstChar = singleWord.charAt(0).toUpperCase();
    const remainChar = singleWord.slice(1);
    const fullWord = firstChar.concat(remainChar);
    sentence.push(fullWord);
  }
  return sentence.join(" ");
};
const stringFirst = upperFirst("hello world my name is alessandro!");
console.log(stringFirst);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (s1) {
  const stringLetters = s1.split("");
  console.log(stringLetters);
  stringLetters.pop();
  stringLetters.shift();
  return stringLetters.join("");
};
const stringSecond = cutString("!Che bello il tramonto!");
console.log(stringSecond);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n1) {
  for (let i = 0; i < n1; i++) {
    const arrayNum = [Math.floor(Math.random() * 10) + 1];

    const allNum = arrayNum.concat();
    console.log(allNum);
  }
};
const knownNum = giveMeRandom(10);
console.log(knownNum);
