function titleCase(title, minorWords) {
    let words = title.split(' ');
    let exemptWords = [];
    let output = [];
    if (minorWords)
      {
        exemptWords = minorWords.toLowerCase().split(' ')
      }
    
    words.forEach(function (word) {
      let new_word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      if (exemptWords.includes(word.toLowerCase()))
        {
          new_word = new_word.toLowerCase();
        }
      output.push(new_word)
    })
    let output2 = output.join(' ')
    
    return output2.charAt(0).toUpperCase() + output2.slice(1)
  }