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

Siga estas etapas a seguir para configurar o ambiente de desenvolvimento:

- Clone este repositório em sua máquina local.
```bash
git clone https://github.com/guicamargo19/bnex-desafio-tecnico
```
</div>
<div id="rodando-o-projeto">

## Rodando o projeto

1. Acesse a pasta back-end/dotenv_files e crie o arquivo ".env" a partir do ".env-example",
os dados devem ser os mesmos presentes no arquivo docker-compose.yml.
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
2. Crie e ative o ambiente virtual (comandos podem variar entre Windows, Linux e Mac.)
```shell
python -m venv venv
source venv/bin/activate
```
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
a partir dele deve-se criar o arquivo ".env" que deve ser preenchido com variáveis de ambiente
para configurações necessárias para o banco de dados PostgreSQL. Certifique-se de criar este
arquivo no mesmo local do exemplo preenchendo com dados iguais ao do arquivo docker-compose.yml.

## Testes

Foram implementados testes para testar a integridade do Model, das Views e do
Serializer neste projeto. E também utilizando DRF (APITestCase) para simplificar este testes, 
testando se as operações CRUD estão funcionando como esperado.

Rode os testes dentro do Docker:

```shell
docker-compose run --rm back-end-server python manage.py test
```
</div>
<div id="ferramentas">

## 🛠️ Ferramentas utilizadas para construção do projeto

* **HTML** - Linguagem de marcação utilizada na construção de páginas na Web.
* **CSS** - Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.
* **NPM** - Gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.JS.
* **JavaScript** - Linguagem de programação interpretada estruturada, de alto nível com tipagem dinâmica fraca e multiparadigma.
* **Python** - Linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.
* **Django** - Framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view.
* **ESLint** - Linter, uma ferramenta de análise estática, para as linguagens Javascript e Typescript, sendo o mais popular do mundo para tais linguagens.
* **ReactJS** - Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
* **Docker** - Conjunto de produtos de PaaS que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.
* **Styled Components** - Uma biblioteca que nos permite escrever CSS em JavaScript enquanto construímos componentes customizados em ReactJS.

</div>
<div id="sobre">

## Sobre
<div id="backend">

## 1. Back-End (Django com Python)

Back-end desenvolvido em **Django** com **Python** e **DRF (Django Rest Framework)**, mantém os dados de uma 
Entidade “Produto”. Essa entidade possui os atributos de nome, descrição e valor. Ele provem toda a manutenção
(CRUD) dessa entidade.

Projeto está na pasta "back-end", onde dentro dela encontra-se o app Products, assim como a pasta backend onde
se localizam os arquivos como settings.py e wsgi.py. No App Products é onde estão localizados o Model, as Views
utilizando CBV (Class Based Views) e os Serializers construídos para API.

Modelo da entidade produto, possui os 3 campos (nome, descrição e valor) onde são criados sendo o nome um campo
do tipo CharFied, o campo descrição do tipo TextField e o valor sendo um campo tipo DecimalField.

## API

## API Endpoint: Listar produtos
```
GET /api/produtos
Retorna uma lista de todos os produtos.
```
#### Resposta
```
HTTP 200 OK
Content-Type: application/json

[
  {
    "id": 1,
    "name": "Amigurumi - Tricerátops",
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
```
POST /api/produtos/
Cria um produto
```
#### Resposta
```
HTTP 201 OK
Content-Type: application/json
```
-------------------------------------
## API Endpoint: Atualizar produtos
```
PATCH /api/produtos/${productID}
Atualiza o produto solicitado
```
#### Resposta
```
HTTP 200 OK
Content-Type: application/json
```
-------------------------------------
## API Endpoint: Deletar produto
```
DELETE /api/produtos/${productID}
Atualiza o produto solicitado
```
#### Resposta
```
HTTP 204 OK
Content-Type: application/json
```
-------------------------------------
## API Endpoint: Deletar todos os produtos
```
DETELE /api/produtos/
Apagar todos os produtos
```
#### Resposta
```
HTTP 204 OK
Content-Type: application/json
```

<div id="frontend">

## 2. Front-End (ReactJS com JavaScript)

Assim como o Back-end, projeto Front-end está localizado na pasta front-end na raiz. Desenvolvido em 
**ReactJS** com **JavaScript**, Possui estrutura simples, com componentes que interagem entre si como
formulário de criação e atualização do produto, componente de listagem e botões de remoção e atualização.

O estado dos componentes é gerenciado com o useState, que permite criar e atualizar o estado de um
componente funcional.

A integração com Back-End é dada através de chamadas a API sendo gerenciadas com React Query de forma
assíncrona, melhorando e simplificando a aplicação React.

</div>
<div id="banco-de-dados">

## 3. Banco de Dados (PostgreSQL)

O banco de dados com **PostgreSQL** é simples com apenas uma tabela, a tabela de Produtos.

Após a definição dos modelos em Django, as migrações precisam ser criadas para aplicar as alterações
ao banco de dados, utilizando o comando "python manage.py makemigrations".

Após a criação da migrações é preciso aplicá-las, utilizando comando "python manage.py migrate".
Este comando executa todas as migrações pendentes e atualiza o esquema do banco de dados de acordo
com as definições do modelo.

</div>
<div id="docker">

## 4. Docker e Docker Compose

O arquivo "docker-compose.yml" define três serviços: 'db-server', 'back-end-server' e 'front-end-server'
cada um com suas próprias configurações e dependências.

- Utilizando como imagem 'postgres:latest' que é uma imagem do Docker Hub para o PostgreSQL.
- Dados do environment como o nome do banco de dados, usuário e senha também previamente configurados no
arquivo settings.py no Back-end.
- Em volumes é mapeada um diretório de dados do PostgreSQL, permitindo que os dados persistam entre
reinicializações do contêiner.
- Network define duas redes: back-end-server-network e front-end-server-network, que são usadas para
separar a comunicação entre os serviços, facilitando a comunicação entre contêineres.

No caso do back-end-server, foi definido o seguinte comando utilizado para esperar o banco de dados subir e
depois realizar as migrações e rodar o servidor.
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
