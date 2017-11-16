

module.exports = class event{
	// template is used for retain the user input data for the event.
	// set the template parameters
	constructor(config){
		this._location = config.location || false;
		this._name = config.name || false;
		this._eventType = config.eventType || false;
		this._eventName = config.eventName || false;
		this._time = config.time || false;
		this._timeRange = config.timeRange || false;
	}

	// getter and seeters
	getLocation(){	return this._location;	}
	getName(){		return this._name;		}
	getEventType(){	return this._eventType;	}
	getEventName(){	return this._eventName;	}
	getTime(){		return this._time;		}
	getTimeRange(){	return this._timeRange;	}

	setLocation(location){		this._location = location;	}
	setName(name){				this._name = name;		}
	setEventType(eventType){	this._eventType = eventType;	}
	setEventName(eventName){	this._eventName = eventName;	}
	setTime(time){				this._time = time;		}
	setTimeRange(timeRange){	this._timeRange = timeRange;	}

	reset(){
		this._location =   false;
		this._name =   false;
		this._eventType =   false;
		this._eventName =   false;
		this._time =   false;
		this._timeRange =   false;
	}

	print(){
		let loc = 	'location: '+ this.getLocation()
		// let name = 	'name: ' + this.getName();
		let event = 'event: '+ this.getEventType();
		let time = 	'time: ' + this.getTime();
		console.log( loc);
		// console.log(name)
		console.log(event);
		console.log(time);
		return loc +'\n'+  event +'\n'+ time;
		
	}
} 