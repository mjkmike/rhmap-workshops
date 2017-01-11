var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');

function currentWeatherRoute() {
  var currentWeather = new express.Router();
  currentWeather.use(cors());
  currentWeather.use(bodyParser());

  // All REST endpoint - query params may or may not be populated
  currentWeather.all('/', function(req, res) {
      var req = req;
      var res = res;
        $fh.service({
            "guid" : "2562mt36wrp5keheo67nwsqy", // The 24 character unique id of the service
            "path": "/weather", //the path part of the url excluding the hostname - this will be added automatically
            "method": "POST",   //all other HTTP methods are supported as well. for example, HEAD, DELETE, OPTIONS
            "params": {
                "lat": "35.7497099",
                "lon": "-78.7344123"
            }, //data to send to the server - same format for GET or POST
                "timeout": 25000, // timeout value specified in milliseconds. Default: 60000 (60s)
                "headers" : {
                // Custom headers to add to the request. These will be appended to the default headers.
            }
            }, function(err, body, res2) {
                console.log('statuscode: ', res2 && res2.statusCode);
                if ( err ) {
                    // An error occurred during the call to the service. log some debugging information
                    console.log('service call failed - err : ', err);
                } else {
                    console.log('Got response from service - status body : ', res2.statusCode, body);
                    //convert from kelvin
                    var temp = ((  body.main.temp - 273.15) * 9/5) + 32
                    res.json({msg: 'temp ' + temp.toFixed(2)});
                }
        });
  });

  return currentWeather;
}

module.exports = currentWeatherRoute;
