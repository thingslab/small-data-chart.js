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