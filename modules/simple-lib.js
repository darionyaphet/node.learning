var counter = 0 ;

exports.next = function(){
  return counter++ ; 
}

var name;
exports.setName = function(name){this.name = name;}
exports.sayHello = function(){return this.name;}
