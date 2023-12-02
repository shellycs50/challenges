<?php
function isLeapYear(int $year): bool {
  if ($year % 4 == 0) 
  {
    if ($year % 400 == 0) 
    {
      return true;
    }
    elseif ($year % 100 == 0) 
    {
      return false;
    }
    else 
    {
      return true;
    }
  }
  
  else 
  {
    return false;
  }
  
}