-module(football).
-compile([debug_info]).
-export([data/0, nameFromLeage/1, onlySvenska/1,getLeagues/0]).

data() -> 
	[{league, 'Superettan'}, 
	{league,'Superettan'}, 
	{league,'Superettan'}, 
	{league,'Allsvenskan'}, 
	{league,'Veikkausliiga'}, 
	{league,'Division 1 Norra'}].


%football:nameFromLeage(football:data()).
nameFromLeage(List) ->
	lists:map(fun(A) -> element(2,A) end, List).

onlySuperEttan(List) -> 
	[X || X <- List, X =:= 'Superettan'].  

onlyAllsvenskan(List) -> 
	[X || X <- List, X  =:= 'Allsvenskan'].  

onlyDivEttNorra(List) -> 
	[X || X <- List, X  =:= 'Division 1 Norra'].

%football:onlySvenska(football:nameFromLeage(football:data())).
onlySvenska (List) ->
	onlySuperEttan(List) ++ onlyAllsvenskan(List) ++ onlyDivEttNorra(List). 

onlyOne (List) ->
	lists:usort(List).

getLeagues() ->
	onlyOne(football:onlySvenska(football:nameFromLeage(football:data()))).
