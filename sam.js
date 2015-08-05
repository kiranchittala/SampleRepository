function timek()
{
 var today=new Date();
 var hr=today.getHours();
 var mi=today.getMinutes();
 var se=today.getSeconds();
 var ampm=(hr>=12) ? 'PM' : 'AM';
 hr=(hr>=12)? hr-12 :hr;
 document.write("Time is:Hours  "+hr +" :"+ mi+"  :"+se +"   "+ampm);
}
