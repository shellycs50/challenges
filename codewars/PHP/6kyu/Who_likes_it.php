<?php
function likes( $names ) {
    if (count($names) == 0)
    {
    return 'no one likes this';
    }
    else if (count($names) == 1)
    {
    return "$names[0] likes this";
    }
    else if (count($names) == 2)
    {
    return "$names[0] and $names[1] like this";
    }
    else if (count($names) == 3)
    {
    return "$names[0], $names[1] and $names[2] like this";
    }
    else if (count($names) >= 4)
    {
    $others = count($names) - 2;
    return "$names[0], $names[1] and $others others like this";
    }
  }
  
  //don't overthink it.