
function calcuateTip(){
var billAmt = document.getElementById("billamt").value;
var serviceQual = document.getElementById("serviceQual").value;
var numOfPeople = document.getElementById("peopleamt").value;

// validate input 
if(billAmt === "" || serviceQual == 0){
    alert("Please enter a valid amout!");
    return;
}

// check the amout entres by users 
if( numOfPeople === "" || numOfPeople <= 1){
    numOfPeople = 1;
    document.getElementById("each").style.display= "none";
} else{
    document.getElementById("each").style.display= "block";
}


// calcuate tip
var total =(billAmt * serviceQual) /numOfPeople;
// round to two no 
total = Math.round(total * 100)/100;
total = total.toFixed(2);
// display the tip 
document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;
}

// // hide the tip amout
document.getElementById("totalTip").style.display= "none";
document.getElementById("each").style.display= "none";

document.getElementById("calculate").onclick = function(){
    calcuateTip()

};





