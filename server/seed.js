const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/browserApp');

const Url = mongoose.model('Url', new mongoose.Schema({
  url: { type: String }
}));

Url.remove({}).then(()=> console.log('all urls erased'));

const arrayOfUrls = [{url: 'http://www.google.com'}, {url: "http://www.galapro.com"}];

Url.create(arrayOfUrls).then(() => console.log('url created'));
