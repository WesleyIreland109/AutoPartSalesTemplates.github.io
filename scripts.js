window.onload=function() {
    blinkCursor();
    if (window.location.href.indexOf('index.html') > -1) {
        typeWriter();
    } else if(window.location.href.indexOf('torc.html') > -1) {
        torcTypeWriter();
    }
}

var i = 0;
var j = 0;
var title = 'Wesley\'s projects';
var torcTitle = 'Torc Templates';
var titleSpeed = 50;
var cursorSpeed = 500;

function typeWriter() {
    if (i < title.length) {
        document.getElementById("Welcome").innerHTML += title.charAt(i);
        i++;
        setTimeout(typeWriter, titleSpeed);
    }
}

function torcTypeWriter() {
    if (j < torcTitle.length) {
        document.getElementById("TorcTitle").innerHTML += torcTitle.charAt(j);
        j++;
        setTimeout(torcTypeWriter, titleSpeed);
    }
}

function blinkCursor() {
    const cursor = document.getElementById("cursor");
    if (cursor.style.visibility === "visible") {
        cursor.style.visibility = "hidden";
    } else {
        cursor.style.visibility = "visible";
    }
    setTimeout(blinkCursor, cursorSpeed);
}