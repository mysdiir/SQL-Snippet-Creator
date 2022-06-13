<?php
require_once('db_settings.php');




$con = @new mysqli( );

// -> == Zugriff auf Objektmethode
if($con->connect_error)
    // beendet Script
    exit("Error: Connection failed!");

$sql = "SELECT COLUMN_NAME
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_NAME ='tagesablauf'
            ORDER BY ORDINAL_POSITION";

if ($result = $con->query($sql)) {
    if ($result->num_rows == 0) echo "Keine Ergebnisse";
    while ($datensatz = $result->fetch_assoc())
        echo "<td>" . $datensatz["COLUMN_NAME"] . "\t";
    $result->close();
} else
    exit("Fehler bei Abfrage");

