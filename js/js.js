var btnNum = document.getElementById("btn-1");
var btnNum2 = document.getElementById("btn-2");
var btnNum3 = document.getElementById("btn-3");
var btnNum4 = document.getElementById("btn-4");
var btnNum5 = document.getElementById("btn-5");
var btnNum6 = document.getElementById("btn-6");
var btnNum8 = document.getElementById("btn-8");
var btnNum9 = document.getElementById("btn-9");
var btnNum10 = document.getElementById("btn-10");
var btnNum11 = document.getElementById("btn-11");
var btnNum12 = document.getElementById("btn-12");
var btnNum13 = document.getElementById("btn-13");
var btnNum14 = document.getElementById("btn-14");
var btnNum15 = document.getElementById("btn-15");
var btnNum16 = document.getElementById("btn-16");
var btnNum17 = document.getElementById("btn-17");
var btnNum18 = document.getElementById("btn-18");
var btnNum19 = document.getElementById("btn-19");
var btnNum20 = document.getElementById("btn-20");


var res1   = document.getElementById("p-num");
var res2   = document.getElementById("p-num-2");
var res3   = document.getElementById("p-num-3");
var res4   = document.getElementById("p-num-4");
var res5   = document.getElementById("p-num-5")
var res5b  = document.getElementById("p-num-5b");
var res6   = document.getElementById("p-num-6");
var res8   = document.getElementById("p-num-8");
var res9   = document.getElementById("p-num-9");
var res10  = document.getElementById("p-num-10");
var res11  = document.getElementById("p-num-11");
var res12  = document.getElementById("p-num-12");
var res12b = document.getElementById("p-num-12b");
var res13  = document.getElementById("p-num-13");
var res14  = document.getElementById("p-num-14");
var res13b = document.getElementById("p-num-13b");
var res13c = document.getElementById("p-num-13c");
var res15  = document.getElementById("p-num-15");
var res16  = document.getElementById("p-num-16");
var res17  = document.getElementById("p-num-17");
var res18  = document.getElementById("p-num-18");
var res19  = document.getElementById("p-num-19");
var res20  = document.getElementById("p-num-20");


// Assignment-1


function printNum1 (){
    var getNum1 = document.getElementById('num-1').value;
    var aler1 = document.getElementById('aler1');
    res1.innerHTML = ""; //clear previous output
    aler1.innerHTML =''; //clear previous output
    if (getNum1 == "") {
        aler1.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum1)) {
        aler1.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else {
        res1.innerHTML = getNum1;
    }
}
btnNum.addEventListener('click', printNum1);

// Assignment-2
//////////////////////////////////////////////////
function printNum2 () {
    var getNum2 = document.getElementById('num-2').value;
    var aler2 = document.getElementById('aler2');
    res2.innerHTML = ""; //clear previous output
    aler2.innerHTML =''; //clear previous output
    if (getNum2 == "") {
        aler2.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum2)) {
        aler2.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else if (getNum2 % 3 == 0 && getNum2 % 4 == 0) {
        res2.innerHTML = "Yes";
    }
    else {
        res2.innerHTML = "No";
    }
}
btnNum2.addEventListener('click', printNum2);
    

// Assignment-3
//////////////////////////////////////////////////

function printNum3 () {
    var getNum3 = document.getElementById('num-3').value;
    var getNum3b = document.getElementById('num-3b').value;
    var aler3 = document.getElementById('aler3');
    res3.innerHTML = ""; //clear previous output
    aler3.innerHTML =''; //clear previous output
    if (getNum3 == "" || getNum3b == "") {
        aler3.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum3) || isNaN(getNum3b)) {
        aler3.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    } 
    else if (parseInt(getNum3, 10)  > parseInt(getNum3b, 10) ) {
        res3.innerHTML = parseInt(getNum3, 10);
    }
    else if (parseInt(getNum3, 10) < parseInt(getNum3b, 10)){
        res3.innerHTML = parseInt(getNum3b, 10);
    }
    else {
        res3.innerHTML = "The two numbers are equal";
    }
}
btnNum3.addEventListener('click', printNum3);

// Assignment-4
//////////////////////////////////////////////////
function printNum4 () {
    var getNum4 = document.getElementById('num-4').value;
    var aler4 = document.getElementById('aler4');
    res4.innerHTML = ""; //clear previous output
    aler4.innerHTML =''; //clear previous output
    if (getNum4 == "") {
        aler4.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum4)) {
        aler4.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else if (getNum4 > 0) {
        res4.innerHTML = "positive";
    }
    else {
        res4.innerHTML = "negative";
    }
}
btnNum4.addEventListener('click', printNum4);
    

// Assignment-5
//////////////////////////////////////////////////

function printNum5 () {
    var getNum5 = document.getElementById('num-5').value;
    var getNum5b = document.getElementById('num-5b').value;
    var getNum5c = document.getElementById('num-5c').value;
    var aler5 = document.getElementById('aler5');
    res5.innerHTML = ""; //clear previous output
    res5b.innerHTML = ""; //clear previous output
    aler5.innerHTML =''; //clear previous output
    if (getNum5 == "" || getNum5b == "" || getNum5c == "") {
        aler5.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum5) || isNaN(getNum5b) || isNaN(getNum5c)) {
        aler5.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    } 
    else if ((parseInt(getNum5, 10)  > parseInt(getNum5b, 10)) && (parseInt(getNum5, 10)  > parseInt(getNum5c, 10))) {
        res5.innerHTML = parseInt(getNum5, 10);
    }
    else if ((parseInt(getNum5b, 10)  > parseInt(getNum5, 10)) && (parseInt(getNum5b, 10)  > parseInt(getNum5c, 10))){
        res5.innerHTML = parseInt(getNum5b, 10);
    }
    else {
        res5.innerHTML = parseInt(getNum5c, 10);
    };

    if (getNum5 == "" || getNum5b == "" || getNum5c == "") {
        aler5.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum5) || isNaN(getNum5b) || isNaN(getNum5c)) {
        aler5.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    } 
    else if ((parseInt(getNum5, 10)  < parseInt(getNum5b, 10)) && (parseInt(getNum5, 10)  < parseInt(getNum5c, 10))) {
        res5b.innerHTML = parseInt(getNum5, 10);
    }
    else if ((parseInt(getNum5b, 10)  < parseInt(getNum5, 10)) && (parseInt(getNum5b, 10)  < parseInt(getNum5c, 10))){
        res5b.innerHTML = parseInt(getNum5b, 10);
    }
    else {
        res5b.innerHTML = parseInt(getNum5c, 10);
    };

};

btnNum5.addEventListener('click', printNum5);


// Assignment-6
//////////////////////////////////////////////////
function printNum6 () {
    var getNum6 = document.getElementById('num-6').value;
    var aler6 = document.getElementById('aler6');
    res6.innerHTML = ""; //clear previous output
    aler6.innerHTML =''; //clear previous output
    if (getNum6 == "") {
        aler6.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum6)) {
        aler6.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else if (getNum6 % 2 == 0) {
        res6.innerHTML = "even";
    }
    else {
        res6.innerHTML = "odd";
    }
}
btnNum6.addEventListener('click', printNum6);

// Assignment-8
//////////////////////////////////////////////////
function printLetter8 () {
    var getNum8 = document.getElementById('num-8').value;
    var aler8 = document.getElementById('aler8');
    res8.innerHTML = ""; //clear previous output
    aler8.innerHTML =''; //clear previous output
    if (getNum8 == "") {
        aler8.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a letter!
        </div>`;
    }
    else if(!isNaN(getNum8)) {
        aler8.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter one letter!
        </div>`;
    }
    else if (getNum8 === "a"|| getNum8 === "A"|| getNum8 === "e"|| getNum8 === "E"|| getNum8 === "i"|| getNum8 === "I"|| getNum8 === "u"|| getNum8 === "U"|| getNum8 === "o" || getNum8 === "O") {
        res8.innerHTML = " vowel";
    }
    else {
        res8.innerHTML = "Consonant";
    }
}
btnNum8.addEventListener('click', printLetter8);

// Assignment-9
//////////////////////////////////////////////////
function printNum9 () {
    var getNum9 = document.getElementById('num-9').value;
    var aler9 = document.getElementById('aler9');
    res9.innerHTML = ""; //clear previous output
    aler9.innerHTML =''; //clear previous output
    if (getNum9 == "") {
        aler9.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum9)) {
        aler9.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }

    else {

        for(var i = 1 ; i <= getNum9 ; i++){
            res9.innerHTML +=  `<p>${i}</p>` ;
        }
        
    }
}
btnNum9.addEventListener('click', printNum9);
    

// Assignment-10
//////////////////////////////////////////////////
function printNum10 () {
    var getNum10 = document.getElementById('num-10').value;
    var aler10 = document.getElementById('aler10');
    res10.innerHTML = ""; //clear previous output
    aler10.innerHTML =''; //clear previous output
    if (getNum10 == "") {
        aler10.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum10)) {
        aler10.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else  {
        for(var j = 1; j <= 12; j++){
            res10.innerHTML +=  `<p>${getNum10 * j}</p>` ;
        }
        
    }
    
}
btnNum10.addEventListener('click', printNum10);


// Assignment-11
//////////////////////////////////////////////////
function printNum11 () {
    var getNum11 = document.getElementById('num-11').value;
    var aler11 = document.getElementById('aler11');
    res11.innerHTML = ""; //clear previous output
    aler11.innerHTML =''; //clear previous output
    if (getNum11 == "") {
        aler11.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum11)) {
        aler11.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else  {
        for(var k=1 ; k <= getNum11 ; k++ ){
            if (k % 2==0){
                res11.innerHTML +=  `<p>${k}</p>`;
            }
        }
    }
    
}
btnNum11.addEventListener('click', printNum11);

// Assignment-12
//////////////////////////////////////////////////

function printNum12 () {
    var getNum12 = document.getElementById('num-12').value;
    var getNum12b = document.getElementById('num-12b').value;
    var aler12 = document.getElementById('aler12');
    res12.innerHTML = ""; //clear previous output
    aler12.innerHTML =''; //clear previous output
    if (getNum12 == "" || getNum12b == "") {
        aler12.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum12) || isNaN(getNum12b)) {
        aler3.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    } 
    else {
        res12.innerHTML = Math.pow(getNum12, getNum12b);;
    }
}
btnNum12.addEventListener('click', printNum12);


// Assignment-13
//////////////////////////////////////////////////

function printNum13 () {
    var getNum13 = document.getElementById('num-13').value;
    var getNum13b = document.getElementById('num-13b').value;
    var getNum13c = document.getElementById('num-13c').value;
    var getNum13d = document.getElementById('num-13d').value;
    var getNum13e = document.getElementById('num-13e').value;
    var aler13 = document.getElementById('aler13');
    var getSum13 = +getNum13 + +getNum13b + +getNum13c + +getNum13d + +getNum13e;
    var getAverage13 = getSum13 / 5;
    var percentage13 = (getSum13 / 500) * 100 ;
    res13.innerHTML = ""; //clear previous output
    res13b.innerHTML = ""; //clear previous output
    res13c.innerHTML = ""; //clear previous output
    aler13.innerHTML =''; //clear previous output
    if (getNum13 == "" || getNum13b == "" || getNum13c == "" || getNum13d == "" || getNum13e == "" ) {
        aler13.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum13) || isNaN(getNum13b) || isNaN(getNum13c) || isNaN(getNum13d) || isNaN(getNum13e)) {
        aler13.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    } 
    else {
        res13.innerHTML = getSum13;
        res13b.innerHTML = getAverage13;
        res13c.innerHTML = percentage13 +"%";
    }
}
btnNum13.addEventListener('click', printNum13);


// Assignment-14
//////////////////////////////////////////////////
function printNum14 () {
    var getNum14 = document.getElementById('num-14').value;
    var aler14 = document.getElementById('aler-14');
    res14.innerHTML = ""; //clear previous output
    aler14.innerHTML =''; //clear previous output
    if (getNum14 == "") {
        aler14.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum14)) {
        aler14.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else if (getNum14 < 0 || getNum14 > 12){
        aler14.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number from 1 to 12!
        </div>`;
    }
    else if (getNum14 > 0 && getNum14 <= 12) {
        if (getNum14 == 1 || getNum14 == 3 || getNum14 == 5 || getNum14 == 7 || getNum14 == 8 || getNum14 == 10 || getNum14 == 12) {
            res14.innerHTML = 31;
        }
        else if (getNum14 == 4 || getNum14 == 6 || getNum14 == 9 || getNum14 == 11) {
            res14.innerHTML = 30;
        }
        else  {
            res14.innerHTML = 28;
        }
    }
}
btnNum14.addEventListener('click', printNum14);
    

// Assignment-15
//////////////////////////////////////////////////

function printNum15 () {
    var getNum15   = document.getElementById('num-15').value;
    var getNum15b = document.getElementById('num-15b').value;
    var getNum15c = document.getElementById('num-15c').value;
    var getNum15d = document.getElementById('num-15d').value;
    var getNum15e = document.getElementById('num-15e').value;
    var total15 = +getNum15 + +getNum15b + +getNum15c + +getNum15d + +getNum15e;


    let percentage15 = (total15 / 500) * 100;
    var aler15 = document.getElementById('aler-15');
    res15.innerHTML = ""; //clear previous output
    aler15.innerHTML =''; //clear previous output
    if (getNum15 == "" || getNum15b == "" || getNum15c == "" || getNum15d == "" || getNum15e == "") {
        aler15.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum15) || isNaN(getNum15b) || isNaN(getNum15c) || isNaN(getNum15d) || isNaN(getNum15e)) {
        aler15.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    } 
    else if (percentage15 >= 90 ){
        res15.innerHTML = `<p><span>percentage >= 90</span> Grad A</p>`;
    }
    else if (percentage15 >= 80 ){
        res15.innerHTML = `<p><span>percentage >= 80</span> Grad B</p>`;
    }
    else if (percentage15 >= 70 ){
        res15.innerHTML = `<p><span>percentage >= 70</span> Grad C</p>`;
    }
    else if (percentage15 >= 60 ){
        res15.innerHTML = `<p><span>percentage >= 60</span> Grad D</p>`;
    }
    else if (percentage15 >= 40 ){
        res15.innerHTML = `<p><span>percentage >= 40</span> Grad E</p>`;
    }
    else {
        res15.innerHTML = `<p><span>percentage >= 40</span> Grad F</p>`;
    }
}
btnNum15.addEventListener('click', printNum15);


// Assignment-16 swich
//////////////////////////////////////////////////


function printNum16 () {
    var getNum16 = document.getElementById('num-16').value;
    var aler16 = document.getElementById('aler-16');
    res16.innerHTML = ""; //clear previous output
    aler16.innerHTML =''; //clear previous output
    if (getNum16 == "") {
        aler16.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum16)) {
        aler16.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else if (getNum16 < 0 || getNum16 > 12){
        aler16.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number from 1 to 12!
        </div>`;
    }
    else if (getNum16 > 0 && getNum16 <= 12) {
        switch(+getNum16){

            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                res16.innerHTML = 31;
                break;

            case 4:
            case 6:
            case 9:
            case 11:
                res16.innerHTML = 30;
                break;

            case 2:
                res16.innerHTML = 28;
                break;
        }
    }
};
btnNum16.addEventListener('click', printNum16);
    


// Assignment-17-swich
//////////////////////////////////////////////////
function printLetter17 () {
    var getNum17 = document.getElementById('num-17').value;
    var aler17 = document.getElementById('aler17');
    res17.innerHTML = ""; //clear previous output
    aler17.innerHTML =''; //clear previous output
    if (getNum17 == "") {
        aler17.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a letter!
        </div>`;
    }
    else if(!isNaN(getNum17)) {
        aler17.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter one letter!
        </div>`;
    }
    else {
        switch( getNum17){
            case "a":
            case "A":
            case "e":
            case "E":
            case "o":
            case "O":
            case "u":
            case "U":
            case "i":
            case "I":
                res17.innerHTML = " vowel";
                break;
            default:
                res17.innerHTML = "Consonant";
                break;
        }
        
    };
};
btnNum17.addEventListener('click', printLetter17);



// Assignment-18 -swich
//////////////////////////////////////////////////

function printNum18 () {
    var getNum18 = document.getElementById('num-18').value;
    var getNum18b = document.getElementById('num-18b').value;
    var aler18 = document.getElementById('aler18');
    res18.innerHTML = ""; //clear previous output
    aler18.innerHTML =''; //clear previous output
    if (getNum18 == "" || getNum18b == "") {
        aler18.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum18) || isNaN(getNum18b)) {
        aler18.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    } 
    else if (parseInt(getNum18, 10)  > parseInt(getNum18b, 10) ) {
        res18.innerHTML = parseInt(getNum18, 10);
    }
    else if (parseInt(getNum18, 10) < parseInt(getNum18b, 10)){
        res18.innerHTML = parseInt(getNum18b, 10);
    }
    else {
        switch(true){
            case parseInt(getNum18, 10)  > parseInt(getNum18b, 10):
            res18.innerHTML = parseInt(getNum18, 10);
            break;

            case parseInt(getNum18, 10) < parseInt(getNum18b, 10):
                res18.innerHTML = parseInt(getNum18b, 10);
            break;

            default:
                res18.innerHTML = "The two numbers are equal";
            break;
        }
    };
};
btnNum18.addEventListener('click', printNum18);

// Assignment-19-swich
//////////////////////////////////////////////////
function printNum19 () {
    var getNum19 = document.getElementById('num-19').value;
    var aler19 = document.getElementById('aler19');
    res19.innerHTML = ""; //clear previous output
    aler19.innerHTML =''; //clear previous output
    if (getNum19 == "") {
        aler19.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum19)) {
        aler19.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else {
        switch (true) {
            case getNum19 % 2 == 0:
                res19.innerHTML = "even";
            break;

            default:
                res19.innerHTML = "odd";
            break;
        };
    };
};
btnNum19.addEventListener('click', printNum19);

// Assignment-20
//////////////////////////////////////////////////
function printNum20 () {
    var getNum20 = document.getElementById('num-20').value;
    var aler20 = document.getElementById('aler20');
    res20.innerHTML = ""; //clear previous output
    aler20.innerHTML =''; //clear previous output
    if (getNum20 == "") {
        aler20.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum20)) {
        aler20.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else {
        switch(getNum20 >= 0) {
            case true:
                res20.innerHTML = "positive";
            break;

            case false:
                res20.innerHTML = "negative";
            break;
        };
    };
};
btnNum20.addEventListener('click', printNum20);

// Assignment-22 -calculation



var res21  = document.getElementById("p-num-21");
var sum = document.getElementById("btn-plus");
var takeWay =  document.getElementById("btn-take-way");
var btnDiv =  document.getElementById("btn-dived");
var btnMul =  document.getElementById("btn-mul");

var btnNum21 = document.getElementById("btn-21");

function getSum21 (){
    var getNum21 = document.getElementById("num-21").value ;
    var getNum21b = document.getElementById("num-21b").value;
    var aler21 = document.getElementById('aler21');
    if (getNum21 == "" || getNum21b == "" ) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum21) || isNaN(getNum21b)) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else {
        res21.innerHTML = +getNum21 + +getNum21b;
    }
    
}

sum.addEventListener('click', getSum21);


function sub (){
    var getNum21 = document.getElementById("num-21").value ;
    var getNum21b = document.getElementById("num-21b").value;
    var aler21 = document.getElementById('aler21');
    if (getNum21 == "" || getNum21b == "" ) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum21) || isNaN(getNum21b)) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else {
        res21.innerHTML = +getNum21 - +getNum21b;
    }   
    
}

takeWay.addEventListener('click', sub);


function mul21 (){
    var getNum21 = document.getElementById("num-21").value ;
    var getNum21b = document.getElementById("num-21b").value;
    var aler21 = document.getElementById('aler21');
    if (getNum21 == "" || getNum21b == "" ) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum21) || isNaN(getNum21b)) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else {
        res21.innerHTML = +getNum21 * +getNum21b;
    }   
    
}

btnMul.addEventListener('click', mul21);


function div21 (){
    var getNum21 = document.getElementById("num-21").value ;
    var getNum21b = document.getElementById("num-21b").value;
    var aler21 = document.getElementById('aler21');
    if (getNum21 == "" || getNum21b == "" ) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a value!
        </div>`;
    }
    else if(isNaN(getNum21) || isNaN(getNum21b)) {
        aler21.innerHTML = `<div class="alert alert-danger" role="alert">
        You must enter a number!
        </div>`;
    }
    else {
        res21.innerHTML = +getNum21 / +getNum21b;
    }   
    
}

btnDiv.addEventListener('click', div21);

