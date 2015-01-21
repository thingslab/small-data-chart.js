var pie = document.getElementById("engineering-workforce").getContext("2d");
var engineeringWorkforceChart = new Chart(pie).Pie(engineeringWorkforce);

//try to follow this style
var waterOnEarth = new Chart(document.getElementById("water").getContext("2d"))
                        .Pie(waterData);