function Reminder()
{
  var numOne, numTwo, reminder;
  numOne = parseInt(document.getElementById("first_number").value);
  numTwo = parseInt(document.getElementById("second_number").value);
  reminder= numOne % numTwo;
  document.getElementById("txtresult").value = reminder;

  
}  