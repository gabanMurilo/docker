# Projeto de newsletter simplificado #
Este é um projeto de exemplo para criar um sistema de newsletter simplificado usando Docker, Node.js, Express.js e MySQL. O sistema permite que os usuários se cadastrem na newsletter, o administrador envie mensagens e fornece uma interface web para interação.
## Configuração ##
Antes de executar o projeto, verifique se você tem o Docker e o Docker Compose instalados em sua máquina. Você pode fazer o download e instalá-los a partir do site oficial: https://www.docker.com/get-started
## Executando o projeto ##
1. Clone este repositório para sua máquina local.
 ``` bash
    git clone https://github.com/gabanMurilo/docker.git
```
2. Execute o seguinte comando para criar e executar os contêineres Docker. Isso criará os contêineres para o aplicativo e o banco de dados MySQL. 
``` bash
    docker-compose up --build -d
```
## Acessando o aplicativo ##
O aplicativo estará disponível em localhost:1000/users para listar os usuários.

localhost:2000/newsletter para listar os usuários e a mensagem padrão.

localhost:2000/newsletter?message=TEXTO para listar os usuários e a mensagem TEXTO.

localhost:2000/form para abir o formulário de cadastramento.

localhost:2000/registered para listar os usuários cadastrados.