"use strict"
var _config = require('./../config/config');
var _eventTemp = require('./../config/eventTemplate');
var _ai = require('./ai');


var _bot = new _ai(_config);
var _event = new _eventTemp({});

// middle ware funtions for apiAI and chat 
module.exports = {
	// _bot : new _ai(_config),
	print : function(){
		console.log(_bot);

	},
	getResponse: function(text){
		var _this = this;

	    return new Promise(function(resolve, reject){
	        // console.log("get msg");
	        // console.log(_bot);
	        let response="";
	        if(text == 'reset'){
	        	response ="starting a new search";
	        	_event.reset();
	        	resolve(response);
	        }

	        _bot.get(text).then(function(data){
	        	// console.log(data);
	        	_this.eventBuilder(data);
	        	let missValue = _this.getMissingVaule();
	        	if(missValue.length !=0){
		        	// response = "missing values: " + response[0]+"\n";
		        	console.log(missValue);
		        	if(missValue[0] == "location") response += "What's you location \n";
		        	else if(missValue[0] == "eventType") response += "what event you looking for \n";
		        	else if(missValue[0] == "time") response += "Date? \n";
	        	}else{ 
	        		response += _event.print();
	        	}
	        	resolve(response);
	        }).catch(errorHandler);
	    });
	},

	eventBuilder: function(data){
		if (data.result.metadata.intentName == 'Search') {
			// console.log(data);
			// console.log("in the search intent");
			// console.log(_event.getLocation());
			var geoCity = data.result.parameters['geo-city'].length ==0? false : data.result.parameters['geo-city'][0] ;
			var eventType = data.result.parameters['event-type'].length ==0? false : data.result.parameters['event-type'][0] ;
			
			_event.setLocation( geoCity || _event.getLocation() );
			_event.setEventType( eventType || _event.getEventType() );
			_event.setTime( data.result.parameters['date'] || _event.getTime() );
			console.log("location", "Time", "event");
			console.log(_event.getLocation(), _event.getTime(), _event.getEventType() );
		}
	},

	getMissingVaule: function(){
		var missValue =[];
		if(!_event.getLocation()){ missValue.push('location') };
		if(!_event.getEventType()){ missValue.push('eventType') };
		if(!_event.getTime()){ missValue.push('time') };

		return missValue;
	}
}

var errorHandler = function(e){
	reject(e);
}
