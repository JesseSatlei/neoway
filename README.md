# O que é esse projeto
Esse é um sistema utilizado para ler uma planilha de clientes e guardar os dados válidos dessa planilha em um banco de dados postgres.

# O que precisa estar instalado para rodar o projeto
1. Node 
2. Npm
3. Docker

# Passos para rodar o projeto
1. `npm i` - Esse comando irá instalar as bibliotecas
2. `ormconfig.json` - Nesse arquivo você pode configurar os dados que serão utilizados para a conexão com o banco de dados
3. `npm run dev` - Irá executar o "nodemon" e o projeto em nosso ambiente para que a atualização do terminal ocorra automaticamente.
4. `docker-compose up -d` - Irá executar o docker e irá baixar a imagem configurada no "docker-compose.yml"

# Rotas
localhost:8000/ - Rota padrão para saber se está em pleno funcionamento
localhost:8000/user - Metodo Get - Irá resgatar todos os usuários.
localhost:8000/user - Metodo Post - Irá cadastrar todos os usuários de um arquivo.

# Observações
Para enviar um arquivo você pode estar utilizando do "Insomnia", segue abaixo os passos necessários para utilizar essa ferramenta:
1. Nele você criará uma nova requisição "Post" que irá bater na rota "localhost:8000/user".
2. Com a request criada, você mudará o "Body" para "Multipart".
3. Coloque o nome de "file" e ao lado do campo do valor clique sobre a seta para baixo.
4. Escolha a opção chamada "File".
5. Agora clique sobre "Choose File" e escolha o arquivo que será importado.
6. Deixamos como exemplo uma pasta chamada "filesExample" que conterá os moldes do arquivo a ser importado.
