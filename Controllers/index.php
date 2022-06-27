<?php
    require_once '../autoload.php';
    require_once '../Helpers.php'; //funcoes de ajuda


    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');

    $controller = $_GET['controller'] ?? $_POST['controller'];
    $funcao_a_executrar = $_GET['funcao'] ?? $_POST['funcao'];



    require_once "$controller.php";
?>