var vg_1 = "hw_10_1.json";
vegaEmbed("#hw_10_1", vg_1).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


var vg_2 = "hw_10_2.json";
vegaEmbed("#hw_10_2", vg_2).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


d3.csv("AUS_state_cleaned.csv").then(data => {
    console.log("Loaded data:", data);
});

