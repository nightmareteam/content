const express = require('express');
const app = express();
const db = require('../db');
const help = require('../help');
const port = 3002;
app.use(express.static('public'));

app.get('/games/:uid', (req, res) => {
  var uid = req.params.uid;
  db.findGamebyId(uid, (err, game) => {
    if(err) {
      console.log(err);
      res.status(404);
    } else {
      res.status(200);
      res.send(game);
    }
  });
});

app.get('/screenshots', (req, res) => {
  res.status(200);
  res.send(help.screenshotsUrls());
});

app.get('/videos', (req, res) => {
  //YouTube API works but if I want to request the video url from my localhost, I get a cross origin reading block
  //So I changed to put my videos on AWS S3
  // help.searchYouTube({
  //   key: env.YOUTUBE_API_KEY,
  //   query: 'Total War'
  // },(err, data) => {
  //   if(err) {
  //     console.log(err)
  //     res.status(404);
  //     res.send(err);
  //   } else {
  //     res.status(200);
  //     res.send(data);
  //   }
  // })
  res.status(200);
  res.send(help.getVideosFromAws());
});

app.listen(port, (req, res) => {
  console.log('Listening to ' + port + '!');
});

