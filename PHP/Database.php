<?php
class Database
{

    private $host;
    private $user;
    private $password;
    private $db;
    private $table;
    private $port;

    function __construct($host, $user, $password, $db, $table, $port) {

        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->db = $db;
        $this->table = $table;
        $this->port = $port;

    }

    public function getHost() {
        return $this->host;
    }

    public function getUser() {
        return $this->user;
    }

    public function getPassword(){
        return $this->password;
    }

    public function getDb(){
        return $this->db;
    }

    public function getTable() {
        return $this->table;
    }

    public function getPort(){
        return $this->port;
    }


    function setConn($host, $user, $password)
    {
        $conn = mysqli_connect($host, $user, $password);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }

    function fetchColumns($host, $user, $password, $db, $port, $table)
    {
        $columns = array();

        $conn = new mysqli($host, $user, $password, $db, $port);

        $sql = "SHOW COLUMNS FROM" . $table;
        $result = mysqli_query($conn, $sql);
        while ($row = mysqli_fetch_array($result)) {
            array_push($columns, $row['Field']);
        }

        return $columns;
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
            echo("<td class='columnNameTable' id='" . $row['Field'] . "'>" . $row['Field'] . "</td>");
            echo("</tr>");
            echo("<tr>");
            echo ("<td>" . "<button id='" . $row['Field'] . "_BTN' onclick='setUpDataValuePanel()'>"
                . $row['Type'] . " </button>" . "</td>");
            echo("</tr>");
            echo("</table>");
            echo("</div>");
        }


    }

    function fetchColumnNames($host, $user, $password, $table, $db)
    {
        $columnNames = array();

        $sql = "SHOW COLUMNS FROM " . $db . "." . $table;
        $result = mysqli_query($this->setConn($host, $user, $password), $sql);
        while ($row = mysqli_fetch_array($result, 2)) {
            array_push($columnNames, $row[0]);
        }

        return $columnNames;
    }

    function fetchDynamicTable($host, $user, $password, $table, $db)
    {
        // fetch columnTitle in numeric array
        $columnTitles = $this->fetchColumnNames($host, $user, $password, $table, $db);
        echo json_encode($columnTitles);
        // outer loop for printing column titles
        for ($i = 0; $i < count($columnTitles); $i++) {



            echo("<div>");
            echo("<table class='tableSubContainer'>");
            echo("<tr>");
            echo("<th class='columnNameTable'>");
            print_r($columnTitles[$i]);
            echo("</th>");
            echo("<tr>");


            // new sql query for fetching values of columns and oder them desc
            $sql = "SELECT " . $columnTitles[$i] . " FROM " .  $db . "." . $table;

            // preparation for query execution
            $result = mysqli_query($this->setConn($host, $user, $password), $sql);
            // query execution
            while ($columnValues = mysqli_fetch_array($result, 2)) {
                // place column values in oder of their titles
                for ($j = 0; $j < count($columnValues); $j++) {

                    echo("<tr>");
                    echo("<td>");
                    if ($columnValues[$j] == "") print_r("null");
                    else print_r($columnValues[$j]);
                    echo("</td>");
                    echo("</tr>");

                }

            }
            echo("</table>");
            echo("</div>");

        }
        echo("<button id='confirmSnippetBtn'>Save query</button>");

    }


    function saveColumnNamesToJSON($host, $user, $password, $db, $port, $table) {
        $sql = "SHOW COLUMNS FROM " . $db . "." . $table;
        $result = mysqli_query($this->setConn($host, $user, $password), $sql);
        $row = mysqli_fetch_array($result);
        json_encode($row);
        echo("test");
    }






}
?>