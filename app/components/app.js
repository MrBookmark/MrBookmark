(function(){
    'use strict';



    /*var Bookmarks = require('../models/bookmarks');*/

    /*db.insert(data, function (err, newDoc) {
        if(err) console.log(err);

        console.log(newDoc);
    });*/

    /*Bookmarks.db.find({}, function(err, data){
        if(err) console.log(err);

        console.log(data);
    });*/

    //console.log(window.db.bookmarks);

})();

var gui = window.require('nw.gui'),
    win = gui.Window.get();

win.showDevTools();

//var bookmarks = nw.require("./services/bookmarks");



/*for(var i = 0; i < 10000; i++){
    bookmarks.create("My title" + i, "http://vk.com").then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
}*/
/*
bookmarks.getAll().then(function(data){
    var html = document.getElementById("bookmarks");

    var list = "";

    data.forEach(function(item){
        list += "<li>" + item.title + "</li>";
    });

    html.innerHTML = list;
});*/

var cheerio = require('cheerio');


var fs = require('fs');

fs.readFile("bookmarks_06.12.16.html", function(err, data){
    var html = data.toString();
    var $ = cheerio.load(html);


    var DOM = document.getElementById("bookmarks");

    var bookmarks = $("DT");

    var count = 0;

    for(item in bookmarks){
        if(bookmarks.hasOwnProperty(item)){
            if(bookmarks[item].children !== undefined && bookmarks[item].children[0] !== undefined && bookmarks[item].children[0].attribs !== undefined && bookmarks[item].children[0].children[0] !== undefined){
               /* console.log(bookmarks[item].children[0].children[0].data);
                console.log(bookmarks[item].children[0].attribs);*/

                var _bookmark = {
                    title : bookmarks[item].children[0].children[0].data,
                    url : bookmarks[item].children[0].attribs.href,
                    icon : bookmarks[item].children[0].attribs.icon || "",
                    date_create : bookmarks[item].children[0].attribs.add_date || ""
                };

                var li = document.createElement("li");
                li.innerHTML = "<a href='" + _bookmark.url + "'>" + _bookmark.title + "</a>";
                DOM.appendChild(li);

                console.log(count++);
            }
        }
    }

    /*bookmarks.forEach(function(item){
        console.log(item);
    });*/
});

//



