function pascal(n) {
    let output = "";
    let currentLine = [];
    let prevLine = [];

    for (let i = 0; i < n; i++) {
        currentLine = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                currentLine.push(1);
            } 
            else { 
                currentLine.push(prevLine[j] + prevLine[j - 1]);
            }
            
        }
       prevLine = currentLine;
       output += currentLine.join(" ");
       output += "\n"; 
    }
    return output;
}

console.log(pascal(10));
console.log(pascal(5));
console.log(pascal(5));

