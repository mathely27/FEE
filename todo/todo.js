console.log("hello");

const task=document.getElementById("taskInput");
const add=document.getElementById("addBtn");
const list = document.getElementById("taskList");
const pending=document.getElementById("pendingCount");

let count=0;
let isEditing=false;
let editingTask=null;

add.addEventListener("click",function(){
    if(task.value.trim()==""){
        alert("Please Enter a valid task!!");
        return;
    }



    if (isEditing) {

    editingTask.innerText = task.value;
    isEditing = false;

    editingTask = null;
    task.value = "";

    add.innerText = "Add";

    return;
}
        const taskCard=document.createElement("div");

        const taskText=document.createElement("p");
        

        taskText.innerText=task.value;

        const completeBtn=document.createElement("button");
        completeBtn.innerText = "✓";

        completeBtn.addEventListener("click",function(){
            if(taskText.style.textDecoration=="line-through"){
                taskText.style.textDecoration="";
                count++;
                pending.innerText="pending : "+count;
            }else{
                taskText.style.textDecoration="line-through";
                count--;
                pending.innerText="pending : "+count;
            }
            
        })

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        editBtn.addEventListener("click", function(){
            task.value = taskText.innerText;
            isEditing = true;
            editingTask = taskText;
            add.innerText = "Save";
            task.focus();


        })

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
            // list.append(taskCard);

        deleteBtn.addEventListener("click",function(){
             if (taskText.style.textDecoration == "line-through") {

             } else {
                count--;
                pending.innerText = "Pending : " + count;

            }
            deleteBtn.parentElement.remove();
        })    




        taskCard.append(taskText);

// editBtn.innerText = "Edit";
        taskCard.append(editBtn);

// deleteBtn.innerText = "Delete";
        taskCard.append(deleteBtn);

// completeBtn.innerText = "✓";
        taskCard.append(completeBtn);

        count++;
        pending.innerText="pending : "+count;
        list.append(taskCard);

});

