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

app.post("/hotel",async (req,res) => {
    const data = req.body;
    try {
        const hotel = await db.hotel.create(data);
        res.send(hotel);  
    } catch (err) {
        res.send(err);
    }
});

app.get('/hotel', async (req,res)  => {
    try{
        const hotel = await db.hotel.findAll();
        res.send(hotel);
    } catch (err) {
        res.send(err);
    }
});

app.put('/hotel/:id', async (req,res)=>{
    const id = req.params.id;
    const data = req.body;

    try{
        const hotel = await db.hotel.findByPk(id);
        if (!hotel) {
            return res.status(404).send({message : 'hotel tidak ditemukan'});
        }

        await hotel.update(data);
        res.send({message : 'hotel berhasil diupdate', film});
    } catch (err){
        res.status(500).send(err);
    }
});

app.delete('/hotel/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const hotel = await db.hotel.findByPk(id);
        if (!hotel) {
            return res.status(404).send({ message: 'hotel not found' });
        }
        await hotel.destroy();
        res.send({ message: 'hotel deleted' });
    } catch (error) {
        res.status(500).send(err);
    }
});



