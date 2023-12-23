function solution(str){
    if (str.length % 2 !== 0)
      {
        str += '_'
      }
   let output = [];
   for (let i = 0; i < str.length - 1; i += 2)
     {
       let item = str[i] + str[i + 1];
       output.push(item);
     }
   retu