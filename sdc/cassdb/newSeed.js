const faker = require('faker');
const fs = require('fs')


let indexer = 0;
function photoDistubutor() {
    let imageUrls = [];
    for (let i = 0; i < 10; i += 1) {
        imageUrls.push(`'https://steam-content-display.s3-us-west-2.amazonaws.com/steam_content${indexer}.jpg'`);
        indexer += 1; // when index hit 1000 indexer will reset
        if (indexer === 1000) {
            indexer = 0;
        }
    } return imageUrls;
}
//Gives every entry 3 videos and a thumbnail image of video
function getVideos() {
    let videoSet = [];
    for (let mediaIndexer = 0; mediaIndexer < 3; mediaIndexer += 1) {
        const thumbnail = ` 'thumbnail: https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_screenshot${mediaIndexer}.png'`;
        const videoUrl = ` 'videoUrl: https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_content_video${mediaIndexer}.mp4'`;
        

        videoSet.push(thumbnail);
        videoSet.push(videoUrl);
    }

    return JSON.stringify(videoSet);
}
let stringifyVideoArray = getVideos();
let insertVideos = stringifyVideoArray.replace(/"/g,'')


        // Creates 1000 developers and publishers
        let devCounter = 0;
        let pubCounter = 0;
        let developers = []; 
        let publishers = []; 
        function makeDevelopersAndPublishers(){
            for (let count = 0; count < 1000; count += 1) {
                developers.push(faker.company.companyName());
                publishers.push(faker.company.companyName());
            }
        }
        makeDevelopersAndPublishers();
                // insert functions will return one of one thousand 
        function insertDeveloper() {
            devCounter += 1;
            if (devCounter === 1000) {
                devCounter = 0;
            }
            return developers[devCounter];
        }
        function insertPublisher() {
            pubCounter += 1;
            if (pubCounter === 1000) {
                pubCounter = 0;
            }
            return publishers[pubCounter];
        }

const write = (writer, data) => {
    if (!writer.write(data)) {
        return new Promise((resolve) => {
            writer.once('drain', resolve)
        })
    }
}
const gameGenerator = async () => {
    const writeEntireGameDump = fs.createWriteStream('./game-reviews.csv', { flags: 'a' });
                    let gameId = 1;
                    while (gameId <= 7000000) {
                        let singleGameData =
/* gameid                */   gameId + '|' +                        
/* description           */   `$$${faker.lorem.paragraph()}$$` + '|' +       
/* developer             */   `'$$${insertDeveloper()}$$'` + '|' +     
/* head_url              */   `[${photoDistubutor()}]` + '|' +      
/* media_video           */   `'${insertVideos}'` + ' |' + 
/* name                  */   `'${faker.commerce.productName()}'` + '|' +  
/* negative_review_count */   faker.random.number(1000) + '|' + 
/* positive_review_count */   faker.random.number(1000) + '|' + 
/* publisher             */   `'${insertPublisher()}'` + '|' +    
/* recent_negative_count */   faker.random.number(100) + '|' +  
/* recent_positive_count */   faker.random.number(100) + '|' +  
/* release_month         */   `'${faker.date.month()}'` + '|' +          
/* release_year          */   `${2000 + Math.floor(Math.random()*2020)}` + '\n'; 
                  
        let promise = write(writeEntireGameDump, singleGameData);
        gameId++;
        if (promise) {
            await promise;
        }
    }
}
gameGenerator();
