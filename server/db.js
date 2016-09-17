const mongoose = require('mongoose');
const path = require('path');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const db = mongoose.connect('mongodb://localhost:27017/browerApp').connection;

mongoose.model('Url', new mongoose.Schema({
  url: { type: String }
}));

const startDbPromise = new Promise((resolve, reject){
  db.on('open', () => resolve(db));
  db.on('error', reject);
});

startDbPromise.then(()=> console.log('MongoDb connection opened'));

module.exports = startDbPromise;
