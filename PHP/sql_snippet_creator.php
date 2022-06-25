<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/sql_snippet_creator.css">
    <title>SQL Snippet Creator</title>
</head>
<body>


    <div class="container">
        <div class="dbTablePanel">
          
            <?php
                include("db_settings.php");
                include("db_functions.php");

                if (isset($_POST['host']) && isset($_POST['user']) && isset($_POST['db']) &&
                    isset($_POST['port']) && isset($_POST['table'] )) {
                    $dbSettings = new DBSettings($_POST['host'], $_POST['user'], $_POST['password'],
                        $_POST['db'], $_POST['table'], $_POST['port']);

                    $host = $dbSettings->getHost();
                    //echo($dbSettings->getHost());
                    //echo("<br>");
                    
                    $user = $dbSettings->getUser();
                    //echo($dbSettings->getUser());
                    //echo("<br>");
                    
                    $password = $dbSettings->getPassword();
                    //echo($dbSettings->getPassword());
                    //echo("<br>");
                    
                    $db = $dbSettings->getDb();
                    //echo($dbSettings->getDb());
                    //echo("<br>");
                    
                    $table = $dbSettings->getTable();
                    //echo($dbSettings->getTable();
                    //echo("<br>");
                   
                    $port = $dbSettings->getPort();
                    //echo($dbSettings->getPort());
                    //echo("<br>");
                    $newConnection = new DBFunctions();
                    
                    $newConnection->setConn($host, $user, $password);
                    $newConnection->fetchColumnsAndPlaceInTable($host, $user, $password, $table, $db);
                    
                    
                }
            ?>
            
            
        </div>

        <div class="dbSettings">
            <form action="" method="post">
                <input type="text" placeholder="host" name="host" id="host" value="localhost">
                <input type="text" placeholder="username" name="user" id="name" value="root">
                <input type="text" placeholder="password" name="password" id="passowrd" value="">
                <input type="text" placeholder="db" name="db" id="db" value="aktivitaetentracker">
                <input type="text" placeholder="table" name="table" id="table" value="user">
                <input type="text" placeholder="port" name="port" id="port" value="3306">
                <button name="button1">set settings</button>
            </form>
        </div>
        <div class="valuePanel" id="valuePanel">
            <?php
                include("valueProcession.php");
            ?>

                
           
        </div>
        <div class="sqlOutput" id="sqlOutput"></div>
        <div class="snippetPanel"></div>

   </div>
    <script src="../datatypePanelCreation.js"></script>
</body>
</html>
