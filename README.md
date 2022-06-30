# Galeria
🚀 _Criado para fins de estudo_

Criado nos _meados de 2021_  para aprimorar os conhecimentos em `REACT + PHP`. Este projeto é basicamente um CRUD de fotos. 
<br /> <br />
Veja o [Front-End do projeto](https://github.com/Francisco-Fetapi/galeria-react) para mais informações.

# Pré-requisitos para rodar o sistema localmente
Por ser um projeto de estudo não me preocupei em hospedá-lo, mas caso queiras ver o projeto rodando, eis abaixo alguns elementos que precisas ter instalado em sua máquina.

1. Servidor APACHE e MySQL (para instalar podes usar o XAMPP ou aplicativos similares)
2. Algum Navegador (Óbvio😅)

# Passos para rodar o projeto localmente

Com essas ferramentas instaladas o próximo passo é clonar o repositório:
```
git clone https://github.com/Francisco-Fetapi/crud-galeria.git
```

Com o repositório clonado basta apenas importar o banco de dados com suas respetivas tabelas no seu _gestor de banco de dados_, no exemplo a seguir estarei usando o **PHPMyAdmin**.

![importando_bd](https://user-images.githubusercontent.com/74926014/175775785-c8792c9a-6d77-425d-b222-292519af9954.PNG)

Ao acessar o painel para importar um __banco de dados__ deve-se escolher o arquivo com as instruções a serem executadas para criar o banco. 
Na raiz do projeto clonado temos o arquivo `galeria.sql`, é ele que contém todo o SQL que deve ser executado para criar o banco de dados e suas respetivas tabelas.

Quase que ia me esquecendo: O projeto clonado deve ser movido para a pasta onde o endereço `http://localhost` aponta, no meu caso, já que estou usando o `XAMPP` o endereço é `C:\xampp\htdocs`.
Depois da pasta ser movida para o local designado no passo anterior, ao acessar `http://localhost/galeria` acessaremos o sistema.
##

Se seguiu todos os passos acima já pode acessar o sistema <a href="http://localhost/galeria">clicando aqui</a>
<br /> <br />
`NOTA:` Na raíz do projeto, a pasta _"static"_ e o arquivo _"index.html"_ foram arquivos gerados pelo [front-end criado com REACT](https://github.com/Francisco-Fetapi/galeria-react), eles estão desaclopados do projeto.
