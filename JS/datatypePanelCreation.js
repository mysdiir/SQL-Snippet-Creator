    const valueParent = document.getElementById('valuePanel');

    function resetParentPanel() {
        let parentDIV = document.getElementById("valuePanel");
        parentDIV.innerHTML = "";
    }


    function removeBraketsOfDatatype() {

        // get btnID
        let btnID = event.target.id;

        // get text value of btn text
        let btnValue = document.getElementById(btnID).innerText;
        
        //console.log(typeof btnValue);
        
        if ((btnValue !== "date") || !(btnValue !== "datetime")) {
            // remove clips with length (exclusivley text based) [ int(11) => int ]
            var reducedBtnValue = btnValue.substring(0, btnValue.length - 4);
            return reducedBtnValue;
        } if ((btnValue === "date") || (btnValue === "datetime")){
            var reducedBtnValue = btnValue;
            return reducedBtnValue;
            
        }
        
    }
    
    
    function setUpDataValuePanel() {

        var reducedBtnValue = removeBraketsOfDatatype();
        switch (reducedBtnValue) {
            case "int":     createIntegralNumber();
                            break;
            case "varchar": createText();
                            break;
            case "date":    createDate();
            default:        break;
        }
    }   
        
    function createFormTag() {
    let innerForm = document.createElement("form");
    innerForm.setAttribute("method", "post");
    innerForm.setAttribute("action", "valueProcession.php")
    innerForm.setAttribute("id", "valueForm")
    valuePanel.appendChild(innerForm);
}


    function createText() {

        resetParentPanel();      
        createFormTag();
        
        let textField = document.createElement("input")
        textField.setAttribute("id", "charTextField");
        textField.setAttribute("name", "charTextField");
        
        let charBtn = document.createElement("Button");
        charBtn.setAttribute("id", "charBtn");
        charBtn.innerHTML = "Save value";

        let testbox = document.createElement("p");
        testbox.innerHTML = "text field";

        if(!document.getElementById("charTextField")) {
             valueForm.appendChild(textField);
            valueForm.appendChild(charBtn);
            valueForm.appendChild(testbox);
        }
    }
    
    
    function createIntegralNumber() {

        resetParentPanel();
        createFormTag();
        
        let numberField = document.createElement("input");
        numberField.setAttribute("type", "number");
        numberField.setAttribute("id", "numberField");
        numberField.setAttribute("name", "numberField");
        
        let numberBtn = document.createElement("Button");
        numberBtn.setAttribute("id", "numberFieldBtn");
        numberBtn.innerHTML = "Save value";
        
        let testbox = document.createElement("p");
        testbox.innerHTML = "integral number field";
        
        if (!document.getElementById("numberField")) {
            valueForm.appendChild(numberField);
            valueForm.appendChild(numberBtn);
            valueForm.appendChild(testbox);
        }
   }
   
    function createFloatingPointNumber() {
    
       createFormTag();

       let number = document.createElement("input");
       number.setAttribute("type", "number");
       number.setAttribute("id", "floatPreDottedField");
       number.setAttribute("name", "floatPreDottedField");
        
       let decimal = document.createElement("input");
       decimal.setAttribute("type", "number");
       decimal.setAttribute("id", "floatPostDottedField");
       decimal.setAttribute("name", "floatPostDottedField");

       let floatingPointBtn = document.createElement("Button");
       floatingPointBtn.setAttribute("id", "numberFieldBtn");
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
        date.setAttribute("name", "dateField");
        
        let dateBtn = document.createElement("button");
        dateBtn.setAttribute("id", "dateBtn");
        dateBtn.innerHTML = "Save value";

        let testbox = document.createElement("p");
        testbox.innerHTML = "date field";
        
        if (!document.getElementById("dateField")) {
            valueForm.appendChild(date);
            valueForm.appendChild(dateBtn)
            valueForm.appendChild(testbox);
        }
   }
   
    function createDatetime() {
    
        createFormTag();
        
        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.setAttribute("id","dateField");
        date.setAttribute("name", "datetimeField");
        
        let time = document.createElement("input");
        time.setAttribute("type", "time");
        time.setAttribute("id","timeField");
        time.setAttribute("name","timeField");
        
        let datetimeBtn = document.createElement("button");
        datetimeBtn.setAttribute("id", "datetimeBtn");
        datetimeBtn.innerHTML = "Save value";
        
        if (document.getElementById("datetimeField")) {
            console.log("");
        } else {
            valueForm.appendChild(date);
            valueForm.appendChild(time);
            valueForm.appendChild(datetimeBtn);
        }
   }

    function setTimestamp() {

        let timestamp = Date.now();
        let date = new Date(timestamp);

        let hours = date.getHours();
        if (hours < 10 ) hours = "0" + hours;

        let minutes = date.getMinutes();
        if (minutes < 10 ) minutes = "0" + minutes;

        let seconds = date.getSeconds();
        if (seconds < 10 ) seconds = "0" + seconds;

        timestamp = hours + ":" + minutes + ":" + seconds;
        return timestamp;
    }
   
    function createTimestamp() {
    
        cerateFormTag();
        
        let currentTimeBtn = document.creteElement("button");
        currentTimeBtn.setAttribute("id","currentTimeBtn");
        currentTimeBtn.setAttribute("name", "currentTimeBtn");
        currentTimeBtn.setAttribute("onclick","setTimestamp()");
        
        if (document.getElementById("currentTimeBtn")) {
            console.log("");
        } else {
            valueForm.appendChild(currentTimeBtn);
        }
   }
   
    function createDay() {
    
       createFormTag();
        
       let day = document.createElement("input");
       day.setAttribute("type", "number");
       day.setAttribute("id","dayField");
       day.setAttribute("min", "1910");
       day.setAttribute("max", "2100");
       day.setAttribute("value", "2022");
       
       let dayBtn = document.createElement("button");
       dayBtn.setAttribute("id","dayBtn");
       dayBtn.innerHTML = "Save Value";
       
       if(document.getElementById("dayField")) {
           console.log("");
       } else {
           valueForm.appendChild(day);
           valueForm.appendChild(dayBtn);
       }
   }

    function createWeek() {
    
        createFormTag();
    
        let week = document.createElement("input");
        week.setAttribute("type", "number");
        week.setAttribute("id", "weekField");
        week.setAttribute("min", "1");
        week.setAttribute("max", "52");
    
    
        let weekBtn = document.createElement("button");
        weekBtn.setAttribute("id", "weekBtn");
        weekBtn.innerHTML = "Save Value";
    
        if (document.getElementById("weekField")) {
            console.log("");
        } else {
            valueForm.appendChild(week);
            valueForm.appendChild(weekBtn);
        }
    }

    function createMonth() {
    
        createFormTag();
    
        let month = document.createElement("input");
        month.setAttribute("type", "number");
        month.setAttribute("id", "monthField");
        month.setAttribute("min", "1");
        month.setAttribute("max", "12");
    
    
        let monthBtn = document.createElement("button");
        monthBtn.setAttribute("id", "weekBtn");
        monthBtn.innerHTML = "Save Value";
    
        if (document.getElementById("monthField")) {
            console.log("");
        } else {
            valueForm.appendChild(month);
            valueForm.appendChild(monthBtn);
        }
    }

    function createYear() {
    
        createFormTag();
    
        let year = document.createElement("input");
        year.setAttribute("type", "number");
        year.setAttribute("id", "yearField");
        year.setAttribute("min", "1910");
        year.setAttribute("max", "2100");
    
    
        let yearBtn = document.createElement("button");
        myearBtn.setAttribute("id", "yearBtn");
        yearBtn.innerHTML = "Save Value";
    
        if (document.getElementById("yearField")) {
            console.log("");
        } else {
            valueForm.appendChild(year);
            valueForm.appendChild(yearBtn);
        }
    } 
    
    
    function createBoolean() {
        
        createFormTag();
        
        let boolean = document.createElement("input");
        
        boolean.setAttribute("type","checkbox");
        boolean.setAttribute("id","booleanField");
        boolean.setAttribute("name","booleanField");
        
        let booleanBtn = document.createElement("button");
        booleanBtn.setAttribute("id", "booleanFieldBtn");
        booleanBtn.innerHTML = "Save value";
        
        if (document.getElementById("booleanField")) {
            console.log("");
        } else {
            valueForm.appendChild(boolean);
            valueForm.appendChild(booleanBtn);
        }
    }
   