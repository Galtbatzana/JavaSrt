function run() {
    const n = getNumberValueFromInput();
    const output = multiTable(n);
    print(output);
}

function multiTable(n) {
    let result = "";

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
             debugger;
          const value = String(i * k);
          result += value.padStart(3, " ") + " ";
             debugger;  
        } 
        result = result + "\n";
    }
    return result; 
}


function getNumberValueFromInput() {
    const inputString = document.getElementById("input").value;
    const n = Number(inputString);
    return n;
}

function print(output) {
    document.getElementById("output").innerText = output;
}