
# Karate Site - Projeto React com Vite

## Descrição

Uma aplicação React interativa para gestão de eventos e usuários em um ambiente de Karatê. Agora configurada com o Vite para maior performance e simplicidade.

## Estrutura do Projeto

```
karate-site/
├── node_modules/         # Dependências instaladas pelo npm
├── public/               # Arquivos públicos (index.html, ícones, etc.)
├── src/                  # Código fonte do aplicativo React
│   ├── App.jsx           # Arquivo principal do React
│   ├── index.jsx         # Entrada principal do React
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.jsx      # Página inicial
│   │   ├── Login.jsx     # Tela de login
│   │   ├── Register.jsx  # Tela de cadastro
│   │   ├── Profile.jsx   # Tela de perfil
│   │   ├── ForgotPassword.jsx # Tela de recuperação de senha
│   │   ├── admin/        # Páginas administrativas
│   │   │   └── UserList.jsx # Gerenciamento de usuários
│   │   └── dashboard/    # Páginas do dashboard
│   │       └── CalendarView.jsx # Calendário interativo
├── db.json               # Banco de dados JSON para usuários e eventos
├── vite.config.js        # Configuração do Vite
├── package.json          # Configuração do npm
├── package-lock.json     # Bloqueio de dependências
├── README.md             # Documentação do projeto
```

## Configuração e Uso

### Pré-requisitos

Certifique-se de ter o Node.js instalado.

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/harrisalexandre/karate-site.git
   cd karate-site
   ```
2. Instale as dependências:
   ```
   npm install
   ```

### Executando o Projeto

1. Inicie o servidor JSON:

   ```
   npm run server
   ```

   O servidor estará disponível em `<span>http://localhost:5000</span>`.
2. Inicie o Vite:

   ```
   npm run dev
   ```

   A aplicação estará disponível em `<span>http://localhost:3000</span>`.

### Publicando no GitHub Pages

1. Configure o `<span>vite.config.js</span>` com o `<span>base</span>` correto:
   ```
   base: '/karate-site/',
   ```
2. Execute os comandos:
   ```
   npm run build
   npm run deploy
   ```
3. Acesse sua aplicação em: [https://harrisalexandre.github.io/karate-site](https://harrisalexandre.github.io/karate-site).

## Funcionalidades

* **Login:**
  * Usuários: `<span>admin@karate.com</span>` (senha: `<span>admin123</span>`) e `<span>user@karate.com</span>` (senha: `<span>user123</span>`).
* **Calendário:**
  * Adicione eventos com título, criador, data de início e fim.
* **Gerenciamento de Usuários:**
  * Criação, edição e exibição de usuários diretamente na interface.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou abrir issues no repositório do GitHub.

---

Desenvolvido com 💪 e React usando Vite! 🚀
