function pigIt(str){
    let arr = str.split(' ')
    let output = []
    arr.forEach((word) => {
      if (word.charAt(0).match(/[a-z]/i)) {
        output.push(word.slice(1) + word.charAt(0) + 'ay')
      }
      else {
        output.push(word)
      }
    })
    return output.join(' ')
  }