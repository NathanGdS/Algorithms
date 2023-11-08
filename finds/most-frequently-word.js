const given = 'BANANA';

let obj = {};
let higherLetter;

for (word in given) {
    const actualWord = given[word];
    higherLetter = actualWord
    if (obj[actualWord]) {
        obj[actualWord] = obj[actualWord] + 1;
    } else {
        obj[actualWord] = 1;
    }

    if (obj[actualWord] > obj[higherLetter]) {
        higherLetter = actualWord
    }
}

console.log(obj)
console.log('Most frequently letter: ', higherLetter)

