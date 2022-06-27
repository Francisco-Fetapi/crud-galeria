<?php
        
    function Mostrar(bool $status,string $msg,array $dados){
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: Application/json');
        $info = [
            'status'=>$status,
            'msg'=>$msg,
            'dados'=>$dados
        ];

        echo json_encode($info);
    }
?>