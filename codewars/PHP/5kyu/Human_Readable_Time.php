<?php
function human_readable($seconds) {
 
 $secs = $seconds; 
 
 $minutes = $secs / 60;
 $secs = $secs % 60;
 $hours = $minutes / 60;
 $minutes = $minutes % 60;
 
 return sprintf("%02d", $hours) . ':' . sprintf("%02d", $minutes) . ':' . sprintf("%02d", $secs); 
 
}