



window.addEventListener('load', function() {

document.querySelector(".europe").addEventListener('click', Europa);
document.querySelector(".northamerica").addEventListener('click', NorthAmerica);
document.querySelector(".southamerica").addEventListener('click', SouthAmerica);
document.querySelector(".africa").addEventListener('click', Africa);
document.querySelector(".asia").addEventListener('click', Asia);
document.querySelector(".australi").addEventListener('click', Australia);

}










var x: number = 4209.3;
var xx: number = 1235.5;
var xxx: number = 1261.5;
var xxxx: number = 6035.6;
var xxxxx: number = 16274.1;
var xxxxxx: number = 2100.5;
var Drei: number = 100;
var Pro : string = "%";
var Plu : string = "kg";




function Europa ( ) {


var Test: string = "Emission in Europe";
var Land: string = "Europe";
var Land2: string = "Europe";



var X_ = x + xx + xxx + xxxx + xxxxx + xxxxxx ;
var XX_ = X_ / Drei;
var X_X = x / XX_;


var x2008: number = 4965.7;
var x2018: number = 4209.3;

var _X = x2008 / Drei ;
var xJahr = 100 - x2018 / _X;

var xZahl = x2008 - x2018;

 
/**
console.group('Europa');
console.log("Die Emission von Europa ist"+  + x + "kg CO2." );
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit "+ X_X + "%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + xJahr + " %verändert.");
console.log("2018 im Vergleich zu 2008 sind das" + xZahl + " kg weniger CO2." );
console.groupEnd();
*/



X_X = Math.round(X_X);  
xJahr = Math.round(xJahr); 
xZahl = Math.round(xZahl); 
 


document.getElementById("Zahl1").innerHTML = x + Plu ;
document.getElementById("Land").innerHTML = Land;
document.getElementById("Land2").innerHTML = Land2;
document.getElementById("Zahl2").innerHTML = X_X + Pro ;
document.getElementById("Zahl3").innerHTML = xJahr + Pro;
document.getElementById("Zahl4").innerHTML = xZahl + Plu;
document.querySelector(".chart").setAttribute("style", "height: 14%");
document.getElementById("Test").innerHTML = Test ;



}

















function NorthAmerica ( ) {

var Test : string = "Emission in North America";
var Land : string = "North America";   
var Land2: string = "North America"; 
  
var A_ = x + xx + xxx + xxxx + xxxxx + xxxxxx ;
var AA_ = A_ / Drei;
var A_A = xxxx / AA_;


var a2008: number = 6600.4;
var a2018: number = 6035.6;

var _A = a2008 / Drei ;
var AJahr = 100 - a2018 / _A;

var AZahl = a2008 - a2018;

/**
console.group('North America');
console.log("Die Emission von North America ist"+  + xxxx + "kg CO2." );
console.log("Relativ zur Gesamtemission der Welt verursacht North America damit "+ A_A + "%.");
console.log("Für North America hat sich 2018 im Vergleich zu 2008 die Emission um" + AJahr + " %verändert.");
console.log("2018 im Vergleich zu 2008 sind das" + AZahl + " kg weniger CO2.");
console.groupEnd();
*/


A_A = Math.round(A_A);  
AJahr = Math.round(AJahr); 
AZahl = Math.round(AZahl); 

document.getElementById("Zahl1").innerHTML = xxxx + Plu;
document.getElementById("Land").innerHTML = Land;
document.getElementById("Zahl2").innerHTML = A_A + Pro ;
document.getElementById("Zahl3").innerHTML = AJahr + Pro;
document.getElementById("Zahl4").innerHTML = AZahl + Plu;
document.querySelector(".chart").setAttribute("style", "height: 19%");
document.getElementById("Test").innerHTML = Test ;

}











function SouthAmerica ( ) {

var Test : string = "Emission in South America";
var Land : string = "South America"; 
var Land2: string = "South America";   
  

var Y_ = x + xx + xxx + xxxx + xxxxx + xxxxxx ;
var YY_ = Y_ / Drei;
var Y_Y = xxx / YY_;


var y2008: number = 1132.6;
var y2018: number = 1261.5;

var _Y = y2008 / Drei ;
var YJahr = 100 - y2018 / _Y;

var YZahl = y2018 - y2008;

Y_Y = Math.round(Y_Y);  
YJahr = Math.round(YJahr); 
YZahl = Math.round(YZahl); 


/**
console.group('South America');
console.log("Die Emission von South America ist"+  + xxx + "kg CO2." );
console.log("Relativ zur Gesamtemission der Welt verursacht South America damit "+ Y_Y + "%.");
console.log("Für South America hat sich 2018 im Vergleich zu 2008 die Emission um" + YJahr + " %verändert.");
console.log("2018 im Vergleich zu 2008 sind das" + YZahl + " kg mehr CO2.");
console.groupEnd();
*/


document.getElementById("Zahl1").innerHTML = xxx + Plu ;
document.getElementById("Land").innerHTML = Land;
document.getElementById("Zahl2").innerHTML = Y_Y + Pro ;
document.getElementById("Zahl3").innerHTML = YJahr + Pro;
document.getElementById("Zahl4").innerHTML = YZahl+ Plu;
document.querySelector(".chart").setAttribute("style", "height: 4%");
document.getElementById("Test").innerHTML = Test ;

}











function Africa ( ) {

var Test : string = "Emission in Africa";
var Land : string = "Africa";
var Land2: string = "Africa";        
    
var Z_ = x + xx + xxx + xxxx + xxxxx + xxxxxx ;
var ZZ_ = Z_ / Drei;
var Z_Z = xx / ZZ_;


var z2008: number = 1028;
var z2018: number = 1230.5;

var _Z = z2008 / Drei ;
var ZJahr = 100 - z2018 / _Z;

var ZZahl = z2018 - z2008;

Z_Z = Math.round(Z_Z);  
ZJahr = Math.round(ZJahr); 
ZZahl = Math.round(ZZahl); 


/**
console.group('Africa');
console.log("Die Emission von Africa ist"+  + xx + "kg CO2." );
console.log("Relativ zur Gesamtemission der Welt verursacht Africa damit "+ Z_Z + "%.");
console.log("Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um" + ZJahr + " %verändert.");
console.log("2018 im Vergleich zu 2008 sind das" + ZZahl + " kg mehr CO2.");
console.groupEnd();
*/

document.getElementById("Zahl1").innerHTML = xx + Plu;
document.getElementById("Land").innerHTML = Land;
document.getElementById("Zahl2").innerHTML = Z_Z + Pro ;
document.getElementById("Zahl3").innerHTML = ZJahr + Pro;
document.getElementById("Zahl4").innerHTML = ZZahl + Plu;
document.querySelector(".chart").setAttribute("style", "height: 4%");
document.getElementById("Test").innerHTML = Test ;


}













function Asia ( ) {

var Test : string = "Emission in Asia";
var Land : string = "Asia";  
var Land2: string = "Asia";

var S_ = x + xx + xxx + xxxx + xxxxx + xxxxxx ;
var SS_ = S_ / Drei;
var S_S = xxxxx / SS_;


var s2008: number = 12954.7;
var s2018: number = 16274.1;

var _S = s2008 / Drei ;
var SJahr = 100 - s2018 / _S;

var SZahl = s2018 - s2008;


S_S = Math.round(S_S);  
SJahr = Math.round(SJahr); 
SZahl = Math.round(SZahl); 

/**
console.group('Asia');
console.log("Die Emission von Asia ist"+  + xxxxx + "kg CO2." );
console.log("Relativ zur Gesamtemission der Welt verursacht Asia damit "+ S_S + "%.");
console.log("Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um" + SJahr + " %verändert.");
console.log("2018 im Vergleich zu 2008 sind das" + SZahl + " kg mehr CO2.");
console.groupEnd();

*/

document.getElementById("Zahl1").innerHTML = xxxxx + Plu ;
document.getElementById("Land").innerHTML = Land;
document.getElementById("Zahl2").innerHTML = S_S + Pro ;
document.getElementById("Zahl3").innerHTML = SJahr + Pro;
document.getElementById("Zahl4").innerHTML = SZahl + Plu;
document.querySelector(".chart").setAttribute("style", "height: 52%");
document.getElementById("Test").innerHTML = Test ;

}











function Australia ( ) {

var Test : string = "Emission in Australia";
var Land : string = "Australia";
var Land2: string = "Australia";  

var C_ = x + xx + xxx + xxxx + xxxxx + xxxxxx ;
var CC_ = C_ / Drei;
var C_C = xxxxxx / CC_;


var c2008: number = 1993;
var c2018: number = 2100.5;

var _C = c2008 / Drei ;
var CJahr = 100 - c2018 / _C;

var CZahl = c2018 - c2008;

C_C = Math.round(C_C);  
CJahr = Math.round(CJahr); 
CZahl = Math.round(CZahl); 


/**
console.group('Australia');
console.log("Die Emission von Australia ist"+  + xxxxxx + "kg CO2." );
console.log("Relativ zur Gesamtemission der Welt verursacht Australia damit "+ C_C + "%.");
console.log("Für Australia hat sich 2018 im Vergleich zu 2008 die Emission um" + CJahr + " %verändert.");
console.log("2018 im Vergleich zu 2008 sind das" + CZahl + " kg mehr CO2.");
console.groupEnd();

*/

document.getElementById("Zahl1").innerHTML = xxxxxx + Plu;
document.getElementById("Land").innerHTML = Land;
document.getElementById("Zahl2").innerHTML = C_C + Pro ;
document.getElementById("Zahl3").innerHTML = CJahr + Pro;
document.getElementById("Zahl4").innerHTML = CZahl + Plu;
document.querySelector(".chart").setAttribute("style", "height: 7%");
document.getElementById("Test").innerHTML = Test ;


}
