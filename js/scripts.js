let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'S', 'T', 'V', 'X', 'Z', 'H', 'R', 'W', 'Y'];
let pigSentence = [];

function pigLatinize(sentence) {
  let senArr = sentence.split(' ');
  for (let i = 0; i < senArr.length; i++) {
    for (let vowel of vowels) {
      if (senArr[i][0] === vowel) {
        pigSentence.push(senArr[i]+'way');
      }
    }
  }
}
