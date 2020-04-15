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
app.get('/api/bundle.js',(req, res)=>{
      res.sendFile(path.resolve(__dirname, '..', 'public', 'bundle.js'));
})
app.get('/loaderio-1dac395a0c5229294c14de07d32c8c2f/',(req, res)=>{
      res.sendFile(path.resolve(__dirname, '..', 'loaderio-1dac395a0c5229294c14de07d32c8c2f.txt'))
})

app.listen(port, () => { console.log('Listening to ' + port + '!');
});
