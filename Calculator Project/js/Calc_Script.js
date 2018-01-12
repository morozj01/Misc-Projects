/**
 * Calculator script implemented in Javascript 
 * Author: Justin Moroz
 */

var buttons = document.getElementsByClassName("calc_button");

for (x = 0; x<buttons.length; x++){
    buttons[x].addEventListener("click", detectClick);
}

var operation = "";
var number = "";
var first = "";
var display = "";
var current = "";


 function detectClick(){ 
   switch(this.id){
       case "AC":
            number = "";
            first = "";
            operation ="";
            display = number;
       break;

       case "CE":
            number = "";
            display = number;
       break;

       case "plus":
       if (operation!== "" && operation!=="complete"){
        number = chainOperations(operation, first, number);
    }
        first = number;
        number = "";
        operation = "add";
        display = first; 
       break;

       case "minus":
       if (number == ""){
            number +="-";
            break;
       }
       
       if (operation!== "" && operation!=="complete"){
        number = chainOperations(operation, first, number);
    }
            operation = "subtract";
            first = number;
            number = "";
            display = first;
       break;

       case "divide":
       if (operation!== "" && operation!=="complete"){
        number = chainOperations(operation, first, number);
    }
        first = number;
        number = "";
        operation = "divide";
        display = first;
       break;

       case "multiply":
       if (operation!== "" && operation!=="complete"){
           number = chainOperations(operation, first, number);
       }
        first = number;
        number = "";
        operation = "multiply"; 
        display = first;
       break;

       case "equals":
       if (typeof operation !== 'undefined'){
            switch (operation){
                case "add":
                 number = (parseFloat(first,10)+parseFloat(number,10));
                 first = number;
                break; 

                case "subtract":
                 number = (parseFloat(first,10)-parseFloat(number,10));
                 first=number;
                break;

                case "divide":
                 number = (parseFloat(first,10)/parseFloat(number,10));
                 first = number;
                break;

                 case "multiply":
                  number = (parseFloat(first,10)*parseFloat(number,10));
                  first= number;
                 break;
            }
            display = number;
            operation = "complete";
        }
        else{
           //Do Nothing
        }
       break;

       default:
       if (operation == "complete"){
           operation = "";
           number = "";
       }
       current = this.innerHTML;
       number+= current; 
       display = number;

   }

   if (display.toString().length>=11){
       display = display.toString().substring(0,11);
   }
   document.getElementById("output").innerHTML = display;
 }


 function chainOperations(operation,first, number){
   
    switch (operation){
        case "add":
         return number = (parseFloat(first,10)+parseFloat(number,10));
        break; 

        case "subtract":
         return number = (parseFloat(first,10)-parseFloat(number,10));
        break;

        case "divide":
        return number = (parseFloat(first,10)/parseFloat(number,10));
        break;

         case "multiply":
          return number = (parseFloat(first,10)*parseFloat(number,10));
         break;
    }
 }