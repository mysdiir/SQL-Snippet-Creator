var container = document.getElementById("valuePanel");


function placeValuePanel() {
    let btnID = event.target.id;

    let btn = document.getElementById(btnID);
    let btnText = btn.innerText;

    if (btnText.includes("int")) createVARCHAR();
    if (btnText.includes("varchar")) createVARCHAR();
    if (btnText.includes("date")) createDATE();
    
    
    


    
   
}



function createVARCHAR() {

    container.innerHTML = "";

    let inputVARCHAR = document.createElement("input");
    inputVARCHAR.setAttribute("id", "inputVARCHAR");
    inputVARCHAR.setAttribute("name", "inputVARCHAR");

    let btnVARCHAR = document.createElement("button");
    btnVARCHAR.setAttribute("id", "btnVARCHAR");
    btnVARCHAR.setAttribute("name", "btnVARCHAR");
    btnVARCHAR.innerHTML = "Save value";

    container.appendChild(inputVARCHAR);
    container.appendChild(btnVARCHAR);

}

 function createINT() {
    
    container.innerHTML = "";
    
     let inputINT = document.createElement("input");
     inputINT.setAttribute("type", "number");
     inputINT.setAttribute("id", "inputVARCHAR");
     inputINT.setAttribute("name", "inputVARCHAR");

     let btnINT = document.createElement("button");
     btnINT.setAttribute("id", "btnVARCHAR");
     btnINT.setAttribute("name", "btnVARCHAR");
     btnVARCHAR.innerHTML = "Save value";

     container.appendChild(inputINT);
     container.appendChild(btnINT);
 }

function createDATE() {
    container.innerHTML = "";
    
    let inputDATE = document.createElement("input");
    inputDATE.setAttribute("type", "date");
    inputDATE.setAttribute("id", "inputDATE");
    inputDATE.setAttribute("name", "inputDATE");

    let btnDATE = document.createElement("button");
    btnDATE.setAttribute("id", "btnDATE");
    btnDATE.setAttribute("name", "btnDATE");
    btnDATE.innerHTML = "Save value";

    container.appendChild(inputDATE);
    container.appendChild(btnDATE);
}