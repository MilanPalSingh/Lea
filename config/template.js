

module.exports = class event{
	// template is used for retain the user input data for the event.
	// set the template parameters
	constructor(config){
		this._location = config.location || false;
		this._name = config.name || false;
		this._eventType = config.eventType || false;
		this._eventname = config.eventname || false;
		this._time = config.time || false;
		this._timeRange = config.timeRange || false;
	}

	// getter and seeters
	getlocation(){
		
	}

} 