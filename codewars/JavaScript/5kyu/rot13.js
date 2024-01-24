//caesar cypher
function rot13(message){
    let output = ''
    
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
        let temp_index = message.charCodeAt(i) - 97;
        temp_index += 13;
        temp_index = temp_index % 26
        temp_index += 97
        output += String.fromCharCode(temp_index)
      }
      else if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let temp_index = message.charCodeAt(i) - 65;
        temp_index += 13;
        temp_index = temp_index % 26
        temp_index += 65
        output += String.fromCharCode(temp_index)
      }
      else {
        output += message[i]
      }
    }
    return output
  }