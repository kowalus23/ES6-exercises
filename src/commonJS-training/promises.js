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
  }, 500);
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

////// ASYNC / AWAIT /////
console.log("///// ASYNC/AWAY /////");
async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log('async/await', data);
}

console.log('async/await', fetchUsers());

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async url => {
        const response = await fetch(url);
        return response.json();
      }
    ));
    console.log('users', users.slice(0, 8));
    console.log('posts', posts.slice(0, 8));
    console.log('albums', albums.slice(0, 8));
  } catch (error) {
    console.log('ups!', error);
  }
};

console.log(getData());

/// ES9 for of await ///
const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data.slice(0, 6));
  }
};

console.log(getData2());