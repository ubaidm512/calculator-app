function getValue(num) {
    var input = document.getElementById("Number");
    input.value += num;
    
  }
  
  function totalValue() {
    var input = document.getElementById("Number");
    input.value = eval(input.value);
  }
  
  function valueRemoveall() {
    var input = document.getElementById("Number");
    input.value = "";
  }
  
  function valueRemove() {
    var input =  document.getElementById("Number" .slice(0,15))  ;
    input.value = " ";
    
  }