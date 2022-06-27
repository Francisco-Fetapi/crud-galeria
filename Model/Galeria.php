<?php
namespace Model;


class Galeria extends Model{

        public function __construct(){
            parent::__construct();
        }

        public function todas_as_fotos(){
            $sql = Model::$BD->query("SELECT * FROM fotos ORDER BY id DESC");
            $sql = $sql->fetchAll(\PDO::FETCH_ASSOC);

            return $sql;
        }
        public function existe_esta_legenda($legenda){
            $sql = Model::$BD->query("SELECT * FROM fotos WHERE legenda = '$legenda' ");
            $sql = $sql->rowCount();
            
            return ($sql == 1);
        }
        public function cadastrar_foto($legenda,$nome,$data){
            if($this->existe_esta_legenda($legenda)){
                return false;
            }

            $nome_da_foto = $this->salvar_foto();
            if($nome_da_foto){
                Model::$BD->query("INSERT INTO fotos VALUES(DEFAULT,'$legenda','$nome_da_foto','$data')");
                return true;
            }else{ //nao moveu a foto --> pode ser o tamanho!
                return 2;
            }
        }
        public function salvar_foto(){
            $ficheiro = $_FILES['ficheiro'];
            $nome_ficheiro = $ficheiro['name'];
            $nome_ficheiro = md5($nome_ficheiro.date('H:i:s')).'.jpg';
            $destino = "../Img/{$nome_ficheiro}";
            $moveu = move_uploaded_file($ficheiro['tmp_name'],$destino);
            if($moveu){
                return $nome_ficheiro;
            }
            return false;
        }
        public function apagar_foto($id_foto){
            $sql = "DELETE FROM fotos WHERE id = '$id_foto'";
            $sql = Model::$BD->query($sql);

            return true;
        }
        public function alterar_legenda($id_foto,$legenda){
            Model::$BD->query("UPDATE fotos SET legenda = '$legenda' WHERE id = '$id_foto' ");

            return true;
        }
        public function obter_nome_by_id($id_foto){
            $sql = Model::$BD->query("SELECT * FROM fotos WHERE id = '$id_foto'");
            $sql = $sql->fetch(\PDO::FETCH_ASSOC);

            return $sql['nome'];
        }
    }
    // $_GLOBALS['Galeria'] = new Galeria();
?>