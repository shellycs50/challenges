<?php
function dirReduc($arr) {
  $opposites = ['NORTH' => 'SOUTH', 'SOUTH' => 'NORTH', 'WEST' => 'EAST', 'EAST' => 'WEST'];
  
  foreach($arr as $direction)
  {
     $direction = strtoupper($direction);
  }
  
  $removed_at_least_one = true;

  while ($removed_at_least_one == true)
  {
    $len = count($arr) - 1;
    $removed_at_least_one = false;
    for ($i = 0; $i < $len; $i++)
    {
      if ($opposites[$arr[$i]] == $arr[$i + 1])
      {
        unset($arr[$i]);
        unset($arr[$i + 1]);
        $i += 1;
        $removed_at_least_one = true;
      }
    }
    $arr = array_values($arr);
  }
  
  return $arr;
}

  // loop through array until second to last item, checking if ith is opposite to ith+1.
  // if they are opposite, remove them both and add one to i.
  // re-index array.
  // then run the same checks again in case newly adjacent directions are opposites.
  // do this until nothing has been removed. 