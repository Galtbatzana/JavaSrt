const tasks = ["My todo list #1", "wash dishes", "watch football"];


function addTask() {
    const input = document.getElementById("input");
    tasks.unshift(input.value);
    input.value = "";
    render(); 
}

function render() {
    let tasksHtml = "";

for (let i = 0; i < tasks.length; i++) {
    
    const oneTask = `
    <div class="body-row">
        <input class="body-check-box" type="checkbox" />
        <p id="title">My todo list #1</p>
        <button class="btn-edit">edit</button>
        <button class="btn-delete" onclick="delText();">del</button>
    </div>
    `;
    tasksHtml = tasksHtml + oneTask;  
}
document.getElementById("tasks").innerHTML = tasksHtml;
}
render();

function editText() {
    todoText = "";
    const todoText = document.getElementById("title");
    
}

function delText() {
    emptyText = "";
    const todoText = document.getElementById("title");
    console.log(todoText.innerText);
    const emptyText = todoText;
   
}

function addText() {
    const titleText = document.getElementById("title");
    titleText.innerText = input.value;
    console.log(titleText.innerText);
}