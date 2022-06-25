<?php


// first of all I was like: how can I store and get access to db settings
// then I was like: wasn't there something like oop? :P
class DBSettings
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









}
?>