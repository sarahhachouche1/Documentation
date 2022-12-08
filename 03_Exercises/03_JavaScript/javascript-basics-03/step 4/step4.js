function fn(){
    var e1=document.getElementById('password').value;
    var e2=document.getElementById('confirmation').value;
    if(e1!=e2)
    {
        document.getElementById('password').style.border="solid red";
        document.getElementById('confirmation').style.border="solid red";
    }
}