<?php
use Model\Galeria;
use Model\Model;

$Galeria = new Galeria();

function cadastrar_foto(){
    global $Galeria;
    extract($_POST);

    if(!isset($legenda)){ // se mesmo extraindo as variaveis nao forem criadas entao extrai do $_GET
        extract($_GET);
    }

    $res = $Galeria->cadastrar_foto($legenda,$nome,$data);
    if($res === true){
        Mostrar(true,'Foto cadastrada com sucesso',[]);
    }else{
        if($res === 2){
            Mostrar(false,'O ficheiro eh demasiado grande para o Servidor de arquivos!',[]);
        }
        Mostrar(false,'Algo ocorreu de errado ao tentar cadastrar!',[]);
    }
}

function obter_fotos(){
    global $Galeria;

    $dados = $Galeria->todas_as_fotos();
    Mostrar(true,'',$dados);
}
function apagar_foto(){
    global $Galeria;
    extract($_POST);

    $nome_da_foto = $Galeria->obter_nome_by_id($id_foto);
    $endereco_foto = "../Img/$nome_da_foto";
    unlink($endereco_foto); //apaga o ficheiro

    $Galeria->apagar_foto($id_foto); // apaga no Banco de dados!

    Mostrar(true,'Foto apagada com sucesso!',[]);
}
function alterar_legenda(){
    global $Galeria;
    extract($_POST);

    $Galeria->alterar_legenda($id_foto,$legenda);
    Mostrar(true,'Legenda alterada com sucesso!',[]);
}
function obter_nome_by_id(){
    global $Galeria;
    extract($_GET);

    $res = $Galeria->obter_nome_by_id($id_foto);
    Mostrar(true,'',[$res]);
}
call_user_func($funcao_a_executrar);
Model::Desconectar();
?>