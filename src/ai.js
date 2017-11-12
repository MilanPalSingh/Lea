"use strict"
var _ai = require('apiai');
var _config = require('./../config/config');
const uuidv4 = require('uuid/v4');

const _app = _ai(_config.aitoken);

module.exports = class Ai{
	// const Ai;
	// set configuration
	constructor(){
		// this.app = _ai(_config.aitoken);	
	}

	get(text){
	    return new Promise(function(resolve, reject){
	        // console.log("call : ", text);
	        // console.log();


	        var request = _app.textRequest(text, {
	            sessionId: uuidv4()
	        });

	        request.on('response', function(response) {
	            // console.log(response.result.action);
	            resolve(response);
	        });

	        request.on('error', function(error) {
	            // console.log(error);
	            reject(error);
	        });

	        request.end();
	    });
	}
}