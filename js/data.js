var engineeringWorkforce = [
    {
        value: 7,
        color: "rgba(255,0,0,1)",
        highlight: "rgba(255,0,0,0.6)",
        label: 'Females'
    },
    {
        value: 93,
        color: 'rgba(0,255,0,1)',
        highlight: 'rgba(0,255,0,0.6)',
        label: 'Males'
    }
];

var professionsData = {
    labels: ["App Development","Electrical Engineering","Aeronautical Engineering", "Computer Programming","Babysitting", "Hairdressing","Nursery","Teaching"],
    datasets: [
        {
            label: "Women",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [1,1,8,10,93,89,48]
        },
        {
            label: "Men",
            fillColor: "rgba(150,150,150,0.2)",
            strokeColor: "rgba(150,150,150,1)",
            pointColor: "rgba(150,150,150,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(150,150,150,1)",
            data: [99,99,92,90,7,11,52]
        }
    ]
};

var onlineGames= {
    labels: ["players","game designers","programmers", "graphic designers"],
    datasets: [
        {
            label: "Women",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [45,11,3,60]
        },
        {
            label: "Men",
            fillColor: "rgba(150,150,150,0.2)",
            strokeColor: "rgba(150,150,150,1)",
            pointColor: "rgba(150,150,150,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(150,150,150,1)",
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
        fillColor: "rgba(200,200,200,1)",
        strokeColor: "rgba(250,250,250,1)",
        pointColor: "rgba(220,220,220,0.5)",
        pointHighlightFill: "rgba(200,200,200,0.2)",
        pointHighlightStroke: "rgba(250,250,250,0.2)",
        pointStrokeColor: "rgba(150,150,150,1)",
        data: [66,50,10,1]
    },
    {
        label: "Men",
        fillColor: "rgba(210,210,210,1)",
        strokeColor: "rgba(260,260,260,1)",
        pointColor: "rgba(230,230,230,0.5)",
        pointHighlightFill: "rgba(210,210,210,0.2)",
        pointHighlightStroke: "rgba(260,260,260,0.2)",
        pointStrokeColor: "rgba(160,160,160,1)",
        data: [34,50,90,99]


    }
   ]
}