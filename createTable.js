function getColumnNameByTextField() {
    var columnName = document.getElementById('addColumnTextField').value;
    return columnName;
}

function getDatatypeByDropDown() {
    var datatype = document.getElementById('datatypeDropDown').value;
    return datatype;
}

function creteNewTable() {

    var givenParentContainer = document.getElementById('tablePanel');
    var cssClassName = 'shownTable';


    var currentElement = document.getElementById(getColumnNameByTextField() + 
    '_div');
    
     // check if column exists
    if (currentElement !== null ) {
        alert("Warning! Column already exists")
    } else {

        // create div   
        var newDIV = document.createElement('div');
        newDIV.setAttribute('id', getColumnNameByTextField() + '_div');
        newDIV.setAttribute('class', 'testDIV'),
        givenParentContainer.appendChild(newDIV);

        // create table
        var newTable = document.createElement('table');
        newTable.setAttribute('id', getColumnNameByTextField() + '_table');
        newTable.setAttribute('class', 'shownClass'),
        newDIV.appendChild(newTable);

        // create tr
        var newTableRow = document.createElement('tr');
        newTableRow.setAttribute('id', getColumnNameByTextField() + '_tr');
        newTableRow.setAttribute('class', 'shownClass'),
        newTableRow.setAttribute('onclick', 'addDatatypePanel()');
        newTableRow.innerHTML = getColumnNameByTextField();
        newTable.appendChild(newTableRow);

        // create td
        var newTableData = document.createElement('td');
        newTableData.setAttribute('id', getColumnNameByTextField() + '_td');
        newTableData.setAttribute('class', 'shownClass'),
        newTableData.setAttribute('onclick', 'addDatatypePanel()');
        newTableData.innerHTML = getDatatypeByDropDown();
        newTable.appendChild(newTableData);

    }
}

function addDatatypePanel() {

    var $test;
    var $datatype;

    // get ID of clicked element
    $(document).ready(function(){
        $('td').click(function(event) {
            $test = $(event.target);
            $test = $(this).attr('id');
            console.log($test);
            
        })   
    });

    // get text of clicked element
    $(document).ready(function(){
        $('td').click(function(event) {
            $datatype = $(event.target);
            $datatype = $(this).text();
            console.log($datatype);

        })
    });
    


}

