function getTargetInputValue() {
    
    // get div container of clicked button
    let test = event.target.parentNode.parentNode.id;
    console.log(test);

    let container = event.target.parentNode.parentNode;
    let input = container.querySelector("input");
    let inputValue = input.value;
    console.log(inputValue);
    
    return inputValue;
}



function passValue() {

    console.log(getTargetInputValue());
    
    var parentContainer = document.getElementById("dataPreviewPanel");
    
    let childContainer = document.createElement("div");
    childContainer.setAttribute("class", "tableSubContainer");
    parentContainer.appendChild(childContainer);
    
    let table = document.createElement("table");
    childContainer.appendChild(table);

    let tr = document.createElement("tr");
    table.appendChild(tr);
    
    let td = document.createElement("td");
    td.setAttribute("class", "columnNameTable");
    
    td.innerHTML =  getTargetInputValue();
    tr.appendChild(td);
}