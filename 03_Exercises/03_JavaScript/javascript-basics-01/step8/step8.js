function f8()
{
  var age, res;
   age= parseInt(document.getElementById("age").value);
   if(age<=17)
   {
      res="you are under 18";
   }
   else{
      res="you are over 18";
   }
   document.getElementById("txtresult").value = res;

  
} 