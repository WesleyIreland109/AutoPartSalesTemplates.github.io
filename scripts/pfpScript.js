var pfp = "ERROR";
const delay = 1; // Adjust the typing speed in milliseconds
const charactersPerChunk = 400;

window.onload = function () {
    fetch("images/bigAsciiPFP.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.url}`);
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
        if (i < pfp.length) {
            preElement.textContent += pfp.substring(i, i + charactersPerChunk);
            i += charactersPerChunk;
            setTimeout(type, delay);
        } else {
            setTimeout(erase, delay);
        }
    }

    function erase() {
        if (preElement.textContent.length > 0) {
            preElement.textContent = preElement.textContent.slice(0, -charactersPerChunk);
            setTimeout(erase, delay);
        } else {
            i = 0; // Reset index for the next iteration
            setTimeout(type, delay);
        }
    }

    type();
}
