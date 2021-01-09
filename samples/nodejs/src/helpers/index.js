require('../database/dbconfig/DB_config');
global.express 	= require('express');
global.Route 	= express.Router();
global.path     = require('path')
global.chalk    = require('chalk');
global.fs       = require('fs')
global.figlet   = require("figlet");

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(chunk){
        return chunk.charAt(0).toUpperCase() + chunk.substring(1);
    }).join(' ');
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toLowerCase() + s.slice(1)
}


//database
if(process.env.DB_CONNECTION === 'mysql') {
    global.bookshelf    = require('../database/dbconfig/DB_bookshelf_connection');
    global.knex         = require('../database/dbconfig/DB_knex_connection')
    global.db           = require('../database/dbconfig/DB_mysql_connection');
}

if(process.env.MONGO_URI) {
    global.mongoose     = require('mongoose');
    require('../database/dbconfig/DB_mongodb_connection');
}

//helpers
fs.readdirSync(path.join(__dirname, './')).forEach(dirname => {
    if (dirname.match(/\.js$/) === null) {
        fs.readdirSync(path.join(__dirname, `./${dirname}`)).forEach(function(file) {
            if (file.match(/\.js$/) !== null) {
                var helper_file_name = file.replace('.js', '');
                helper_file_name = helper_file_name.replace(/_/g, ' ');
                helper_file_name = helper_file_name.charAt(0).toUpperCase() + helper_file_name.slice(1)
                helper_file_name = titleCase(helper_file_name)
                helper_file_name = helper_file_name.replace(/ /g, '');
                helper_file_name = capitalize(helper_file_name)
                global[helper_file_name] = require(`./${dirname}/${file}`);
            }
        })
    }
})
