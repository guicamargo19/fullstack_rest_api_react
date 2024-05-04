# REST API Operações CRUD

<img src="https://servidor-estatico-tan.vercel.app/produtos.png"/>

O projeto viabiliza a criação de um elemento Produto, com a integral preservação de todos os seus dados. Através de uma
interface Front-end simples, minimalista e intuitiva, construída com **ReactJS**, são executáveis operações CRUD (Create, Read, Update, Delete).

O Back-end, elaborado em **Django** com **Python**, incorpora a REST API mediante o **Django Rest Framework**, e o armazenamento de dados
é efetuado utilizando o **PostgreSQL**.

- Projeto desenvolvido para desafio técnico em processo seletivo.

## Sumário

- [Instalação](#instalacao)
- [Rodando o projeto](#rodando-o-projeto)
- [Contribuindo](#configuracao-desenvolvimento)
- [Ferramentas utilizadas](#ferramentas)
- [Sobre](#sobre)
    - [Back-end](#backend)
    - [Front-end](#frontend)
    - [Banco de dados](#banco-de-dados)
    - [Docker](#docker)


<div id="instalacao">

## Instalação

Siga estes passos para instalar e configurar o ambiente necessário para rodar o projeto em sua máquina local.

### Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Docker](https://docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- **Node.js**
- **npm (geralmente vem com o Node.js)**

Projeto Front-end foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

### Clonando o Repositório

Siga as etapas a seguir para configurar o ambiente de desenvolvimento:

- Clone este repositório em sua máquina local.
```bash
git clone https://github.com/guicamargo19/bnex-desafio-tecnico
```
</div>
<div id="rodando-o-projeto">

## Rodando o projeto no Docker

1. Acesse a pasta back-end/dotenv_files e crie o arquivo ".env" a partir do ".env-example". 
Os dados devem ser os mesmos presentes no arquivo docker-compose.yml.
```shell
cd back-end/dotenv_files
```
2. Acesse a pasta back-end na raiz e execute o comando a seguir e certifique-se de que o Docker Desktop está aberto.
```shell
cd back-end
docker-compose up --build
```
</div>
<div id="configuracao-desenvolvimento">

## Contribuindo

1. Navegue até o diretório clonado
```shell
cd bnex-desafio-tecnico
```
2. Crie e ative o ambiente virtual,(comandos podem variar entre Windows, Linux e Mac.)
```shell
python -m venv venv
source venv/bin/activate
```
Após a ativação do ambiente virtual, selecione o interpretador correto para ele, digitando na barra superior 
de pesquisa do VSCode: **>Python Select Interpreter**

3. Acesse a pasta back-end
```bash
cd back-end
```
4. Execute o seguinte comando para instalar as dependências:
```shell
pip install -r requirements.txt
```
5. Acesse a pasta front-end e execute o seguinte comando para instalar as dependências:
```shell
cd front-end
npm install
```

## Dotenv file (.env)

No diretório back-end/dotenv_files é possível encontrar o arquivo ".env_example", sendo que,
a partir dele, deve-se criar o arquivo ".env" que deve ser preenchido com variáveis de ambiente
com configurações necessárias para o banco de dados PostgreSQL. Certifique-se de criar este
arquivo no mesmo local do exemplo, preenchendo com dados iguais aos do arquivo docker-compose.yml.

## Nodemon

O nodemon é uma ferramenta de desenvolvimento para aplicativos Node.js que monitora mudanças nos arquivos
do seu projeto e automaticamente reinicia o servidor quando detecta uma alteração. Eliminando assim a
necessidade de manualmente parar e reiniciar o servidor a cada vez que você faz uma modificação no código.

- Instalação
```shell
npm install --save-dev nodemon
```
- Adicionar ao Dockerfile do Front-end:
```shell
RUN npm install -g nodemon
```
- Adicionar "volumes" no docker-compse-yml na infraestrutura front-end-server:
```shell
volumes:
  - ../front-end:/app   # Diretório atual montado em /app no contêiner
```
- Adicionar em scripts no arquivo package.json o seguinte comando:
```shell
"scripts": {
    "start": "nodemon --exec react-scripts start", } 
```
## Testes

Foram implementados testes para verificar a integridade do Model, das Views e do
Serializer neste projeto. Também foi utilizado DRF (APITestCase) para simplificar e criar testes 
para verificar se as operações CRUD estão funcionando como esperado.

Executando os testes dentro do Docker:
```shell
docker-compose run --rm back-end-server python manage.py test
```

</div>
<div id="ferramentas">

## 🛠️ Ferramentas utilizadas para construção do projeto

* **Python** - Linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.
* **Django** - Framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view.
* **Django Rest Framework** - Biblioteca que permite a construção de APIs REST utilizando a estrutura do Django.
* **ReactJS** - Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
* **JavaScript** - Linguagem de programação interpretada estruturada de alto nível com tipagem dinâmica fraca e multiparadigma.
* **Styled Components** - Uma biblioteca que nos permite escrever CSS em JavaScript enquanto construímos componentes customizados em ReactJS.
* **HTML** - Linguagem de marcação utilizada na construção de páginas na Web.
* **CSS** - Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.
* **ESLint** - Linter, uma ferramenta de análise estática, para as linguagens Javascript e Typescript, sendo o mais popular do mundo para tais linguagens.
* **Prettier** - Ferramenta para formatação de código, necessitando de configurações para que funcione no VSCode.
* **PostgreSQL** - Um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.
* **Docker** - Conjunto de produtos de PaaS que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.
* **NPM** - Gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.JS.

</div>
<div id="sobre">

## Sobre
<div id="backend">

## 1. Back-End (Django com Python)

Back-end desenvolvido em **Django** com **Python** e construção da Rest API com **DRF (Django Rest Framework)**, 
que mantém os dados da Entidade “Produto”. Ele provém toda a manutenção (CRUD) dessa entidade. 

O modelo da entidade produto possui três campos (nome, descrição e valor), sendo o nome um campo
do tipo CharField, o campo descrição do tipo TextField e o valor sendo um campo tipo DecimalField.

Projeto está na pasta "back-end", onde dentro dela encontra-se o app Products, assim como a pasta backend onde
se localizam os arquivos como settings.py e wsgi.py. No App Products é onde estão localizados o Model, as Views
utilizando CBV (Class Based Views), os Serializers e os Testes.

O Back-End é hospedado na porta 8000: [http://localhost:8000/api/products](http://localhost:8000/api/products)

## API

## API Endpoint: Listar produtos
  **GET /api/produtos**

Retorna uma lista de todos os produtos.

#### Resposta
```
HTTP 200 OK
Content-Type: application/json

[
  {
    "id": 1,
    "name": "Amigurumi - Triceratops",
    "description": "Dinossauro",
    "value": "200.00"
  },
  {
    "id": 2,
    "name": "Camiseta",
    "description": "Rosa",
    "value": "400.00"
  }
]
```
-------------------------------------
## API Endpoint: Criar produto

**POST /api/produtos/**

Cria um produto

#### Resposta
```
HTTP 201 OK
Content-Type: application/json
```
-------------------------------------
## API Endpoint: Atualiza produto

**PATCH /api/produtos/${productID}**

Atualiza o produto solicitado

#### Resposta
```
HTTP 200 OK
Content-Type: application/json
```
-------------------------------------
## API Endpoint: Deletar produto

**DELETE /api/produtos/${productID}**

Apaga o produto solicitado

#### Resposta
```
HTTP 204 OK
Content-Type: application/json
```
-------------------------------------
## API Endpoint: Deletar todos os produtos

**DETELE /api/produtos/**

Apaga todos os produtos

#### Resposta
```
HTTP 204 OK
Content-Type: application/json
```

<div id="frontend">

## 2. Front-End (ReactJS com JavaScript)

O projeto Front-end, assim como o Back-end, está localizado na pasta "front-end" na raiz do diretório. Desenvolvido com **ReactJS**
utilizando **JavaScript**, o Front-end adota a estilização através de Styled Components (CSS-in-JS). Sua estrutura é caracterizada 
pela simplicidade, composta por componentes que interagem entre si de forma coesa. Destacam-se elementos como o formulário de criação
e atualização de produtos, o componente de listagem e os botões de remoção e atualização.

O gerenciamento do estado dos componentes é realizado utilizando o **useState**, proporcionando a capacidade de criar e atualizar
o estado de um componente funcional de maneira eficiente.

A integração com o Back-End é viabilizada por meio de requisições à API, gerenciadas de forma assíncrona através do **React Query**.
Essa abordagem contribui para a melhoria e simplificação da aplicação React, enquanto o **useMutation** auxilia no tratamento das mutações
do lado do servidor, como as requisições HTTP.

O Front-End é hospedado na porta 3000: [http://localhost:3000](http://localhost:3000)

</div>
<div id="banco-de-dados">

## 3. Banco de Dados (PostgreSQL)

O banco de dados **PostgreSQL** é estruturado de forma simples, composto apenas por uma tabela, a qual abriga os dados dos produtos.

Após a definição dos modelos no Django, é imperativo criar as migrações correspondentes para aplicar as alterações no banco de dados.
Isso é realizado através do comando **"python manage.py makemigrations"**.

Uma vez que as migrações tenham sido criadas, é necessário aplicá-las utilizando o comando **"python manage.py migrate"**.
Esta operação executa todas as migrações pendentes e atualiza o esquema do banco de dados de acordo com as definições do modelo.

O DB-Server é hospedado na porta padrão 5432 do PostgreSQL.

</div>
<div id="docker">

## 4. Docker e Docker Compose

O arquivo "docker-compose.yml" é responsável por definir três serviços distintos: 'db-server', 'back-end-server' e 'front-end-server',
cada um com suas próprias configurações e dependências.

- Utiliza-se a imagem 'postgres:latest' disponível no Docker Hub, que é uma imagem pré-configurada do PostgreSQL.
- O ambiente é configurado com os dados necessários, como o nome do banco de dados, usuário e senha, os quais foram previamente especificados no arquivo ".env".
- A seção "volumes" mapeia um diretório de dados do PostgreSQL, garantindo a persistência dos dados entre reinicializações do contêiner.
- Na seção "network", são definidas duas redes: 'back-end-server-network' e 'front-end-server-network'. Estas redes são utilizadas para separar a
comunicação entre os serviços, simplificando a interação entre os contêineres.

No que concerne ao 'back-end-server', foi especificado o 
seguinte comando para aguardar a inicialização do banco de dados antes de realizar as migrações e iniciar o servidor:
````
sh -c "until pg_isready -h db-server -U backend_user; do
              echo waiting for database;
              sleep 2;
             done;
             python manage.py makemigrations &&
             python manage.py migrate &&
             python manage.py runserver 0.0.0.0:8000"
````
</div>
</div>

## ✒️ Autor

Guilherme Ferreira Camargo
