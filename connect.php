<?php 
    $host = 'localhost';
    $user = 'jkr1230';
    $pw = 'gusdn13^';
    $db = 'jkr1230';
    $conn = mysqli_connect($host, $user, $pw, $db);
    // db 접속 성공 여부에 대한 결과
    if(!$conn) {
        die('ERROR');
    }
?>

