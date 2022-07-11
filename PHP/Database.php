<?php
class Database
{

    private $host;
    private $user;
    private $password;
    private $db;
    private $table;
    private $port;

    private $columnTitle;
    private $datatype;
    private $dataValue;

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



    public function getColumnTitle() {
        return $this->columnTitle;
    }

    public function getDatatype() {

        $datatype = array();

        $conn = new mysqli($host, $user, $password, $db, $port);

        $sql = "SHOW COLUMNS FROM" . $db . $table;
        $result = mysqli_query($conn, $sql);
        while ($row = mysqli_fetch_array($result)) {
            array_push($datatype, $row['Type']);
        }

        return $datatype;
    }

    public function getDataValue() {
        return $this->dataValue;
    }



    // settings method
    public function setConn($host, $user, $password)
    {
        $conn = mysqli_connect($host, $user, $password);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }


    // fetching methods
    public function fetchColumnNames($host, $user, $password, $table, $db)
    {
        $columnNames = array();

        $sql = "SHOW COLUMNS FROM " . $db . "." . $table;
        $result = mysqli_query($this->setConn($host, $user, $password), $sql);
        while ($row = mysqli_fetch_array($result, 2)) {
            array_push($columnNames, $row[0]);
        }

        return $columnNames;
    }

    public function fetchColumns($host, $user, $password, $db, $port, $table)
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

    // isert methods
    public function insertValuesToDB() {

    }

    // datatype panel
    public function fetchColumnsAndPlaceInTable($host, $user, $password, $table, $db)
    {

        $columnTitles = array();
        $columnTitles = $this->fetchColumnNames($host, $user, $password, $table, $db);

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

            echo("<div id='".  $row['Field'] . "_container' class='tableSubContainer'>");

                echo("<table>");
                    echo("<tr>");
                      echo("<td class='columnNameTable' id='" . $row['Field'] .
                            "' name='". $row['Field'] . "'>" . $row['Field'] . "</td>");
                    echo("</tr>");
                    echo("<tr>");
                      echo ("<td>" . "<button id='" . $row['Field'] . "_BTN'>"
                           . $row['Type'] . " </button>" . "</td>");
                      echo("</tr>");
                echo("</table>");

                $datatype = $row['Type'];
                if (str_contains($datatype, "int")) {
                    echo("<div>");
                    echo "<input type='number' id='input_" . $row['Field'] . "' name='input_" . $row['Field'] . "'></input>";
                    echo "<button id='btn_". $row['Field'] . "' onclick='passValue()'>Confirm value</button>";
                    echo("</div>");
                };

                if (str_contains($datatype, "varchar")) {
                    echo("<div>");
                    echo "<input id='input_" . $row['Field'] . "' name='input_" . $row['Field'] . "'></input>";
                    echo "<button id='btn_". $row['Field'] . "' onclick='passValue()'>Confirm value</button>";
                    echo("</div>");
                };

                if (str_contains($datatype, "date")) {
                    echo("<div>");
                    echo "<input type='date' id='input_" . $row['Field'] . "' name='input_" . $row['Field'] . "'></input>";
                    echo "<button id='btn_". $row['Field'] . "' onclick='passValue()'>Confirm value</button>";
                    echo("</div>");
                };


            echo("</div>");
        }


    }





    // value panel
    public function createDataValuePanel() {
        
    }
    
    // snippet panel
    public function generateSnippet($host, $user, $password, $table, $db) {
        $columnNames = array();
        $columnNames = $this->fetchColumnNames($host, $user, $password, $table, $db);

        $sql =  "INSERT INTO " . $db . "." . $table . "(";

        echo $sql;

        for($i = 0; $i < count($columnNames); $i++) {
            //if ($i = count($columnNames) - 1 ) {
            //    echo $columnNames[$i];
           // }
            echo $columnNames[$i] . ",";

        }
        echo ")";
        echo " VALUES (";


    }

    
    // preview panel
    public function fetchDynamicTable($host, $user, $password, $table, $db)
    {
        // fetch columnTitle in numeric array
        $columnTitles = $this->fetchColumnNames($host, $user, $password, $table, $db);
        // outer loop for printing column titles
        for ($i = 0; $i < count($columnTitles); $i++) {

            echo("<div>");
                echo("<table class='tableSubContainer'>");
                    echo("<tr>");
                        echo("<th class='columnNameTable'>");
                        print_r($columnTitles[$i]);
                        echo("</th>");
                    echo("</tr>");


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


    }

}
?>