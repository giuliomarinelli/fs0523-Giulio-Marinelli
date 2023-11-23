const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const options = {
  root: path.join(__dirname, 'public'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
}

app.use(cors({
  origin: '*'
}));
app.get('/', (req: any, res: any) => {
  res.status(200).send('<h1>Hello World</h1>')
})
app.get('/end-point', (req: any, res: any) => {
  res.status(200).sendFile('abbigliamento.json', options)
})

app.get('*', (req: any, res: any) => {
  res.status(404).send('<h1>Errore 404! Non trovato.</h1>')
})

app.listen(3000)
