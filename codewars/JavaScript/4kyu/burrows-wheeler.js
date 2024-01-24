// Needs refactoring 
function whichIsLaterAlphabetically(arr1, arr2) {
    let len = arr1.length;
    for (let i = 0; i < len; i ++) {
      if (arr1[i].charCodeAt(0) === arr2[i].charCodeAt(0)) {
        continue;
      }
      if (arr1[i].charCodeAt(0) > arr2[i].charCodeAt(0)) {
        return 1;
      }
      else {
        return 2;
      }
    }
    return 0;
  }
  
  
  function encode(s) {
    let len = s.length;
    let matrix = new Array(len)
    for (let i = 0; i < len; i ++) {
      matrix[i] = []
      }
    
    for (let i = 0; i < len; i ++) {
      if (i === 0) {
        matrix[i] = s.split('')
        continue;
      }
      let first = s.slice(len - i)
      let second = s.slice(0, len - i);
      let current = first + second
      matrix[i] = current.split('')
    }
  //   sort matrix alphabetically: 
    for (let i = 0; i < (len - 1); i ++) {
      for (let j = 0; j < (len - i - 1); j++) {
        if (whichIsLaterAlphabetically(matrix[j], matrix[j + 1]) === 1) {
            let middleman = matrix[j]
            matrix[j] = matrix[j + 1]
            matrix[j + 1] = middleman;
        }
      }
    }
    let output_str = '';
    // find row of original and get last char of each rotation
    let index_of_original
    for (const key in matrix) {
      output_str += matrix[key][len - 1]
      
      if (matrix[key].join('') === s) {
        index_of_original = parseInt(key);
      }
    }
    return [output_str, index_of_original]
  }
  
  function decode(s,i) {
    let len = s.length
    let index = i;
    let last_column = s.split('');
    let first_column = last_column.map(item => item)
    first_column.sort()
    let output = []
  
    for (let i = 0; i < len + 1; i ++) {
      output.push(last_column[index])
      // find if its the first second third fourth etc instance of letter
      let first_instances = []
      let last_instances = []
      for (let j = 0; j < len; j ++) {
        if (last_column[j] === first_column[index]) {
          last_instances.push(j)
        }
        if (first_column[j] === first_column[index]) {
          first_instances.push(j)
        }
      }
      let instances_index = first_instances.findIndex((value) => value === index)
      index = last_instances[instances_index]
     }
  
    return output.join('').slice(1);
  }