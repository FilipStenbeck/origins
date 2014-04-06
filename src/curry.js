var add = function (x, y) {
	if (y) {
		return x + y;
	}
	return function (y) {
		return x + y;
	}
}
 
console.log(add(10, 2)); //No curring going on 

var adder10 = add(10); //Curried functions stored as var
console.log(adder10(2)); 

console.log(add(10)(2)); //Curried function called directly

