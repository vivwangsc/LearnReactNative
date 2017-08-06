'use strict';

const Emitter = require('events');

class MyEmitter extends Emitter{

}
const EventEmitter = new MyEmitter();
export default EventEmitter;
