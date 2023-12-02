<?php
const MORSE_CODE = ['passed' => 'in', 'dictionary' => ':)'];
function decode_morse(string $codeIn): string {
    $dictionary = MORSE_CODE;
    $code = trim($codeIn);
    $newString = '';
  
    $words = explode("   ", $code);
    
    foreach($words as $key=>$word) {
      
        if ($word == '...---...') {
            $newString .= 'SOS';
        }
      
        else {
            $chars = explode(" ", $word);
            foreach($chars as $char) {
            if (array_key_exists($char, $dictionary)) {
                $newString .= $dictionary[$char];    
            }     
            }
        }
        if ($key != count($words) - 1) {
            $newString .= " ";
        } 
    }
    return $newString; 
}
  
  