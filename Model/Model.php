<?php
    namespace Model;
    
    abstract class Model{
        public static $BD;
        
        public function __construct(){
            $this->Conectar();
        }
        public function Conectar(){
            $bd_name = 'galeria';
            $host = 'localhost';
            $user = 'root';
            $senha = '';

            if(!isset(self::$BD)){
                self::$BD = new \PDO("mysql:dbname=$bd_name;host=$host",$user,$senha);
            }
        }
        public static function Desconectar(){
            self::$BD = null;
        }
    }
?>