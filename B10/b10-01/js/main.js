/*
const Quote = ["PHP","Nodejs","Frontend","1","2","3"]
var counter = 0;
var elem = document.getElementById("quote");
var min = 0
var max = Quote.length;
const TIME_REP = 3000;

// this will execute on every 3 seconds
window.setInterval(function() {
    //returns a random number between min (included) and max (excluded):
    counter = Math.floor(Math.random() * (max - min) ) + min;
    elem.innerHTML = Quote[counter];
}, TIME_REP);
*/


/*
const Quote = ["PHP","Nodejs","Frontend","1","2","3"]
var elem = document.getElementById("quote");
const TIME_REP = 3000;

function getRandom(mn,mx){
    return Math.floor(Math.random() * (mx - mn) ) + mn;
}

function show() {
    //returns a random number between min (included) and max (excluded):
    let quote = Quote[getRandom(0, Quote.length)]
    elem.innerHTML = quote;
    
}

show();
// this will execute on every 3 seconds
setInterval(function(){
    show()
},3000);
*/


// -------jquery----------
const Quote = ["PHP","Nodejs","Frontend","1","2","3"]
var elem = $('#quote');
const TIME_REP = 3000;

function getRandom(mn,mx){
    return Math.floor(Math.random() * (mx - mn) ) + mn;
}


function show() {
    //returns a random number between min (included) and max (excluded):
    let quote = Quote[getRandom(0, Quote.length)]
    elem.html(quote);
}

$(document).ready(function () {
    
    show();
    // this will execute on every 3 seconds
    setInterval(function(){
        show()
    },3000);
});




