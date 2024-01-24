function decrypt(encryption) {
    let dict = new Array(26).fill(0)
    
    let arr = encryption.split('')
    
    arr.forEach((letter) => {
      if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        let index = letter.charCodeAt(0) - 97;
        dict[index] ++
      }
    })
    console.log({input: encryption, output: dict.join('')})
    return dict.join('')
  }