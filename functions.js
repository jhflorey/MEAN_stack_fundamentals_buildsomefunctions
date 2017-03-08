// Step 1: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.

function runningLogger(){}
console.log("I am running!");


// Step 2: Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. 
// Give it the name multiplyByTen. Invoke it, passing it the argument 5

var numb = 5;
function multiplyByTen(numb){
	// var numb = 5; 
	if (typeof(numb) == "number"){
	console.log(numb * 10);
	}
}
multiplyByTen(numb);           // output : 50
console.log(typeof(numb));     // output : number


// Step 3: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string

function stringReturnOne(){
	var string = "guinea_pig";
	console.log(string);
}
stringReturnOne();                    // guinea_pig


function stringReturnTwo(){
	var string = "rabit";
	console.log(string);
}
stringReturnTwo();                   // rabit


// Step 4: Write a function named caller that has one parameter. 
// If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.


function caller(param){
	if (typeof(param) == 'function'){
		param();
	}
}
caller(stringReturnOne);               // Output : guinea_pig


// Step 5: Write a function named myDoubleConsoleLog that has two parameters, 
// if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.


function myDoubleConseleLog(param1 , param2){
	if (typeof(param1) == 'function' && typeof(param2) == 'function'){
		return (param1(),  param2());
	}
}
myDoubleConseleLog(stringReturnOne, stringReturnTwo);                            // guinea_pig , rabit



//Step 6: Write a function named caller2 that has one parameter. 
// Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. 
// (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
var stringReturnOne = "guinea_pig";
var stringReturnTwo = "rabit";
var myDoubleConsoleLog = (stringReturnOne, stringReturnTwo);
var param = 'starting';
function caller2(param){
	console.log(param);
	var x = setTimeout(function(){
		if (typeof(param) == 'function'){
			param(stringReturnOne, stringReturnTwo);
		}
	}, 2000);
	console.log('ending');
	console.log("interesting");
}
caller2(param);
caller2(myDoubleConsoleLog);


// out put :

starting
ending
interesting
rabit
ending
interesting





