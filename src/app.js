import express from 'express';


const app = express();

app.use(express.json())

const livros = [
    {id: '1', nome: 'Livro 1'},
    {id: '2', nome: 'Livro 2'}
];


app.get('/', function(req, res) {
    res.status(200).send('curso de node');
})

app.get('/livros', (req, res) =>{
    res.status(200).json(livros)
})

app.get("/livros/:id", (req, res) => {
  let index = buscarLivros(req.params.id);
  
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(200).send('livro cadastrado');
})

app.put("/livros/:id", (req, res) => {
    let index = buscarLivros(req.params.id);
    livros[index].nome = req.body.nome;

    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    let index = buscarLivros(req.params.id);
    //livros[index].nome = req.body.nome;
    livros.splice(index, 1);
    res.status(200).send(`Livro ${req.params.id} removido com sucesso.`);
});

function buscarLivros(id){
    return livros.findIndex( livros => livros.id == id)
}




export default app