var maxSequence = function(arr){

    // Sorry Kadane.. 
      let all_neg = true;
      arr.forEach((num) => {
        if (num > 0)
          {
            all_neg = false;
          }
      })
      if (all_neg == true)
        {
          return 0;
        }
      
      let sums = [];
      let runningtotal = 0;
      for (let i = 0; i < arr.length; i ++)
        {
          runningtotal = 0;
          //save the current rt and add the current number to rt
          for (let j = i; j < arr.length; j ++)
            {
              runningtotal += arr[j];
              sums.push(runningtotal);
            }
        }
      return Math.max(...sums)
    }