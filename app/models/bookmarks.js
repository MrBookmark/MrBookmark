var gui = window.require('nw.gui'),
    path = require('path'),
    DataStore = require('nedb');

var bookmarksDataBase = new DataStore(
    {
        filename: path.join(gui.App.dataPath, 'data/bookmarks.db'),
        timestampData : true,
        autoload : true
    }
);

module.exports =  bookmarksDataBase;
