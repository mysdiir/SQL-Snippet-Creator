var columnID = null;
var columnValueSettingsPanel = document.getElementById('columnValueSettingsPanel');
var createColumnBtn = document.getElementById('createColumnBtn');

function getColumnNameByTextField() {
    var columnName = document.getElementById('addColumnTextField').value;
    return columnName;
}

function getDatatypeByDropDown() {
    var datatype = document.getElementById('datatypeDropDown').value;
    return datatype;
}

function getID() {

    var id = $(function() {
        $('li').click(function(){
            id = ( $(this).attr('id'));
            return id;
        })
    })

}

function getDatatype() {

    let datatype = document.getElementById(getID());
    datatype = datatype.innerHTML;
    return datatpye;
}


createColumnBtn.addEventListener("click", function(){

    var givenParentContainer = document.getElementById('columnPanel');
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
            newDIV.setAttribute('class', 'ulContainer'),
            givenParentContainer.appendChild(newDIV);        

            // create li
            var newLI = document.createElement('li');
            newLI.setAttribute('id', getColumnNameByTextField() + '_columnName');
            newLI.innerHTML = getColumnNameByTextField();
            newDIV.appendChild(newLI);

            // create li
            var newLI = document.createElement('li');
            newLI.setAttribute('id', getColumnNameByTextField() + '_datatype');
            newLI.setAttribute('onclick', 'toggleValuePanel()');
            newLI.innerHTML = getDatatypeByDropDown();
            newDIV.appendChild(newLI);  
        }      
});

function createDIV(datatype, parentContainer) {
    let newDIV = createElement('div');
    newDIV.setAttribute('id', datatype + 'div');
    parentContainer.appendChild(newDIV);
}

function cerateHeadline(text, datatype, parentContainer) {
    let newHeadline = createElement('h1');
    newHeadline.setAttribute('id', datatype + '_headnline');
    newHeadline.textContent = text;
    parentContainer.appendChild(newHeadline);
}

function createButton(id, buttonText, parentContainer) {
    let newButton = createElement('button');
    newButton.setAttribute('id', id + '_btn');
    newButton.innerHTML = buttonText;
    parentContainer.appendChild(newButton);
}


function createRadioButton(datatype, parentContainer, inputType, rbText) {

    let newRadioButton = createElement('input');
    newRadioButton.setAttribute('type', inputType);
    newRadioButton.setAttribute('id', id);
    newRadioButton.setAttribute('name', rbText);
    newDIV.appendChild(newRadioButton);  
}


function toggleValuePanel() {

    var datatype = getDatatype();

    switch (datatype) {

        case 'boolean':
            createDIV('boolean', 'columnValueSetting');
            cerateHeadline('Boolean', 'boolean_div');
            createRadioButton('boolean_true', 'boolean_div' , 'radio', 'true');
            createRadioButton('boolean_false', 'boolean_div', 'radio', 'false');
            createButton('boolean', 'save', 'boolean_div')

            break;
        default: 
            break;
    }

}


















