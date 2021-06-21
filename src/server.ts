import express from "express";

//o ts-node-dev (parecido com o nodemon) é uma biblioteca que consegue fazer com que o node entenda o arquivo sem precisar duplicar e criar um arquivo .js no projeto
// @types/express =>  o expresses tem tipagens que a gente precisa instalar com: yarn add @types/express
const app = express();
/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */
app.get('/test', (request, response) => {
  return response.send('Olá NLW!')
})
app.listen(3000, () => console.log('Server running'));