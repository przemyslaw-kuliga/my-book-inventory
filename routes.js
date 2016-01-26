module.exports = function (stockRepository) {
    return {
        index: function(req, res) {
            res.send('hello world');
        },
        getAll: function(req, res, next) {
            stockRepository.findAll().then(function (books) {
                return res.json(books);
            });
        },
        getCount: function(req, res, next) {
            var isbn = req.params.isbn;

            stockRepository.getCount(isbn).then(function (result) {
                if (result !== null) {
                    return res.json(result);
                }

                var err = new Error('not found');
                err.status = 404;
                next(err);
            });
        },
        stockUp: function(req, res, next) {
            var isbn = req.body.isbn;
            var count = req.body.count;

            stockRepository.stockUp(isbn, count).then(function () {
                res.json({isbn: isbn, count: count});
            });
        }
    };
};
