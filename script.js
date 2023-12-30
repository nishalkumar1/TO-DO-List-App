const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

// code for a kick function

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);


function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// code for - No close the data after page is refreshing 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();