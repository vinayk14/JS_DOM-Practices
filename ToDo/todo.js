let taskBtn = document.getElementById("taskbtn")
let taskTodo = document.getElementById("todo") 


taskBtn.addEventListener("click", todoTask)

let defaultValue ="Add Your Task"
function todoTask(){
    let parentTaskCard = document.createElement("div")
    parentTaskCard.className = "parent-taskcard"
    let taskCard =document.createElement("div")
    taskCard.innerText = defaultValue
    taskCard.className = "taskcard"
    taskCard.contentEditable= true
    parentTaskCard.append(taskCard)

    taskCard.addEventListener("click", value)

    function value(e){
        let selectedTask = e.target
        if(selectedTask.innerText == defaultValue){
            taskCard.innerText = ""
        }
    }
    taskCard.addEventListener("blur",()=>{
    if(taskCard.innerText.trim() == ""){
        parentTaskCard.remove()
    }
})
    

let selectTag = document.createElement("select")

let columnNames = ["todo", "working", "done"]

for(let t of columnNames){
    let optionTag = document.createElement("option")
    optionTag.value = t
    optionTag.innerText=t[0].toUpperCase() + t.slice(1)
    selectTag.append(optionTag) 
}


parentTaskCard.append(selectTag)
taskTodo.append(parentTaskCard)


selectTag.addEventListener("change", (e)=>{

    let selectedValue = e.target.value
    let selectedColumn = document.getElementById(selectedValue)

    selectedColumn.append(parentTaskCard)


})


}
