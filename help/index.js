var request = require('request');

var searchYouTube = ({key, query}, callback) => {

  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&type=video&videoEmbeddable=true&q='+ query + '&key=' + key;
  request.get(url, (err, res, body) => {
    if(err) {
      callback(err);
    } else {
      callback(null, body);
    }
  });
};

var screenshotsUrls = () => {
  var result =[];
  for(let i = 1; i < 11; i++) {
    result.push('https://s3-us-west-1.amazonaws.com/fecsteam/Images/'+ i +'.jpeg')
  }
  return result;
}

var getVideosFromAws = () => {
  return [
    {
      video : 'https://s3-us-west-1.amazonaws.com/fecsteam/Videos/Total+War-+THREE+KINGDOMS+-+Liu+Bei+Launch+Trailer+-+YouTube.mkv',
      thumbnail: 'https://s3-us-west-1.amazonaws.com/fecsteam/Videos/LiuBeiLunachTrailer.jpg'
    },
    {
      video : 'https://s3-us-west-1.amazonaws.com/fecsteam/Videos/Total+War-+THREE+KINGDOMS+-+Announcement+Cinematic+-+YouTube.mkv',
      thumbnail: 'https://s3-us-west-1.amazonaws.com/fecsteam/Videos/AnauncementTrailer.jpg'
    },
    {
      video : 'https://s3-us-west-1.amazonaws.com/fecsteam/Videos/Total+War-+THREE+KINGDOMS+-+Forge+Your+Legend+-+YouTube.mkv',
      thumbnail: 'https://s3-us-west-1.amazonaws.com/fecsteam/Videos/ForgeYourLegend.jpg'
    }
  ]
 
};

module.exports.searchYouTube = searchYouTube;
module.exports.screenshotsUrls = screenshotsUrls;
module.exports.getVideosFromAws = getVideosFromAws;