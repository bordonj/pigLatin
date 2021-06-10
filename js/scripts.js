//business logic
let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'S', 'T', 'V', 'X', 'Z', 'H', 'R', 'W', 'Y'];
let qu = ["qu"];
let lowerCon = [];
consonants.forEach(function(consonant) {
  let lowerC = consonant.toLowerCase();
  lowerCon.push(lowerC);
})

function pigLatinize(sentence) {
  let pigSentence = [];
  if (sentence[sentence.length-1] === '.') {
    sentence = sentence.slice(0, -1);
  }
  let senArr = sentence.split(' ');
  for (let i = 0; i < senArr.length; i++) {
    for (let j = 0; j < vowels.length;j++) {
      if (senArr[i][0] === vowels[j]) {
        pigSentence.push(senArr[i]+'way');
      } else {
        continue;
      }
    }
    for (let quWord of qu) {
      if (senArr[i].slice(0,2) === quWord) {
        let quCut = senArr[i].slice(0,2);
        let vowelCut = senArr[i].slice(2)
        pigSentence.push(vowelCut+quCut+'ay')
      } else if (senArr[i][0] === !"q") {
        let quCut = senArr[i].slice(0,1);
        let vowelCut = senArr[i].slice(1);
        pigSentence.push(vowelCut+quCut+'ay')
      }
    }
    if (lowerCon.includes(senArr[i][0])) {
      if (lowerCon.includes(senArr[i][1]) && lowerCon.includes(senArr[i][2])) {
        let consCut = senArr[i].slice(0, 3);
        let vowelCut = senArr[i].slice(3);
        pigSentence.push(vowelCut+consCut+'ay');
        continue;
      } else if (lowerCon.includes(senArr[i][0]) && lowerCon.includes(senArr[i][1])) {
        let consCut = senArr[i].slice(0, 2);
        let vowelCut = senArr[i].slice(2);
        pigSentence.push(vowelCut+consCut+'ay');
        continue;
        }
      let consCut = senArr[i].slice(0, 1);
      let vowelCut = senArr[i].slice(1);
      pigSentence.push(vowelCut+consCut+'ay');
    }
    console.log('pigSentence', pigSentence);
  }
  return pigSentence;
}

//UI logic
$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    const userInput = ($("#userInput").val()).toLowerCase();
    let str='';
    let result = pigLatinize(userInput);

    str = result.join(' ');
    $(".result").html(`<h3>Pig-Latin translation:</h3>${str}.`);

  
  })
})