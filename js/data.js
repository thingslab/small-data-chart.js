var engineeringWorkforce = [
    {
        value: 7,
        color: "rgba(217,17,107,1)",
        highlight: "rgba(217,17,107,0.6)",
        label: 'Females'
    },
    {
        value: 93,
        color: 'rgba(54,23,179,1)',
        highlight: 'rgba(54,23,179,0.6)',
        label: 'Males'
    }
];

var professionsData = {
    labels: ["App Development","Electrical Engineering","Aeronautical Engineering", "Computer Programming","Babysitting", "Hairdressing","Nursery","Teaching"],
    datasets: [
        {
            label: "Women",
            fillColor: "rgba(217,17,107,0.2)",
            strokeColor: "rgba(217,17,107,1)",
            pointColor: "rgba(217,17,107,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(217,17,107,1)",
            data: [1,1,8,10,93,89,48]
        },
        {
            label: "Men",
            fillColor: "rgba(54,23,179,0.2)",
            strokeColor: "rgba(54,23,179,1)",
            pointColor: "rgba(54,23,179,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(54,23,179,1)",
            data: [99,99,92,90,7,11,52]
        }
    ]
};

var onlineGames= {
    labels: ["players","game designers","programmers", "graphic designers"],
    datasets: [
        {
            label: "Women",
            fillColor: "rgba(217,17,107,0.2)",
            strokeColor: "rgba(217,17,107,1)",
            pointColor: "rgba(217,17,107,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(217,17,107,1)",
            data: [45,11,3,60]
        },
        {
            label: "Men",
            fillColor: "rgba(54,23,179,0.2)",
            strokeColor: "rgba(54,23,179,1)",
            pointColor: "rgba(54,23,179,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(54,23,179,1)",
            data: [55,89,97,40]
        }
    ]
};


var womenData=
{
    labels: ["Work done","Food produced","Revenue acquired", "Properties owned"],
    datasets:[

    {
        label: "Women",
        fillColor: "rgba(217,17,107,1)",
        strokeColor: "rgba(217,17,107,1)",
        pointColor: "rgba(217,17,107,0.5)",
        pointHighlightFill: "rgba(217,17,107,0.2)",
        pointHighlightStroke: "rgba(217,17,107,0.2)",
        pointStrokeColor: "rgba(217,17,107,1)",
        data: [66,50,10,1]
    },
    {
        label: "Men",
        fillColor: "rgba(54,23,179,1)",
        strokeColor: "rgba(54,23,179,1)",
        pointColor: "rgba(54,23,179,0.5)",
        pointHighlightFill: "rgba(54,23,179,0.2)",
        pointHighlightStroke: "rgba(54,23,179,0.2)",
        pointStrokeColor: "rgba(54,23,179,1)",
        data: [34,50,90,99]
    }
   ]
};