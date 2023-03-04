function addTask(){ 
    let txtTask = document.getElementById("task");  
    let txtTaskList = document.getElementById('taskList'); 

    let tmp = txtTaskList.value + txtTask.value +"\r\n"; 
    localStorage.setItem("taskList", tmp); 
    document.getElementById('taskList').value = tmp;
}

function getTask(){
    let taskList =localStorage.getItem("taskList");
    document.getElementById('taskList').value = taskList; 
}

function clearTask(){ 
    localStorage.clear();
    document.getElementById('taskList').value ="";

} 