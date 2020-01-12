console.log("asset/javascript/obj-func.js linked");



function ProgressCountdown(timeleft, bar, text) {
    return new Promise((resolve, reject) => {
        var countdownTimer = setInterval(() => {
            timeleft--;

            document.getElementById(bar).value = timeleft;
            document.getElementById(text).textContent = timeleft;

            if (timeleft <= 0) {
                clearInterval(countdownTimer);
                resolve(true);
            }
        }, 1000);
    });
}


// will randomize [0 to x] positive int sequence, returns array (length.x+1) 
// used for randomizing questions and answer positions 
function randomIndex(arrLength) {
    let randIndex = [];
    let unique = false;
    for (i = 0; i < arrLength; i++) {
        randIndex.push(Math.floor(Math.random() * arrLength));
        while (!unique) { // loops until unique random is created
            unique = true;
            if (i > 0) { // skip first array element (always unique)
                for (k = 0; k < i; k++) {
                    if (randIndex[k] === randIndex[i]) {
                        unique = false
                    }
                }
            }
            if (!unique) {
                randIndex[i] = Math.floor(Math.random() * arrLength)
            }
        }
        unique = false;
    }
    return randIndex === null ? 0 : randIndex;
}