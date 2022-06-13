<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/sql_snippet_creator.css">
    <title>SQL Snippet Creator</title>
</head>
<body>


    <div class="container">
        <div class="dbTablePanel">
        <?php
       
        // easy, but uncommon and ugly workaround for not showing errors
        // while textfields are not set
        // thrwo exception?!
        if (empty($_POST['host'])) echo('empty ');
        if (empty($_POST['user'])) echo('empty ');
        if (empty($_POST['password'])) echo('empty ');
        if (empty($_POST['db'])) echo('empty ');
        if (empty($_POST['port'])) echo('empty ');


        function buttonIsClicked() {
            include_once('db_settings.php');
        }

        // check if values from text field are send to php file
        if(array_key_exists('button1', $_POST)) {
            buttonisClicked();
        }
        ?>

        

        </div>

        <div class="dbSettings">
            <form action="" method="post">
                <input type="text" placeholder="host" name="host" id="host">
                <input type="text" placeholder="username" name="user" id="name">
                <input type="text" placeholder="password" name="password" id="passowrd">
                <input type="text" placeholder="db" name="db" id="db">
                <input type="text" placeholder="port" name="port" id="port">
                <button name="button1">set settings</button>
                
                <?php
                
                
                
                
                ?>
            </form>
        </div>
        <div class="valuePanel"></div>
        <div class="snippetPanel"></div>

   </div>
</body>
</html>
