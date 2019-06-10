console.log("///////PROMISES/////");
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
})).then(results => {
  console.log(results[0]);
  console.log(results[1].slice(0, 10));
  console.log(results[2].slice(0, 10));
}).catch(error => console.log(`it's an error: ${error}`));


// Solve the questions below:
// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 900);
}).then((value) => {
  console.log(`#1 answer: ${value}`);
});

console.log(`#1 question: ${promise1}`);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(reason => console.log('Ooops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urlsStarWars = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
];

Promise.all(urlsStarWars.map(url =>
  fetch(url).then(people => people.json())
))
  .then(array => {
    const test = array[0].name;
    console.log(test);
    console.log('1', array[0]);
    console.log('2', array[1]);
    console.log('3', array[2]);
    console.log('4', array[3]);
  })
  .catch(err => console.log('ughhh you have to fix it!', err));