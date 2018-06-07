var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanhotel';

var _connection = null;

var dbName = 'meanhotel';

var open = function () {
  MongoClient.connect(dburl, function (err, client) {
    if (err) {
      console.log("DB connection failed");
      return;
    }
    _connection = client.db(dbName);
    console.log("DB connection open");
  });
};

var get = function () {
  return _connection;
};

module.exports = {
  open: open,
  get: get
};