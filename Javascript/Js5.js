// Direction : For each value inside the array, get the next smallest prime number value greater than the input number, if input number is already prime return that input
// For example: Input: 4, Expected: 5, Input: 14, Expected: 17, Input: 2, Expected: 2
// Expected: [2, 5, 19, 23, 37, 89]
const number = [2, 4, 18, 20, 35, 84];
const answer = [];

function result(num) {
  // Your Code Here
  num = number;
  for (let i = 0; i < num.length; i++){
        let isNotPrime = true
            while (isNotPrime == true){
            let temp = 0
                for(let x = 2; x <= num[i] / 2; x++){
                    if(num[i] % x == 0){
                        temp += 1
                        break
                    }
                }
                if (temp > 0){
                  num[i] = num[i]+1
                }
                else if(temp == 0){
                  isNotPrime = false
                }
            }
      answer.push(num[i])
    }
  return answer;
}

console.log(result(answer));