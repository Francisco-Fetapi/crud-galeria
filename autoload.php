<?php
spl_autoload_register(function($nome){
    require_once "$nome.php";
})
?>