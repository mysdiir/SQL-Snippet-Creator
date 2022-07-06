    function resetParentPanel() {
        let parentDIV = document.getElementById("valuePanel");
        parentDIV.innerHTML = "";
    }

    function getDatatypeNameAndremoveClips() {

        // get btnID
        let btnID = event.target.id;

        // get text value of btn text
        let btnValue = document.getElementById(btnID).innerText;
        
        //console.log(typeof btnValue);
        
        //      false                   false                           false
        if ((btnValue !== "date") && (btnValue !== "datetime") && (btnValue !== "time" )) {
            // remove clips with length (exclusivley text based) [ int(11) => int ]
            var reducedBtnValue = btnValue.substring(0, btnValue.length - 4);
            return reducedBtnValue;
        } if ((btnValue === "date") || (btnValue === "datetime") || (btnValue == "time" )){
            var reducedBtnValue = btnValue;
            return reducedBtnValue;
            
        }
        
    }
    
    function setUpDataValuePanel() {

        var reducedBtnValue = getDatatypeNameAndremoveClips();
        
        switch (reducedBtnValue) {
            case "int":     createIntegralNumber();
                            break;
            case "varchar": createText();
                            break;
            case "date":    createDate();
                            break;
            case "time":    createTime() ;
                            break;
            default:        break;
        }
    }   
        
    function createFormTag() {
    
        let innerForm = document.createElement("div");
        //innerForm.setAttribute("method", "post");
        //innerForm.setAttribute("action", "valueProcession.php")
        innerForm.setAttribute("id", "valueForm")
        valuePanel.appendChild(innerForm);
     
    }

    function createText() {

        resetParentPanel();
        createFormTag();
        
        let textField = document.createElement("input")
        textField.setAttribute("id", "charTextField");
        textField.setAttribute("name", "dataValue");
        
        let charBtn = document.createElement("Button");
        charBtn.setAttribute("id", "charBtn");
        charBtn.setAttribute("onclick", "getID()");
        charBtn.innerHTML = "Save value";

        if(!document.getElementById("charTextField")) {
            valueForm.appendChild(textField);
            valueForm.appendChild(charBtn);
            
        }
    }
    
    function createIntegralNumber() {

        resetParentPanel();
        createFormTag();
        
        let numberField = document.createElement("input");
        numberField.setAttribute("type", "number");
        numberField.setAttribute("id", "numberField");
        numberField.setAttribute("name", "dataValue");
       
        let numberBtn = document.createElement("Button");
        numberBtn.setAttribute("id", "numberFieldBtn");
        numberBtn.setAttribute("onclick", "");
        numberBtn.innerHTML = "Save value";
                
        if (!document.getElementById("numberField")) {
            valueForm.appendChild(numberField);
            valueForm.appendChild(numberBtn);
            
        }
   }
   
    function createFloatingPointNumber() {
    
       createFormTag();

       let number = document.createElement("input");
       number.setAttribute("type", "number");
       number.setAttribute("id", "floatPreDottedField");
       number.setAttribute("name", "dataValue");
        
       let decimal = document.createElement("input");
       decimal.setAttribute("type", "number");
       decimal.setAttribute("id", "floatPostDottedField");
       decimal.setAttribute("name", "dataValue");

       let floatingPointBtn = document.createElement("Button");
       floatingPointBtn.setAttribute("id", "numberFieldBtn");
        floatingPointBtn.setAttribute("onclick", "getID()");
       floatingPointBtn.innerHTML = "Save value";
       
       if (document.getElementById("numberField") && 
           document.getElentById("floatingField")) {
           console.log("");
       } else {
           valueForm.appendChild(number);
           valueForm.appendChild(decimal);
           valueForm.appendChild(floatingPointBtn);
       }
   }
   
    function createDate() {
       
        resetParentPanel();
        createFormTag() 
       
        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.setAttribute("id", "dateField");
        date.setAttribute("name", "dataValue");
        
        let dateBtn = document.createElement("button");
        dateBtn.setAttribute("id", "dateBtn");
        dateBtn.setAttribute("onclick", "getID()");
        dateBtn.innerHTML = "Save value";
        
        if (!document.getElementById("dateField")) {
            valueForm.appendChild(date);
            valueForm.appendChild(dateBtn)
            
        }
   }
   
    function createDatetime() {
    
        createFormTag();
        
        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.setAttribute("id","dateField");
        date.setAttribute("name", "dataValue");
        
        let time = document.createElement("input");
        time.setAttribute("type", "time");
        time.setAttribute("id","timeField");
        time.setAttribute("name","dataValue");
        
        let datetimeBtn = document.createElement("button");
        datetimeBtn.setAttribute("id", "datetimeBtn");
        datetimeBtn.setAttribute("onclick", "test()");
        datetimeBtn.innerHTML = "Save value";
        
        if (!document.getElementById("datetimeField")) {
            console.log("");
        } else {
            valueForm.appendChild(date);
            valueForm.appendChild(time);
            valueForm.appendChild(datetimeBtn);
        }
   }

    function createTime() {

        resetParentPanel();
        createFormTag();

        let hours = document.createElement("input");
        hours.setAttribute("type", "number");
        hours.setAttribute("id", "hoursField");
        hours.setAttribute("name", "dataValue");

        let seperator =document.createElement("p");
        seperator.innerHTML = ":";

        let minutes = document.createElement("input");
        minutes.setAttribute("type", "number");
        minutes.setAttribute("id", "minutesField");
        minutes.setAttribute("name", "dataValue");

        let timeBtn = document.createElement("button");
        timeBtn.setAttribute("id","timeBtn");
        timeBtn.setAttribute("onclick", "getID()");
        timeBtn.innerHTML = "Save value";

        if (!document.getElementById("timeField")) {
            console.log("timeField doesn't exsist so I create one")
            valueForm.appendChild(hours);
            valueForm.appendChild(seperator)
            valueForm.appendChild(minutes);
            valueForm.appendChild(timeBtn)
            
        }

    }

   
   
   
    