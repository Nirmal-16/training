var word1="Mary".toLowerCase();
var word2="Army".toLowerCase();
var a=[...word1];
var b=[...word2];
console.log(a.sort().join("")==b.sort().join(""));