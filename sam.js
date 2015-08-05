/*function timek()
{
 var today=new Date();
 var hr=today.getHours();
 var mi=today.getMinutes();
 var se=today.getSeconds();
 var ampm=(hr>=12) ? 'PM' : 'AM';
 var k=today+hr+mi+se;
 //document.write("Time is:Hours  "+hr +" :"+ mi+"  :"+se +"   "+ampm);
document.write(k);
}*/
function timek() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
   
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}