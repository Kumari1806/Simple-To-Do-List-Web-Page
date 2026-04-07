function addTask() {                                                     /*add task called*/ 
    const newTask= document.createElement('li')                          /*lists will be created*/
    const taskList=document.getElementById('taskList')
    taskList.appendChild(newTask)                                        /*tasks are get added into the list*/
    newTask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value=""                        /* placeholder will be empty after add task*/
    deleteTask(newTask)
}

function deleteTask(newTask)             
{
    const deleteBtn=document.createElement('button')                     /*delete button is created */
    deleteBtn.textContent= "Delete"
    newTask.appendChild(deleteBtn)                                       /*delete btn will be added to the list*/
    deleteBtn.onclick = function()                                       /*items will be deleted by clicking on delete btn */
    {
        newTask.remove()
    }
}    