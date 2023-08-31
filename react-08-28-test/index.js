console.log("hello");
const nums = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];

const countSum = (num) => {
  for (const index = 0; index < nums[index].length; index++) {
    const sum = 0;
    if (num[index] % 2 === 0) {
      sum += 1;
      return true;
    }
  }
};

if (countSum(nums) === 6) {
  console.log("test 성공");
} else {
  console.log("test 실패");
}

// for (let i = 0; nums.length; i++) {
//   const result = multi(nums[i]);
//   if (result === true) {
//     // console.log(`테스트케이스${nums[i]}은  소수`);
//   }
// }
