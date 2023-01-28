//Ans 1

// var cityName = prompt("City Name","Enter a City name");
// if (cityName == "Karachi") {
//     document.write("Welcome to the City of lights.");
// }
// else{
//     document.write("No Comments");
// }

//Ans 2

// var gender = prompt("Gender!","Enter your gender type");
// if (gender == "Male") {
//     document.write("Good Morning Sir");
// }
// else if (gender == "Female") {
//     document.write("Good Morning Ma'am"); 
// }
// else{
//     document.write("No Comments");
// }

//Ans 3

// var trafficSignalLit  = prompt("Traffic Signal light","Enter a traffic signal light color");
// if (trafficSignalLit == "Red") {
//     document.write("Must Stop");
// }
// else if (trafficSignalLit == "Yellow") {
//     document.write("Ready to move");
// }
// else{
//     document.write("Move now");
// }

//Ans 4

// var remainingFuel = prompt("Remaining Fuel","Enter the current fuel amount of car in litres");
// if (remainingFuel < 0.25) {
//     document.write("Please refill the fuel in your car");
    
// }
// else{
//     document.write("No need to refill now");
// } 

//Ans 5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

//Ans 6

// var marks1 = +prompt("Percentage Calculator","Enter the marks of first subject");
// var marks2 = +prompt("Percentage Calculator","Enter the marks of second subject");
// var marks3 = +prompt("Percentage Calculator","Enter the marks of third subject");

// var totalMarks = 300;
// var obtainedMarks = marks1+marks2+marks3;
// var percentage = obtainedMarks/totalMarks *100;

// document.write("Total marks: "+totalMarks+"<br>");
// document.write("Marks obtained: "+obtainedMarks+"<br>");
// document.write("Percentage: "+percentage+"<br>");
// if (percentage >= 80) {
//     document.write("Grade: A-one"+"<br>");
//     document.write("Remarks: Excellent");
// }
// else if (percentage >= 70) {
//     document.write("Grade: A"+"<br>");
//     document.write("Remarks: Good");
// }

// else if (percentage >= 60) {
//     document.write("Grade: B"+"<br>");
//     document.write("Remarks: You need to improve");
// }
// else{
//     document.write("Grade: Fail"+"<br>");
//     document.write("Remarks: Sorry");
// }

//Ans 7

// var guess = +prompt("Guess game","Guess the secret number b/w 1-10");
// if (guess == 6) {
//     document.write("Bingo! Correct Answer");
// }
// else if (guess == 7){
//     document.write("Close enough to the correct answer");
// }    
// else if (guess == 5){
//     document.write("Close enough to the correct answer");
// }    
// else{
//     document.write("Oops! not a correct number, better luck nxt time");
// }

//Ans 8

// var number = +prompt("Check a num divisible by 3 or not","Please enter a number");
// var result = number%3;
// if (result == 0) {
//     document.write("The given number is divisible by 3.");
// }
// else{
//     document.write("The given number is not divisible by 3.");
// }

//Ans 9

// var number = +prompt("Check a Number Odd or Even","Please enter a number");
// var result = number%2;
// if (result == 0) {
//     document.write("The given number is Even.");
// }
// else{
//     document.write("The given number is Odd.");
// }

//Ans 10

// var tempReading = +prompt("Wheather Forcast!","Enter a noted temperature reading");
// if (tempReading > 40) {
//     document.write("It is too hot outside");
// }
// else if (tempReading > 30) {
//     document.write("The wheather today is normal");
// }
// else if (tempReading > 20) {
//     document.write("Today's weather is cool");
// }
// else if (tempReading > 10) {
//     document.write("OMG! Today's weather is so cool");
// }

//Ans 11

// var firstNumber = +prompt("Calculator","Enter a first number");
// var operation = prompt("Calculator","Enter a operation which u want to perform");
// var secondNumber = +prompt("Calculator","Enter a second number");


// if (operation == "+") {
//     var result = firstNumber+secondNumber;
//     document.write("Addition operation performed <br>","Result: ",+result);
// }
// else if (operation == "-") {
//     var result = firstNumber-secondNumber;
//     document.write("Subtraction operation performed <br>","Result: ",+result);
// }
// else if (operation == "*") {
//     var result = firstNumber*secondNumber;
//     document.write("Multiplication operation performed <br>","Result: ",+result);
// }
// else if (operation == "/") {
//     var result = firstNumber/secondNumber;
//     document.write("Division operation performed <br>","Result: ",+result);
// }
// else if (operation == "%") {
//     var result = firstNumber%secondNumber;
//     document.write("Mode operation performed <br>","Result: ",+result);
// }
// else{
//     document.write("Syntax Error!");
// }
