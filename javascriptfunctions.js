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