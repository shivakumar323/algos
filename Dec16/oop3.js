// JSON
/*
JSON - json stands for javascript object notation

by lookin at the fullform of JSON you might think that JSON is related to or linked with javascript 
but JSON is not related to javascript infact, JSON is independent of any programming language

to know background about the JSON, JSON kind of got introduced to replace XML file
XML was having too much of metadata which made it heavy and eventually slow.
so, in order to avoid limitations of xml JSON came in to picture

JSON just contains key value pairs by excluding all the metadata xml had

Now people are feeling that what is the need of Key in json, why don't we just pass values of key value pair 
instead of sending both the key and value. so in order to acheive this google introduced protobuff concept
to replace json
protobuff comes with .proto extension which sends only the values of a key value pair


We will now look at JSON and js objects :

consider an object Person in js, if you want to convert it to JSON then you can do it as:

var person = {
    name: "shiva",
    age: 25
}

console.log(JSON.stringify(person));
{"name":"shiva","age":25}

Note: JSON format contains keys with datatype string in "" double quotess 
output: 

*/

var person = {
    name: "shiva",
    age: 25
}

console.log(JSON.stringify(person));