console.log('//////// OTHER array methods //////');

// slice
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = myArray.slice(3, 6);


console.log(newArray);

// splice
const my2Array =  [1, 10, 20, 30, 40, 50];
const cutBeforeIndex=  my2Array.splice(3);

console.log(my2Array); // mutated my2Array after splice
console.log(`we are a cut of rest of my2Array ${cutBeforeIndex}`);

// forEach

const animals = ['dog', 'cat', 'bear', 'bird', 'pig'];
animals.forEach((element, index) => console.log(`(${element}) is at ${index} index`));