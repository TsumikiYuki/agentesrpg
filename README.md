# Projeto Tela de Agentes (Valorant Style)

Este projeto é uma aplicação web interativa que recria a tela de seleção de agentes do jogo Valorant. Ele foi construído com React e Tailwind CSS.

## Como Publicar no GitHub Pages

Este projeto foi configurado para rodar diretamente no navegador sem a necessidade de um passo de "build" ou compilação local, facilitando a publicação. Isso é possível através do uso de um transpilador (Babel) que é executado no navegador do usuário para converter o código React (JSX) em JavaScript que o navegador entende.

Para hospedar no GitHub Pages, siga os passos abaixo.

### Passo 1: Crie um Repositório no GitHub

1.  Acesse sua conta no GitHub.
2.  Crie um novo repositório. Você pode nomeá-lo como quiser (por exemplo, `valorant-agent-select`).
3.  **Importante:** Não inicialize o repositório com um README, .gitignore ou licença, pois você irá enviar os arquivos existentes.

### Passo 2: Envie os Arquivos do Projeto

1.  Abra um terminal ou o Git Bash no seu computador.
2.  Navegue até a pasta onde estão os arquivos do seu projeto.
3.  Execute os seguintes comandos para inicializar um repositório Git, adicionar os arquivos, criar um commit e enviar para o GitHub.

    **Substitua `<SEU_USUARIO>` e `<SEU_REPOSITORIO>` pelos seus dados do GitHub.**

    ```bash
    # Inicializa o repositório Git local
    git init
    git branch -M main

    # Adiciona todos os arquivos ao staging
    git add .

    # Cria o primeiro commit
    git commit -m "Commit inicial: Projeto pronto para deploy"

    # Adiciona o repositório remoto do GitHub
    git remote add origin https://github.com/<SEU_USUARIO>/<SEU_REPOSITORIO>.git

    # Envia os arquivos para o repositório no GitHub
    git push -u origin main
    ```

### Passo 3: Configure o GitHub Pages

1.  No seu repositório no GitHub, vá para a aba **Settings**.
2.  No menu lateral, clique em **Pages**.
3.  Na seção "Build and deployment", em "Source", selecione **Deploy from a branch**.
4.  Certifique-se de que o branch selecionado é o `main` e a pasta é `/ (root)`.
5.  Clique em **Save**.

### Passo 4: Acesse sua Aplicação!

Aguarde alguns minutos para o GitHub processar e publicar seu site. Você verá uma mensagem na mesma tela de configurações do Pages com o link do seu site, algo como:

`Your site is live at https://<SEU_USUARIO>.github.io/<SEU_REPOSITORIO>/`

Pronto! Sua aplicação está no ar e funcionando.
