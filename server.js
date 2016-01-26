var PORT = process.env.PORT || 3005;
var MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://heroku_rc6jxkln:jl60qp4df6khbm6tnh4j9139g6@ds035975.mongolab.com:35975/heroku_rc6jxkln';

var app = require('./app')(require('./stock-repository')({
    //mongoURL: 'mongodb://localhost:27017/test'
    mongoURL: MONGOLAB_URI
}));

app.listen(PORT, function () {
    console.log('Express server is listening on port ' + PORT);
});