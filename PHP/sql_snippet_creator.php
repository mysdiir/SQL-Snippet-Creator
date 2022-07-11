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
        <div class="dataPanel">
            <?php
                include_once("Database.php");
                
                if (isset($_POST['host']) && isset($_POST['user']) && isset($_POST['db']) &&
                    isset($_POST['port']) && isset($_POST['table'] )) {
                    
                    $database = new Database($_POST['host'], $_POST['user'], $_POST['password'],
                    $_POST['db'], $_POST['table'], $_POST['port']);

                    $host = $database->getHost();
                    $user = $database->getUser();
                    $password = $database->getPassword();
                    $db = $database->getDb();
                    $table = $database->getTable();
                    $port = $database->getPort();

                    $database->setConn($host, $user, $password);
                    $database->fetchColumnsAndPlaceInTable($host, $user, $password, $table, $db);
                    
                    
                }
            ?>
        </div>

        
        <div class="settingsPanel">
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

        
        <div class="snippetPanel" id="valuePanel">
            <?php
            include_once("Database.php");

            $newObject = new Database($_POST['host'], $_POST['user'], $_POST['password'],
                $_POST['db'], $_POST['table'], $_POST['port']);

            $host = $newObject->getHost();
            $user = $newObject->getUser();
            $password = $newObject->getPassword();
            $db = $newObject->getDb();
            $table = $newObject->getTable();
            $port = $newObject->getPort();
            
            
            $newObject->generateSnippet($host, $user, $password, $table, $db);


            ?>
         </div>
        
        
        
        <div class="executionPanel" id="sqlOutput">
            <button>Save to clipboard</button>
            <button>Upload to database</button>
        </div>
        
        <div class="dataPreviewPanel" id="dataPreviewPanel">
            
        </div>
        
        <div class="previewPanel">

            <?php
            include_once("Database.php");

            if (isset($_POST['host']) && isset($_POST['user']) && isset($_POST['db']) &&
            isset($_POST['port']) && isset($_POST['table'] )) {

                $database->fetchDynamicTable($host, $user, $password, $table, $db);
                $columnNameArray;
                
            }
            ?>
        </div>
   </div>
    <script src="../JS/datavalues.js" defer></script>
</body>
</html>
