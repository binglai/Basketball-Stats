var prompt = require('request').prompt;

var text = [{"position": "F", "freeThrowsAttempted": 9, "defensiveRebounds": 9, "offensiveRebounds": 1, "threesMade": 3, "turnovers": 1, "freeThrowsMade": 8, "assists": 5, "threesAttempted": 9, "fieldGoalsMade": 10, "fieldGoalsAttempted": 21, "name": "L. James", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "R. Lewis", "steals": 0, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 7, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 5, "fieldGoalsMade": 6, "fieldGoalsAttempted": 14, "name": "C. Bosh", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 4, "defensiveRebounds": 3, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 3, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 4, "fieldGoalsAttempted": 12, "name": "D. Wade", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 4, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 4, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 1, "fieldGoalsAttempted": 8, "name": "R. Allen", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "S. Battier", "steals": 1, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 5, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "C. Andersen", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "N. Cole", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "U. Haslem", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 3, "defensiveRebounds": 1, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 1, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 4, "fieldGoalsAttempted": 7, "name": "M. Beasley", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Chalmers", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "J. Jones", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "T. Douglas", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 8, "offensiveRebounds": 2, "threesMade": 3, "turnovers": 3, "freeThrowsMade": 5, "assists": 2, "threesAttempted": 4, "fieldGoalsMade": 7, "fieldGoalsAttempted": 10, "name": "K. Leonard", "steals": 1, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 6, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 5, "fieldGoalsAttempted": 10, "name": "T. Duncan", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 8, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 2, "freeThrowsMade": 0, "assists": 6, "threesAttempted": 3, "fieldGoalsMade": 2, "fieldGoalsAttempted": 7, "name": "B. Diaw", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 0, "fieldGoalsAttempted": 5, "name": "D. Green", "steals": 2, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 1, "fieldGoalsMade": 7, "fieldGoalsAttempted": 18, "name": "T. Parker", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 4, "offensiveRebounds": 0, "threesMade": 3, "turnovers": 2, "freeThrowsMade": 4, "assists": 4, "threesAttempted": 6, "fieldGoalsMade": 6, "fieldGoalsAttempted": 11, "name": "M. Ginobili", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "T. Splitter", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 5, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 8, "fieldGoalsMade": 6, "fieldGoalsAttempted": 10, "name": "P. Mills", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "M. Bonner", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Belinelli", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "J. Ayres", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "C. Joseph", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 2, "defensiveRebounds": 0, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "A. Baynes", "steals": 0, "team": "Spurs"}];
var string = JSON.stringify(text);
var jsonObject = JSON.parse(string);


var request = require('request');
console.log("Start");
request('http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-06-15-heat-spurs.json', function (error, response, body) {
    // just print out the first 30 characters of the response body
    //console.log(body.slice(0, 30)) 
})
request('http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-04-09-thunder-clippers.json', function (error, response, body) {
    // just print out the first 30 characters of the response body
    //console.log(body.slice(0, 30)) 
})

console.log("Done!");

//Final Score

var Team1 = "Heat";
var Team2 = "Spurs";

function sum(arr) {
	var total = arr.reduce(function(sum, val) { return sum + val}); 
	return (total);
}

function heat(name) {return name.team == 'Heat';}
function spurs(name) {return name.team == 'Spurs';}
function threePointers(name) {return (name.threesMade) * 3;}
function twoPointers(name) {return (name.fieldGoalsMade - name.threesMade) * 2;}
function onePointers(name) {return name.freeThrowsMade;}

var Score1 = sum(jsonObject.filter(heat).map(threePointers)) + sum(jsonObject.filter(heat).map(twoPointers)) + sum(jsonObject.filter(heat).map(onePointers));

var Score2 = sum(jsonObject.filter(spurs).map(threePointers)) + sum(jsonObject.filter(spurs).map(twoPointers)) + sum(jsonObject.filter(spurs).map(onePointers));

console.log("Final Score: " + Team1 + " " +  Score1 + ", " + Team2 + " " + Score2);
console.log("=====");

//Player With Highest Percentage of Points From Three Pointers

function playerThreePoints(name) {return name.threesMade;} 

var percentage = 0;
var three = 0;
var two = 0;
var one = 0;
var total = 0;
var maxPlayer;
var perArray = [];
var mapOfPlayerThrees = jsonObject.filter(threePointers);
var big = 0;
var np;

for (var i = 0; i < mapOfPlayerThrees.length; i++)
	{
		//sum EACH PLAYERS three pointers, two pointers, and one pointers
		np = mapOfPlayerThrees[i].name;

		three = ((mapOfPlayerThrees[i].threesMade)) * 3;
		two = ((mapOfPlayerThrees[i].fieldGoalsMade - mapOfPlayerThrees[i].threesMade)) * 2;
		one = ((mapOfPlayerThrees[i].freeThrowsMade)) * 1;

		total = ( three + two + one);
		percentage = (three/total);

		if (percentage < 1)
		{
			perArray.push(percentage);
	}
}			
console.log("* Player with highest percentage of points from three pointers: " + np);

//Team With Most Rebounds

function heatRebounds(name) {return name.offensiveRebounds + name.defensiveRebounds;}
function spursRebounds(name) {return name.offensiveRebounds + name.defensiveRebounds;}

var sumHeatRebound = sum(jsonObject.filter(heat).map(heatRebounds));
var sumSpursRebound = sum(jsonObject.filter(spurs).map(heatRebounds));

if (sumSpursRebound > sumHeatRebound){
	console.log("* Team with most rebounds: " + Team2 + " with " + sumSpursRebound);
}
else
{
	console.log("* Team with most rebounds: " + Team1 + " with " + sumHeatRebound);
}

//Non Guard Player With Most Assists

function notGuardName(name) {
	if (name.position != 'G')
		{
			return name.name
		};
}
function grabAssists(name) { return name.assists;}//grab assists that are greater than 0
function playerName(name) { return name.name;}

var mapOfNonGuards = jsonObject.filter(notGuardName); //return map of data for players that position is not G

//grab assists for each player
var mapOfNonGuardsAssists = jsonObject.filter(notGuardName).map(grabAssists);
var mapOfNonGuardsNames = jsonObject.filter(notGuardName).map(playerName);

var assistsNotZero = [];
var assistsNotZeroName = [];
//iterate through array
for (var i = 0; i < mapOfNonGuardsAssists.length; i++)
{	
	if (mapOfNonGuardsAssists[i] > 0)
	{
		assistsNotZero.push(mapOfNonGuardsAssists[i]);
		assistsNotZeroName.push(mapOfNonGuardsNames[i]);
	}
}	

var mostAssists = 0;
var mostAssistsName;
for (var j = 0; j < assistsNotZero.length; j++)
{
	if (assistsNotZero[j] > mostAssists)
	{
		mostAssists = assistsNotZero[j];
		mostAssistsName = assistsNotZeroName[j];
	}
}
	console.log("* Non guard player with the most assists: " + mostAssistsName +" with " + mostAssists);

//Players With More Turnovers Than Assists
function grabTurnovers(name) { return name.turnovers;}
var playerTurnovers = jsonObject.filter(playerName).map(grabTurnovers);
var playerAssists = jsonObject.filter(playerName).map(grabAssists);
var hisName = jsonObject.filter(playerName).map(playerName);

var x_hisName = [];

for (var i = 0; i < playerTurnovers.length; i++)
{
	if (playerTurnovers[i] > playerAssists[i])
	{
			//push player name at that position into array for names
			x_hisName.push(hisName[i]);
	}
}

console.log("* Players with more turnovers than assists: ");
x_hisName.forEach(function(x) {
    console.log(x);
});

//PART 3
//Setup for Retrieving JSON
