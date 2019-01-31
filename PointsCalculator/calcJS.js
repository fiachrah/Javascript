

function hover() {
  document.getElementById("logo").src = "../logos/logoblue2.png";
}

function stopHover() {
  document.getElementById("logo").src = "../logos/logoblue1.png";
}





var subjectCounter = 0;

// Subjects

var Sub1 = 0;
var Sub2 = 0;
var Sub3 = 0;
var Sub4 = 0;
var Sub5 = 0;
var Sub6 = 0;
var bonus = 0;
		
		

// Highest Indexing

var HighIndex1 = 0;
var HighIndex2 = 0;
var HighIndex3 = 0;
var HighIndex4 = 0;
var HighIndex5 = 0;
var HighIndex6 = 0;

// Grade Ranking

var Higher1 = 100;
var Higher2 = 88;
var Higher3 = 77;
var Higher4 = 66;
var Higher5 = 56;
var Higher6 = 46;
var Higher7 = 37;
var Higher8 = 0;
var Ordinary1 = 56;
var Ordinary2 = 46;
var Ordinary3 = 37;
var Ordinary4 = 28;
var Ordinary5 = 20;
var Ordinary6 = 12;
var Ordinary7 = 0;
var Ordinary8 = 0;

// LCVP Request

var lcvpTrue = 0;


// Onload Requests

function loadingRequests() {

var maths = confirm("Add 25 Points for pass in Higher Level Maths?");
var lcvpYN = confirm("Add Bonus Points for LCVP?");


if (maths == true) {

    bonus = 25;
	
	document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
	document.getElementById('counter').innerHTML = subjectCounter;     
	document.getElementById('noticeMaths').innerHTML = "25";	
	
} 
if (lcvpYN == true) {

var lcvpP = confirm("Add 28 Points for Pass in LCVP?");
lcvpTrue = 1;

	
} 

if (lcvpP == true) {

    Sub1 = 28;
	HighIndex1 = Ordinary4;
	subjectCounter = subjectCounter + 1;
	
	document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
	document.getElementById('counter').innerHTML = subjectCounter;   
	document.getElementById('grades').innerHTML += "Pass (LCVP), ";
	
	
} 
else if ((lcvpP == false) && (lcvpTrue == 1)) {
	
	var lcvpM = confirm("Add 46 Points for Merit in LCVP?");

}
 
if (lcvpM == true) {

     Sub1 = 46;
	HighIndex1 = Higher6;
	subjectCounter = subjectCounter + 1;
	
	document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
	document.getElementById('counter').innerHTML = subjectCounter; 
	document.getElementById('grades').innerHTML += "Merit (LCVP), ";
	
} 
else if ((lcvpM == false) && (lcvpTrue == 1)) {
	
	var lcvpD = confirm("Add 66 Points for Distinction in LCVP?");
	
}

if (lcvpD == true) {

    Sub1 = 66;
	HighIndex1 = Higher4;
	subjectCounter = subjectCounter + 1;
	
	document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
	document.getElementById('counter').innerHTML = subjectCounter;   
	document.getElementById('grades').innerHTML += "Distinction (LCVP), ";
	
}

}




// H1

function H1() {

// Subjects 1-6

if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 100;
HighIndex1 = Higher1;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 100;
HighIndex2 = Higher1;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 100;
HighIndex3 = Higher1;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 100;
HighIndex4 = Higher1;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 100;
HighIndex5 = Higher1;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 100;
HighIndex6 = Higher1;

}






// 7th Subject +

if ((HighIndex1 < Higher1) && (subjectCounter >= 6)) {

Sub1 = 100;
HighIndex1 = Higher1;

}
else if ((HighIndex2 < Higher1) && (subjectCounter >= 6)){

Sub2 = 100;
HighIndex2 = Higher1;

}
else if ((HighIndex3 < Higher1) && (subjectCounter >= 6)) {

Sub3 = 100;
HighIndex3 = Higher1;

}
else if ((HighIndex4 < Higher1) && (subjectCounter >= 6)) {

Sub4 = 100;
HighIndex4 = Higher1;

}
else if ((HighIndex5 < Higher1) && (subjectCounter >= 6)){

Sub5 = 100;
HighIndex5 = Higher1;

}
else if ((HighIndex6 < Higher1) && (subjectCounter >= 6)) {

Sub6 = 100;
HighIndex6 = Higher1;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;   
document.getElementById('grades').innerHTML += "H1, ";




}

// H2

function H2() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 88;
HighIndex1 = Higher2;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 88;
HighIndex2 = Higher2;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 88;
HighIndex3 = Higher2;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 88;
HighIndex4 = Higher2;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 88;
HighIndex5 = Higher2;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 88;
HighIndex6 = Higher2;

}


// 7th Subject +

if ((HighIndex1 < Higher2) && (subjectCounter >= 6)) {

Sub1 = 88;
HighIndex1 = Higher2;

}
else if ((HighIndex2 < Higher2) && (subjectCounter >= 6)){

Sub2 = 88;
HighIndex2 = Higher2;

}
else if ((HighIndex3 < Higher2) && (subjectCounter >= 6)) {

Sub3 = 88;
HighIndex3 = Higher2;

}
else if ((HighIndex4 < Higher2) && (subjectCounter >= 6)) {

Sub4 = 88;
HighIndex4 = Higher2;

}
else if ((HighIndex5 < Higher2) && (subjectCounter >= 6)){

Sub5 = 88;
HighIndex5 = Higher2;

}
else if ((HighIndex6 < Higher2) && (subjectCounter >= 6)) {

Sub6 = 88;
HighIndex6 = Higher2;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;     
document.getElementById('grades').innerHTML += "H2, ";



}

// H3

function H3() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 77;
HighIndex1 = Higher3;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 77;
HighIndex2 = Higher3;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 77;
HighIndex3 = Higher3;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 77;
HighIndex4 = Higher3;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 77;
HighIndex5 = Higher3;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 77;
HighIndex6 = Higher3;

}




// 7th Subject +

if ((HighIndex1 < Higher3) && (subjectCounter >= 6)) {

Sub1 = 77;
HighIndex1 = Higher3;

}
else if ((HighIndex2 < Higher3) && (subjectCounter >= 6)){

Sub2 = 77;
HighIndex2 = Higher3;

}
else if ((HighIndex3 < Higher3) && (subjectCounter >= 6)) {

Sub3 = 77;
HighIndex3 = Higher3;

}
else if ((HighIndex4 < Higher3) && (subjectCounter >= 6)) {

Sub4 = 77;
HighIndex4 = Higher3;

}
else if ((HighIndex5 < Higher3) && (subjectCounter >= 6)){

Sub5 = 77;
HighIndex5 = Higher3;

}
else if ((HighIndex6 < Higher3) && (subjectCounter >= 6)) {

Sub6 = 77;
HighIndex6 = Higher3;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;    
document.getElementById('grades').innerHTML += "H3, ";




}

// H4

function H4() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 66;
HighIndex1 = Higher4;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 66;
HighIndex2 = Higher4;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 66;
HighIndex3 = Higher4;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 66;
HighIndex4 = Higher4;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 66;
HighIndex5 = Higher4;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 66;
HighIndex6 = Higher4;

}




// 7th Subject +

if ((HighIndex1 < Higher4) && (subjectCounter >= 6)) {

Sub1 = 66;
HighIndex1 = Higher4;

}
else if ((HighIndex2 < Higher4) && (subjectCounter >= 6)){

Sub2 = 66;
HighIndex2 = Higher4;

}
else if ((HighIndex3 < Higher4) && (subjectCounter >= 6)) {

Sub3 = 66;
HighIndex3 = Higher4;

}
else if ((HighIndex4 < Higher4) && (subjectCounter >= 6)) {

Sub4 = 66;
HighIndex4 = Higher4;

}
else if ((HighIndex5 < Higher4) && (subjectCounter >= 6)){

Sub5 = 66;
HighIndex5 = Higher4;

}
else if ((HighIndex6 < Higher4) && (subjectCounter >= 6)) {

Sub6 = 66;
HighIndex6 = Higher4;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;    
document.getElementById('grades').innerHTML += "H4, ";



}

// H5

function H5() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 56;
HighIndex1 = Higher5;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 56;
HighIndex2 = Higher5;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 56;
HighIndex3 = Higher5;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 56;
HighIndex4 = Higher5;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 56;
HighIndex5 = Higher5;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 56;
HighIndex6 = Higher5;

}




// 7th Subject +

if ((HighIndex1 < Higher5) && (subjectCounter >= 6)) {

Sub1 = 56;
HighIndex1 = Higher5;

}
else if ((HighIndex2 < Higher5) && (subjectCounter >= 6)){

Sub2 = 56;
HighIndex2 = Higher5;

}
else if ((HighIndex3 < Higher5) && (subjectCounter >= 6)) {

Sub3 = 56;
HighIndex3 = Higher5;

}
else if ((HighIndex4 < Higher5) && (subjectCounter >= 6)) {

Sub4 = 56;
HighIndex4 = Higher5;

}
else if ((HighIndex5 < Higher5) && (subjectCounter >= 6)){

Sub5 = 56;
HighIndex5 = Higher5;

}
else if ((HighIndex6 < Higher5) && (subjectCounter >= 6)) {

Sub6 = 56;
HighIndex6 = Higher5;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;   
document.getElementById('grades').innerHTML += "H5, ";



}

// H5

function H6() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 46;
HighIndex1 = Higher6;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 46;
HighIndex2 = Higher6;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 46;
HighIndex3 = Higher6;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 46;
HighIndex4 = Higher6;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 46;
HighIndex5 = Higher6;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 46;
HighIndex6 = Higher6;

}




// 7th Subject +

if ((HighIndex1 < Higher6) && (subjectCounter >= 6)) {

Sub1 = 46;
HighIndex1 = Higher6;

}
else if ((HighIndex2 < Higher6) && (subjectCounter >= 6)){

Sub2 = 46;
HighIndex2 = Higher6;

}
else if ((HighIndex3 < Higher6) && (subjectCounter >= 6)) {

Sub3 = 46;
HighIndex3 = Higher6;

}
else if ((HighIndex4 < Higher6) && (subjectCounter >= 6)) {

Sub4 = 46;
HighIndex4 = Higher6;

}
else if ((HighIndex5 < Higher6) && (subjectCounter >= 6)){

Sub5 = 46;
HighIndex5 = Higher6;

}
else if ((HighIndex6 < Higher6) && (subjectCounter >= 6)) {

Sub6 = 46;
HighIndex6 = Higher6;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;   
document.getElementById('grades').innerHTML += "H6, ";



}

// H7

function H7() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 37;
HighIndex1 = Higher7;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 37;
HighIndex2 = Higher7;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 37;
HighIndex3 = Higher7;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 37;
HighIndex4 = Higher7;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 37;
HighIndex5 = Higher7;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 37;
HighIndex6 = Higher7;

}




// 7th Subject +

if ((HighIndex1 < Higher7) && (subjectCounter >= 6)) {

Sub1 = 37;
HighIndex1 = Higher7;

}
else if ((HighIndex2 < Higher7) && (subjectCounter >= 6)){

Sub2 = 37;
HighIndex2 = Higher7;

}
else if ((HighIndex3 < Higher7) && (subjectCounter >= 6)) {

Sub3 = 37;
HighIndex3 = Higher7;

}
else if ((HighIndex4 < Higher7) && (subjectCounter >= 6)) {

Sub4 = 37;
HighIndex4 = Higher7;

}
else if ((HighIndex5 < Higher7) && (subjectCounter >= 6)){

Sub5 = 37;
HighIndex5 = Higher7;

}
else if ((HighIndex6 < Higher7) && (subjectCounter >= 6)) {

Sub6 = 37;
HighIndex6 = Higher7;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
	document.getElementById('counter').innerHTML = subjectCounter;
document.getElementById('grades').innerHTML += "H7, ";



}

// H8

function H8() {

// Subjects 1-Higher8


if ((subjectCounter < Higher8) && (HighIndex1 == 0)) {

Sub1 = 0;
HighIndex1 = Higher8;

}
else if ((subjectCounter < Higher8) && (HighIndex2 == 0)) {

Sub2 = 0;
HighIndex2 = Higher8;

}
else if ((subjectCounter < Higher8) && (HighIndex3 == 0)) {

Sub3 = 0;
HighIndex3 = Higher8;

}
else if ((subjectCounter < Higher8) && (HighIndex4 == 0)) {

Sub4 = 0;
HighIndex4 = Higher8;

}
else if ((subjectCounter < Higher8) && (HighIndex5 == 0)) {

Sub5 = 0;
HighIndex5 = Higher8;

}
else if ((subjectCounter < Higher8) && (HighIndex6 == 0)) {

Sub6 = 0;
HighIndex6 = Higher8;

}




// 7th Subject +

if ((HighIndex1 < 6) && (subjectCounter >= Higher8)) {

Sub1 = 0;
HighIndex1 = Higher8;

}
else if ((HighIndex2 < 6) && (subjectCounter >= Higher8)){

Sub2 = 0;
HighIndex2 = Higher8;

}
else if ((HighIndex3 < 6) && (subjectCounter >= Higher8)) {

Sub3 = 0;
HighIndex3 = Higher8;

}
else if ((HighIndex4 < 6) && (subjectCounter >= Higher8)) {

Sub4 = 0;
HighIndex4 = Higher8;

}
else if ((HighIndex5 < 6) && (subjectCounter >= Higher8)){

Sub5 = 0;
HighIndex5 = Higher8;

}
else if ((HighIndex6 < 6) && (subjectCounter >= Higher8)) {

Sub6 = 0;
HighIndex6 = Higher8;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter; 
document.getElementById('grades').innerHTML += "H8, ";



}

// O1

function O1() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 56;
HighIndex1 = Ordinary1;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 56;
HighIndex2 = Ordinary1;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 56;
HighIndex3 = Ordinary1;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 56;
HighIndex4 = Ordinary1;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 56;
HighIndex5 = Ordinary1;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 56;
HighIndex6 = Ordinary1;

}




// 7th Subject +

if ((HighIndex1 < Ordinary1) && (subjectCounter >= 6)) {

Sub1 = 56;
HighIndex1 = Ordinary1;

}
else if ((HighIndex2 < Ordinary1) && (subjectCounter >= 6)){

Sub2 = 56;
HighIndex2 = Ordinary1;

}
else if ((HighIndex3 < Ordinary1) && (subjectCounter >= 6)) {

Sub3 = 56;
HighIndex3 = Ordinary1;

}
else if ((HighIndex4 < Ordinary1) && (subjectCounter >= 6)) {

Sub4 = 56;
HighIndex4 = Ordinary1;

}
else if ((HighIndex5 < Ordinary1) && (subjectCounter >= 6)){

Sub5 = 56;
HighIndex5 = Ordinary1;

}
else if ((HighIndex6 < Ordinary1) && (subjectCounter >= 6)) {

Sub6 = 56;
HighIndex6 = Ordinary1;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter; 
document.getElementById('grades').innerHTML += "O1, ";



}

// O2

function O2() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 46;
HighIndex1 = Ordinary2;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 46;
HighIndex2 = Ordinary2;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 46;
HighIndex3 = Ordinary2;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 46;
HighIndex4 = Ordinary2;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 46;
HighIndex5 = Ordinary2;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 46;
HighIndex6 = Ordinary2;

}




// 7th Subject +

if ((HighIndex1 < Ordinary2) && (subjectCounter >= 6)) {

Sub1 = 46;
HighIndex1 = Ordinary2;

}
else if ((HighIndex2 < Ordinary2) && (subjectCounter >= 6)){

Sub2 = 46;
HighIndex2 = Ordinary2;

}
else if ((HighIndex3 < Ordinary2) && (subjectCounter >= 6)) {

Sub3 = 46;
HighIndex3 = Ordinary2;

}
else if ((HighIndex4 < Ordinary2) && (subjectCounter >= 6)) {

Sub4 = 46;
HighIndex4 = Ordinary2;

}
else if ((HighIndex5 < Ordinary2) && (subjectCounter >= 6)){

Sub5 = 46;
HighIndex5 = Ordinary2;

}
else if ((HighIndex6 < Ordinary2) && (subjectCounter >= 6)) {

Sub6 = 46;
HighIndex6 = Ordinary2;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;  
document.getElementById('grades').innerHTML += "O2, ";



}

// O3

function O3() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 37;
HighIndex1 = Ordinary3;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 37;
HighIndex2 = Ordinary3;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 37;
HighIndex3 = Ordinary3;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 37;
HighIndex4 = Ordinary3;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 37;
HighIndex5 = Ordinary3;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 37;
HighIndex6 = Ordinary3;

}




// 7th Subject +

if ((HighIndex1 < Ordinary3) && (subjectCounter >= 6)) {

Sub1 = 37;
HighIndex1 = Ordinary3;

}
else if ((HighIndex2 < Ordinary3) && (subjectCounter >= 6)){

Sub2 = 37;
HighIndex2 = Ordinary3;

}
else if ((HighIndex3 < Ordinary3) && (subjectCounter >= 6)) {

Sub3 = 37;
HighIndex3 = Ordinary3;

}
else if ((HighIndex4 < Ordinary3) && (subjectCounter >= 6)) {

Sub4 = 37;
HighIndex4 = Ordinary3;

}
else if ((HighIndex5 < Ordinary3) && (subjectCounter >= 6)){

Sub5 = 37;
HighIndex5 = Ordinary3;

}
else if ((HighIndex6 < Ordinary3) && (subjectCounter >= 6)) {

Sub6 = 37;
HighIndex6 = Ordinary3;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter; 
document.getElementById('grades').innerHTML += "O3, ";



}

// O4

function O4() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 28;
HighIndex1 = Ordinary4;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 28;
HighIndex2 = Ordinary4;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 28;
HighIndex3 = Ordinary4;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 28;
HighIndex4 = Ordinary4;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 28;
HighIndex5 = Ordinary4;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 28;
HighIndex6 = Ordinary4;

}




// 7th Subject +

if ((HighIndex1 < Ordinary4) && (subjectCounter >= 6)) {

Sub1 = 28;
HighIndex1 = Ordinary4;

}
else if ((HighIndex2 < Ordinary4) && (subjectCounter >= 6)){

Sub2 = 28;
HighIndex2 = Ordinary4;

}
else if ((HighIndex3 < Ordinary4) && (subjectCounter >= 6)) {

Sub3 = 28;
HighIndex3 = Ordinary4;

}
else if ((HighIndex4 < Ordinary4) && (subjectCounter >= 6)) {

Sub4 = 28;
HighIndex4 = Ordinary4;

}
else if ((HighIndex5 < Ordinary4) && (subjectCounter >= 6)){

Sub5 = 28;
HighIndex5 = Ordinary4;

}
else if ((HighIndex6 < Ordinary4) && (subjectCounter >= 6)) {

Sub6 = 28;
HighIndex6 = Ordinary4;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter; 
document.getElementById('grades').innerHTML += "O4, ";



}

// O5

function O5() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 20;
HighIndex1 = Ordinary5;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 20;
HighIndex2 = Ordinary5;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 20;
HighIndex3 = Ordinary5;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 20;
HighIndex4 = Ordinary5;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 20;
HighIndex5 = Ordinary5;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 20;
HighIndex6 = Ordinary5;

}




// 7th Subject +

if ((HighIndex1 < Ordinary5) && (subjectCounter >= 6)) {

Sub1 = 20;
HighIndex1 = Ordinary5;

}
else if ((HighIndex2 < Ordinary5) && (subjectCounter >= 6)){

Sub2 = 20;
HighIndex2 = Ordinary5;

}
else if ((HighIndex3 < Ordinary5) && (subjectCounter >= 6)) {

Sub3 = 20;
HighIndex3 = Ordinary5;

}
else if ((HighIndex4 < Ordinary5) && (subjectCounter >= 6)) {

Sub4 = 20;
HighIndex4 = Ordinary5;

}
else if ((HighIndex5 < Ordinary5) && (subjectCounter >= 6)){

Sub5 = 20;
HighIndex5 = Ordinary5;

}
else if ((HighIndex6 < Ordinary5) && (subjectCounter >= 6)) {

Sub6 = 20;
HighIndex6 = Ordinary5;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter; 
document.getElementById('grades').innerHTML += "O5, ";



}

// O6

function O6() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 12;
HighIndex1 = Ordinary6;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 12;
HighIndex2 = Ordinary6;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 12;
HighIndex3 = Ordinary6;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 12;
HighIndex4 = Ordinary6;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 12;
HighIndex5 = Ordinary6;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 12;
HighIndex6 = Ordinary6;

}




// 7th Subject +

if ((HighIndex1 < Ordinary6) && (subjectCounter >= 6)) {

Sub1 = 12;
HighIndex1 = Ordinary6;

}
else if ((HighIndex2 < Ordinary6) && (subjectCounter >= 6)){

Sub2 = 12;
HighIndex2 = Ordinary6;

}
else if ((HighIndex3 < Ordinary6) && (subjectCounter >= 6)) {

Sub3 = 12;
HighIndex3 = Ordinary6;

}
else if ((HighIndex4 < Ordinary6) && (subjectCounter >= 6)) {

Sub4 = 12;
HighIndex4 = Ordinary6;

}
else if ((HighIndex5 < Ordinary6) && (subjectCounter >= 6)){

Sub5 = 12;
HighIndex5 = Ordinary6;

}
else if ((HighIndex6 < Ordinary6) && (subjectCounter >= 6)) {

Sub6 = 12;
HighIndex6 = Ordinary6;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;
document.getElementById('grades').innerHTML += "O6, ";



}

// O7

function O7() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 0;
HighIndex1 = Ordinary7;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 0;
HighIndex2 = Ordinary7;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 0;
HighIndex3 = Ordinary7;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 0;
HighIndex4 = Ordinary7;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 0;
HighIndex5 = Ordinary7;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 0;
HighIndex6 = Ordinary7;

}




// 7th Subject +

if ((HighIndex1 < Ordinary7) && (subjectCounter >= 6)) {

Sub1 = 0;
HighIndex1 = Ordinary7;

}
else if ((HighIndex2 < Ordinary7) && (subjectCounter >= 6)){

Sub2 = 0;
HighIndex2 = Ordinary7;

}
else if ((HighIndex3 < Ordinary7) && (subjectCounter >= 6)) {

Sub3 = 0;
HighIndex3 = Ordinary7;

}
else if ((HighIndex4 < Ordinary7) && (subjectCounter >= 6)) {

Sub4 = 0;
HighIndex4 = Ordinary7;

}
else if ((HighIndex5 < Ordinary7) && (subjectCounter >= 6)){

Sub5 = 0;
HighIndex5 = Ordinary7;

}
else if ((HighIndex6 < Ordinary7) && (subjectCounter >= 6)) {

Sub6 = 0;
HighIndex6 = Ordinary7;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;  
document.getElementById('grades').innerHTML += "O7, ";



}

// O8

function O8() {

// Subjects 1-6


if ((subjectCounter < 6) && (HighIndex1 == 0)) {

Sub1 = 0;
HighIndex1 = Ordinary8;

}
else if ((subjectCounter < 6) && (HighIndex2 == 0)) {

Sub2 = 0;
HighIndex2 = Ordinary8;

}
else if ((subjectCounter < 6) && (HighIndex3 == 0)) {

Sub3 = 0;
HighIndex3 = Ordinary8;

}
else if ((subjectCounter < 6) && (HighIndex4 == 0)) {

Sub4 = 0;
HighIndex4 = Ordinary8;

}
else if ((subjectCounter < 6) && (HighIndex5 == 0)) {

Sub5 = 0;
HighIndex5 = Ordinary8;

}
else if ((subjectCounter < 6) && (HighIndex6 == 0)) {

Sub6 = 0;
HighIndex6 = Ordinary8;

}




// 7th Subject +

if ((HighIndex1 < Ordinary8) && (subjectCounter >= 6)) {

Sub1 = 0;
HighIndex1 = Ordinary8;

}
else if ((HighIndex2 < Ordinary8) && (subjectCounter >= 6)){

Sub2 = 0;
HighIndex2 = Ordinary8;

}
else if ((HighIndex3 < Ordinary8) && (subjectCounter >= 6)) {

Sub3 = 0;
HighIndex3 = Ordinary8;

}
else if ((HighIndex4 < Ordinary8) && (subjectCounter >= 6)) {

Sub4 = 0;
HighIndex4 = Ordinary8;

}
else if ((HighIndex5 < Ordinary8) && (subjectCounter >= 6)){

Sub5 = 0;
HighIndex5 = Ordinary8;

}
else if ((HighIndex6 < Ordinary8) && (subjectCounter >= 6)) {

Sub6 = 0;
HighIndex6 = Ordinary8;

}

subjectCounter = subjectCounter + 1;



document.getElementById('display').innerHTML = Sub1 + Sub2 + Sub3 + Sub4 + Sub5 + Sub6 + bonus;
document.getElementById('counter').innerHTML = subjectCounter;  
document.getElementById('grades').innerHTML += "O8, ";

}


