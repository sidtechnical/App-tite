var gplay = require('google-play-scraper');

gplay.reviews({
  appId: process.argv[2],
  page: 0,
  // sort: gplay.sort.RATING
}).then(console.log);