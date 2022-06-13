<?php
    $host = $_POST['host'];
    $user = $_POST['user'];
    $password = $_POST['password'];
    $db = $_POST['db'];
    $port = $_POST['port'];

    echo (
        $host . "<br>" .
        $user . "<br>" .
        $password . "<br>" .
        $db . "<br>" .
        $port
    );

?>