const obj = {
  user: 'Patrick',
  age: 5,
  animal: 'dog'
};

const {user, ...rest} = obj;

console.log({user}, {rest});