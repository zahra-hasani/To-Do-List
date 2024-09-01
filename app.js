function addTask(){
    var input = document.getElementById('input');
    var taskText = input.value;

    if (taskText === ""){
        alert("Please enter a Task");
        return;
    }

    var list = document.getElementById("ul"); 
    var li = document.createElement('li');
    li.textContent = taskText;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
         list.removeChild(li);
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = ""; 
}