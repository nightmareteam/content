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
    let videoArray = [];
    for (let mediaIndexer = 0; mediaIndexer < 3; mediaIndexer += 1) {
        const screenShot = 
            `$$thumbnail:'https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_screenshot${mediaIndexer}.png', ` + 
           `videoUrl: 'https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_content_video${mediaIndexer}.mp4'$$`;
        

        videoArray.push(screenShot)
    }
    
    return JSON.stringify(videoArray);
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
    const writeEntireGameDump = fs.createWriteStream('./sdc/cassdb/game-reviews.csv', { flags: 'a' });
    let gameId = 1;
    while (gameId <= 10) {
        let singleGameData =
                gameId + ',' +                        
                `'${faker.commerce.productName()}'` + ',' +  
                `'${faker.lorem.paragraph()}'` + ',' +       
                `[${photoDistubutor()}]` + ',' +      
                `'${faker.date.past()}'` + ',' +             
                `'${insertDeveloper()}'` + ',' +     
                `'${insertPublisher()}'` + ',' +    
                faker.random.number(1000) + ',' + 
                faker.random.number(1000) + ',' + 
                faker.random.number(100) + ',' +  
                faker.random.number(100) + ',' +  
                `${insertVideos}` + '\n'; 
                  
        let promise = write(writeEntireGameDump, singleGameData);
        gameId++;
        if (promise) {
            await promise;
        }
    }
}
gameGenerator();
