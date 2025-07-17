//Including JS for a HTML file
  //within <script> at the bottom of the <body> HTML element OR
  //within HTML element's opening tag as a value for an attribute -include the code Within DOUBLE QUOTES.
    //<button onclick= "alert('good job!');"> hello </button>
  //Separate JS file - inside <head> tag of HTML file.
    //<script type="text/javascript" src="js/externalJSFile.js"></script>

//Execution order
  //<script> tag executed first when the page is loaded
  //then the JS code within individual HTML elements, when triggered (eg:button click).

//JS Comments - single line
/* Comments - 
multi-line */



// Pop up message
// alert('hello');


// Console message
console.log(2+2); //4
 
// Changing HTML on page - <body> element
// document.body.innerHTML= 'hello';


//DECIMAL POINTS 

// Percentage calculated w/ decimal multiplying - Eg: for 10%
console.log(400 * 0.1); //40

// Decimal points has weird behaviors
console.log(0.1 + 0.2); //0.30000000000000004
// calculations w/ decimal points - do without decimal points first - then divide by 10 or 100, etc
//Do this for money calculations
console.log((1+2)/10); //0.3

//Rounding decimal values - 
console.log(Math.round(2.3)); //2
//rounding down
console.log(Math.floor(2.5)); //2
//rounding up
console.log(Math.ceil(2.2)); //3


//STRINGS

//Use single quotes (usually), OR double quotes, OR back ticks for Template Strings
console.log('hello there in single');
console.log("Hey I am in double quotes")
console.log('I am not telling "This" to you'); //prints double quotes
console.log("I am not telling 'This' to you"); //prints single quotes
console.log(`I'm in back ticks baby!`)
//Template strings w/ ${ }, are used to insert values or variables inside a string
console.log(`Items (${1+1}): $${(2095+799)/100}`); //Items (2): $28.94
//using single quotes w/ concatenation is messy instead 
console.log('Items (' + (1+1) + '): $' + (2095+799)/100); //Items (2): $28.94


//Concatenate strings  with +
console.log('some'+'text'); //sometext


//Types of values - checked with 'typeof' keyword 
console.log(typeof 2); //number
console.log(typeof 'word'); //string
console.log(typeof 2.56); //number

//Type COERCION - string + number -> string
console.log('hello'+4); //hello4
console.log( 4 + 'hello'); //4hello
console.log(typeof ('hello'+4)); //string
console.log( typeof (4 + 'hello')); //string


//Escape characters (symbols) in string w/ backward slash and a letter/number/symbol
//Eg: to include single quote - \' is used.
console.log('I\'m learning JS'); 
//New line within the same string - \n
console.log('First line \nSecond line');

//TEMPLATE STRINGS
//interpolation - insert values in a string directly - ${VALUE}
console.log(`Items ( ${1+1} ): $${(2095+799)/100}`);
//multi-line strings
console.log(`some
text`);



//VARIABLES
  //'let' or 'const' or 'var' keywords used to define variables
  let variable1 = 2;
  console.log(variable1); //2
  //can change the value
  variable1 = 5
  console.log(variable1); //5

  //$ and _ can be used in variable identifiers/names
  let var$ = 5;
  let _en = 'hell';
  
  //using 'const' keyword won't allow to change value later
  const a = 45;
  // a =33;  //throws an error
  console.log(a);
  
  //using 'var' keyword - doesn't create a scope - can not use the name again
  var variable2 = 22;


//Shortcuts
  //increase by 1
  variable1 +=1;
  console.log(variable1);
  //another shortcut for by one -increase or decrease
  variable1 ++;
    console.log(variable1);
  variable1 --;
    console.log(variable1);
  //multiply by 2
  variable1 *= 2;
  console.log(variable1);


//Convert Strings to Math Expression - eval() function
let calculation = ` 343 + 33 - 2`;
console.log(eval(calculation)); //374



//BOOLEAN VALUES - true, false (without quotes) 
  //used with comparison operators - >, <, ===, !==, >=, <=
console.log(3<4); //true
console.log(3<2);  //false

  //checking for Equality - with == OR ===. (for inequality != & !==)
    //string is converted to number before comparison
  console.log(5=='5.00'); //true
    //no conversion before comparison
  console.log(5 ==='5.00'); //false 


//comparison operators has an order for priority - has lower than math operators
// brackets, * and / , + and -, and then comparison operators


//If STATEMENTS -> check a condition and then execute appropriate code block
  //if the condition evaluates to -true- the code block followed by if executed,
  //otherwise the code block followed by 'else' is executed. - optional 
if(30>15){
  console.log('greater');
}else{
  console.log('not greater');
}

  //multiple branches for If with 'else if' 
  if(30>=16){
	console.log(`You can drive
  Congrats!`);
  }else if(15>=14){
    console.log('Almost there');
  }else{
    console.log('You can not drive!');
  }


//LOGICAL OPERATORS
  //&& , ||, ! are AND, OR, and NOT operators
  //lower priority than Comparison operators
  //AND has higher priority than OR operator

//SCOPE
  //important to avoid naming conflicts
  //Inside Curly brackets

//TRUTHY and FALSY values - shortcut
  //Can be used in place of Boolean values
  //Truthy - any value that is not zero
  //Falsy - zero,null, "", NaN (Not a Number -invalid math), undefined (not initiated)
console.log('text'/5); //NaN -> Invalid math
let variable7;
console.log(variable7); //undefined
let word = null;
console.log(word); //null

//TERNARY OPERATOR - ? : - as shortcut for IF
 // when condition is true, assigns the first value or else the second value.
const result = (5>0) ? 'truthy' : 'falsy';
console.log(result);
 //can use Truthy values
console.log(0? 'truthy': 'falsy');

//GUARD OPERATOR - && - A shortcircuit for IF
  //check if both sides are truthy
  //but if the left side is falsy, can skip the right side evaluation
  //can guard the code on the right
  const message = false && 'hello';
  console.log(message); //false
  //using truthy value on Left, can ASSIGN the value on right
  const messageTwo = 5 && 'hello';
  console.log(messageTwo); //hello

//DEFAULT OPERATOR - || - A shortcircuit for IF
 //if left is truthy, no need to evaluate the value on right
 //the value on left is assigned
 let currency = 'EUR' || 'USD'; 
 console.log(currency);  //EUR
 //if the value on left is falsy, the value on right is assigned (thus default)
 let gender = "" || 'male';
 console.log(gender); //male



 //FUNCTIONS - to reuse code blocks

 //creating - with 'function' keyword
 function printHello(){
    console.log('hello friend!');
 }
 //executing the function
 printHello();

 //has scope - variables inside can not be referenced from outside
  //to get values out of a function, create global variables - outside functions
let computerMove = '';

function pickMove(){
    computerMove = 'rock';
}

pickMove();
console.log(computerMove);

 //can also use RETURN statement in functions to get values outside
    //should be the last line in a function, any code after is not executed
    //'return' keyword is used, followed by,
    //a calculation, a variable, or anything evaulates to a value
function sumUp(){
  return 2+2;
}
console.log(sumUp()); //4

let wor = "idiot";
function findWord(){
  wor = wor +1;
  return wor; 
}
console.log(findWord()); //idiot1

function evaluation(){
  return Math.random(); 
}
console.log(evaluation()); //0.14352243024249534

  //using just 'return' keyword returns 'undefined'
function nothing(){
  return;
}
console.log(nothing()); //undefined
//using return values is preferred than using global variables to avoid naming conflicts


//Functions WITH PARAMTERS
 //can pass values to a function in a function call
 //if no values passed in function call, the values are 'undefined'
function calculateTax(parameter1){
  console.log(parameter1 * 0.3);
}
calculateTax(50000); //15000
  // parameter has scope only inside the function body
//console.log(parameter1); //error not defined

  //multiple PARAMETERS
function calTax(cost, percen){
  return cost * percen;
}
console.log(calTax(3000,0.5)); //1500
//when math is done with 'undefined', the value is NaN (not a number)
console.log(calTax(2000)); //NaN

//default value for Parameter
 //given in the function definition
function calcuTax(cost, percen = 0.1){
  return cost * percen ;
}
console.log(calcuTax(2000));



//using 'return' with IF STATEMENTS
  //to return early (the execution), 
  //without using 'else if', can use multiple IF with 'return'
function check(value){
  if(value >10){
    console.log('greater than 10');
      return;
  }
  if(value <=10){
    console.log('less than 10');
    return;
  }
}
console.log(check(40));


//OBJECTS - type of value in JS - used to group related values together
 
  //created with - property : "value" pairs inside curly brackets
   //separated by commas

  const product = {
    name: 'Thanuka',
    age: 34
  };
  //ACCESS values with propery names given with DOT operator
  console.log(product); //{name: 'Thanuka', age: 34}
  console.log(product.name); //Thanuka
  //OR
  //BRACKET NOTATION to access values - ['property']
  console.log(product['name']); //Thanuka
  

  //CHANGE property values
  product.name = 'Courier';
  console.log(product.name); //Courier
  //multi-word property names can be used with only Bracket notation
  console.log(product['delivery-time']); //undefined - (not initialized)

  //ADD new property - values to the object
  product.gender = 'male';
  console.log(product.gender); //male
  //with bracket notation
  product['delivery-time'] = '10:20PM'; //(initialized)
  console.log(product['delivery-time']);  //10:20PM
  //with bracket notation we can use other values, not just strings
  propertyName= 'town';
  product[propertyName]='Kegalle';
  console.log(product); //{"name": "Courier","gender": "male","delivery-time": "10:20PM","town": "Kegalle"}

  //REMOVE properties from the object - 'delete' keyword
  delete product.age;
  console.log(product.age); //undefined

//shortcut with braket notation - CREATE OBJECT PROPERTIES
 //if there is only a string for property name, can skip using brackets
order = {
  id : 233,
  'delivery-day': 'tomorrow',
//['delivery-day' : 'tomorrow'] instead
}
console.log(order); //{ id: 233, delivery-day: 'tomorrow'}



//NESTED OBJECTS
 //we can save objects inside another object -> Nested
  //Eg: 'rating' object in 'item' object
 const item = {
  name: 'shirt',
  rating: {
    stars : 4.5,
    count: 87
  }
}

 //ACCESSING inner objects  - DOT notation 
 console.log(item.rating.count); //87
  //Bracket notation
console.log(item['rating']['stars']); //4.5


//FUNCTIONS IN OBJECTS - called as Methods

 //just as a property, functions can be defined for an object
 //with a given name 
 const item1 = {
  name: 'shirt',
  function1 : function nameFunc(){
    console.log('I am the function inside the object!');
  }
 }
console.log(item1);  // {name: 'shirt', function1: f }

 //Accessing the function inside the object
 console.log(item1.function1()); //I am the function inside the object!
 console.log(item1['function1']()); //same output


 //BUILT-IN JS OBJECTS 

  //Eg: 'console' is an object with 'log()' function, 
  //'Math' is an object with functions such as 'random()'.

//JSON - Java Script Object Notation
  //'JSON' is another built-in object -> used with JS objects -> to convert them to more universal object types
 
  //stringify() method of 'JSON' -> convert to JSON object
 const jsonString = JSON.stringify(item);
 console.log(jsonString); //{"name":"shirt","rating":{"stars":4.5,"count":87}}

 //parse() method of 'JSON' -> convert from JSON object
console.log(JSON.parse(jsonString)); //{name: 'shirt', rating: {…}}


//localStorage
 // 'localStorage' is another built-in object -> used to save JS objects to memory
 //both 'JSON' and 'localStorage' objects are used to save objects into memory.
 //then when the page is refreshed or opened again, the saved values can be retrieved

 //setItem() method of 'localStorage' -> to save JSON object into storage
 //name for the object and the value as a JSON string or a string is passed to the method
 localStorage.setItem('message','The ultimatum');

 //getItem() method of 'localStorage' -> to get saved objects from storage
 //the name we used is passed to the method.
 localStorage.getItem('message');

  //getItem() method should be mentioned on the TOP of <script>, to 
  //retrieve the saved objects from storage, when the page is loaded.

 //removeItem() method of 'localStorage' -> to delete saved objects from storage
 localStorage.removeItem('message');



//null vs undefined values 
 //both are falsy values in JS
 
 //'null' is used to keep Empty Intentionally
  //Eg: in functions - we can pass 'null' value for a parameter
  function func(param = 'default'){
    console.log(param);
  }
  //shows default value
  func(); //default
  //still the default value - considered as value not given
  func(undefined); //default
  // default is not set  
  func(null); //null


//AUTO-BOXING feature
 //Types of values has related Object types in JS
 //Eg: Boolean, Number, String -> has methods & properties
 //JS can automatically wraps the values in relevant objects when needed -> Auto boxing
 //so that we can use the properties & methods of them

 //check length of a string  -> property 'length' is used of String object
 console.log('hello'.length); //5

 //convert string to uppercase -> method 'toUppercase()' is used
 console.log('hello'.toUpperCase()); //HELLO

 //convert a number &  a boolean into strings with 'toString()' method
 console.log(typeof 3.0.toString()); //string
 console.log(typeof true.toString()); //string

 //Auto boxing doesn't work when the values are 'null' or 'undefined'.


 //OBJECT AS REFERENCES
  //saving objects in variables only references to the memory where the 
  //object values is saved and
  //DOES NOT CONTAIN ACTUAL OBJECT

  const obj1 = {
    message: 'object one'
  };

  //save the object in another variable
  const obj2 = obj1; 

  //changing the values in obj1
  obj1.date = '7/11';

  //check both objects
  console.log(obj1); //{message: 'object one', date: '7/11'}
  console.log(obj2); //same, the date is added to obj2
  //OBJECTS just COPY THE REFERENC -> copy by reference

  //comparing two objects
   //using equals symbol (===), gives you false, 
   //because the references are compared, not actual object values
  const obj3 = {
    msg: 'object x',
    date: '4/33'
  };
  const obj4 = {
    msg: 'object x',
    date: '4/33'
  };
  //the both objects has same value but dif. references
  console.log(obj3 === obj4); //false



//SHORTCUTS FOR OBJECTS

 //Destructuring - (already have) property values -> to variable w/ same name as properties
  // instead const msg = obj1.msg;
  const {msg} = obj3;
  //using the variable  
  console.log(msg); //object x
  //for multiple properties
  const obj5 = {
    m: 'object x',
    date: '4/33'
  };
  const{m, date} = obj5;
  console.log(m + ' ' + date); //object x 4/33

  //Shorthand property - (already have) variables ->  object properties
  //instead const instruction{ info : info }
  const info = 'work well';
  const instruction = {
    info
  };
  console.log(instruction); //{info: 'work well'}


  //shorthand method - 'function' keyword & name are skipped for methods
   //usual way
  const obj6 = {
    methodName : function fun(){
      console.log('method of obj6');
    }
  };
  //shorthand way for methods
   const obj7 =  {
    methodName(){
      console.log('method of obj7');
    }
   }



//DOM - Document Object Model with JS
 
//'document' is anothor built-in object - represents the actual web page.
// - used to change the HTML and CSS of the web page

 //Eg: change the <body> with 'innerHTML' property of 'body' object
//  document.body.innerHTML = 'The text changed to this.';

 //'body' object is nested inside the 'document' object'
 
 //'innerHTML' property is used to change the CONTENT INSIDE A HTML ELEMENT
  //changing the page title with 'title' property of 'document' object.
  document.title = 'Good job'; 

//when accessed to 'document' objects, they are converted to JS objects
console.log(typeof document.body); //object

//accessing the 'innerHTML' property
console.log(document.body.innerHTML); //The text changed to this.

//can add & replace with new HTML elements to page - button added
// document.body.innerHTML = `<button> Click me </button>`; 


//METHODS OF DOM

 //querySelector() method of 'document'
  //can get any HTML element by the element name, or class name

  //eg: first <button> element is retrieved
  document.querySelector('button');

  //now it is a JS object - we can use to change content
  document.querySelector('button').innerHTML = 'Click please';

  //'innerText' instead 'innerHTML'
   //to get the text (w/out extra spaces) inside an element we can use 'innerText' instead.
   //'innerHTML' can not be compared when there are spaces or new lines in the content
  const buttonElement = document.querySelector('button');
  if(buttonElement.innerText === 'Click me')
    buttonElement.innerHTML = 'Subscribed';
  else
    buttonElement.innerHTML = 'Subscribe';

  //class names to get HTML elements
   //the class attribute must be added to the HTML element (eg:'js-button') & 
   //can be accessed with a leading dot with 'querySelector()' method
  const btnElement =  document.querySelector('.js-button');
  //when assigning to variables, the end of the name is usually either
  //..Element OR 'lm' to recognize that it refers to a HTML element.


  //'value' property of DOM objects
   //used to access the  <input> HTML elements - void elements - 
   // where user input data inside the element
  //saving that value inside a variable to use later
  const inputElement = document.querySelector('.js-input');
  const cost = inputElement.value;
   
  
  //Number() function 
   //to use the value for calculations, we need to convert 
   //from string type to number type using this function
   let price = Number(cost);



//EVENTS & EVENT LISTENER methods
 
 //to make something happen when an event occurs, such as 
  //a key press or a button click, we use events in JS
  
  //each event has a Event Listener methods which checks for the ocurring of 
  //events & execute the code for the method if ocurred.
  //onclick, onkeypress, onkeydown, onkeyup are such event listeners (methods).

//To use them we can 
// Either write JS code for HTML attributes such as 
 //'onclick' or 'onkeydown',

 //'onkeydown' -> when we press keys while inside <input> the HTML element - represents any key
 //'onkeypress' -> when press & release a key - represents characters only
 //'onkeyup' -> when key is relased - represents keys being released
 //'onscroll', 'onmouseenter' -> when hovering over
 //'onmouseleave' -> when hovering is stopped


//EVENT OBJECTS

 //upon an occurence of an event, the relevant Event Listener Method,
 //gets an object - EVENT object - 'event' is the refer. variable name.
 //has info. about the event ocurred : eg: which key was pressed
 //eg: event.key

//  if(event.key === 'Enter'){
//   //code
//  }


 //Number() and String() built-in functions 
    //used to convert from and to numbers and strings.
    String(333); //convert to a string
    console.log(typeof String(333)); //string

    Number('333');
    console.log(typeof Number('333'));  //number
 
//Automatic Type Coercion
 //for math operators -,/, * and not for +, 
 //strings with only numbers are automatically converted to a number
console.log('25'-2); //23


//'window' object 

 //represents the browser window of the web browser
 //can access everything in the browser window with 'window' object.
 //since everything is inside the window, it isn't needed to said explicitly
 window.console.log('console logging...');
//  window.alert('alert rain!');


//'classList' of DOM objects

 //allows to add or remove classes for a HTML element
 //has methods and properties for 'classList'.

 //add() method of classList -> add a new class - as a string
 const subsBtnElement = document.querySelector('.js-subscribe-button');
 subsBtnElement.classList.add('green-subs-button');

 //remove() method of classList -> removes a class 
 subsBtnElement.classList.remove('green-subs-button');

 //contains() method of classList -> to check for classes
  //returns a boolean 
 const isStyled = subsBtnElement.classList.contains('green-subs-button');
 console.log(isStyled);


 //Toggle styles on and off - with contains() method on button click event
  function toggleButton(select){
    console.log(select);
    const buttonElement = document.querySelector(select);
    //check status
    const isToggled = buttonElement.classList.contains('isToggled');

    if(!isToggled){
      buttonElement.classList.add('isToggled');
      buttonElement.innerHTML = 'Toggle ON';
    }else{
      buttonElement.classList.remove('isToggled');
      buttonElement.innerHTML = 'Toggle OFF';
    }
  }


//ARRAYS 

  //used to represent a LIST OF VALUES of ANY type
  //Square brackets are used, & between elements comma is used.
  //saved as references in variables, just like an object.

  const arrayExample1 = [10,30,40];
  console.log(arrayExample1); //[10,30,40]

  //accessing array values -> use index of the element within square brackets
  console.log(arrayExample1[2]); //40
   //array indices starts from 0 and goes until n-1 -> ZERO INDEXED.

  //any type of values can be put inside arrays including objects & arrays
  const arrayExample2 = ['hello', true, {name: 'socks'}, [1,3,45]];
  console.log(arrayExample2);

  //type of arrays in JS is object -> it is a special type of object in JS.

  //isArray() method of in-built Array object 
    //used to check if a value is an array -> outputs a boolean value
    console.log(Array.isArray('4')); //false
    console.log(Array.isArray([3,4])); //true

  //as an object, arrays have methods and properties
    //'length' property -> check how many elements in the array
    console.log(arrayExample1.length); //3
    //'push()' method -> add new element to the array
    arrayExample1.push(453);
    console.log(arrayExample1); //[10,30,40,453]
    //'splice()' method -> remove given no of elements from the given position
      //takes 2 parameters, starting index & how many elements to remove.
    arrayExample1.splice(0,2); 
    console.log(arrayExample1); //[40,453] -> 2 elements are removed from 0 index.


  //LOOPS  -> to run code blocks repetitively with a condition

    //'while' loop
     //need 3 things; a loop variable, loop condition, updating loop variable
    
     //initializatin - loop variable
    let i = 1; 
    //loop condition
    while(i<=5){
      console.log(i);
      //update step -loop variable
      i++; 
    }
    // 1 2 3 4 5

    //when the loop condition- evaluates to FALSE, the loop stops- Thus 'while' true.
    //each time the loop executes is called as an ITERATION.
    //loops has a scope inside it within curly brackets.


    //'for' loop
     //shorter loop version than 'while' - the standard loop to use.
     //all 3 in one place; loop-variable, loop-condition, & update step.
    for(let i = 1; i<= 5; i++){
      console.log(i);
    }
    // 1 2 3 4 5


 //standard loop is 'for' loop because it is shorter BUT
 //'while' loop is more flexible to be used in some scenarios.




//LOOPS With ARRAYS
 //to go through an array, we can use loops ; it's a repetitive task.
 //we can get each element -> do something with it (inside the loop block)

 const todoList = [
  'make dinner',
  'wash clothes',
 ];

 //printing the array - one by one
 for(let i= 0; i < todoList.length ; i++){
  console.log(todoList[i]);
 }

 //i -> the index of element in the array
 // 'length' property is the number of elements in the array
 // index should go from 0 to (array.length-1)


 //ACCUMULATOR Pattern 
  //a technique where one variable is kept to accumulate values
  //while looping through the array

  //eg1: sum of the array elements -> with accumulator pattern

  //the array
  const numbers =[2,34,55,32,3];

  //accumulator variable
  let total = 0;

  //loop 
  for(let i =0; i < numbers.length ; i++){
    total += numbers[i];
  }

  //result
  console.log(total); //126


 //eg2: double the array elements

 //accumulator variable ->  need an array this time
 let numbersDoubled = [];

 //loop
 for (let i = 0; i < numbers.length; i++){
  numbersDoubled.push(numbers[i]*2);
 }

 //result
 console.log(numbersDoubled); //[4,58,110,64,6]



//Generating HTML with JavaScript

//eg3: add the todo list item to the page

 //accumulator variable -> to hold all HTML
 let todoListHTML = '';

 //loop
 for(let i =0; i< todoList.length; i++){
  const todoItem = todoList[i];
  //html string for one item
  const htmlItem = `<p> ${todoItem} </p>`;

  //add to the accumulator variable
  todoListHTML += htmlItem;
 }

 //result -> display in a <div> element on the web page
  //we need to create a <div> in HTML with the class name given.
  document.querySelector('.js-todo-list').innerHTML = todoListHTML; 


//eg4: Swap values in an array
  //using reference variables -> swap first element with last
  function swapArray(array){
    //keep the first value
    const firstValue = array[0];
    //new array for the result - same as original
    let swapArray = array;
    //changing the first element -> to last value
    swapArray[0]= array[array.length-1];
    //changing the last -> to first (saved)
    swapArray[swapArray.length-1] = firstValue;
    return swapArray;
  }

  console.log(numbers);
  console.log(swapArray(numbers));


//eg5: adding a value to each element
function addToArray(array, amount){
  //new array for the result
  const arrayAdded = [];
  //loop -> to add to each element
  for(let i = 0; i< array.length; i++ ){
    arrayAdded.push(array[i]+ amount);
  }
  return arrayAdded;
}

console.log(addToArray(numbers, 1));


//eg6: adding two arrays together
function addTwoArrays(array1, array2){
  const arrayCombined = [];
  console.log('adding two arrays...');
  console.log(array1);
  console.log(array2);
  for( let i = 0; i< array1.length; i++){
    arrayCombined.push(array1[i]+array2[i]);
  }

  return arrayCombined;
}

console.log(addTwoArrays(numbers, numbers));



//eg7: count elements which are positive
function countPositive(array){
  let count = 0;
  console.log('counting the positive elements...')
  for(let i =0; i< array.length ; i++){
    if(array[i]>0){
      count++;
    }
  }
  
  return count;
}

// array with positive numbers
const arrayToCount = [2,3,0, -2,-1,4];
console.log(countPositive(arrayToCount));



//eg8: finding the max and min of an array

  //while looping through the array, we need to 
  //keep both max and min -> can use object to group both values

  function findMinMaxArray(array){
    //assume the first element is the both - at the start
    const result = {
      min: array[0],
      max: array[0]
    };

    //looping through the array
    for(let i = 0; i< array.length; i++){

      //if less, then it is set as the min
      if(result.min > array[i]){
        result.min = array[i];
      }

      //if greater, then it is set as the max
      if(result.max < array[i]){
        result.max = array[i];
      }
    }

    //display the result
    console.log(`minimum is: ${result.min} & maximum is: ${result.max}`);
    return result;

  }
  findMinMaxArray(numbers);
  const ar = [2,34,5,67,88,3,1];
  findMinMaxArray(ar);


//eg9: counting dif. words in an array

  //to keep the count, we need to keep both the word and the count
  //we can use an object to hold that result - where each word is a property in it.

  function countWordsArray(arrayWords){
    //to accumulate the result
    const result = {};

    //looping through the array
    for(let i =0; i< arrayWords.length ; i++){

      //get each element saved in 'word' variable
      const word = arrayWords[i];

      //creating a property with property name = word, value = count.
      //bracket notation is used here - obj[propertyNameInVariable] to access the value of the property.

      //if not present already
      if(!result[word]){
        //create new property with value as 1 & prop.name as the word
        result[word] = 1;
      }
      //if the property is present, add 1 to the value of it
      else{
        result[word]++;
        //result.word ++;
      }
    }

    //display the result
    console.log(result);
    return result;
  }

  countWordsArray(['apple', 'grape', 'apple', 'vodka']);



  //COPYING an ARRAY

   //since array are objects, the variables we save arrays to are 
   //REFERENCES -> doesn't contain actual values in the array, but
   //address to the memory -
   //SO by coping -> we get a COPY OF THE REFERENCE -> contains same instance
    const array0 = [1,2];
    const array0Copy = array0;
    array0Copy.push(5);
    console.log(array0); //[1,2,5] -> both are same

   //Creating array instance of same
 //SLICE() method
  //used to create another array instance with same values
  const array1 = [2,3,2];
  const array1Copy = array1.slice();
  array1Copy.push(54);
  console.log(array1); //[2,3,2]
  console.log(array1Copy); //[2,3,2,54] -> dif. array

  //DESTRUCTURING ARRAYS - shortcut
   
   //getting values to variables
   const array2 = [1,2,3];
   //variables created in the order given
   const[firstValue, secondValue] = array2;
   //same as firstValue = array[0] and secondValue = array[1]
   console.log(firstValue + ' and ' + secondValue);
   //with object destructuring -> const {name, age} = object;



//BREAK & CONTINUE with LOOPS

  //to get special behaviors from loops
   //break -> exit the whole loop block -BREAKING OUT THE LOOP
   //continue -> skipping the current iteration  - CONTINUE WITH NEXT ITERATION

  //eg: - break -> stop the loop when it is 6
   console.log('break out when it is 6');
  for( let i = 1; i<=10; i++){
    if(i==6){
      break;
    }
    console.log(i);
  }

  //eg: continue -> skipping 6 only
  
  console.log('continue with out 6');
   for( let i = 1; i<=10; i++){
    if(i==6){
      continue;
    }
    //code to be skipped should be after the continue condition
    console.log(i);
  }


  //eg: skipping numbers which are divisible by 3
  console.log('skipping divisible by 3...');
  for(let i = 1; i<= 10; i++){
    if(i % 3 === 0){
      continue;
    }
    console.log(i);
  }


  //'continue' with 'while' loop
   //we need to include the increment-step inside the skipping condition
   //again, unlike with 'for' loop, otherwise the loop run indefinetely

  console.log('while with continue...');
  let j = 1;

  while(j< 10){
    
    //skipping condition
    if(j % 3 === 0){
      // increment step again - it increments before skipping iteration
      j++;
      continue;
    }
    console.log(j);
    //step
    j++;
  }


  // return with -LOOPS with ARRAYS in FUNCITONS 

   //to break out a function, instead of a loop (as with 'break')
   //we can use the keyword 'return' -> to return execution

  //  eg01:
   function doubleNonZeroArray(array){
    //accumulating variable - as an empty array
    const arrayDoubled = [];

    //loop
    for(let i = 0; i< array.length; i++){
      //saving current element to a variable
      const element = array[i];

      //upon condition,
      //break out the function & return to function call 
      if(element === 0){
        return arrayDoubled;
      }

      //otherwise add to the accumulator
      arrayDoubled.push(element*2);
    }

    //return output
    return arrayDoubled;
   }

   console.log(doubleNonZeroArray([2,3,4,5,0,9,8,6])); //[4,6,8,10]


  //  eg02:
   //check a specific word in an array
    //returns the LAST index if the word is present OR the index otherwise.

    function checkWordArray(array, word){
      //default index as -1 - when the word is not present
      let index = -1;

      //loop
      for(let i =0; i < array.length ; i++){
        //saving current to a variable
        const currentWord = array[i];

        //only if it is the word given
        if(currentWord === word){
          // assign the index
          index = i;
        }
      }

      //result
        //deciding how to present the index
      let suffix = getNumberSuffix(index+1);
      if (index === -1){
        console.log('The word is not in the array.');
      }else{
      console.log(`The place of the word is ${index +1}${suffix} place.`);
      }
      //return to function call
      return index+1;
    }

    console.log(checkWordArray(['picture','girl','frock','garden','girlie'],'girl'));


    //function to decide number suffix
    function getNumberSuffix(number){
      const lastDigit = number % 10;
      
      if(lastDigit === 1){
        return 'st';
      }else if(lastDigit === 2){
        return 'nd';
      }else if(lastDigit === 3){
        return 'rd';
      }else{
        return 'th';
      }
      
    }


    //eg03: 
     //above function gave the last word's index when there were multiples of the same word
     //to get the FIRST word's index, using 'break' to break out the loop when found.

     function checkFirstWordArray(array,word){
      console.log('finding the first word in the array...')

       //default index as -1 - when the word is not present
      let index = -1;

      //loop
      for(let i =0; i < array.length ; i++){
        //saving current to a variable
        const currentWord = array[i];

        //only if it is the word given
        if(currentWord === word){
          // assign the index
          index = i;
          //break out
          break;
        }
      }

      //result
      console.log(index+1);
      return index+1;
     }

     console.log(checkFirstWordArray(['flower','chicken','moon','chicken','crime','flower'],'chicken'));


     //there is another way
    //use 'return' to break out of the function & return the found index
     //since we either return -1 OR the index found, there is no need of 'index' saving anymore.
    function checkFWordArray(array, word){
      console.log('finding first word with return...')

      //loop
      for(let i =0; i< array.length ; i++){
        const currentWord = array[i];

        if(currentWord === word){
          //return the index
          return i+1;
        }
      }

      //otherwise, return -1
      return -1;
    }

    console.log(checkFWordArray(['game','on','for','win','on'],'one'));



    // eg04:
      //removing a word from array -> create new array with all elements except the given

      function removeWordArray(array,word){
        console.log('removing word from the array...')

        //accumulator variable - new array
        const newArray = [];

        //loop
        for(let i = 0; i< array.length;i++){
          const currentWord = array[i];

          //if not the word give, add to the new array
          if(currentWord !== word){
            newArray.push(currentWord);
          }
        }
        //result
        return newArray;
      }

      console.log(removeWordArray(['word','handle','poison','handle','work', 'handle'],'handle'));

    //eg05:
     //to only remove the first two same words in the array
      //need to keep the count of the word given also.
      //skipping the loop with 'continue' for first two counts

      function removeTwoWordsArray(array,word){
        //accumulator -new array
        const newArray = [];

        //keeping count
        let count = 0;

        //loop
        for( let i = 0; i< array.length; i++){
          const currentWord = array[i];

          //if count is less than 2 - doesn't add to the array
          if(currentWord === word && count < 2){
            // increase the count
            count++;
            //skip the iteration (next loop code)
            continue;
          }

          //add to the array otherwise
          newArray.push(currentWord);
        }

        //result
        console.log(newArray);
        return newArray;
      }

      removeTwoWordsArray(['one','two','one', 'three','one','five'],'one');

    
//reverse() method - of ARRAYS

    //eg: removing last 2 words instead of first two
    //we can use reverse() method & then do the same & reverse it back.
  //it can reverse the elements of the array

function removeLastTwoWordsArray(array, word){
  console.log('removing last two words from array..');
  console.log('original array: '+ array);

  //reverse array first
  const reverseArray = array.reverse();

  //accum.variable -new array
  const newArray = [];
  //count for word
  let count = 0;

  //loop
  for(let i = 0; i< array.length; i++){
    const currentWord = reverseArray[i];

    //skip for first two counts
    if(currentWord === word && count < 2){
      count++;
      continue;
    }

    //add to array otherwise
    newArray.push(currentWord);
  }

  //result -reverse back
  console.log(newArray.reverse());
  return newArray.reverse();
}

removeLastTwoWordsArray(['word','count','last','reborn','Lehja','last','want','last'],'last');



//eg: get unique elements (not repeated) from an array
  //using another function to find when index is -1 when it is not already there, 
  // then add to the new array

    //function to check if the element is in the arrayl
    function findElementArray(array,element){
      for(let i=0; i< array.length; i++){
        if(array[i]=== element){
          return i;
        }
      }
      //if there is no index - not present
      return -1;
    }



    function getUniqueWordsArray(array){
      console.log('finding the unique words in the array...')

      //accumulator variable -new array
      const newArray = [];

      //loop
      for(let i =0; i < array.length ; i++){
        //saving current to a variable
        const currentWord = array[i];

        //for each element, check the index returned
        const index = findElementArray(newArray,currentWord);

        if(index === -1){
          newArray.push(currentWord);
        }
      }

      //result
      console.log(newArray);
      return newArray;
     }

     getUniqueWordsArray(['word','curious','idiot','sense','word','idiot']);



//ADVANCED FUNCTIONS

//in JS functions are just another type of value - function,
//thus we can save a function in a (reference) variable\
//just as with objects

//saving function in a variable
const functionOne = function greeting(){
  console.log('hello!');
};

//call function through the variable - use parenthesis
functionOne(); //runs function

//value stored in the variable
console.log(functionOne); //definition

//type of the value in the variable
console.log(typeof functionOne); //function


 //ANONYMOUS FUNCTIONS - no  name

  //we can define funtions without giving names
  //using a reference variable
const functionTwo = function(){
  console.log('hi there anonymous!');
}

  //calling function with variable
  functionTwo();


//Functions without reference variable
 //has an advantage of 'hoisting feature'.

 //can call the function before defining it
 //later in the code -> hoisting 

 callFunction();

 function callFunction(){
  console.log('Called before the definition');
 }

//  callFunctionWVar(); //throws an error of not being defined

 const callFunctionVar = function(){
  console.log('function with ref. variable, called.');
 }

 callFunctionVar();


//FUNCTIONS in methods

 //we can access them (methods) with dot operator

 const student = {
  name: 'Ellie',
  function1 : function greet(){
    console.log('I am inside a student.');
  }
 };
 
 student.function1();

 //property name acts as  a reference variable
//thus, can skip the name for the function 
//to use anonymous function
const teacher ={
  name: 'Karen',
  function1 : function(){
    console.log('I am inside a teacher');
  }
};
teacher.function1();


//can pass function as arguments to functions
//as another value -> known as CALL BACK FUNCTION
//that parameter can be called as a function
//with parenthesis
function run(function1){
  function1();
}

//callling the function with a function
run(function(){
  console.log('function as a parameter.');
});



//Special functions

//setTimeOut() -> 
// run a function (passed) in the future 

 //parameters- a function, wait time duration in milli-seconds

 setTimeout(function(){
  console.log('Time out for 3 seconds');
 }, 3000);


//Asynchornous code -> doesn't halt execution until finishes
  //setTimeOut() function is a asynchronous function.
  //let's the next line of code to execute while it waits.

console.log('executes this line before the timeout..');

//all other code are synchronous - finishes a line of code before
 //moving to next

//setInterval() function 
// -> same as setTimeout() but runs repetitively
//with said time intervals in between

// setInterval(function(){
//   console.log('2 second interval..');
// }, 2000);


//clearInterval() function
 //to stop the setInterval() code which runs repetitively in background
 //needs to pass the 'id' as the parameter
 //which is returned by setInterval() method

let intervalID = setInterval(function(){
  console.log('2 seconds..');
}, 2000);

//stop interval function
clearInterval(intervalID);



//forEach() method

 //used to loop through an array easily - & easier to read
  //it's a method for array types of values &
  //we can pass a FUNCTION as the parameter to it
   //for that function, we can give two parameters, 
  //first as the element's 'value', second as the 'index' of the element.

const list = ['make dinner',
  'wash dishes',
  'watch youtube'
];

//goes through each element in the array & executes the function for each element
  //First passes the element value to the function for 'value' parameter
  //Second runs the function, 
  //repeat for all the elements in array, until the end
list.forEach( function (value){
  //display the element in console- one by one
  console.log(value);
}  
);


//'index' - as the second parameter (optional) for forEach() method
 //to used the index in the function
 list.forEach( function(value, index){
  // display both index and value
  console.log(value + " " + index);
 });


//since we no longer need to use a loop variable like 'i' to get
//elements out from the array, we can directly use a variable name 
//for the first parameter for the forEach() method
//optinally, the second parameter -for index - you can use 'i'.
todoList.forEach( function(todoItem, i){
  //create variables with shortcut for object properties
  const {name, dueDate} = todoItem;

  //create relevant HTML for the item & add it to the accumulator variable
  const htmlItem = `<div> ${name}</div>
                    <div> ${dueDate} </div>
                    <button class="delete-todo-button" onclick="
                      todoList.splice(${i},1);
                      renderTodoList();
                      saveToStorage();
                    "> Delete </button>`;
  todoListHTML += htmlItem;                  
});


//return keyword - in forEach() method
 //instead of 'continue' keyword, to skip an iteration - can not use 'continue',
 //we can use 'return' keyword to skip that element with forEach().
 //although when used with other functions, it breaks out the loop or the whole function.

 list.forEach( function(value){
  //skip this item only
  if( value === 'wash dishes'){
    return;
  }
  console.log(value);
 });


//break keyword - in forEach() method
  //even though it can be used to exit a normal loop early - upon some condition 
  //to break out a normal loop, We can NOT BREAK OUT FROM forEach() method with it.


//ARROW FUNCTIONS - in JS
 
//Another notation for functions in JS
 //a shorter way to write function definitions -> works as a regular function
 //no use of 'function' keyword, but use an arrow with =>- bet. parenthesis & curly open bracket.
 //the ref. variable is used to call the arrow function.

 const functionArrow = () => {
  console.log("I am an ARROW function.");
 };

 //anonymous function  - no name for function
 const functionAnonymous = function() {
  console.log("I am an anonymous function.");
 };

 //short definition function - NO reference variable.
 function functionCommon(){
  console.log("I am a common function.");
 }

 //definiton for a function
 const functionDefinition = function functionSyntax(){
  console.log("I am an actual definition of a function");
 };


//calling the arrow function - with ref. variable
functionArrow();
//both paramters and return works with arrow functions

//SHORTCUTS for ARROW FUNCTIONS -> reason to use arrow functions

 //one parameter -> no parenthesis needed
 const functionOnePara = parameter => {
  console.log("Arrow function with one parameter");
 };

 //one line in function body -> curly brackts & return are not needed.
 const functionOneLine = () => 3+4 ;  //returns whatever in the right side of arrow.




//Common USAGE - ARROW functions
  
//pass functions as arguments for other functions
  
 //eg: with forEach() method
  list.forEach((value, index)=> console.log(value + "." + index));


//for functions inside objects
 const objectW ={
  name: 'Rangi',
  methodArrow : () => {
    console.log("I am a method as an arrow function.");
  }
 };

 //also we have,
 //shorthand-method (recommended to use for fn in an object)
 const objectY = {
  name: 'Ika',
  methodArrow() {
    console.log("I am a shorthand method in object.");
  }
 };



 //DOM method - addEventListener() method

  //To write code to handle events on HTML elements,
  //we use this method for any HTML element, for any event such as click, key press,..

  //method takes 2 parameters; event as a string (predefined), a function to execute.
   //this is what we usually put inside the HTML attributes such as 'onclick' OR 'onkeyup', etc.

  //second parameter can be written as an arrow function.

  buttonElement.addEventListener('click', () => {
    console.log('Button click event!');
  } );

  //we can get event names by losing the prefix 'on' with HTML attributes such as
  //... 'onclick', 'onkeyup', 'onkeydown',...


//Multiple event listeners - for a HTML element
 
 //as an advantage of the addEventListener() method, we can use it as many times for
 //even a single event - unlike with HTML attribute.

 //adding another event listener for button click
 buttonElement.addEventListener('click', () => {
    console.log('Button click event, second listener!');
  } );


//Removing event listeners later -removeEventListener() method

 //as another advantage of addEventListener() method,
  //we can remove previously added functions with it - for an event
//with the another method - removeEventListener()
 //but we need to use separate functions to pass as parameters in that case

 //creating a function as an arrow function
 const showTextOnClick = () => {
  console.log('Showing the text when clicked...');
 };

 //adding the event listener -> function name is given
 buttonElement.addEventListener('click', showTextOnClick);

 //removing the event listener -> 
 buttonElement.removeEventListener('click', showTextOnClick); //no longer shows the text



 //calling a function - within addEventListener() method

  //there is a difference in calling other functions 
  // when we write code for 'onclick' HTML attribute of HTML element
  // VS for the addEventListener() method.
  
   //call the other function WITHIN THE FUNCTION IN the addEventListener() method,
    //CAN NOT USE that function as the passing function to it.

  

//Keyboard events

  //'onkeydown' ->  to do something when we press specific keys

    //need to add to the <body> element -> the event occurs on whole web page

   document.body.addEventListener('keydown', () => {
     console.log('a key down even on page...');
   });


   //check for specific keys
     //take the 'key' property value from 'event' object in eventListener method.
       document.body.addEventListener('keydown', (event) => {
          console.log(`The key ${event.key} was pressed by the user!`);
       });

   //using IF statement,we can exectute dif. functions according to the pressed keys
     document.body.addEventListener('keydown', (event) => {
        if(event.key === "Enter"){
          alert(`User pressed the ENTER key!!`);
        }

      });


  //SELECT ALL of HTML ELEMENTS of one type - not  just the first found
  
      //with querySelector() method it selects the first HTML element of the given type.
      //instead to target all those of that type HTML elements, we use another method:
      //querySelectorAll()  -> returns an array with all that type elements.

      //add event listeners to all buttons -> using forEach() method on 
       //the returned array
      document.querySelectorAll('button').
        forEach((element, i) => {
          //take each element and adds an event listener method
          element.addEventListener('click', () => {
            //displays the classes of that button element
            console.log(element.classList + " is clicked");
          })
        });



//ARRAY METHODS:

   //filter() method -> used to filter elements from an array

    //based on a condition given, some elements are filtered from the array

    //takes one parameter - a function. 
    //that passing function can have two parameters- (just as with forEach() array method)
      //value and index.

    const arr = [1,2,3,4,-2,-3,4,5];
    

    const filtered = arr.filter( (element, index) =>{

      //if the element value is positive, -> keep - must return as 'true' to keep.
      if(element >= 0){
        return true;
      }else{
        //to filter out the rest
        return false;
      }

       //doing the same with truthy values
       //return value>=0;


    });

    //the inner function -passed to the filter() method - 
     //must return either true or false (to filter out), and the filter() method
      //returns a new array with the filtered values.
    console.log(filtered); //[1,2,3,4,4,5]


   
    //map() method of arrays -> to transform array into another array

     //takes a function as a parameter 
      //which takes two parameters (just as with filter() method),
       //value and index

      //returns a new array with transformed values for each element
      const mapped = arr.map( (element, index) => {
        return element *2;
      });

      console.log(mapped); //[2,4,6,8,-4,-6,8,10]

      