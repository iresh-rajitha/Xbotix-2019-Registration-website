<?php
/*
$servername = "localhost";
$username = "root";
$password = "iresh";
$dbname = "xbotix";
*/

$servername = "localhost";
$username = "id10178072_xbotix";
$password = "iresh123";
$dbname = "id10178072_xbotix";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully";
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}
?>
