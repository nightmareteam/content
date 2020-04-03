
//TODO: make 10,000,000 unique game ids
/**
 * each photo will have 
 */
const faker = require('faker');
let game = [];
let indexer = 0;  //for s3 bucket indexer
let photoSet = 0;
function photoDistubutor() {
     if(photoSet < 2) { 
        while (indexer < 1000) {
            let imageUrls = [];                                  // am sharing 1000 urls among 10Mil entries
            for (let i = 0; i < 10; i += 1) { 
                imageUrls.push(`https://steam-content-display.s3-us-west-2.amazonaws.com/steam_content${indexer}.jpg`);
                indexer += 1; // adds 1 to the 1000 max photo urls I am using
            }
            return imageUrls;
                        console.log('photoset' , photoSet)
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

function getVideos() {
    videoArray = [];
    for (let mediaIndexer = 0; mediaIndexer < 3; mediaIndexer += 1) {
        const screenShot ={ image: `https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_screenshot${mediaIndexer}.png` ,
videoLink:`https://steam-content-videos.s3-us-west-2.amazonaws.com/steam_content_video${mediaIndexer}.mp4`}
        videoArray.push( screenShot )
    }
    return videoArray;
}


for (let i = 0; i < 1000; i += 1) {
    game.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        head_url: photoDistubutor(),                                   // array of image urls
        release_date: faker.date.past(),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        negative_review_count: faker.random.number(1000),
        positive_review_count: faker.random.number(1000),
        recent_negative_count: faker.random.number(100),
        recent_positive_count: faker.random.number(100),
        media_video: getVideos(),  //videos and screen shot

    })

}

console.log(game);