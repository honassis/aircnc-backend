const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
mongoose.connect(
'mongodb://localhost:27017/oministack', 
{useNewUrlParser : true,
useUnifiedTopology :true});
// GET , POST , PUT , DELETE

// req.query = acessar query params ( para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação , edição )

app.use(express.json());
app.use(routes);

app.listen(3333);