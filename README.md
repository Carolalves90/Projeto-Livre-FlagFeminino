<div align="center">
<img src="https://user-images.githubusercontent.com/82970341/178192797-8f9be18c-8328-4bc7-800e-536daa78af10.jpg" width="600px"/>
</div>

# Delas Flag Football Brasil

Essa é uma API que busca dar mais visibilidade a *Seleção Feminina de Flag Football* resgatando a história do Flag Football Feminino no Brasil. 

Nela irá conter uma timeline com campeonatos e colocação da seleção feminina de flag football, com possibilidade de cadastro de times.

## Rotas/EndPoints:

``GET/`` 
- *colaboradoras* - Retorna lista de colaboradoras
- *flagfeminino/selecao* - Retorna a história da seleção feminina de flag
- *flagfeminino/selecao/timeline* - Retorna os resultados de campeonatos da seleção feminina
- *flagfeminino/selecao/proximosjogos* - Retorna as próximas competições da seleção feminina de flag

``POST/``
- *colaboradoras* - Recebe cadastro de colaboradora
- *colaboradoras/login* - Recebe o login de colaboradora
- *flagfeminino/selecao* - Recebe a história da seleção feminina de flag (proteger rota)
- *flagfeminino/selecao/timeline* - Recebe os resultados de campeonatos da seleção feminina (proteger rota)
- *flagfeminino/selecao/proximosjogos* - Recebe as próximas competições da seleção feminina de flag (proteger rota)

``PUT/``
- *flagfeminino/selecao* - Atualiza  a história da seleção feminina de flag (proteger rota)
- *flagfeminino/selecao/timeline* - Atualiza os resultados de campeonatos da seleção feminina (proteger rota)
- *flagfeminino/selecao/proximosjogos* - Atualiza  as próximas competições da seleção feminina de flag (proteger rota)


``DELETE/``
- *colaboradoras/login/:id* - Deleta colaboradora por id
- *flagfeminino/selecao/timeline/:id* - Deleta os resultados de campeonatos da seleção feminina (proteger rota)
- *flagfeminino/selecao/proximosjogos/:id* -  Deleta  as próximas competições da seleção feminina de flag (proteger rota)
