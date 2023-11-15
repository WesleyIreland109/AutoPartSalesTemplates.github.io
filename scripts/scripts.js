window.onload=function() {
    blinkCursor();
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

function checkPassword(event) {
    var enteredPassword = document.getElementById("password").value;
    var correctPassword = "Power";
    
    if (event.keyCode === 13 || event.which === 13) { // Enter key pressed
        if (enteredPassword === correctPassword) {
            window.location.href = "ppt.html"; // Redirect to next page
        } else {
            alert("Incorrect password. Please try again.");
        }
    }
}

function toggleAccordionVideoGames() {
    const accordionContent = document.querySelector('.accordion-content1');
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  }

  function toggleAccordionMicroControllers() {
    const accordionContent = document.querySelector('.accordion-content2');
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  }

  function toggleAccordionWebsites() {
    const accordionContent = document.querySelector('.accordion-content3');
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  }

  function toggleAccordionContactInfo() {
    const accordionContent = document.querySelector('.accordion-content4');
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  }