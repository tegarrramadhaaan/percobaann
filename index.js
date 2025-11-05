const express = require('express');
const app = express();
const db =require('./models');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.listen(PORT, ()=>{
    console.log('Server started on port 3000');

})

db.sequelize.sync()
.then((result)=>{
    app.listen(3000,()=>{
        console.log('Serverr started');
    })
}) 

.catch((err)=>{
    console.log(err);

})

app.post("/film",async (req,res) => {
    const data = req.body;
    try {
        const film = await db.film.create(data);
        res.send(film);  
    } catch (err) {
        res.send(err);
    }
});

app.get('/film', async (req,res)  => {
    try{
        const film = await db.film.findAll();
        res.send(film);
    } catch (err) {
        res.send(err);
    }
});

app.put('/film/:id', async (req,res)=>{
    const id = req.params.id;
    const data = req.body;

    try{
        const film = await db.film.findByPk(id);
        if (!film) {
            return res.status(404).send({message : 'film tidak ditemukan'});
        }

        await film.update(data);
        res.send({message : 'film berhasil diupdate', film});
    } catch (err){
        res.status(500).send(err);
    }
});

app.delete('/film/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const film = await db.film.findByPk(id);
        if (!film) {
            return res.status(404).send({ message: 'film not found' });
        }
        await film.destroy();
        res.send({ message: 'film deleted' });
    } catch (error) {
        res.status(500).send(err);
    }
});



