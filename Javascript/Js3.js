// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) {
  // Your Code Here
  const copyArr1 = [...arr1]; // to copy arr1 using spread operator
  copyArr1[0] = 7; // then replace the value by index
  copyArr1[1] = 7;
  copyArr1[2] = 7;

  return copyArr1;
}

console.log(result(arr1));