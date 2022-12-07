function multipleOperations()
{
  var shoe_size, birth_year, res;
  shoe_size= parseInt(document.getElementById("shoe_size").value);
   birth_year = parseInt(document.getElementById("year").value);
   res=(shoe_size*2+5)*50-birth_year+1766;
  document.getElementById("txtresult").value = res;

  
} 