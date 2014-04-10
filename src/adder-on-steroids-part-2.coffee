#define calculator functions
add = (x ,y) -> x + y
substract = (x ,y) -> x - y
multiply = (x ,y) -> x * y

#define the calculator
process = (func, numbers, initial)->
	result = func initial, numbers.shift(0)  
	
	if numbers.length
		process func, numbers, result
	else 
		result

#Using the calculator
console.log process add, [1, 2, 3, 4, 5], 0   #15 
console.log "------------------"
console.log process substract, [1, 2, 3, 4, 5], 30   #15
console.log "------------------"
console.log process multiply, [1, 2, 3, 4, 5], 1   #120


