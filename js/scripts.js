let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'S', 'T', 'V', 'X', 'Z', 'H', 'R', 'W', 'Y'];
let lowerCon = [];
let pigSentence = [];
consonants.forEach(function(consonant) {
  let lowerC = consonant.toLowerCase();
  lowerCon.push(lowerC);
})


function pigLatinize(sentence) {
  let senArr = sentence.split(' ');
  for (let i = 0; i < senArr.length; i++) {
    for (let vowel of vowels) {
      if (senArr[i][0] === vowel) {
        pigSentence.push(senArr[i]+'way');
      }
    }
    for (let consonant of lowerCon) {
      if (senArr[i][0] === consonant) {
        if (senArr[i][1] === consonant) {
          if (senArr[i][2] === consonant) {
            let consCut = senArr[i].slice(0, 3);
            let vowelCut = senArr[i].slice(3);
            pigSentence.push(vowelCut+consCut+'ay');
          }
          let consCut = senArr[i].slice(0, 2);
          let vowelCut = senArr[i].slice(2);
          pigSentence.push(vowelCut+consCut+'ay');
        }
        let consCut = senArr[i].slice(0, 1);
        let vowelCut = senArr[i].slice(1);
        pigSentence.push(vowelCut+consCut+'ay');
      }
    }
  }
}
