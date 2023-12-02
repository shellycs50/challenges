<?php
function generator($a) {
    $n = 1;
    $limit = 10000;

    for ($i = $n; $i < $limit; $i++) {
        $ans = $a * $i;
        yield "$a x $i = $ans";
    }   

}