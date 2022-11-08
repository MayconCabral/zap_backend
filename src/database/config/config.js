require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',  
  timezone: '-03:00',  
};

const testConfig = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'test_db_zap_backend',
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',  
  timezone: '-03:00',
  "logging": false, 
}

module.exports = {
  development: config,
  test: testConfig,
  production: config,
};
