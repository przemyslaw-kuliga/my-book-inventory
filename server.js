var app = require('./app')(require('./stock-repository')({
    //mongoURL: 'mongodb://localhost:27017/test'
    mongoURL: 'mongodb://heroku_rc6jxkln:jl60qp4df6khbm6tnh4j9139g6@ds035975.mongolab.com:35975/heroku_rc6jxkln'
}));

app.listen(3005, function () {
    console.log('Express server is listening on port 3005');
});