function twoSum(numbers, target) {
    let arr = {}
    const len = numbers.length
    for (let i = 0; i < len; i++)
      {
        if (target - numbers[i] in arr)
          {
            return [arr[target - numbers[i]], i]
          }
        arr[numbers[i]] = i;
      }
  }