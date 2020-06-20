var A = new Audio('A.mp3');
var C = new Audio('C.mp3');
var F = new Audio('F.mp3');
var G = new Audio('G.mp3');
var hihat = new Audio('hihat.mp3');
var kick = new Audio('kick.mp3');
var snare = new Audio('snare.mp3');
var laugh1 = new Audio('laugh-1.mp3');
var laugh2 = new Audio('laugh-2.mp3');
/* Version X1
let TestInterval = undefined;
var sounds = ["kick.mp3", "snare.mp3", "hihat.mp3"];
*/
var MyArray = [];
MyArray[0] = A;
MyArray[1] = C;
MyArray[2] = F;
MyArray[3] = G;
MyArray[4] = hihat;
MyArray[5] = kick;
MyArray[6] = snare;
MyArray[7] = laugh1;
MyArray[8] = laugh2;
//hihat.play();
// Aufgabe 7 Ich Frag mich warum er, egal  bei welchem Button alle Töne ausgibt, wenn ich es so gemacht hätte?
/*
function playSample(){

//kick.play();

if (onclick'button') {
A.play();
} else if (onclick'button2') {
  kick.play();
  else if (onclick'button3') {
    C.play();
  }
  else if (onclick'button4') {
    C.play();
  }
} else (onclick 'buttom8') {
laugh1.normalize();
}


}
*/
function playSample(TonNr) {
    MyArray[TonNr].play();
}
//Skript
function Toene() {
    TestInterval = setInterval(function () {
        /* Version X1 Gibt mir nur einen Ton aus
      var zaehler = 0;
      playsample(sounds[zaehler]);
      zeahler += 1;
      if (zaehler >= sounds.length) {
      zaehler = 0;
      }
      */
        kick.play();
        snare.play();
        hihat.play();
    }, 500);
}
//Wie Speichert man die Gedrueckten Sounds in einem Arry?
function rec() {
    var RecArray = [];
}
window.addEventListener('load', function () {
    document.querySelector(".button").addEventListener('click', function () { playSample(0); });
    document.querySelector(".button2").addEventListener('click', function () { playSample(1); });
    document.querySelector(".button3").addEventListener('click', function () { playSample(2); });
    document.querySelector(".button4").addEventListener('click', function () { playSample(3); });
    document.querySelector(".button5").addEventListener('click', function () { playSample(4); });
    document.querySelector(".button6").addEventListener('click', function () { playSample(5); });
    document.querySelector(".button7").addEventListener('click', function () { playSample(6); });
    document.querySelector(".button8").addEventListener('click', function () { playSample(7); });
    document.querySelector(".button9").addEventListener('click', function () { playSample(8); });
    document.querySelector("#myBtn").addEventListener('click', Toene);
    document.querySelector("#rec").addEventListener('click', rec);
}, window.addEventListener('load', function () {
    var btn = document.querySelector('#myBtn');
    btn.addEventListener('click', function () {
        if (btn.getAttribute('class') == 'fas fa-play') {
            btn.setAttribute('class', 'fas fa-stop');
        }
        else {
            btn.setAttribute('class', 'fas fa-play');
            //Version X1 Stop nicht den Interval
            //clearInterval(TestInterval);
        }
    });
}));
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        alert('Undo!');
    }
});
//************************************************************************************* */
//Statment zur Aufgabe
// Nach guten 8-9 Stunden gehen die Funktionen Stopen/Rec leider nicht.
//Bonus ...  eine Version gibt nur den letyten ton aus. die andere Version geht nicht  
//************************************************************************************* */
function runOnKeys(f, ...codes) {
    let arr = [];
    document.onkeydown = e => {
        arr.push(e.code);
        if (codes.sort().join() == arr.sort().join())
            f();
    };
    document.onkeyup = () => arr = [];
}
/* Version A1 Spielt nur das letzte ab "Numpad3" */
runOnKeys(() => playSample(0), "Numpad7");
runOnKeys(() => playSample(1), "Numpad8");
runOnKeys(() => playSample(2), "Numpad9");
runOnKeys(() => playSample(3), "Numpad4");
runOnKeys(() => playSample(4), "Numpad5");
runOnKeys(() => playSample(5), "Numpad6");
runOnKeys(() => playSample(6), "Numpad1");
runOnKeys(() => playSample(7), "Numpad2");
runOnKeys(() => playSample(8), "Numpad3");
/*
Veriosn A2 versteht vermutlich nicht die bedinungen

switch (runOnKeys) {
  case "Numpad7":		// : leitet den Codeblock für den Fall ein, dass der Ausdruck gleich "A" ist
  playSample(0);
    Break;		// Break schließt den Codeblock ab
  case "B":
    Codeblock B;
    Break;
  default:       // Für den Fall, dass der Ausdruck weder "A" noch "B" ist
    Default Codeblock;
  }


  */ 
//# sourceMappingURL=script81.js.map