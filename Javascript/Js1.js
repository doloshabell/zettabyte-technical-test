// Expected Result = 7
// Direction : Find median of this array
const input = [8, 6, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  const sort = [...input].sort((a, b) => a - b); // to sort the array be ascending
  const lengthArray = input.length;
  const midNum = Math.round(lengthArray/2); // to divide by 2 length of array to find the mid number
  console.log(midNum);

  if(lengthArray%2 == 0){ //if length of the array was even
    return ((sort[midNum] + sort[midNum - 1]) / 2);
  } else{ //if length of the array was odd
    return (sort[midNum]);
  }
}

console.log(result(input));