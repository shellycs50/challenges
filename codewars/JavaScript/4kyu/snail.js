snail = function(array) {
    // what if we went x and y 
     // and then added one to x and one to y 
     // and minused 1 from the stop clause
     let copy = array.slice()
      if (array[0].length == 0) 
       {
         return [];
       }
    
     let output = new Array();
     
     function getStuff(start, stop)
       {
         if (start + 1 == start)
           {
             output.push(copy[start][stop])
             return 
           }
         for (let i = start, j = start; i < stop; i++)
           {
             output.push(copy[j][i]) //top edge
           }
         for (let i = start + 1; i < stop; i ++)
           {
             output.push(copy[i][stop - 1]) //right edge
           }
         for (let i = stop - 2; i > start - 1; i--)
           {
             output.push(copy[stop - 1][i]); //bottom edge 
           }
         for (let i = stop - 2; i > start; i--)
           {
             output.push(copy[i][start]); //left edge
           }
       }
     
     let start_index = 0;
     let stop_index = array.length;
     
     while (start_index < stop_index)
       {
         getStuff(start_index, stop_index)
         start_index ++
         stop_index --
       }
     return output;
   }