# Karate Site - Projeto React

## Descrição
Uma aplicação React interativa para gestão de eventos e usuários em um ambiente de Karatê. O projeto inclui:
- Sistema de login e gerenciamento de usuários.
- Calendário interativo para agendamento de eventos.
- Suporte a banco de dados JSON para armazenamento local.
- Configuração para publicação no GitHub Pages.

## Estrutura do Projeto
```
karate-site/
├── node_modules/         # Dependências instaladas pelo npm
├── public/               # Arquivos públicos (index.html, ícones, etc.)
├── src/                  # Código fonte do aplicativo React
│   ├── App.js            # Arquivo principal do React
│   ├── index.js          # Entrada principal do React
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.js       # Página inicial
│   │   ├── Login.js      # Tela de login
│   │   ├── Register.js   # Tela de cadastro
│   │   ├── Profile.js    # Tela de perfil
│   │   ├── ForgotPassword.js # Tela de recuperação de senha
│   │   ├── admin/        # Páginas administrativas
│   │   │   └── UserList.js # Gerenciamento de usuários
│   │   └── dashboard/    # Páginas do dashboard
│   │       └── CalendarView.js # Calendário interativo
├── db.json               # Banco de dados JSON para usuários e eventos
├── package.json          # Configuração do npm
├── package-lock.json     # Bloqueio de dependências
├── README.md             # Documentação do projeto
```

## Configuração e Uso

### Pré-requisitos
Certifique-se de ter o Node.js instalado.

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/harrisalexandre/karate-site.git
   cd karate-site
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Projeto
1. Inicie o servidor JSON:
   ```bash
   npm run server
   ```
   O servidor estará disponível em `http://localhost:5000`.

2. Inicie o React:
   ```bash
   npm start
   ```
   A aplicação estará disponível em `http://localhost:3000`.

### Publicando no GitHub Pages
1. Configure o `homepage` no `package.json`:
   ```json
   "homepage": "https://harrisalexandre.github.io/karate-site"
   ```
2. Execute os comandos:
   ```bash
   npm run build
   npm run deploy
   ```
3. Acesse sua aplicação em: [https://harrisalexandre.github.io/karate-site](https://harrisalexandre.github.io/karate-site).

## Funcionalidades
- **Login:**
  - Usuários: `admin@karate.com` (senha: `admin123`) e `user@karate.com` (senha: `user123`).
- **Calendário:**
  - Adicione eventos com título, criador, data de início e fim.
- **Gerenciamento de Usuários:**
  - Criação, edição e exibição de usuários diretamente na interface.

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou abrir issues no repositório do GitHub.

---

Desenvolvido com 💪 e React! 🚀

