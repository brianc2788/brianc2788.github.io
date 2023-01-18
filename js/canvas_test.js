/*******************************************************************************
 * canvas_test.js
 * --------------
 * https://brianc2788.github.io/
 ******************************************************************************/

var canvas1 = document.getElementById("ctest");
var ctx = canvas1.getContext("2d");

//draw a circle.
ctx.beginPath();
ctx.arc(75,75,50,0,Math.PI * 2, true); // x,y,start-angle,end-angle,counterclockwise
ctx.stroke();
