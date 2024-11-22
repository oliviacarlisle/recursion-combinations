function allSubsets(arr) {
  const result = [];

  function generateSubset(nums, curr = []) {
    if (!nums.length) return result.push(curr);

    generateSubset(nums.slice(1), [...curr, nums[0]]);
    generateSubset(nums.slice(1), curr);
  }

  generateSubset(arr);
  return result;
}

console.log(allSubsets([1, 7, 4]));

// Example:

// Input: [1,7,4]
// Output:
// [
//  [ 1, 7, 4 ],
//  [ 1, 7 ],
//  [ 1, 4 ],
//  [ 1 ],
//  [ 7, 4 ],
//  [ 7 ],
//  [ 4 ],
//  []
// ]
