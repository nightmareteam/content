
//TODO: make 10,000,000 unique game ids
/**
 * each photo will have 
 */
const faker = require('faker');
const fs = require('fs')

let game = [];
let photoSet = 0;
let indexer = 0;
const entireGameDump = fs.createWriteStream('../game-reviews.csv', { flags: "a" });
function photoDistubutor() {
    if (photoSet < 10) {                                       //for s3 bucket indexer
        while (indexer < 1000) {
            let imageUrls = [];                                  // am sharing 1000 urls among 10Mil entries
            for (let i = 0; i < 10; i += 1) {
                imageUrls.push(`https://steam-content-display.s3-us-west-2.amazonaws.com/steam_content${indexer}.jpg`);
                indexer += 1; // adds 1 to the 1000 max photo urls I am using
            }
            return imageUrls;
        }
        photoSet += 1;
    }
}
// let game = [];
// let indexer = 0;  //for s3 bucket indexer
// let photoSet = 0;
// function photoDistubutor() {
//     while (photoSet < 10000) {
//         while (indexer < 1000) {
//             let imageUrls = [];                       // am sharing 1000 urls among 10Mil entries
//             for (let i = 0; i < 10; i += 1) {                          // creates 10 images
//                 imageUrls.push(`https://steam-content-display.s3-us-west-2.amazonaws.com/steam_content${indexer}.jpg`);
//                 indexer += 1; // adds 1 to the 1000 max photo urls I am using
//             }
//             return imageUrls;
//         }
//         photoSet += 1;
//     }
// }

//give every entry 3 videos and a thumbnail image of video
function getVideos() {
    videoArray = [];

    for (let mediaIndexer = 0; mediaIndexer < 3; mediaIndexer += 1) {
        const screenShot = {
            image: `https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_screenshot${mediaIndexer}.png`,
            videoLink: `https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_content_video${mediaIndexer}.mp4`
        }
        videoArray.push(screenShot)
    }
    return videoArray;
}


for (let i = 0; i < 10000; i += 1) {

    entireGameDump.write(
/*name */          faker.commerce.productName() + ',',
/*description */   faker.lorem.paragraph() + ',',
/*head_url */      photoDistubutor() + ',',
/*release_date */  faker.date.past() + ',',
/*developer */     faker.company.companyName() + ',',
/*publisher */     faker.company.companyName() + ',',
/*negative */      faker.random.number(1000) + ',',
/*positive */      faker.random.number(1000) + ',',
/*recent */        faker.random.number(100) + ',',
/*recent */        faker.random.number(100) + ',',
/*media_video */   getVideos() + '\n'
    );
}
entireGameDump.end();
entireGameDump.on('finish', () => {
    console.log('Files have been loaded')
}).catch((err) => {
        reject(err)
    })
console.log(game);