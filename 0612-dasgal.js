///////////////ChatGPT/////////////////////////////
//Chat GPT //////hicheel

// for (let i = 0; i < 5; i++) { // Outer Loop
//     for (let j = 0; j < 2; j++) { // Inner Loop
//         console.log(`Outer loop iteration: ${i}, Inner loop iteration: ${j}`);
//     }
// }

//////////////////////////////////////////////////////

// for (let i = 0; i < 5; i++) {
//     debugger;
//     let pattern = "";
//     for (let j = 0; j < 2; j++) {
        
//         pattern = pattern + " * ";
//         debugger;
//     } console.log(pattern)
        
// }
        
//////////////////////////////////////////////////////

// function run() {
//     const n = getNumberValueFromInput();
//     const output = triangularSequence();
//     print(output);
//   }

  function triangularSequence() {
  
      const size = (document.getElementById("input").value);
  
      let table = "";
      for (let i = 1; i <= size; i++) {
          for (let j = 1; j <= size -1; j++) {
             table += " ";
              
          }
          for (let k = 1; k <= i; k++) {
              table += "* ";
             
          }
          table += "\n"
      }
      document.getElementById("output").innerText = table;
  }
  
  function getNumberValueFromInput() {
    const inputString = document.getElementById("input").value;
    const n = Number(inputString);
    return n;
  }

  function print(output) {
    document.getElementById("output").innerText = output;
  }


      
        


