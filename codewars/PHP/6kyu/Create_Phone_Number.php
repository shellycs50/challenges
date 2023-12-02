<?php

function createPhoneNumber($numbersArray) {
    $string = implode($numbersArray);
    $chunk1 = substr($string, 0, 3);
    $chunk2 = substr($string, 3, 3);
    $chunk3 = substr($string, 6);
    
    return "($chunk1) $chunk2-$chunk3";
    
  }