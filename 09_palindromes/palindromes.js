const palindromes = function (sentence) {
  //clean up sentence of punctuation, and make lowercase
  sentence = sentence.replace(/\W/g, "").toLowerCase();

  let sentenceReversed = "";

  //   console.log(sentence.split(""));
  for (let i = sentence.split("").length - 1; i >= 0; i--) {
    // console.log(sentence[i]);
    sentenceReversed += sentence[i];
  }

  console.log(sentenceReversed);

  return sentence === sentenceReversed ? true : false;
};

// palindromes("radar!");
// Do not edit below this line
module.exports = palindromes;
