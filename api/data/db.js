var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var dburl = 'mongodb://localhost:27017/meanhotel';

mongoose.connect(dburl);

mongoose.connection.on('connected', function () {
    console.log('Mongoose Connected to ' + dburl);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose Connection Error' + err);
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose Terminated through app termination (SIGINT)');
        process.exit(0);
    });
});

process.on('SIGTERM', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose Terminated through app termination (SIGTERM)');
        process.exit(0);
    });
});

process.once('SIGUSR2', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose Terminated through app termination (SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

//BRING IN SCHEMA
require('./hotels.model.js');
require('./users.model.js');