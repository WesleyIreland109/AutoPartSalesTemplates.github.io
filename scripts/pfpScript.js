var pfp = "ERROR";
const delay = 50; // Adjust the typing speed in milliseconds
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
        }
    }
    type();
}
