function addk()
{
var a=document.getElementById('first').value;
var b=document.getElementById('second').value;
var c=parseInt(a)+parseInt(b);
console.log("ADDITION IS:  "+c);
}

function multik()
{
var a=document.getElementById('first').value;
var b=document.getElementById('second').value;
var c=parseInt(a)*parseInt(b);
console.log("MULIPICATION  IS:  "+c);
}

function divik()
{
var a=document.getElementById('first').value;
var b=document.getElementById('second').value;
var c=parseInt(a)/parseInt(b);
console.log("DIVISION IS:  "+c);
}
function remk()
{
var a=document.getElementById('first').value;
var b=document.getElementById('second').value;
var c=parseInt(a)% parseInt(b);
console.log("REMAINDER IS:  "+c);
}