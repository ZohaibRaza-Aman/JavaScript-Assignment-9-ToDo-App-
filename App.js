var mainList = document.getElementById('mainList');
var input = document.getElementById('input');
var del = document.getElementById('delete');
function addElem(){
    var li = document.createElement("LI")
    var b = document.createTextNode(input.value);
    li.appendChild(b);
    input.value = "";



    var delBtn = document.createElement('Delete');
    var delTxt = document.createTextNode('Delete');
    delBtn.setAttribute("class","btnDel");
    delBtn.setAttribute("onclick","deletetodo(this)");
    delBtn.appendChild(delTxt);
    li.appendChild(delBtn)
    mainList.appendChild(li);
    console.log(li)

    
    
    var editBtn = document.createElement('BUTTON');
    var editTxt = document.createTextNode('edit');
    editBtn.setAttribute("class","btnEdit");
    editBtn.setAttribute("onclick","edit(this)");
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn)
    mainList.appendChild(li);
    console.log(li)



    mainList.appendChild(li);

}

function deletetodo(element){
    element.parentNode.remove();
}
function edit(element){
    element.parentNode.firstChild.nodeValue = prompt();
}
function deleteAll(){
    mainList.innerHTML = "";
}