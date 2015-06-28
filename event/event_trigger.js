var event   = require('events');
var emitter = new event.EventEmitter();

emitter.on('event_1' , function(arg){
    console.log('Event_1 Called : '+' Arg : '+arg);
});

emitter.on('event_2' , function(arg0,arg1){
    console.log('Event_2 Called : '+' Arg : '+arg0+' '+arg1);
});

emitter.emit('event_1','darion');
emitter.emit('event_2','darion','yaphet');

