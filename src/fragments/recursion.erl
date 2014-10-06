-module(recursion).
-export([adder/1, add/2, calculator/2]).
-compile[debug_info].

%%Adder 
adder ([]) -> 0;
adder ([H|[]]) -> H;
adder ([H|T]) -> H + adder(T).


%Add help function
add (X, Y) -> X - Y.

%%Calulator
calculator (Fun,[]) -> 0;
calculator(Fun, [H|[]]) -> H;
calculator(Fun, [H|T]) -> Fun(H, calculator(Fun, T)).


% recursion:calculator(fun recursion:add/2, [1,2,3]).
% recursion:calculator(fun(X,Y) -> X +Y end, [1,2,3]).
