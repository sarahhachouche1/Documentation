function mult()
{
  var numOne, numTwo, product;
  numOne = parseInt(document.getElementById("first_number").value);
  numTwo = parseInt(document.getElementById("second_number").value);
  product= numOne * numTwo;
  document.getElementById("txtresult").value = product;

  
}  

