// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  // Your Code Here
  const oddValue = number.filter(num => num%2 != 0); // to filter if the num is not modulus 2 then num is odd
  const evenValue = number.filter(num => num%2 == 0); // to filter if the num is modulus 2 then num is even
  
  const result = [[...oddValue], [...evenValue]]; // then combine the array of odd and even num with spread operator

  return result;
}

console.log(result(number));