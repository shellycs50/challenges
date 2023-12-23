function solution(number){
    nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    answer = '';
    for (let i = 0; number > 0; i ++)
      {
        while (number >= nums[i])
          {
            answer += romans[i];
            number -= nums[i];
          }
      }
    return answer;
    }