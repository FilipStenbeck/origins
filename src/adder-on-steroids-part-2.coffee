## A recursive adder

adder = (numbers, acc) ->
	if numbers?.length
		head =  numbers.shift(0)
		adder numbers, acc + head
	else 
		acc

console.log  adder([1,2,4,5], 0)
console.log "------------------"



## A recursive calculator  

#define calculator functions
add = (x ,y) -> x + y
substract = (x ,y) -> x - y
multiply = (x ,y) -> x * y

#define the calculator
process = (func, numbers, acc)->
	if numbers?.length
		head = numbers.shift(0)   
		acc = func acc, head 
		process func, numbers, acc
	else 
		acc

#Using the calculator
console.log process add, [1, 2, 3, 4, 5], 0   #15 
console.log "------------------"
console.log process substract, [1, 2, 3, 4, 5], 30   #15
console.log "------------------"
console.log process multiply, [1, 2, 3, 4, 5], 1   #120


