const faker = require('faker');
const fs = require('fs')


let indexer = 0;
function photoDistubutor() {
    let imageUrls = [];
    for (let i = 0; i < 10; i += 1) {
        imageUrls.push(`"https://steam-content-display.s3-us-west-2.amazonaws.com/steam_content${indexer}.jpg"`);
        indexer += 1; // when index hit 1000 indexer will reset
        if (indexer === 1000) {
            indexer = 0;
        }
    } return imageUrls;
}



//give every entry 3 videos and a thumbnail image of video
function getVideos() {
    let videoArray = [];
    for (let mediaIndexer = 0; mediaIndexer < 3; mediaIndexer += 1) {
        //screenShot[0] === thumbnail
        //screenShot[1] === videoUrl
        const screenShot = {
            thumbnail: `'https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_screenshot${mediaIndexer}.png'`,
            videoUrl: `'https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_content_video${mediaIndexer}.mp4'`
        }

        videoArray.push(screenShot)
    }
    return JSON.stringify(videoArray);
}
let stringifyVideoArray = getVideos();



const write = (writer, data) => {
    if (!writer.write(data)) {
        return new Promise((resolve) => {
            writer.once('drain', resolve)
        })
    }
}
const gameGenerator = async (limit) => {
    const writeEntireGameDump = fs.createWriteStream('./sdc/psql/game-reviews.csv', { flags: 'a' });
    let gameId = 1;
    while (gameId <= limit) {
        let singleGameData =
                gameId + '|' +                        
                faker.commerce.productName() + '|' +  
                faker.lorem.paragraph() + '|' +       
                `[${photoDistubutor()}]` + '|' +      
                faker.date.month() + '|' +
                `${2000 + Math.floor(Math.random()*20)}`+ '|' +             
                faker.company.companyName() + '|' +     
                faker.company.companyName() + '|' +    
                faker.random.number(1000) + '|' + 
                faker.random.number(1000) + '|' + 
                faker.random.number(100) + '|' +  
                faker.random.number(100) + '|' +  
                `${stringifyVideoArray}` + '\n'; 
                  
        let promise = write(writeEntireGameDump, singleGameData);
        gameId++;
        // since drain happens rarely, awaiting each write call is really slow.
        if (promise) {
            // we got a drain event, therefore we wait
            await promise;
        }
        
    }
}
gameGenerator(10000000);

