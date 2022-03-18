# tasks-calendar-nodejs

# Como usar a aplicação??
<ul>
  1<li><strong>npm install - </strong>vai instalar as dependências no projeto**IMPORTANTE!**</li>
  2<li><strong>npm run prestart - </strong> vai rodar o script para popular seu Banco de DADOS(MYSQL)</li>
  3<li><strong>npm run start:dev - </strong> vai iniciar sua API(Obs: é recomendado rodar primeramente o comando npm prestart)</li>
</ul>

# Rotas de Login e Cadastro de Usuário

<h3><strong>POST</strong> /user/register - Registra um usuário banco de dados e retorna um Token.</h3>

<h4>Exemplo do Body:</h4>
<strong>O email só pode ser cadastrado uma única vez</strong>

```json
{
  "name": "Teste"
  "email": "teste@gmail.com",
  "password": "teste123",
}
```
<h4>Exemplo do que ser retornado</h4>

```json
{
  "token": fiwfuifwsfw9weh7892364397246322374t23768tg2gf782tf2378t4r236784t27893rg9823gr9723
}
```

<h3><strong>POST</strong> /user/login - Verificar se esse usuário foi cadastrado, se sim retorna um Token.</h3>

```json
{
  "email": "teste@gmail.com",
  "password": "teste123",
}
```
<h4>Exemplo do que ser retornado</h4>

```json
{
  "token": fiwfuifwsgrwgw#$526tfw9weh7892364397246322374t23768tg2gf782tf2378t4r236784t27893rg9823gr9723
}
```

# Rotas das Tasks

<h3><strong>GET</strong> tasks/user/:id - Lista todas as Tasks de acordo com ID do usuário que cadastrou as Tasks.</h3>
<strong>Ex: Entrada /tasks/user/1</strong>

<h4>Exemplo do que será retornado</h4>

```json
[
    {
        "id": 1,
        "title": "Passeio com gerente",
        "description": "Evento importante",
        "dateAndHour": "2022-10-03T13:00:00.000Z",
        "resolved": false,
        "duration": 60,
        "idUser": 1,
        "id_user": 1
    },
    {
        "id": 2,
        "title": "Reunião",
        "description": "Reunião com a empresa 'tal', lembra de levar caderno",
        "dateAndHour": "2022-03-21T15:36:23.000Z",
        "resolved": false,
        "duration": 65,
        "idUser": 1,
        "id_user": 1
    }
  
]
```

<h3><strong>GET</strong> tasks/:id - Lista uma única Task de acordo com ID.</h3>

<strong>Ex: Entrada /tasks/1 </strong>

<h4>Exemplo do que será retornado</h4>

```json
    {
        "id": 1,
        "title": "Passeio com gerente",
        "description": "Evento importante",
        "dateAndHour": "2022-10-03T13:00:00.000Z",
        "resolved": false,
        "duration": 60,
        "idUser": 1,
        "id_user": 1
    }
```

<h3><strong>POST</strong> /tasks - Cadastra uma única Task.</h3>

<h4>Exemplo de Entrada (Body)</h4>
 
```json
    {
    "title": "Outro teste",
    "description": "Lorem",
    "dateAndHour": "2022-03-20 10:00:00",
    "duration": 60,
    "idUser": 1 // a Key idUser deve ser relacionada a um Usuário já cadastrado
  }
```

<h3><strong>PUT</strong> /tasks/:id - Edita uma única Task de acordo com seu ID.</h3>

<h4>Exemplo de Entrada (Body)</h4>
 
```json
    {
    "title": "Outro teste 2",
    "description": "Mudando descrição",
    "dateAndHour": "2022-03-20 10:00:00",
    "duration": 80,
  }
```

<h4>Exemplo de Saída (Body)</h4>
 
```json
    {
    "id": 5,
    "title": "Outro teste 2",
    "description": "Mudando descrição",
    "dateAndHour": "2022-03-20 10:00:00",
    "duration": 80,
    "idUser": 1,
  }
```

<h3><strong>DELETE</strong> /tasks/:id - Deleta uma única Task de acordo com seu ID.</h3>

<h4>Exemplo de Entrada /tasks/:id</h4>
<strong>Somente esse rota, irá deletar sua Task</strong>




