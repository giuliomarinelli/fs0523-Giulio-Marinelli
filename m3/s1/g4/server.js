"use strict";
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}

const prodotti = JSON.parse(fs.readFileSync('./public/Abbigliamento.json', 'utf-8'))


app.use(cors({
    origin: '*'
}));
app.get('/', (req, res) => {
    res.status(200).json([{welcome: 'Hello World Bro!'}])
});

app.get('/end-point', (req, res) => {
    res.status(200).json(prodotti)
});

app.get('/end-point/:id', (req, res) => {
    if (Number(req.params.id) < 1 || Number(req.params.id) > 5 || !Number(req.params.id)) {
        res.status(404).json([{error: `Errore 404. Il prodotto con id '${req.params.id}' non è presente.`}])
    } else {
        res.status(200).json(prodotti.filter(el => el.id === Number(req.params.id)))
    }
})

app.get('*', (req, res) => {
    res.status(404).json([{error: 'Errore 404. Risorsa non trovata.'}])
});
app.listen(3050);
//# sourceMappingURL=server.js.map