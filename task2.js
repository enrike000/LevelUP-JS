//pirveli metodi
const samkauli = (J, S) => [...S].filter((n) => J.includes(n)).length;

console.log(samkauli("aA", "aaAAbbAaAa"));

console.log(samkauli("abcdefgh", "aceg"));

console.log(samkauli("abgd", "gggggbbbbbBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
//meore metodi

const numJewelsInStones = (J, S) => {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    count = count + J.includes(S[i]);
  }

  return count;
};
console.log(numJewelsInStones("aA", "aaAAbbAaAa"));

console.log(numJewelsInStones("abcdefgh", "aceg"));

console.log(numJewelsInStones("abgd", "gggggbbbbbBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
