
function leap()
{
var a=document.getElementById('t1').value;

if(parseInt(a) % 4===0){
    console.log("Leap year :  "+a);
}
else{
    console.log("Not a Leap year :  "+a);
}

}