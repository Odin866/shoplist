var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var clear = document.getElementById("clearList");
var complete = document.getElementById("shoppingList");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    var btnDelete = document.createElement("button")
    btnDelete.setAttribute("id", "btnDelete");
    btnDelete.innerHTML = "Delete";
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(btnDelete);
    input.value ="";
    btnDelete.addEventListener("click", deleteFromList)
}

function deleteFromList(){
    var delBtn = event.target.parentNode;
    delBtn.parentNode.removeChild(delBtn);
}
function addListAfterCLick(){
    if( inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeyPress(event){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

function clearList(){
    document.querySelector("ul").innerHTML = "";
}

function done(){
    //document.querySelector("li").classList.toggle("done");
    event.target.classList.toggle("done")
    
}
    
button.addEventListener("click", addListAfterCLick)

input.addEventListener("keypress", addListAfterKeyPress)

clear.addEventListener("click", clearList)

complete.addEventListener("click", done)