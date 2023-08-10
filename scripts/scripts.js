window.onload=function() {
    blinkCursor();
    // checkPassword();
    var currentFileName = window.location.pathname.split('/').pop();
            
    // Specify the target file name
    var targetFileName = "ppt.html"; // Replace with your target file name

    if (currentFileName === targetFileName) {
        checkPassword();
    }
    if(window.location.href.indexOf('ppt.html') > -1) {
        torcTypeWriter();
    } else {
        typeWriter();
    }
}

var i = 0;
var j = 0;
var title = 'Wesley Ireland';
var torcTitle = 'Powerpoint Night';
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

function checkPassword() {
    var enteredPassword = prompt("Please enter the password:");
    var correctPassword = "Power"; // Replace with your actual password
    
    if (enteredPassword === correctPassword) {
        alert("Password correct! You have access.");
    } else {
        alert("Incorrect password. Access denied.");
        window.location.href = "index.html"; // Redirect to index.html
    }
}