<?php

function spinWords(string $str): string {
    // TODO Have fun :)
    
    $trimmed = trim($str);
    
    $hasSpace = false;
    
    $len = strlen($trimmed);
    for ($i = 0; $i < $len; $i++)
    {
      if ($trimmed[$i] == ' ')
      {
        $hasSpace = true;
      }
    }
    
    if ($hasSpace)
    {
      $exploded = explode(' ', $trimmed);
    }
    else
    {
      if (strlen($trimmed) > 4)
      {
        return strrev($trimmed);
      }
      else
      {
        return $trimmed;
      }
    }
    
      $outputString = '';
      
      foreach($exploded as $key => $word)
      {
        if (strlen($word) < 5)
        {
          $outputString .= $word;
        }
        else
        {
          $outputString .= strrev($word);
        }
        
        if ($key != count($exploded) - 1)
        {
          $outputString .= ' ';
        }
      }
    
      return $outputString;
    }
    
    
    