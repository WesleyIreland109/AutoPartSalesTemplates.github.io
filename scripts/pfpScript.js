var pfp = "ERROR";
const delay = 1; // Adjust the typing speed in milliseconds
const charactersPerStep = 400;

window.onload=function() {
    fetch("images/bigAsciiPFP.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${txtFile}`);
            }
            return response.text();
        })
        .then(text => {
            pfp = text;
        })
        .catch(error => {
            console.error(error);
        });
    typeWriter();
}

function typeWriter() {
    let i = 0;
    const preElement = document.getElementById('PFP');

    function type() {
        // if (i < pfp.length) {
        //     preElement.textContent += pfp.slice(i, i + charactersPerStep);
        //     // preElement.textContent += pfp.charAt(i);
        //     i++;
        //     setTimeout(type, delay);
        // } else {
        //     setTimeout(erase, delay);
        // }
        const nextPos = currentPos + charactersPerStep;
        const chunk = pfp.slice(currentPos, nextPos);
        preElement.textContent += chunk;
        currentPos = nextPos;

        if (currentPos < pfp.length) {
            setTimeout(type, delay);
        }
    }

    function erase() {
        if (preElement.textContent.length > 0) {
            preElement.textContent = preElement.textContent.slice(0, -1);
            setTimeout(erase, delay);
        } else {
            setTimeout(type, delay);
        }
    }

    type();
}