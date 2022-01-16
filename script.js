let output = document.getElementById("output");
let result = document.getElementById("result");
let num= document.querySelectorAll(".num");
let ops= document.querySelectorAll(".operator")


//clicking a button and printing it out on the screen
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let x=button.id;
    document.getElementById("upper-screen").innerHTML+=x;
    
  });
});


//num1 and num2 variables filled
let num1= '';
let num2= '';
let operator; 

num.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      if (num1=== ''){
        num1 = e.target.innerHTML;
        num1=parseInt(num1);
            console.log("num1:" + num1); //Print first number
            document.getElementById("lower-screen").innerHTML=num1;
      }
      else{
        num2= e.target.innerText;
        num2= parseInt(num2);
            console.log("num2:" + num2); // Print second number
            document.getElementById("lower-screen").innerHTML=num2;
      }
    });
});

//operators filled

ops.forEach(button1 => {
    button1.addEventListener('click', (e)=> {
        if (e.target.innerHTML !== "=") {
            operator= e.target.innerHTML;
                console.log (operator);
                document.getElementById("lower-screen").innerHTML=operator;
        }
        else {
            document.getElementById("lower-screen").innerHTML=operator;
        switch (operator){  // Calculate and print output
            case "+":
                console.log(add(num1, num2));
                    result= add(num1, num2);
                        break;
  
            case "-":
                console.log(subtract(num1, num2));
                    result=subtract(num1, num2);
                        break;
            case "*":
                  console.log(multiply(num1, num2));
                    result= multiply(num1, num2);
                        break;
            case "/":
                console.log(divide(num1, num2));
                    result= divide(num1, num2);
                        break;
        }
        document.getElementById("lower-screen").innerHTML= result;
        }
    });
});
    


//Clear Button- refresh content
document.querySelector(".clear").addEventListener("click", ()=>{
    window.location.reload()
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

*/