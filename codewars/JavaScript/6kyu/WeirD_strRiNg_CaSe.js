function toWeirdCase(string){
    let words = string.split(' ');
    
     return words.map((word) => {
       let newWord = '';
       for (let i = 0; i < word.length; i++)
         {
           if (i % 2 == 0)
             {
               newWord += word[i].toUpperCase()
             }
           else
             {
               newWord += word[i].toLowerCase()
             }
         }
       return newWord;
     }).join(' ')
    }