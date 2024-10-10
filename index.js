const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello  form backend'
    })
});

app.get('/kys/:id', (req, res) => {
    const {id} = req.params;
    // console.log(id);
    res.json({message: `you have inserted ${id}`});
})

app.listen(3000, () => {
    console.log('app is listening on 3000');
})