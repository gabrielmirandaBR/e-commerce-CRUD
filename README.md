# Marketplace Blue Shopping :credit_card: :money_with_wings:

## Introdução

Esta aplicação é um e-commerce com produtos oriundos do Mercado Livre, pela <a href="https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br" target="_blank">API Oficial</a>. A pessoa usuária tem as opções de:

- Procurar por produtos de acordo com as categorias;
- Procurar produtos pela barra de busca;
- Visualizar os detalhes do produto;
- Visualizar e adicionar comentários sobre o produto;
- Adicionar e remover itens do carrinho de compras.

## Habilidades

Neste projeto foram utilizadas as seguintes habilidades:

- Desenvolvimento em <a href="https://blog.apiki.com/mobile-first-o-conceito-e-sua-aplicabilidade/" target="_blank">Mobile First</a>, ou seja, pensada e planejada, em um primeiro momento, para dispositivos móveis;
- Gerenciamento de estado global utilizando <a href="https://redux.js.org/" target="_blank">Redux</a>;
- Utilizou-se <a href="https://github.com/reduxjs/redux-thunk" target="_blank">Redux Thunk</a> para dispachar ações assíncronas;
- Aplicação totalmente responsiva utilizando o framework <a href="https://react-bootstrap.github.io/" target="_blank">React Bootstrap</a>;
- Padronização do código com <a href="https://eslint.org/" target="_blanck">ESlint</a> e <a href="https://prettier.io/" target="_blanck">Prettier</a>;
- Convenção de nomeclatura do CSS com <a href="https://desenvolvimentoparaweb.com/css/bem/" target="_blank">BEM</a>.

## Futuras melhorias

Foi utilizada a metodologia <a href="https://rockcontent.com/br/blog/o-que-e-mvp/" target="_blank">Mínimo Produto Viável (MVP)</a>, ou seja, uma versão de teste que apresenta todas as principais funcionalidades que a aplicação necessita de ter:

- Página com a lista de produtos;
- Página de detalhes do produto;
- Página de carrinho de compras.

Pontuando os seguintes tópicos a serem melhorados na próxima versão da aplicação:

- Agrupar os item iguais no carrinho de compras;
- Corrigir warning;
- Melhorar o código CSS e a estilização da aplicação utilizando <a href=" https://sass-lang.com/" target="_blank">SASS</a>.

## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o repositório do GitHub, acessar o diretório do projeto e instalar as dependências:

```shell
cd "diretorio de sua preferencia"

git clone git@github.com:gabrielmirandaBR/easy_live_challenge.git

cd e-commerce-CRUD

npm install

npm start
```

## Demonstração da Aplicação

### Fluxograma da aplicação com as rotas, páginas e componentes utilizados

![image](./images/diagram.png)

### Página de Produtos (Home)

![image](./images/Home.gif)

### Página de Detalhes do Produto (ProductDetails)

![image](./images/ItemsDetails.gif)

### Página de Carrinho de Compras (ShoppingCart)

![image](./images/ShoppingCart.gif)

### Aplicação totalmente responsiva

![image](./images/responsive.gif)
