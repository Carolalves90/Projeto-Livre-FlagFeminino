<h1 align="center">
<img src="https://user-images.githubusercontent.com/82970341/178192797-8f9be18c-8328-4bc7-800e-536daa78af10.jpg" width="600px"/>
<p align="center"><b>Delas Flag Football Brasil </b><p>
</h1>

O Flag Football é uma modalidade que vem crescendo no país e tem sua história ainda desconhecida e pouco documentada, a seleção brasileira possui inúmeras passagens pelos jogos mundiais de flag, sendo atualmente a quarta melhor do mundo. A conquista da quarta colocação no mundial de flag garantiu vaga para disputar o The World Games que está acontecendo em Alabama, tal acontecimento é histórico para a modalidade, sendo a primeira participação do esporte dentro da competição, que reúne diversos esportes e é uma porta de entrada para as Olimpíadas.

# Mas... O Que é o Flag Football 5x5?

O Flag Football 5x5 é uma modalidade esportiva jogada entre duas equipes, sendo um time de ataque e um time de defesa em campo. A missão do time de ataque é atravessar todo o campo adversário, chegando na área denominada Endzone para, então, pontuar (marcar um Touchdown), sendo quatro tentativas para alcançar o meio do campo (Firstdown) e depois mais quatro tentativas marcar a pontuação, quando se atinge a Endzone. O objetivo da defesa é impedir que o time adversário avance, de forma que ao final das tentativas ou através de uma interceptação (ao obter a posse da bola), coloque seu time de ataque em campo. Esta modalidade é conhecida por ser um esporte em que o contato físico deve ser evitado, sendo intencional ou não, pois é passível a falta.

<div align="center">
<img src="https://user-images.githubusercontent.com/82970341/179326705-41d9de75-221a-4a95-adb7-b88e9095897b.gif" width="600px">
</div>


Neste projeto vamos listar as conquistas da *Seleção Brasileira de Flag Football* buscando dar mais visibilidade à modalidade e em consequencia ao esporte feminino, alem do mais irá mostrar a evolução da equipe dentro do esporte e nas competições.

Neste projeto teremos 2 API's:

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

## Rotas/EndPoints:

- Colaboradoras

| Verbo  |   EndPoint     |        Descrição da Rota                   | Status | Auth |
| ------ | -------------- | -------------------------------------------| ------ |----- |
| POST   | /colaboradoras | Adicionar uma nova colaboradora            |   201  |  ✔️  |
| GET    | /colaboradoras | Listar todas colaboradoras                 |   200  |  ❌  |
| POST   | /colaboradoras/login | Devolve o token de uma colaboradora  |   200  |  ✔️  |
| DELETE | /colaboradoras/:id | Remove uma colaboradora                |   200  |  ✔️  |

- Seleção Brasileira Feminina de Flag Football

| Verbo  |   EndPoint   |         Descrição da Rota               | Status | Auth |
| ------ | ------------ | ----------------------------------------| ------ |----- |
| POST   |   /selecao   | Adiciona informação sobre campeonato    |   201  |  ✔️  |
| GET    |   /selecao   | Listar todos os campeonatos cadastrados |   200  |  ❌  |
| PUT    | /selecao/:id | Atualiza informações sobre o campeonato |   200  |  ✔️  |
| DELETE | /selecao/:id | Remove o cadastro do campeonato         |   200  |  ✔️  |

- Times Femininos de Flag Football no Brasil

| Verbo  |   EndPoint      | Descrição da Rota                      | Status | Auth |
| ------ | --------------- | ---------------------------------------| ------ |----- |
| POST   | /timesfemininos | Adicionar um novo time de flag         |   201  |  ✔️  |
| GET    | /timesfemininos | Listar todos times cadastrados         |   200  |  ❌  |
| PUT    | /timesfemininos/:id | Atualiza o cadastro de um time     |   200  |  ✔️  |
| DELETE | /timesfemininos/:id | Remove o cadastro de um time       |   200  |  ✔️  |
