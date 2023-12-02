<?php
function solution($number){
    $numArray = [];
    $runningtotal = 0;
    if ($number < 0)
    {
      return 0;
    }
  
    for ($i = 1; $i < $number; $i++)
    {
      if ($i % 3 == 0 || $i % 5 == 0)
      {
        $numArray[] = $i;
      }
    }
    foreach($numArray as $num)
    {
      $runningtotal += $num;
    }
    
    return $runningtotal;
  }