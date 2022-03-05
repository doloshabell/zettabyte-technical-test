// Expected Result : 4200
// Direction :
// Find and returns the largest value

const item = [
  {
    name: 'spoon',
    details: {
      value: 4120,
    },
  },
  {
    name: 'fork',
    details: {
      value: 4200,
    },
  },
  {
    name: 'plate',
    details: {
      value: 2032,
    },
  },
];

function result(item) {
  // Your Code Here

  const max = Math.max.apply(Math, item.map(function(el) { return el.details.value; }))
  return max;
}

console.log(result(item));