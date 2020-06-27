let zaehler = "0";
var leer;
"";
var testob = [
    {
        key1: "test"
    },
    {
        key1: "sauber"
    },
    {
        key1: ""
    },
    {
        key1: ""
    },
    {
        key1: ""
    },
    {
        key1: ""
    },
    {
        key1: ""
    },
    {
        key1: ""
    }
];
console.log(zaehler);
console.log(testob[0].key1);
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myCFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myFunction2() {
    var z = document.getElementById("myText2").value;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    document.getElementById("demo2").innerHTML = z;
}
function myCFunction2() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myFunction3() {
    var c = document.getElementById("myText3").value;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    document.getElementById("demo3").innerHTML = c;
}
function myCFunction3() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myFunction4() {
    var v = document.getElementById("myText4").value;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    document.getElementById("demo4").innerHTML = v;
}
function myCFunction4() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myFunction5() {
    var b = document.getElementById("myText5").value;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    document.getElementById("demo5").innerHTML = b;
}
function myCFunction5() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myFunction6() {
    var n = document.getElementById("myText6").value;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    document.getElementById("demo6").innerHTML = n;
}
function myCFunction6() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myFunction7() {
    var m = document.getElementById("myText7").value;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    document.getElementById("demo7").innerHTML = m;
}
function myCFunction7() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myFunction8() {
    var l = document.getElementById("myText7").value;
    zaehler++;
    document.getElementById("zaehler").innerHTML = zaehler;
    ;
    document.getElementById("demo7").innerHTML = l;
}
function myCFunction8() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    zaehler--;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myNeuFunction() {
    zaehler = 0;
    document.getElementById("zaehler").innerHTML = zaehler;
    console.log(zaehler);
}
function myNeuSkullFunction() {
    alert("ALARM: Sie haben jetzt einen Virus!!");
}
window.addEventListener("load", function () {
    document.querySelector("#add").addEventListener("click", function () { myFunction(); });
    document.querySelector("#sauber").addEventListener("click", function () { myCFunction(); });
    document.querySelector("#add2").addEventListener("click", function () { myFunction2(); });
    document.querySelector("#clear2").addEventListener("click", function () { myCFunction2(); });
    document.querySelector("#add3").addEventListener("click", function () { myFunction3(); });
    document.querySelector("#clear3").addEventListener("click", function () { myCFunction3(); });
    document.querySelector("#add4").addEventListener("click", function () { myFunction4(); });
    document.querySelector("#clear4").addEventListener("click", function () { myCFunction4(); });
    document.querySelector("#add5").addEventListener("click", function () { myFunction5(); });
    document.querySelector("#clear5").addEventListener("click", function () { myCFunction5(); });
    document.querySelector("#add6").addEventListener("click", function () { myFunction6(); });
    document.querySelector("#clear6").addEventListener("click", function () { myCFunction6(); });
    document.querySelector("#add7").addEventListener("click", function () { myFunction7(); });
    document.querySelector("#clear7").addEventListener("click", function () { myCFunction7(); });
    document.querySelector("#add8").addEventListener("click", function () { myFunction8(); });
    document.querySelector("#clear8").addEventListener("click", function () { myCFunction8(); });
    document.querySelector("#neustart").addEventListener("click", function () { myNeuFunction(); });
    document.querySelector("#skull").addEventListener("click", function () { myNeuSkullFunction(); });
    document.querySelector("#info").addEventListener("click", function () { myNeuInfoFunction(); });
}, window.addEventListener('load', function () {
    var btn = document.querySelector('#myBtn');
    btn.addEventListener('click', function () {
        if (btn.getAttribute('class') == 'fas fa-square') {
            btn.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn.setAttribute('class', 'fas fa-square');
        }
    });
    var btn2 = document.querySelector('#myBtn2');
    btn2.addEventListener('click', function () {
        if (btn2.getAttribute('class') == 'fas fa-square') {
            btn2.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn2.setAttribute('class', 'fas fa-square');
        }
    });
    var btn3 = document.querySelector('#myBtn3');
    btn3.addEventListener('click', function () {
        if (btn3.getAttribute('class') == 'fas fa-square') {
            btn3.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn3.setAttribute('class', 'fas fa-square');
        }
    });
    var btn4 = document.querySelector('#myBtn4');
    btn4.addEventListener('click', function () {
        if (btn4.getAttribute('class') == 'fas fa-square') {
            btn4.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn4.setAttribute('class', 'fas fa-square');
        }
    });
    var btn5 = document.querySelector('#myBtn5');
    btn5.addEventListener('click', function () {
        if (btn5.getAttribute('class') == 'fas fa-square') {
            btn5.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn5.setAttribute('class', 'fas fa-square');
        }
    });
    var btn6 = document.querySelector('#myBtn6');
    btn6.addEventListener('click', function () {
        if (btn6.getAttribute('class') == 'fas fa-square') {
            btn6.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn6.setAttribute('class', 'fas fa-square');
        }
    });
    var btn7 = document.querySelector('#myBtn7');
    btn7.addEventListener('click', function () {
        if (btn7.getAttribute('class') == 'fas fa-square') {
            btn7.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn7.setAttribute('class', 'fas fa-square');
        }
    });
    var btn8 = document.querySelector('#myBtn8');
    btn8.addEventListener('click', function () {
        if (btn8.getAttribute('class') == 'fas fa-square') {
            btn8.setAttribute('class', 'fas fa-check-square');
        }
        else {
            btn8.setAttribute('class', 'fas fa-square');
        }
    });
}));
//# sourceMappingURL=scriptA9.js.map