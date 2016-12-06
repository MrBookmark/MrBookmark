var db = nw.require("./models/bookmarks");
var Q = require("q");

var Bookmarks = {
    create : function(title, url){
        var deferred = Q.defer();

        db.insert({title : title, url : url}, function(err, res){
            if(err) deferred.reject(err);

            deferred.resolve(res);
        });

        return deferred.promise;
    },
    getAll : function(){
        var deferred = Q.defer();

        db.find({}, function(err, res){
            if(err) deferred.reject(err);

            deferred.resolve(res);
        });

        return deferred.promise;
    }
};

module.exports = Bookmarks;
