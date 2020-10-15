import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';

const app = express();

//leitura de json
app.use(express.json());
app.use(routes);

//imagens
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

//erros
app.use(errorHandler);

//rota: conjunto
//recurso: usuário

//métodos HTTP: 
//GET: buscar uma informação
//POST: criar nova informação
//PUT: editar informação
//DELETE: deletar informaçao

//parâmetros:
//query: http://localhost:3333/users?search=diego
//params (route): http://localhost:3333/users/1 (identifica um recurso)
//body: http://localhost:3333/users (todos os parâmetros que não devem aparecer no link)
//console.log(request.query);
//console.log(request.params);
//console.log(request.body);

//banco de dados:
//driver nativo: permite executar direto pelo node, mas sem abstração, com os mesmos comandos sqlite3.query('SELECT * FROM users')
//query builder: mais famoso é o KNEX.JS, onde as querys são escritas com javascript knex('users').select('*').where('name', 'Diego')
//ORM: uma classe js será equivalente a uma tabela do banco de dados, em que cada linha de retorno do banco será uma instância da classe

//localhost:3333
app.listen(3333);