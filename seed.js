const faker = require('faker');

const db = require('./db');

var games = [];
var screenshots = [];
for(let i = 0; i < 100; i++) {
  games.push({
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    head_url: faker.image.imageUrl(),
    release_date: faker.date.past(),
    developer: faker.company.companyName(),
    publisher: faker.company.companyName(),
    negative_review_count: faker.random.number(10000),
    positive_review_count: faker.random.number(10000),
    recent_negative_count: faker.random.number(1000),
    recent_positive_count: faker.random.number(1000)
  });
  if(i < 10) {
    screenshots.push({
      url: faker.image.imageUrl()
    });
  }
}



//drop table if exists
// db.Game.sync({force: true, logging:false}).then(() => {
//   //console.log('Game table dropped and synced!')
// })

// db.Screenshot.sync({force: true, logging:false}).then(() => {
//   //console.log('Screenshot table dropped and synced!')
// })

db.Game.bulkCreate(games);
db.Screenshot.bulkCreate(screenshots);