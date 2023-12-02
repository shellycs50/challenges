<?php
function digital_root($number): int
{
  $str = strval($number);
  $total = 0;
  
  while (strlen($str) > 1)
  {
    $len = strlen($str);
    $total = 0;
    for ($i = 0; $i < $len; $i++)
    {
    $total += intval($str[$i]);
    }
    $str = strval($total); 
  }
  
  return $total;
}