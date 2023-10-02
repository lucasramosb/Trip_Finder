## Descrição do Projeto

**Trip Finder** é uma plataforma que permite aos usuários buscar hospedagens, fazer reservas em datas específicas, visualizar suas reservas e até mesmo cancelá-las. O projeto foi desenvolvido com foco em proporcionar uma experiência amigável para dispositivos móveis, tornando-o acessível a uma ampla variedade de usuários.

## Funcionalidades

O projeto Trip Finder oferece as seguintes funcionalidades:

1. **Autenticação com o Google**: Os usuários podem se autenticar usando suas contas do Google, simplificando o processo de login.

2. **Busca por Hospedagens**: Os usuários podem pesquisar por hospedagens disponíveis com base em seus destinos e datas de viagem desejadas.

3. **Reservas**: Após encontrar uma hospedagem, os usuários podem fazer uma reserva para a data desejada.

4. **Consulta de Reservas**: Os usuários têm a capacidade de visualizar todas as reservas que fizeram.

5. **Cancelamento de Reservas**: Em caso de mudança de planos, os usuários podem cancelar suas reservas facilmente.

## Tecnologias Utilizadas

O projeto Trip Finder foi desenvolvido com as seguintes tecnologias:

- React Js
- Next Js
- NextAuth (autenticação com o Google)
- TypeScript
- ORM Prisma (para interação com o banco de dados)
- Tailwind CSS (para estilização)
- Banco de Dados PostgreSQL

## Deploy

O projeto Trip Finder está disponível online. Você pode acessá-lo [aqui](https://trips-finder.vercel.app/).

## Como Executar o Projeto Localmente

Se você deseja executar o projeto em seu ambiente local, siga as etapas abaixo:

1. Clone este repositório em sua máquina local usando o comando:
   ```bash
   git clone https://github.com/lucasramosb/Trip_Finder.git
    ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Trip-Finder
    ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ou
   yarn add
    ```
4. Configure as variáveis de ambiente necessárias. Você precisará configurar as informações de autenticação do Google e as configurações do banco de dados PostgreSQL.
5. Execute a aplicação
   ```bash
   npm run dev
   ou
   yarn run dev  
    ```

  O aplicativo será executado localmente e você poderá acessá-lo em seu navegador em `https://localhost:3000`
  
  Certifique-se de que você tenha o Node.js instalado em sua máquina antes de seguir essas etapas.
  
  Agora você pode testar e explorar o Trip Finder em seu ambiente de desenvolvimento local.



