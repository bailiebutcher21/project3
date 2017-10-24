"use strict";

function listName(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("listNameInput").innerHTML.value;
    var node = document.createTextNode(inputValue);
    li.appendChild(node);

    if(inputValue === " "){
        alert("Please Enter Task");
    } else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("listNameInput").value = "";
}



var list = document.querySelector('ul');
document.getElementById("submit-button").addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

    var nodeList = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < nodeList.length; i++){
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        nodeList[i].appendChild(span);

}