var A = new Audio('A.mp3');
var C = new Audio('C.mp3');
var F = new Audio('F.mp3');
var G = new Audio('G.mp3');
var hihat = new Audio('hihat.mp3');
var kick = new Audio('kick.mp3');
var snare = new Audio('snare.mp3');
var laugh1 = new Audio('laugh-1.mp3');
var laugh2 = new Audio('laugh-2.mp3');
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
//Ich Frag mich warum er egal  bei welchem Buttom alle Töne ausgibt, wenn ich es so gemacht hätte?
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
function Toene() {
    //Skript
    setInterval(function () {
        kick.play();
        snare.play();
        hihat.play();
    }, 500);
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
    document.querySelector(".Test").addEventListener('click', Toene);
});
//# sourceMappingURL=script3.js.map