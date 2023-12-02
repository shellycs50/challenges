<?php
function findIt(array $seq) : int
{
  $newarray = [];
  
  foreach($seq as $num)
  {
    if (array_key_exists($num, $newarray))
    {
      $newarray[$num] += 1;
    }
    else
    {
      $newarray[$num] = 1;
    }
  }
  
  foreach($newarray as $key => $num)
  {
    if ($num % 2 != 0)
    {
      return $key;
    }
  }
}