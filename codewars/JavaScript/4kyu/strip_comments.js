function solution(input, markers) {
    let new_string = ''
    
    for (let i = 0; i < input.length; i++)
      {
        if (markers.includes(input.charAt(i)))
          {
            while (i < input.length && input.charAt(i) !== '\n')
              {
                i ++
              }
          }
        if (input.charAt(i))
          {
            new_string += input.charAt(i);
          }
      }
    
    let arr = new_string.split('\n');
    let output = arr.map((line) => line.trimEnd())
    return output.join('\n')
  };