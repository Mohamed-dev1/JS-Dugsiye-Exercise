//Exercise 34
//add and remove
let list = document.getElementById(`list`);
console.log(list);
function addNewiemt() {
  
  let newItem = document.createElement(`li`);
  newItem.textContent = "new item";

  list.appendChild(newItem);
}

function removeItem() {
    if(list.lastChild){
list.removeChild(list.lastChild);
    }else{
        alert("waa lagu kala baxey")
    }
  
  
}
