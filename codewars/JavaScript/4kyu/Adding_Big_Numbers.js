function add(a, b) {
    let a_len = a.length
    let b_len = b.length
    let a_arr = a.split('')
    let b_arr = b.split('')
    let max_len = Math.max(a_len, b_len)
    let output = []
    let remainder = 0
    
    for (let i = 1; i < max_len + 1; i++)
      {
        let running_total = 0;
        if (typeof a_arr[a_len - i] !== "undefined")
          {
            running_total += parseInt(a_arr[a_len - i])
          }
        if (typeof b_arr[b_len - i] !== "undefined")
          {
            running_total += parseInt(b_arr[b_len - i])
          }
        if (remainder !== 0)
          {
            running_total += remainder
            remainder = 0;
          }
        
        if (running_total.toString().length === 2)
          {
            remainder = parseInt(running_total.toString()[0])
            output.push(running_total.toString()[1])
          }
        else
          {
            output.push(running_total.toString()[0])
          }
      }
    // loop done, must handle leftover remainder
    if (remainder != 0)
      {
        output.push(remainder.toString())
      }
    
    //now reverse array
    let output_reversed = output.reverse()
    let output_reversed_string = output_reversed.join('')
    
  
    return output_reversed_string
    
  }