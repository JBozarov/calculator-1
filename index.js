


// var firstNumber=document.getElementById('first-number'); 
// var first; 
// function setFirstValue (event) {
//   first=document.getElementById('num-1').value; 
//   firstNumber.innerText=first; 
// }

// var secondNumber = document.getElementById('second-number'); 
// var second; 
// function setSecondValue (event) {
//   second=document.getElementById('num-2').value; 
//   secondNumber.innerText=second; 
// }



var first; 
document.getElementById('num-1').addEventListener('input', function(event){
  first = document.getElementById('num-1').value; 
  document.getElementById('first-number').innerText=first; 

})

var second; 
document.getElementById('num-2').addEventListener('input', function(event) {
  second=document.getElementById('num-2').value; 
  document.getElementById('second-number').innerText=second; 
}); 



let operation = document.getElementById('counter'); 
var counter=''; 
function add () {
  counter='+'; 
  operation.innerText=counter; 
}

function deduct () {
  counter='-';
  operation.innerText=counter; 
}

function devide () {
  counter=':'; 
  operation.innerText=counter; 
}

function multiply () {
  counter="*"; 
  operation.innerText=counter; 
}




var final = document.getElementById('final'); 
document.getElementById('button').addEventListener('click', function(event) {
  event.preventDefault(); 
  switch(counter) {
    case '' : alert('Please select operations: +  -  /  * '); 
    break; 
    case '#' : alert('Please select operations: +  -  /  * '); 
    break; 
    case '+' : final=parseInt(first)+parseInt(second)
    break; 
    case '-' : final=parseInt(first)-parseInt(second); 
    break; 
    case ':' : final=parseInt(first)/parseInt(second); 
    break; 
    case '*' : final=parseInt(first)*parseInt(second); 
    break; 
  }

  if (final%1==0) {
    document.getElementById('final-result').innerText=final; 
  }
  else document.getElementById('final-result').innerText=final.toFixed(2); 
})



document.getElementById('reset-button').addEventListener('click', function(event) {
    document.getElementById('num-1').value=''; 
    document.getElementById('first-number').innerText=0; 
    counter='#'; 
    document.getElementById('counter').innerText='#'; 
    document.getElementById('num-2').value=''; 
    document.getElementById('second-number').innerText=0; 
    document.getElementById('final-result').innerText=0; 
})