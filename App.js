// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  onChildAdded,
  onChildRemoved,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu5n_Y-qCPLuG908IQsC86fq5TGdcn-gM",
  authDomain: "assignment-todo-app-20687.firebaseapp.com",
  projectId: "assignment-todo-app-20687",
  storageBucket: "assignment-todo-app-20687.appspot.com",
  messagingSenderId: "595514484436",
  appId: "1:595514484436:web:b2619bc98ca69dd4fefd41",
  measurementId: "G-KSFJQ2S3XB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);




var name = document.getElementById("input");
window.addTodo = function () {
  var obj = {
    name: name.value,
  };
  
  var key = Math.random().toString().slice(2);
  const refrence = ref(db, `todo/${key}`);
  set(refrence,obj)

  .then(function () {
    console.log("Save data Succesfully");
  })
  .catch(function (err) {
    console.log(err);
  })

  name.value = "";
 
};

var todoObj = {};
function getData(){
  const refrence = ref(db, "todo/");
  onChildAdded(refrence, function(dt){
    todoObj = dt.val()

    var li = document.createElement("LI")
    var litext = document.createTextNode(todoObj.name);
    li.appendChild(litext);

    // create delete button
    var delBtn = document.createElement('Delete');
    var delTxt = document.createTextNode('Delete');
    delBtn.setAttribute("class","btnDel");
    delBtn.setAttribute("onclick","deletetodo(this)");
    delBtn.appendChild(delTxt);
    li.appendChild(delBtn)
    list.appendChild(li);

    
    // create delete button
    var editBtn = document.createElement('BUTTON');
    var editTxt = document.createTextNode('edit');
    editBtn.setAttribute("class","btnEdit");
    editBtn.setAttribute("onclick","edit(this)");
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn)
    list.appendChild(li);
    
  })
}
getData()


window.deleteAll = function(){
  const refrence = ref(db,'todo/')
  var newObj = ""
  set(refrence,newObj)
    var list = document.getElementById('list')
    list.innerHTML ="";
}
var keyObj = {};
window.deletetodo = function(element){
  var fkey = document.getElementById('fkey')
  const refrence = ref(db, 'todo');
  onValue(refrence, function(dt){
    keyObj = dt.val()
    keyObj = "Tum Sy Nhi Hoga..."
    fkey.innerHTML = keyObj
    // set(refrence,dt.val())

    element.parentNode.remove();
  })
}
window.edit = function(element){
  element.parentNode.firstChild.nodeValue = prompt();
  const refrence = ref(db,'todo/')
  onChildAdded(refrence,function(dt){
    var edit = dt.val()
    console.log(edit.name = element.parentNode.firstChild.nodeValue)
    set(refrence,edit.name)
  })
}











   





