//not sure if this line is needed
/// <reference path="node_modules/@types/d3/index.d.ts" />
// no imports necessary


var message = document.getElementById('message');
message.innerHTML = "Connected to app.js";

var dataArray = [5, 11, 18];

d3.select("#d3Div").append("svg");