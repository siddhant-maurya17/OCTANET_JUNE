/*Duty is to get the input field value and add to the list*/



const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

// addTask function activated when button perform onclick

function addTask(){
    // variable inputBox is connected with DOM now we check it's value if it is empty we show alert 
    if(inputBox.value===''){
        alert("You must write something!");
    }

    // otherwise we create li element and add input box value to li ,lastlly append to it's child
    else{
       let li =document.createElement("li");
       li.innerHTML=inputBox.value;
       listContainer.appendChild(li);
    
    //on other side we create a span to put a close icon
       let span= document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span);
    }
    //when we clicked on button, list added to the todo-list and input field got clear
    inputBox.value='';

    // Now when i refresh and came back to my page I don't waana see that previous data got diminished it must be there
    // so we store in local storage and call saveData function
    saveData();
}

//A function must be there, when i completed my work i can cut that todo
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//function is added to set data in local storage!
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//function is added to get data in local storage!
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();