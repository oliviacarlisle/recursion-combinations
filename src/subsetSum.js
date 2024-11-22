function subsetSum(nums, target) {
  if (target === 0) return true;
  if (nums.length === 0) return false;

  const first = nums[0];
  const rest = nums.slice(1);

  // Either use the first number or skip it
  return subsetSum(rest, target - first) || subsetSum(rest, target);
}

console.log(subsetSum([3, 7, 4, 2], 5)); // -> true (3 + 2)
