let output = document.getElementById("output");
let result = document.getElementById("result");
let num= document.querySelectorAll(".num");
let ops= document.querySelectorAll(".operator")
let lowerscreen=document.getElementById("lower-screen");
let upperscreen=document.getElementById("upper-screen");


//clicking a button and printing it out on the screen
const buttons = document.querySelectorAll('button');

let x;
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
     x=button.id;
    document.getElementById("upper-screen").innerHTML+=x;
    
  });
});


//num1 and num2 variables filled
let num1= '';
let num2= '';
let operator=''; 

num.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      if (num1=== ''){
        num1 += e.target.innerHTML;
            console.log("num1:" + num1); //Print first number
            lowerscreen.innerHTML=num1;
      }
      else{
        num2= e.target.innerText;
            console.log("num2:" + num2); // Print second number
            lowerscreen.innerHTML=num2;
      }
    });
});


//operators filled

ops.forEach(button1 => {
    button1.addEventListener('click', (e)=> {
        if (e.target.innerHTML !== "=") {
            operator= e.target.innerHTML;
                console.log (operator);
                lowerscreen.innerHTML=operator;
               
        }
        else {
            num2= parseInt(num2);
            num1=parseInt(num1);
            lowerscreen.innerHTML=operator;
        switch (operator){  // Calculate and print output
            case "+":
                console.log(add(num1, num2));
                    result= add(num1, num2);
                    result= result.toFixed(2);
                        break;
  
            case "-":
                console.log(subtract(num1, num2));
                    result=subtract(num1, num2);
                    result= result.toFixed(2);
                        break;
            case "*":
                  console.log(multiply(num1, num2));
                    result=multiply(num1, num2);
                    result= result.toFixed(2);
                        break;
            case "/":
                console.log(divide(num1, num2));
                    result=divide(num1, num2);
                    result= result.toFixed(2);
                        break;

        
        }
        lowerscreen.innerHTML= result;
        }
    });
});


//Clear Button- refresh content
document.querySelector(".clear").addEventListener("click", clearAll);

function clearAll()
{
    num1= '';
    num2= '';
    operator=''; 
    console.log ("clear");
    upperscreen.innerHTML= num1;
    lowerscreen.innerHTML= num1;
}

//disable the equals button until the operator command is clicked
x=document.querySelector(".odd").disabled= true;

y=document.querySelectorAll('.operator');
y.forEach((buttonops) => {
    buttonops.onclick  = () =>{
    document.querySelector(".odd").disabled= false;
}
});

//backspace function
let backspace = document.querySelector('.backspace').addEventListener('click', ()=>{
    if (num1 != '' && num2 != ''){
            num2 = '';
            console.log ("num2 : " + num2);
            lowerscreen.innerHTML=num2;
            upperscreen.innerHTML+= num1;
    }
    if  (num1 != ''){
        clearAll ();
    }
    if (ops){
        upperscreen.innerHTML+= num1;
    }
            
});

//document.querySelector(".equals").addEventListener("click",()=>{

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }


/*

Scrap Code 
upper-screen
upperDisplay.textContent = evaluate(operand1, operand2, currentOperator);

function operate(operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}

addEventListener('click',(e)=>{
        if ( e.target.innerHTML=== "=") {
            x.disabled = true ;//button remains disabled
        }
        } else {
            x.disabled = false; //button is enabled
        }
    });
});

let newInput='';
num.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {

        do {
            result=num1;
            newInput=e.target.innerHTML; 
            newInput=parseInt(newInput);
            newInput=num2;
        }
    if (num1 !== '' && num2 !=='' && operator!=''){
    }
    });
});

*/