<?php
function accum($s) {
    $len = strlen($s);
    $count = 0;
    $newString = '';
    
    for ($i = 0; $i < $len; $i ++) 
    {
        $newString .= strtoupper($s[$i]);
        $newString .= str_repeat(strtolower($s[$i]), $count);
          
        if ($i != $len - 1) {
            $newString .= '-';
        }
        $count ++;
    }
    return $newString;
}