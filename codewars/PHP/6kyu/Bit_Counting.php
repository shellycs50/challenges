<?php
function countBits($n) 
{
  $bin = decbin($n);
  $runningtotal = 0;
  
  for($i = 0; $i < strlen(strval($bin)); $i++)
  {
    if ($bin[$i] == 1)
    {
      $runningtotal++;
    }
  }
  return $runningtotal;
}