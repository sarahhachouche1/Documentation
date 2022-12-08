var element1 = document.querySelector('#newtext');
var element2 = document.querySelector('input');
element2.onchange = function(){
    element1.innerHTML+=element2.value;
}