"use strict"
var _sb = require('slackbots');
const uuidv4 = require('uuid/v4');
var _mw = require('./mw');
var _config = require('./../config/config');


const sb =  new _sb({
			    token: _config.slacktoken,
			    name: _config.slackname
			});	


module.exports = class SB{
	// const Ai;
	// set configuration
	constructor(config){
		var _this= this;
		sb.on('message', function(data){
			if(data.type == "message" && data.text != undefined && data.bot_id == undefined){
				// when user send msg to the slack bot.
				console.log(data);
				// _mw.print();
				_this.sendTest(data.text, data.channel);

			}
		});
	}

	sendTest(text, id ){
		_mw.getResponse(text).then(function(data){
			// console.log(data);
			// var res = data.result.fulfillment.speech;
			var res = data;

			sb.postMessage(id, res);
		});
	}



}


// bot.on('message', function(data) {
