var pie = document.getElementById("engineering-workforce").getContext("2d");
var engineeringWorkforceChart = new Chart(pie).Pie(engineeringWorkforce);

var line= document.getElementById("professions-line").getContext("2d");
var professions = new Chart(line).Line(professionsData);

var bar=document.getElementById("online-games").getContext("2d");
var online= new Chart(bar).Bar(onlineGames);