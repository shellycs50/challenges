<?php
function arrayDiff($a, $b) {
    $len = count($b);
    for ($i = 0; $i < $len; $i ++)
    {
      $indexes = array_keys($a, $b[$i]);
      foreach($indexes as $index)
      {
        unset($a[$index]);
      }
      $a = array_values($a);
    }
    return $a;
  }