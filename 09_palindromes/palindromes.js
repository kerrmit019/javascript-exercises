const palindromes = function (sentence) {
  let sentenceReversed = "";

  console.log(sentence.split(""));
  for (let i = sentence.split("").length - 1; i >= 0; i--) {
    console.log(sentence[i]);
    sentenceReversed += sentence[i];
  }

  console.log(sentenceReversed);

  return sentence === sentenceReversed ? true : false;
};

// palindromes("radar");
// Do not edit below this line
module.exports = palindromes;
