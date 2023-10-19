
<script language="javascript">
  alert("Hello World")
</script>

First line
<script>
 
document.write("<h1>Hello World</h1>");
 
</script>
Last line

<script>
  console.log("Hello World");
  </script>

// Variables

// variable is a container for information (data)
// four ways to declare a variable
//1. let
//2. const
//3. var <---- don't use
//4. (none)<---- don't use

// difference between let and const
// CONST -> constant: unchangeable
// LET -> can be changed later on

const myName = 'Steph';

let myAge = 36;
// birthday happens and my age will be 37
myAge = 37

// DATA TYPE
// strings: text - has quotation marks

// EXAMPLES: 'Steph' -- 'Hello World'

// boolean: True or False
// number or integer: no quotation marks
// EXAMPLES: 42 --- 12345 -- 0
let x=5
let y=10
// one equal sign is called an ASSIGNMENT OPERATOR
// you are not checking if it's equal, you are giving it value

// let x=5
// let y='5'
// == two equal sign actually evaluates whether something is true 
// (true)
// (x == y) // means LOOSELY equivalent
// x='5' is string
// (x===y) means strictly equivalent. Data types much match 

//JS commands
//  <script>
//      alert('Welcome to hell'); 
//  </script>
//
// How to get input from the user - this will ask a user a question or ask for some input
// prompt('Do you have a job?');
// need a container to store users input so that we can use it later
// const var usersAnswer = prompt('What');

// console.log(usersAnswer);
// console.log('User typed:' + usersAnswer);
// document.write('omg this is so challenging'); use javascript to put something on your actual website
// put the <script> tag inside of the body
// wherever you write document.write is where it will show up in your html page

//prompt then store with a variable
// let usersName = prompt('what is your name?');
// so if I console.log('usersName'); then you can find their input in the console
// How to display the users input
// use document.write('Glad you are here' + usersName)


//CONDITIONAL LOGIC
// if () {}
// if (this is true){execute this code}

//ex let x=5
//let y='5'
// if (x==y) { console.log (yes it is');} 
// else 
// { console.log('not it is not');}


/* function userDetox() {
  let detoxQuestion = prompt('Do you want to join our detox challenge? Answer yes or no.');
  let detoxAnswer = detoxQuestion.toLowerCase();

  // First test case
  if (detoxAnswer == 'yes') {
      let email = prompt('Enter your email address');
      return(email);
  // Second test case if first test case is false
  } else if (detoxAnswer == 'no') {
      let secondAnswer = prompt('Are you sure? Answer yes or no.');
      // Second.5 test case if second case is true
      if (secondAnswer == 'yes') {
          let phoneNumber = prompt('Enter your phone number');
          return(phoneNumber);
      };
  // If none of the test cases are true, then run this. Last resort.
  } else {
      return('Thanks for coming to our page');
  }
}

let returnStatement = userDetox();

console.log(returnStatement);

