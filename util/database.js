const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://Harshit:1234@cluster0.3acptt5.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log("Database Connected Successfully");
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
}

const getDB = () => {
  if(_db){
    return _db;
  }
  throw 'No db found';
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

