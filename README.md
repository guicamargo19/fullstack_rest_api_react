# Desafio Técnico BNEX

<img src="https://servidor-estatico-tan.vercel.app/produtos.png"/>

Projeto permite a criação de um elemento Produto, mantendo todos os dados dele, permitindo
o CRUD (Create, Read, Update, Delete).

Projeto desenvolvido para desafio técnico em processo seletivo.

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
2. Acesse a pasta back-end na raiz e execute o comando a seguir:
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
* **Docker** - Conjunto de produtos de PaaS que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.
* **NPM** - Gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.JS.

</div>
<div id="sobre">

## Sobre
<div id="backend">

## 1. Back-End (Django com Python)

Back-end desenvolvido em **Django** com **Python** e construção da Rest API com **DRF (Django Rest Framework)**, 
que mantém os dados da Entidade “Produto”. Ele provém toda a manutenção (CRUD) dessa entidade. Esta entidade possui os atributos de nome, descrição e valor. 

Projeto está na pasta "back-end", onde dentro dela encontra-se o app Products, assim como a pasta backend onde
se localizam os arquivos como settings.py e wsgi.py. No App Products é onde estão localizados o Model, as Views
utilizando CBV (Class Based Views), os Serializers e os Testes.

O modelo da entidade produto possui três campos (nome, descrição e valor), sendo o nome um campo
do tipo CharField, o campo descrição do tipo TextField e o valor sendo um campo tipo DecimalField.

O Back-End é executado pela porta 8000: [http://localhost:8000/api/products](http://localhost:8000/api/products)

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

Assim como o Back-end, o projeto Front-end está localizado na pasta front-end na raiz. Desenvolvido em 
**ReactJS** com **JavaScript**, com estilizição usando **Styled Componentes (CSS-in-JS)**, possui estrutura simples,
com componentes que interagem entre si, como formulário de criação e atualização do produto, componente de
listagem e botões de remoção e atualização.

O estado dos componentes é gerenciado com o useState, que permite criar e atualizar o estado de um componente funcional.

A integração com Back-End é dada através de requisições a API sendo gerenciadas com React Query de forma assíncrona,
melhorando e simplificando a aplicação React e com useMutation que ajuda a lidar com as mutações do lado do servidor,
como as requisições HTTP.

O Front-End é executado pela porta 3000: [http://localhost:3000](http://localhost:3000)

</div>
<div id="banco-de-dados">

## 3. Banco de Dados (PostgreSQL)

O banco de dados com **PostgreSQL** é simples, com apenas uma tabela: a tabela de Produtos.

Após a definição dos modelos em Django, as migrações precisam ser criadas para aplicar as alterações
no banco de dados, utilizando o comando "python manage.py makemigrations".

Após a criação das migrações é preciso aplicá-las, utilizando comando "python manage.py migrate".
Este comando executa todas as migrações pendentes e atualiza o esquema do banco de dados de acordo
com as definições do modelo.

O DB-Server é executado na porta 5432 padrão do PostgreSQL.

</div>
<div id="docker">

## 4. Docker e Docker Compose

O arquivo "docker-compose.yml" define três serviços: 'db-server', 'back-end-server' e 'front-end-server',
cada um com suas próprias configurações e dependências.

- Utiliza-se como imagem 'postgres:latest', que é uma imagem do Docker Hub para o PostgreSQL.
- O ambiente possui os dados como o nome do banco de dados, usuário e senha, que foram previamente configurados no
arquivo ".env".
- Em "volumes" é mapeado um diretório de dados do PostgreSQL, permitindo que os dados persistam entre
reinicializações do contêiner.
- Em "network" são definidas duas redes: back-end-server-network e front-end-server-network, que são usadas para
separar a comunicação entre os serviços, facilitando a comunicação entre contêineres.

No caso do back-end-server, foi definido o seguinte comando utilizado para esperar o banco de dados subir e
depois realizar as migrações e rodar o servidor:
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
