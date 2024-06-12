function run() {
    const n = getNumberValueFromInput();
    const output = multiTable(n);
    print(output);
}


function multiTable(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        result = result + generateStars(i);
        result = result + "\n";
    }
    return result;
}


function generateStars(numberOfStars) {
    let stars = "";
    for (let i = 0; i < numberOfStars; i++) {
        stars = stars + "* ";  
    }
    return stars;
}

function getNumberValueFromInput() {
    const inputString = document.getElementById("input").value;
    const n = Number(inputString);
    return n;
}

function print(output) {
    document.getElementById("output").innerText = output;
}