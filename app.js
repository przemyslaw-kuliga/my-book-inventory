module.exports = function (stockRepository) {
    var bodyParser = require('body-parser');
    var express = require('express');
    var app = express();
    var MongoClient = require('mongodb').MongoClient;
    var routes = require('./routes')(stockRepository);

    app.use(bodyParser.json());

    app.get('/', routes.index);
    app.get('/stock', routes.getAll);
    app.get('/stock/:isbn', routes.getCount);
    app.post('/stock', routes.stockUp);

    app.use(function(req, res, next) {
        var err = new Error('not found');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        console.error(err.stack);

        res.status(err.status || 500).json({
            message: err.message || 'internal error',
            error: process.env.NODE_ENV === 'production' ? {} : err
        });
    });

    return app;
};