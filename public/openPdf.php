<?php 
$filename = $_GET['name'];
$file = "./static/PDF/".$filename.".pdf";
header('Content-type: application/pdf'); 
header('filename='.$filename.'.pdf'); 
readfile($file);