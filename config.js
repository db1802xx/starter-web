require('dotenv').config();
const conf = {...process.env};

conf.ENVIRONMENT = conf.ENVIRONMENT || 'development';
conf.PORT = conf.PORT || 9000;

if (!conf.JWT_SECRET) {
  console.error('ERROR!!! Missing JWT_SECRET. Please set it in .env.');
  process.exit(1);
}

module.exports = conf;
