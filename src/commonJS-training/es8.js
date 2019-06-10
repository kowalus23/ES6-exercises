const obj = {
  user: 'Patrick',
  age: 5,
  animal: 'dog'
};

const {user, ...rest} = obj;
console.log(user, rest);

const objectSpread = (p1, p2) => {
  console.log(p1);
  console.log(p2);
};
objectSpread(user, rest);