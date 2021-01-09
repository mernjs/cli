const mongoose  = require('mongoose')
const ENV  =  require('./DB_config')
mongoose.Promise    = global.Promise;
// const MONGO_URI     = `${ENV.DB_CONNECTION}://${ENV.DB_USERNAME}:${ENV.DB_PASSWORD}@${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DB_DATABASE}`;

mongoose.connect(ENV.MONGO_URI, { useNewUrlParser: true })
.then(() => {
    // dbSuccessConsoleLog("Successfully Connected To The Mongo"); 
    // dbSuccessConsoleLog("* Connected To The Mongoose ORM **");
}).catch(err => {
    dbErrorConsoleLog()
    process.exit();
});