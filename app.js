
function addtodo(){

var input = document.getElementById("todo");
// console.log(input.value);

 var list = document.createElement("li");
console.log(list);

 var liItem = document.createTextNode(input.value);
//  console.log(liItem);

 list.appendChild(liItem);

//  --------------DeleteButton--------------

var dBtn = document.createElement("button");

var dText = document.createTextNode("X");

dBtn.appendChild(dText);

dBtn.setAttribute("onclick", "del(this)")

dBtn.setAttribute("class", "btn1");

list.appendChild(dBtn);


//  -------------Edit Button--------------

var editBtn = document.createElement("button");

var editText = document.createTextNode("Edit");

editBtn.appendChild(editText);

editBtn.setAttribute("onclick", "edt(this)");

editBtn.setAttribute("class", "btn2");

list.appendChild(editBtn);
 
var item = document.getElementById("listItems");

item.appendChild(list);

console.log(item);

input.value = "";
}

function deleteAll(){
    var item = document.getElementById("listItems");
    // item.innerHTML="";                 ///first method for Delete All
    item.remove();                         ///// second method for delete all
}

function del(x){ 
  console.log(x.parentNode.remove());
}

function edt(x) {

var inputField = prompt("Enter Your Updated Value");
if (inputField !== null) { 
  x.parentNode.firstChild.nodeValue = inputField;
  console.log(inputField);
}
   
}