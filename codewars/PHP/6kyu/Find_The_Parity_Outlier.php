<?php
function find($integers) {
//iterate through the array, once 2 of either odd or even are found, 
// search for the opposite
  $evencount = 0;
  $oddcount = 0;
  $len = count($integers);
  for ($i = 0; $i < $len; $i ++) {
    if ($integers[$i] % 2 == 0) {
    $evencount ++;
    }
    else {
      $oddcount ++;
    }
    if ($oddcount > 1 || $evencount > 1)
    {
      break;
    }
  }
  if ($oddcount > 1) {
    for ($i = 0; $i < $len; $i ++)
      {
      if ($integers[$i] % 2 == 0) {
        return $integers[$i];
      }
    }
  }
  else if ($evencount > 1) {
    for ($i = 0; $i < $len; $i ++)
    {
      if ($integers[$i] % 2 != 0) {
        return $integers[$i];
      }
    }
  }
}