 
 
const incrementButton = document.getElementById('btn1');
const decrementButton = document.getElementById('btn2');
const counter = document.getElementById('counter');
  
 let count = 0;
function Update() {
    counter.innerHTML = count;
}
    function DecrementButton() {
        count--;
        Update()
    }

    function IncrementButton() {
        count++;
      Update()
    }
    
    btn1.onclick = IncrementButton;
    btn2.onclick = DecrementButton;

  

