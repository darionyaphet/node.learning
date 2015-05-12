var querystring = require("querystring");

obj = { foo: 'bar', baz: ['qux', 'quux'], corge: '' };
parse = querystring.stringify(obj);
console.log(parse);
parsed = querystring.parse(parse);
console.log(parsed);

obj = {foo: 'bar', baz: 'qux'};
parse = querystring.stringify(obj);
console.log(parse);
parsed = querystring.parse(parse);
console.log(parsed);


obj = { w: '中文', foo: 'bar' }
//console.log(obj,null, null,{ encodeURIComponent: gbkEncodeURIComponent });



