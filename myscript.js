let resultDisplay = 
document.getElementById("result");

function myfunc0(){
  resultDisplay.innerHTML += 0;
}
function myfunc1(){
  resultDisplay.innerHTML += 1;
}
function myfunc2(){
  resultDisplay.innerHTML += 2;
}
function myfunc3(){
  resultDisplay.innerHTML += 3;
}
function myfunc4(){
  resultDisplay.innerHTML += 4;
}
function myfunc5(){
  resultDisplay.innerHTML += 5;
}
function myfunc6(){
  resultDisplay.innerHTML += 6;
}
function myfunc7(){
  resultDisplay.innerHTML += 7;
}
function myfunc8(){
  resultDisplay.innerHTML += 8;
}
function myfunc9(){
  resultDisplay.innerHTML += 9;
}
function myfunc00(){
  resultDisplay.innerHTML += 00;
}

function myfuncce(){
  resultDisplay.innerHTML = "";
}
function myfuncclear(){
  resultDisplay.innerHTML = "";

  var resultOne = document.getElementById("result1");
  resultOne.innerHTML = "";

}
function myfuncadd(){
  resultDisplay.innerHTML += "+";
}
function myfuncminus(){
  resultDisplay.innerHTML += "-";
}
function myfuncdiv(){
  resultDisplay.innerHTML += "/";
}
function myfuncmult(){
  resultDisplay.innerHTML += "*";
}

function myfuncequal(){
  let equal = resultDisplay.innerHTML;

  let evaluation = resultDisplay.innerHTML = eval(equal);

  var resultOne = document.getElementById("result1");
  resultOne.innerHTML = equal;

  
 
  if (evaluation === undefined) {
    resultDisplay.innerHTML = "";
  } 
 

}