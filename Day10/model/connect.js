var mongoose = require('mongoose');
var url = 'mongodb://192.168.99.100:27017/music';
mongoose.connect(url, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', (err) => {
    console.log('Error : ', err);
 });
 db.on('open', () => {
    console.log('Open Event');
 });
 
 var MusicScheme = mongoose.Schema({
   title : String,
   artist : String,
   genre : String,
   date : String
 });
 
 // movies 콜렉션으로 생성
 module.exports = mongoose.model('musiclists', MusicScheme);