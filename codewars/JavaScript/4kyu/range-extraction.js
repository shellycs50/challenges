function solution(list){
    // TODO: complete solution 
     let len = list.length
     let output = ''
     let temp_index;
     for (let i = 0; i < len; i++) {
         for (let j = i; list[j] == list[i] + (j - i); j++) {
           temp_index = j;
         }
     
         if (temp_index - i >= 2) {
         output += `${list[i]}-${list[temp_index]},`
         i = temp_index;
           if (!list[temp_index + 1]) {
           return output.slice(0, output.length - 1)
           }
         }
       else {
         output += list[i].toString() + ','
       }
     }
     return output.slice(0, output.length - 1)
   }
     