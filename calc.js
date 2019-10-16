var result = document.getElementById('inputValue');
function setNumber(x){
  result.value += x;
}
function equal(){
  // result.value=eval(parseFloat(result.value));
  result.value=eval(result.value);
}
function empty(){
  result.value='';
}