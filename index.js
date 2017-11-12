var _config = require('./config/config');
var _slack = require('./src/slack');
var _mw = require('./src/mw');

sb = new _slack(_config);
// _mw.print();
// sb.sendTest('hi');
