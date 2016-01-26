var app = require('./app')(require('./stock-repository')({
    mongoURL: 'mongodb://localhost:27017/test'
}));

app.listen(3005, function () {
    console.log('Express server is listening on port 3005');
});