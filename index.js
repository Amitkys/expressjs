const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello  form backend'
    })
});


app.listen(3000, () => {
    console.log('app is listening on 3000');
})