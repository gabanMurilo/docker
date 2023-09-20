# Projeto de Newsletter Simplificado

Este é um projeto de exemplo para criar um sistema de newsletter simplificado usando Docker, Node.js, Express.js e MySQL. O sistema permite que os usuários se cadastrem na newsletter, o administrador envie mensagens e fornece uma interface web para interação.

## Configuração

Antes de executar o projeto, verifique se você tem o Docker e o Docker Compose instalados em sua máquina. Você pode fazer o download e instalá-los a partir do site oficial: https://www.docker.com/get-started

## Executando o Projeto

Siga estas etapas para executar o projeto:

1. Clone este repositório para o seu sistema local:

   ```bash
   git clone https://github.com/seu-usuario/projeto-newsletter.git
   cd projeto-newsletter
    ```
2. Execute o seguinte comando para criar e executar os contêineres Docker. Isso criará os contêineres para o aplicativo e o banco de dados MySQL. O aplicativo será executado na porta 3000 e o banco de dados MySQL na porta 3306.

   ```bash
   docker-compose up --build -d
   ```
3. Acesse a aplicação pelo navegador:
    
    O Gateway estará disponível em 
    ```bash 
    http://localhost
    ```

    O App estará disponível em 
    ```bash
    http://localhost:3000.
    ```

