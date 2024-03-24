const mockData = require('./barcelona.json');

module.exports = {
  '/v4/weather/forecast': mockData,
  '/v1/geo/cities': require('./cities/corinth.json'),
   //https://wft-geo-db.p.rapidapi.com/v1/geo/cities
};
