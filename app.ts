//not sure if this line is needed
/// <reference path="node_modules/@types/d3/index.d.ts" />
// no imports necessary


var message = document.getElementById('message');
message.innerHTML = "Connected to app.js";

var dataArray = [5, 11, 18];

d3.select(window).on("resize",adjustSize);

function adjustSize() {
    
    //If needed, reset the svg and its data
    var svgTest = d3.select("body").select("svg"); //or which ever parent tag in place of body
    if (!svgTest.empty()){svgTest.remove();};

    // Set up the width and height
    var width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    var height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;

    //All the rest of your code in here
    d3.select("#d3Div").append("svg");

};