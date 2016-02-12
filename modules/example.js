var lib = require('./simple-lib');

console.log("Call : "+lib.next());
console.log("Call : "+lib.next());
console.log("Call : "+lib.next());

lib.setName('Darion.Yaphet');
console.log("Get Name : "+lib.sayHello());
