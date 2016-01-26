var MongoClient = require('mongodb').MongoClient;

module.exports = function (params) {
    var dbPromise = MongoClient.connect(params.mongoURL).then(function (db) {
        return db.collection('books');
    });

    return {
        stockUp: function (isbn, count) {
            return dbPromise.then(function (collection) {
                return collection.updateOne({isbn: isbn}, {
                    isbn: isbn,
                    count: count
                }, {upsert: true});
            });
        },
        findAll: function () {
            return dbPromise.then(function (collection) {
                return collection.find({}).toArray();
            });
        },
        getCount: function (isbn) {
            return dbPromise.then(function (collection) {
                return collection.find({
                    isbn: isbn
                }).limit(1).next();
            }).then(function (result) {
                if (result) {
                    return result.count;
                }

                return null;
            });
        }
    };
};
