<h1 align="center">
<img src="https://user-images.githubusercontent.com/82970341/180922779-20ad4c2c-8652-4a5b-9814-9d22ed4cc29a.png" width="650px"/>
<p align="center"><b>Delas Flag Football </b>:brazil:<p> 
</h1>

# <b> Projeto Final | Delas Flag Footbal :brazil: - {Reprograma} </b> :purple_heart:

Projeto de conclusão do curso de Desenvolvimento Back-end - Todas em Tech | On16 da [{reprograma}](https://www.reprograma.com.br/).

Este projeto é uma API REST que permite listar as conquistas da *Seleção Brasileira de Flag Football* e cadastrar times femininos da modalidade de Flag Football. Serão 2 API's, onde é possível visualizar as informações cadastradas, porém para manipular será necessário efetuar login.

Aplicação disponível em [Projeto Delas](https://projeto-livre-flagfeminino-carolalves90.onrender.com), para acessar a documentação do projeto [acesse aqui](https://projeto-livre-flagfeminino-carolalves90.onrender.com/documentacao/) :football:

Visualize a apresentação [Delas Flag Football](https://www.canva.com/design/DAFHPJ7D7eA/lzFis29w0JEjAmC3zs1pFw/view#3) :desktop_computer:

### Objetivo

Esta API foi desenvolvida com a proposta de dar mais visibilidade à modalidade de *Flag Football* e em consequencia ao esporte feminino, mostrando a evolução da *Seleção Brasileira de Flag Football* dentro do esporte e nas competições de nível Mundial.

### História da Equipe

O Flag Football é uma modalidade que vem crescendo no país e tem sua história ainda desconhecida e pouco documentada, a seleção brasileira possui inúmeras passagens pelos jogos mundiais de flag, sendo atualmente a quarta melhor do mundo. A conquista da quarta colocação no mundial de flag garantiu vaga para disputar o The World Games que aconteceu em 2022 em Alabama, tal acontecimento é histórico para a modalidade, sendo a primeira participação do esporte dentro da competição, que reúne diversos esportes e é uma porta de entrada para as Olimpíadas.

#### Histórico em competições

- 2012 - Mundial de Flag Football na Suécia, estreia no campeonato | 12º lugar
- 2014 - Mundial de Flag Football na Itália | 10º lugar
- 2016 - Mundial de Flag Football em Miami | 6º lugar
- 2018 - Mundial de Flag Football no Panamá | 6º lugar
- 2021 - Mundial de Flag Football em Israel | 4º lugar
- 2022 - The World Games Birmingham | 7º lugar
- 2022 - Campeonato Sul-Americano de Flag Football | 1º lugar

### O Que é o Flag Football 5x5? :football:

O Flag Football 5x5 é uma modalidade esportiva jogada entre duas equipes, sendo um time de ataque e um time de defesa em campo. A missão do time de ataque é atravessar todo o campo adversário, chegando na área denominada Endzone para, então, pontuar (marcar um Touchdown), sendo quatro tentativas para alcançar o meio do campo (Firstdown) e depois mais quatro tentativas marcar a pontuação, quando se atinge a Endzone. O objetivo da defesa é impedir que o time adversário avance, de forma que ao final das tentativas ou através de uma interceptação (ao obter a posse da bola), coloque seu time de ataque em campo. Esta modalidade é conhecida por ser um esporte em que o contato físico deve ser evitado, sendo intencional ou não, pois é passível a falta.

<div align="center">
<img src="https://user-images.githubusercontent.com/82970341/179326705-41d9de75-221a-4a95-adb7-b88e9095897b.gif" width="600px">
<p align="center"> Vídeo: <a href="https://flagfootballbrasil.com.br/">Flag Football Brasil</a> :video_camera: <p>
</div>


API da *Seleção Feminina de Flag Football* onde iremos listar as competições que a participou, trazendo informações como:
 
- [x] Campeonato
- [x] Ano de realização
- [x] Nome dos País na Chave da equipe
- [x] Colocação da Final no Campeonato
- [x] Treinadores
- [x] Atletas Relacionadas
- [x] Jogos Realizados 

API de *Times Femininos de Flag Football*, onde é será possivel cadastrar e buscar informações.

- [x] Nome da equipe
- [x] Cidade
- [x] Estado
- [x] Rede Social
- [x] Contato
- [x] Modalidades

#### Arquitetura MRC
```
 📁 Projeto-Livre-FlagFeminino
   |
   |- 📁 src
   |   |
   |   |- 📁 controllers
   |       |- 📑 colaboradorasController.js
   |       |- 📑 jogosCampeonatoController.js
   |       |- 📑 selecaofemininaController.js
   |       |- 📑 timesfemininosController.js
   |
   |   |- 📁 database
   |       |- 📑 mongooseConect.js
   |
   |   |- 📁 models
   |       |- 📑 colaboradorasModel.js
   |       |- 📑 jogosCampeonatoModel.js
   |       |- 📑 selecaofemininaModel.js
   |       |- 📑 timesfemininosModel.js
   |
   |    |- 📁 routes
   |       |- 📑 colaboradorasRoutes.js 
   |       |- 📑 index.js
   |       |- 📑 jogosCampeonato.js   
   |       |- 📑 selecaofemininaRoutes.js
   |       |- 📑 timesfemininosRoutes.js
   |
   |    |- 📑 app.js
   |
   |- 📁 swagger
   |   |- 📑 swagger_output.json
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js
   ```
#### Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/Carolalves90/Projeto-Livre-FlagFeminino

# Entrar na pasta do repositório
$ cd Projeto-Livre-FlagFeminino

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start
```
#### Tecnologias e pacotes

[JavaScript](https://www.javascript.com) | [Node.js](https://nodejs.org/en/) | [Git](https://git-scm.com) | [VSCode](https://code.visualstudio.com) | [Mongodb](https://www.mongodb.com) | [Heroku](https://www.heroku.com/) | [Postman](https://documenter.getpostman.com/view/16821311/UVRAHSEo)
 
 Dependências:
- [nodemon](https://www.npmjs.com/package/nodemon)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

#### Rotas/EndPoints:

- Colaboradoras

| Verbo  |   EndPoint     |        Descrição da Rota                   | Status | Auth |
| ------ | -------------- | -------------------------------------------| ------ |----- |
| POST   | /colaboradoras | Adicionar uma nova colaboradora            |   201  |  ✔️  |
| GET    | /colaboradoras | Listar todas colaboradoras                 |   200  |  ❌  |
| POST   | /colaboradoras/login | Devolve o token de uma colaboradora  |   200  |  ✔️  |
| DELETE | /colaboradoras/:id | Remove uma colaboradora                |   200  |  ✔️  |

- Times Femininos de Flag Football no Brasil

| Verbo  |   EndPoint      | Descrição da Rota                      | Status | Auth |
| ------ | --------------- | ---------------------------------------| ------ |----- |
| POST   | /timesfemininos | Adicionar um novo time de flag         |   201  |  ✔️  |
| GET    | /timesfemininos | Listar todos times cadastrados         |   200  |  ❌  |
| PUT    | /timesfemininos/:id | Atualiza o cadastro de um time     |   200  |  ✔️  |
| DELETE | /timesfemininos/:id | Remove o cadastro de um time       |   200  |  ✔️  |

- Seleção Brasileira Feminina de Flag Football

| Verbo  |   EndPoint   |         Descrição da Rota               | Status | Auth |
| ------ | ------------ | ----------------------------------------| ------ |----- |
| POST   |   /selecao   | Adiciona informação sobre campeonato    |   201  |  ✔️  |
| GET    |   /selecao   | Listar todos os campeonatos cadastrados |   200  |  ❌  |
| GET    | /selecao/:id | Mostra o cadastro do campeonato por ID  |   200  |  ❌  |
| PUT    | /selecao/:id | Atualiza informações sobre o campeonato |   200  |  ✔️  |
| PATCH  | /selecao/:id | Cadastra um jogo dentro de um campeonato|   201  |  ✔️  |
| DELETE | /selecao/:id | Remove o cadastro do campeonato         |   200  |  ✔️  |

- Jogos da Seleção Brasileira Feminina de Flag Football

| Verbo  |  EndPoint  |         Descrição da Rota               | Status | Auth |
| ------ | ---------- | ----------------------------------------| ------ |----- |
| POST   |   /jogos   | Adiciona informação sobre campeonato    |   201  |  ✔️  |
| GET    |   /jogos   | Listar todos os campeonatos cadastrados |   200  |  ❌  |
| PUT    | /jogos/:id | Atualiza informações sobre o jogo       |   200  |  ✔️  |
| DELETE | /jogos/:id | Remove o jogo cadastrado                |   200  |  ✔️  |

#### Sugestões para API da Seleção Feminina

- Buscar por campeonato, ano, país contra;
- Buscar times por estado, cidade;
- Stats do jogo (play by play);
- Nome completo das Atletas, Coach e Auxiliares;
- Posição das Atletas e cargos da comissão técnica;
- Número da camiseta das Atletas;
- Fazer a parte de Front-end;
- Times cadastrados mostrar suas conquistas.

#### Agradecimento :purple_heart:

Projeto criado por [Carol Alves](https://github.com/Carolalves90) com a orientação da Professora maravilhosa [Mayhhara F Lilian](https://github.com/mflilian)!<br>
Agradecimento especial à *Alessandra Rodrigues* :yellow_heart:, família, todas minhas colegas de turma e às pessoas que fizeram parte dessa construção e conhecimento! :football:

<div align="center">
<img src="https://user-images.githubusercontent.com/82970341/180586135-bdd26188-06cd-4082-9059-135961136a67.gif" width="650px"/>
<p align="center"><b>Arte:</b> <a href="https://instagram.com/jl_fioretti?igshid=YmMyMTA2M2Y=">Júlia L. Fioretti</a> :art:<p> 
</div>
