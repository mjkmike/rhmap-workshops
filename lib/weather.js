var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

function weatherRoute() {
  var weather = new express.Router();
  weather.use(cors());
  weather.use(bodyParser());


  // GET&POST REST endpoint - query params may or may not be populated
  weather.all('/', function(req, res) {
    var buildUrl;
    if(req.body.lat && req.body.lon) {
        buildUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + req.body.lat + "&lon=" + req.body.lon + "&appid=f6892c041e7d03a3165bbe815ceba731";
    } else {
        buildUrl = "http://api.openweathermap.org/data/2.5/weather?q=washington,united%20states&appid=f6892c041e7d03a3165bbe815ceba731";
    }
    //http://api.openweathermap.org/data/2.5/weather?q=washington,united%20states&appid=f6892c041e7d03a3165bbe815ceba731
    request.get({
      url : buildUrl,
      json : true

    }, function(error, response, body){
        if (error){
          return res.status(500).json(error);
        }
        return res.json(body);
    });
  });

  return weather;
}

module.exports = weatherRoute;
