require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db');
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/content/:id', (req, res) => {
const reqId = req.params.id;
      db.retrieveGameContent(reqId)
        .then((result)=>res.send(result.rows[0]))
        .catch(e=>console.log(e))

      })


      
app.listen(port, () => { console.log('Listening to ' + port + '!');
});
