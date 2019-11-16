/*****************************************/

//Javascript function which checks if the passed argument is an integer.
var is_integer = function(x) {
	if(isNaN(x)) {
		return false;
	} else {
		return true;
	}
};

/** lecturer solution **/
function is_integer2(n) {
  return typeof(n) == "number" && Math.floor(n) == n;
}

/*****************************************/

//Using the forEach function defined for an array to find the sum of the array of numbers. 
var x = [10, 20, 30, 40];
var total = 0;
function add_all(arr) {
	arr.forEach(function(e) {
		total += e;
	})
	return total;
};
var result = add_all(x);
console.log(result);

/** lecturer solution **/
function add_all(arr) {
  var sum = 0;
  arr.forEach(function(e) {sum += e;});
  return sum;
}


/*****************************************/

//JavaScript program to convert temperatures to and from celsius, fahrenheit. 

//c to f... ℉=(℃*1.8)+32
//f to c... ℃=(℉-32)/1.8

function convertCandF(value, type) {
	var convertedTemp;
	if(type === 'C') {
		convertedTemp = value + " degrees Celsius is " + ((value * 9/5) + 32) + " is degrees Farenheit";
	} else if(type === 'F') {
		convertedTemp = value + " degrees Farenheit is " + ((value - 32) * 5/9) + " is degrees Celsius";
	}
	return convertedTemp;
}
convertCandF(0, 'C');
//output: "0 degrees Celsius is 32 is degrees Farenheit"

/** Problem 3 ** lecturer solution **/
function temp_converter(from, reading) {
  if (from === "celsius") {
	return (reading * 9/5) + 32 + " degree F";
  } else {
	return (reading -32) * 5/9 + " degree celsius";
  }
}

/*****************************************/

//Factorial function that returns the factorial of a given number, n.
var factorial = function(n) {
	var fact = n;
	for(var i = (n-1); i > 1; i--) {
		fact *= i;
	}
	return fact;
}

/** lecturer solution **/
function factorial(n) {
  var fact = 1;
  for (var i=1; i <= n; i++) {
	fact = fact * i;
  }
  return fact;
}

/*****************************************/

//Javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). 

function giveChange(n) {
	var changeArr = [];
	while(n>0) {
		if(n >= 25) {
			changeArr.push(25);
			n -= 25;
		} else if(n>=10) {
			changeArr.push(10);
			n -= 10;
		} else if(n >= 5) {
			changeArr.push(5);
			n -= 5;
		}	
	}
	return changeArr;
}

/** lecturer solution **/
function convert_to_coins(amount) {
  var denominations = [25, 10, 5, 2, 1];
  var curr_denom_index = 0;
  while (amount > 0) {
    while (amount < denominations[curr_denom_index]) {
      curr_denom_index++;
    }
    amount = amount - denominations[curr_denom_index];
    console.log(denominations[curr_denom_index]);
  }
}

//Javascript function which takes a string argument and returns the reversed string.
function reverseString(str) {
	var string = str.split(" ");
	var reverseString = string.reverse();
	string = reverseString.join(" ");
	return string;
}

function isPalindrome(str) {
	var origString, splitStr, reverseStr, joinStr, checkPal;
	origString = str.toLowerCase();
	splitStr = str.split("");
	reverseStr = splitStr.reverse();
	joinStr = reverseStr.join("");
	checkPal = joinStr.toLowerCase();
	console.log(origString);
	console.log(checkPal);
	return (checkPal === origString);
}

isPalindrome('hello');
isPalindrome('kayak');

//Comparator function to sort a javascript array of objects.
var arrObjs = [
	{radius: 5, name: 'Pete'}, 
	{radius: 9, name: 'Bob'}, 
	{radius: 2, name: 'Jim'}
];

function sortArrObjsString(arr) {
	arr.sort(function(a, b) {
		if (a.name == b.name) {
        return 0;
    } else {
        return a.name < b.name ? -1 : 1;
    }
	});
}

function sortArrObjsNum(arr) {
	arr.sort(function(a, b) {
		//ascending
		return a.radius-b.radius;
		//descending
		//return b.radius-a.radius;
	});				
}

//Javascript function which takes an array (in this case a sparse array) as argument and returns the number of elements in that array (as opposed to the array.length method).

var testArray = [1, 2, 3, 4, undefined];
testArray[9] = 9; 
//(10) [1, 2, 3, 4, undefined, empty × 4, 9]
function lengthOfArray(arr) {
    var result = [];
    for(var i in arr) {
        result.push(arr[i]);
    }
    return result.length;
}
lengthOfArray(testArray);
// output: 6

/******************************************/
//Constructor functions and prototype
/******************************************/

function Circle(r) {
	this.radius = r;
	//this.area = function() {return Math.PI * this.radius * this.radius}; - added with prototype below instead
}
var c1 = new Circle(2);

Circle.prototype.area = function() {
	return Math.PI * this.radius * this.radius;
}
var c2 = new Circle(3);
c1.area();
c2.area();

/******************************************/

function Shape() {
	this.area = function() {
		return 'You need to implement this!';
	}
}
function Square(length) {
	this.length = length;
	this.area = function() {
		return this.length * this.length;
	}
}
function Rectangle(height, width) {
	this.height = height;
	this.width = width;
}
Square.prototype = new Shape();
new Square(2).area();
//output: 4
Rectangle.prototype = new Shape();
new Rectangle(4, 6).area();
//output: "You need to implement this!"

function Rectangle(height, width) {
	this.height = height;
	this.width = width;
	this.area = function() {
		return this.height * this.width;
	}
}
new Rectangle(4, 6).area();
//output: 24

/******************************************/

//Write a constructor function to represent a Rectangle, which can calculate its area and perimeter.
//area = width x length, perimeter = 2(length x width)

function Rectangle(l, w) {
	this.length = l;
	this.width = w;
	this.area = function() {
		return this.length * this.width;
	}
	this.perimeter = function() {
		return 2 * (this.length * this.width);
	}
}
var rect1 = new Rectangle(2, 2);
rect1.area(); //4
rect1.perimeter(); //8

/******************************************/

//Javascript Constructor function evaluates the distance from another point. 

function Point(lat1, lon1) {
	this.lat1 = lat1;
	this.lon1 = lon1;
	this.goSomewhere = function(lat2, lon2) {
		var R = 6371; //km - use 3,958.8 for miles
		var dLat = deg2rad(lat2-lat1);
		var dLon = deg2rad(lon2-lon1);
		var a = 
			 Math.sin(dLat/2) * Math.sin(dLat/2) +
			 Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
			 Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c;
		return d;
	}
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

var letsGo = new Point(51.5048, -0.1235);
letsGo.goSomewhere(51.5033, -0.0720);