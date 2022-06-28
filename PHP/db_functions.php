<?php

class DBFunctions
{

    function setConn($host, $user, $password)
    {
        $conn = mysqli_connect($host, $user, $password);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }


    function fetchColumnsAndPlaceInTable($host, $user, $password, $table, $db)
    {
        
        $sql = "SHOW COLUMNS FROM " . $db . "." . $table;
        $result = mysqli_query($this->setConn($host, $user, $password), $sql);

        /*
        save new created mysqli_query object in $secondResult
        mysqli_query([REFERENCE TO mysqli_object]->etablish SQL connection with given parameters
        returns a mysqli_return object with

        int $current_field
        int $field_count
        array $lengths
        int|string $num_rows

        different fetching methods (all, array, assoc, column, etc.)
     
                           needed method for fetching, needed parameters to prepare fetch
        mysqli_fetch_assoc(mysqli_result $result) -> fetches one row on the given sql in an associative array

         */
        while ($row = mysqli_fetch_array($result)) {
            
            echo("<div class='tableSubContainer'>");
                echo("<table>");

                    echo("<tr>");
                        echo("<td class='columnNameTable' id='" . $row['Field'] . "'>");
                            echo $row['Field'];
                        echo("</td>");
                    echo("</tr>");
    
                    echo("<tr>");    
                        echo ("<td>");
                            echo ("<button id='" . $row['Field'] . "_BTN' onclick='setUpDataValuePanel()'>" . $row['Type'] . " </button>");
                        echo ("</td>");
                    echo("</tr>");
                    
                echo("</table>");

            echo("</div>");
        }
    }
    

}


