/**
 * Created by Ali on 2016-07-05.
 */
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

var hangoutsBot = require("hangouts-bot");

var bot = new hangoutsBot("hardcoding0@gmail.com", "");

bot.on('online', function() {
    console.log('online');
});

    bot.on('message', function(from, message) {
        for(var i=0; i<1000; i++){
            setTimeout(function(){
                console.log(from + ">> " + message);
                bot.sendMessage(from, 'Bot test');
            },5000);
        }
    });






// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));




app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;

