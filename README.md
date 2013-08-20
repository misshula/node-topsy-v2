# Description

node-topsy-v2 is a node.js module for interacting with the Topsy API V2.

Originally cloned from https://github.com/istrategylabs/node-topsy

# Examples

    var Topsy = require('../lib/Client');

    var topsy = new Topsy('API_KEY');

    var obj = {
	"q" : "obama"
    }

    topsy.getInfluencers(obj, function(error, result){
	console.log(result)
    });

