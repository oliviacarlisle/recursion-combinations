function htPermutations(heads, tails) {
  const result = [];

  function generateHT(h, t, curr = '') {
    if (h === 0 && t === 0) return result.push(curr);

    if (h > 0) generateHT(h - 1, t, curr + 'H');

    if (t > 0) generateHT(h, t - 1, curr + 'T');
  }

  generateHT(heads, tails);
  return result;
}

console.log(htPermutations(2, 1));
// [
//   'HHT',
//   'HTH'
//   'THH'
// ]

console.log(htPermutations(0, 3));
// [
//   'TTT'
// ]
