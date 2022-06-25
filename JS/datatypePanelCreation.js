const valueParent = document.getElementById('valuePanel');


function setUpDataValuePanel() {
    var btnValue = event.target.id;
    
}

function createFormTag() {
    
    
    let innerForm = document.createElement("form");
    innerForm.setAttribute("method", "post");
    innerForm.setAttribute("action", "valueProcession.php")
    innerForm.setAttribute("id", "valueForm")
    valuePanel.appendChild(innerForm);
}


// Chars

    function createChar() {
        
        createFormTag();
        
        let textField = document.createElement("input")
        textField.setAttribute("id", "charTextField");
        
        let charBtn = document.createElement("Button");
        charBtn.setAttribute("id", "charBtn");
        charBtn.innerHTML = "Save value";

        if(document.getElementById("charTextField")) {
            console.log(" ");
        } else {
            valueForm.appendChild(textField);
            valueForm.appendChild(charBtn);
            
        };
    }
    
    function createVarChar() {
        
    }
    
    function createBinary() {
        
    }
    
    function createVarBinary() {
        
    }
    
    function createTinyText() {
        
    }
    
    function createText() {
        
    }
    
    function createMediumText() {
        
    }
    
    function createLongText() {
        
    }

// numeric

    function createBit() {
        
    }
    
    function createTinyInt() {
        
    }
    
    function createBoolean() {
        
    }
    
    function createSmallInt() {
        
    }
    
    function createMediumInt() {
        
    }
    
    function createInt() {
        
    }
    
    function createBigInt() {
        
    }
    
    function createFloat() {
        
    }
    
    function createDouble() {
        
    }
    
    function createDecimal() {
        
    }

// date and time data types

    function createDate() {
        
    }
    
    function createDateTime() {
        
    }
    
    function createTimestamp() {
        
    }
    
    function createYear() {
        
    }
