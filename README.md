# My Money

<p>O <b>My Money</b>, chamado também de <b>Ciclos de Pagamentos</b>, é uma aplicação que pode ser utilizada tanto para o dia-a-dia, como para o controle de gastos de uma empresa.</p>
<p>Sua tela de login disponibiliza também um link para cadastro do usuário. Ao logar, é gerado um Token que será enviado em todas as requisições, e a senha será criptografada antes de ser salva no banco.</p>
<p>A página inicial do sistema é um dashboard com os totais de créditos e débitos, e seu valor consolidado.
<p>A tela de Ciclos de Pagamentos possui um grid para a visualização dos ciclos já cadastrados. Através desse grid também é possível incluir um novo ciclo (aba Incluir), e editar e/ou excluir um já cadastrado, através dos botões de ação.</p>
<p>Nas telas de inclusão e alteração, haverão cards parecidos com o do dashboard, informando os totais de créditos e débitos e o valor consolidado referente àquele ciclo. Ao adicionar um crédito ou débito, os valores do card serão automaticamente alterados e o valor consolidado será recalculado.</p>

## Tecnologias

<p>Além do HTML5 e CSS3, foi utlizado um template gratuito do bootstrap, o <b>AdminLTE</b>.</p>
<p>Também no front-end, foi utilizado o <b>ReactJS</b> (Webpack) com o gerenciador de estados <b>Redux</b>.</p>
<p>No back-end foi utilizado <b>NodeJS</b> com Express e o banco de dados não-relacional <b>MongoDB</b>.</p>


## Instalação

* Baixar o NPM, Node e MongoDB.

* Dentro da pasta do Mongo, encontre a pasta bin e digite `mongod` para executá-lo (via terminal).
  * Exemplo: `C:\Arquivos de Programas\MongoDB\Server\4.0\bin> mongod`

* Abra o projeto em uma IDE de sua preferência ou apenas o terminal do sistema operacional.

* Para startar o back-end
  * `cd backend`
  * `npm install`
  * `npm run dev` ou `npm run production`

* Para startar o front-end
  * `cd frontend`
  * `npm install`
  * `npm run dev`
  
* Caso todo o processo tenha ocorrido normalmente, a aplicação estará disponível em `localhost:8080`.


## Upgrade (Versão 2.0)

Para uma melhor usabilidade, na segunda versão da aplicação pretendo incluir:
* Gráficos no dashboard
* Paginação no grid
* Configurações do Usuário
  * Alterar Senha
  * Incluir ou Alterar imagem
 * Modal de confirmação de exclusão.
 
 <br />
  <h5>Versão 1.0</h5>
