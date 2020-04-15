require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('../db');
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/:id([0-9]*)', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/content/:id', (req, res) => {
const reqId = req.params.id;
      db.retrieveGameContent(reqId)
        .then((result)=>res.send(result.rows[0]))
        .catch(e=>console.log(e))
      })
app.get('/public/bundle.js',(req, res)=>{
      res.sendFile(path.resolve(__dirname, '..', 'public', 'bundle.js'));
})
app.get(/loaderio/,(req, res)=>{
      res.sendFile(path.resolve(__dirname, '..', 'loaderio-aa5372974197dc3881c9aabb77e6cf43.txt'))
})

app.listen(port, () => { console.log('Listening to ' + port + '!');
});
