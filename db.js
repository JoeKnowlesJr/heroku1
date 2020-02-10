const mongoose = require('mongoose');
const DB_CONNECTION = 'mongodb://uflc9c8z9wm8n6cxsrrs:azWGaGTdnQmY4XtZn9II@bryanxlnnmcitzv-mongodb.services.clever-cloud.com:27017/bryanxlnnmcitzv';
const options = {
    keepAlive: true,
    keepAliveInitialDelay: 30000,
    useNewUrlParser: true
};

mongoose.connect(
    DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        // dbName: 'jkp',
        // user: 'jbk',
        // pass: 'jbkjbk'

    })
    .then(console.log('Connected to DB!'))
    .catch(err =>  {
        console.log(err);
    });

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose default connection open to ' + DB_CONNECTION);
});

// If the connection throws an error
mongoose.connection.on('error', (err)=>{
    console.log('handle mongo errored connections: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', ()=>{
    mongoose.connection.close(()=>{
        console.log('App terminated, closing mongo connections');
        process.exit(0);
    });
});
