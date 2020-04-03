const faker = require('faker');
const fs = require('fs')

let photoSet = 0;
let indexer = 0;
function photoDistubutor() {
    if (indexer < 1000 && photoSet < 100) { 
            let imageUrls = [];    
            for (let i = 0; i < 10; i += 1) {
                imageUrls.push(`https://steam-content-display.s3-us-west-2.amazonaws.com/steam_content${indexer}.jpg`);
                indexer += 1; // when index hit 1000 indexer will reset
            }

            return imageUrls;
        }else if(indexer === 1000){
            indexer = 0;
             photoSet += 1;
        }
    }


//give every entry 3 videos and a thumbnail image of video
function getVideos() {
    videoArray = [];

    for (let mediaIndexer = 0; mediaIndexer < 3; mediaIndexer += 1) {
        //screenShot[0] === thumbnail
        //screenShot[1] === videoUrl
        const screenShot = `https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_screenshot${mediaIndexer}.png`                      
        const videoUrl = `https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_content_video${mediaIndexer}.mp4` + ',' 
                            
        videoArray.push(screenShot+ ',' + videoUrl)
    }
    return videoArray;
}

const entireGameDump = fs.createWriteStream('./game-reviews.csv', { flags: 'a' });
for (let i = 0; i < 1000; i += 1) {
    entireGameDump.write(
/*name */          faker.commerce.productName() + ',' +
/*description */   faker.lorem.paragraph() + ',' +
/*head_url */      photoDistubutor() + ',' +
/*release_date */  faker.date.past() + ',' +
/*developer */     faker.company.companyName() + ',' +
/*publisher */     faker.company.companyName() + ',' +
/*negative */      faker.random.number(1000) + ',' +
/*positive */      faker.random.number(1000) + ',' +
/*recent */        faker.random.number(100) + ',' +
/*recent */        faker.random.number(100) + ',' +
/*media_video */   getVideos() + '\n'
    );
}
entireGameDump.end();
entireGameDump.on('finish', () => {
    console.log('Files have been loaded')})
    entireGameDump.on('error', () => {
        console.error('******Please fix me, I am broken.********')})