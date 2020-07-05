
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var fun:HTMLAudioElement = new Audio("backr.mp3");




window.addEventListener("load", function () {
inputDOMElement = document.querySelector("#inputTodo");
addButtonDOMElement = document.querySelector("#addButton");
todosDOMElement = document.querySelector("#todos");
counterDOMElement = document.querySelector("#counter");
addButtonDOMElement.addEventListener("click", addTodo);
drawListToDOM();
});



function drawListToDOM() {
todosDOMElement.innerHTML = "";
for (let index = 0; index < aufgabenliste.length; index++) {
let todo = document.createElement("div");
todo.classList.add("todo");
todo.innerHTML = "<span class='check " + aufgabenliste[index].erledigt + "'><i class='fas fa-check'></i></span>"
+ aufgabenliste[index].aufgabe +
"<span class='trash fas fa-trash-alt'></span>";
todo.querySelector(".check").addEventListener("click", function () {
toggleCheckState(index);
});
todo.querySelector(".trash").addEventListener("click", function () {
deleteTodo(index);
});
todosDOMElement.appendChild(todo);
}
updateCounter();
}


function updateCounter() {


let erledigteA = 0;
let offeneA = 0; 
for (let index = 0; index < aufgabenliste.length; index++) {
if (aufgabenliste[index].erledigt == true) {
erledigteA++;
}
else {
offeneA++;
}
counterDOMElement.innerHTML = " Aufgaben insgesamt:  "   + aufgabenliste.length +" /"+ " "+" Nicht erledigt: " + offeneA + " /"+" Erledigt:"+" " + erledigteA ;

}
}

function addTodo() {

if (inputDOMElement.value != "") {

aufgabenliste.unshift({ aufgabe: inputDOMElement.value,
    erledigt: false
});

inputDOMElement.value = "";

drawListToDOM();
    }
}

function toggleCheckState(index) {

aufgabenliste[index].erledigt = !aufgabenliste[index].erledigt;
drawListToDOM();
}



let aufgabenliste = [
{ aufgabe: "Mehr Zeit für andere Vorlesungen nehmen",
erledigt: false },

{ aufgabe: "Kühlschrank auffüllen",
erledigt: false },

{ aufgabe: "Aufgabe 9 von Manuel Kommentieren",
erledigt: false }
];


function deleteTodo(index) {

aufgabenliste.splice(index, 1);
 
drawListToDOM();
}

fun.play();