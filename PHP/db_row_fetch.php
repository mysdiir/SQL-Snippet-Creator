<?php
include('db_settings.php');


$con = new mysqli("localhost", "root", "",
                  "aktivitaetentracker", "3306");



$sql = "SHOW COLUMNS FROM user";
$result = mysqli_query($con,$sql);
while($row = mysqli_fetch_array($result)){
    echo $row['Field']."<br>";
}


