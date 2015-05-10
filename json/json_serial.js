var json_obj = {
    "name" :"darion.yaphet",
    "age"  : 23,
    "email":"darion.yaphet@gmail.com"
};

var json_string = JSON.stringify(json_obj);
console.log(json_string);

var json_object = JSON.parse(json_string);
console.log(json_object)
