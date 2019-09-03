// from data.js
var tableData = data;
console.log(tableData)

// getting a reference to the button on the page with the id property 'filter-btn'
var filterButton = d3.select("#filter-btn");

// create a click button function

filterButton.on("click", function(){
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log("date value: " + inputValue);
    console.log(tableData);
    // filter data so that the date time entered must equal the input value
    var filteredData = tableData.filter(fData => fData.datetime === inputValue);
    console.log(filteredData);
    // select the tbody
    var inputTbody = d3.select("tbody");

    // Empty the inputTbody 
    inputTbody.html("");
    
    // create grab the value and append the value into the table
  filteredData.forEach((finalData)=>{
        var row = inputTbody.append("tr");
        Object.entries(finalData).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
});