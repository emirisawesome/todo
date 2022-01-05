'use strict'

const body = document.querySelector('body')

let taskList = document.createElement('div')
taskList.className = 'task__list'
body.append(taskList)

let actList = document.createElement('div')
actList.className = 'act__List'
taskList.append(actList)

let compList = document.createElement('div')
compList.className = 'comp__list'
taskList.append(compList)

let addTaskContainer = document.createElement('div')
addTaskContainer.className = 'add__Task__Container'
body.append(addTaskContainer)

let addTaskTextarea = document.createElement('textarea')
addTaskTextarea.className = 'add__Task__Textarea'
addTaskContainer.append(addTaskTextarea)

let addTaskBtn = document.createElement('button')
addTaskBtn.className = 'add__Task__Btn'
addTaskBtn.innerHTML = 'Add Task'
addTaskContainer.append(addTaskBtn)



let transliterate = (text) => {

    text = text
        .replace(/\u0401/g, 'YO')
        .replace(/\u0419/g, 'I')
        .replace(/\u0426/g, 'TS')
        .replace(/\u0423/g, 'U')
        .replace(/\u041A/g, 'K')
        .replace(/\u0415/g, 'E')
        .replace(/\u041D/g, 'N')
        .replace(/\u0413/g, 'G')
        .replace(/\u0428/g, 'SH')
        .replace(/\u0429/g, 'SCH')
        .replace(/\u0417/g, 'Z')
        .replace(/\u0425/g, 'H')
        .replace(/\u042A/g, '')
        .replace(/\u0451/g, 'yo')
        .replace(/\u0439/g, 'i')
        .replace(/\u0446/g, 'ts')
        .replace(/\u0443/g, 'u')
        .replace(/\u043A/g, 'k')
        .replace(/\u0435/g, 'e')
        .replace(/\u043D/g, 'n')
        .replace(/\u0433/g, 'g')
        .replace(/\u0448/g, 'sh')
        .replace(/\u0449/g, 'sch')
        .replace(/\u0437/g, 'z')
        .replace(/\u0445/g, 'h')
        .replace(/\u044A/g, "'")
        .replace(/\u0424/g, 'F')
        .replace(/\u042B/g, 'I')
        .replace(/\u0412/g, 'V')
        .replace(/\u0410/g, 'a')
        .replace(/\u041F/g, 'P')
        .replace(/\u0420/g, 'R')
        .replace(/\u041E/g, 'O')
        .replace(/\u041B/g, 'L')
        .replace(/\u0414/g, 'D')
        .replace(/\u0416/g, 'ZH')
        .replace(/\u042D/g, 'E')
        .replace(/\u0444/g, 'f')
        .replace(/\u044B/g, 'i')
        .replace(/\u0432/g, 'v')
        .replace(/\u0430/g, 'a')
        .replace(/\u043F/g, 'p')
        .replace(/\u0440/g, 'r')
        .replace(/\u043E/g, 'o')
        .replace(/\u043B/g, 'l')
        .replace(/\u0434/g, 'd')
        .replace(/\u0436/g, 'zh')
        .replace(/\u044D/g, 'e')
        .replace(/\u042F/g, 'Ya')
        .replace(/\u0427/g, 'CH')
        .replace(/\u0421/g, 'S')
        .replace(/\u041C/g, 'M')
        .replace(/\u0418/g, 'I')
        .replace(/\u0422/g, 'T')
        .replace(/\u042C/g, "'")
        .replace(/\u0411/g, 'B')
        .replace(/\u042E/g, 'YU')
        .replace(/\u044F/g, 'ya')
        .replace(/\u0447/g, 'ch')
        .replace(/\u0441/g, 's')
        .replace(/\u043C/g, 'm')
        .replace(/\u0438/g, 'i')
        .replace(/\u0442/g, 't')
        .replace(/\u044C/g, "'")
        .replace(/\u0431/g, 'b')
        .replace(/\u044E/g, 'yu');

    return text;
};


const actTask = []





const deleteTask = (event) => {
    let target = event.target.id
    document.getElementById(`${target}`).remove();
    actTask.forEach((e, i) => {
        if (e == target) {
            actTask.splice(i, 1)
        }
    })
}



const completeTask = (event) => {
    let target = event.target.id
    let completedTask = document.getElementById(`${target}`)
    compList.append(completedTask)

}




const addTask = () => {

    if (addTaskTextarea.value == '') {
        alert('write some')
        addTaskTextarea.value = ''

        return
    }
    for (const i of actTask) {
        if (addTaskTextarea.value == i) {
            alert('write another')
            addTaskTextarea.value = ''
            return
        }
    }

    let checkId = transliterate(addTaskTextarea.value)

    actTask.push(checkId)

    let task = document.createElement('article')
    task.className = 'task'
    task.id = `${checkId}`
    actList.append(task)

    let TaskText = document.createElement('p')
    TaskText.innerHTML = `${addTaskTextarea.value}`
    TaskText.className = 'task__text'
    TaskText.id = `${checkId}`
    task.append(TaskText)

    TaskText.addEventListener('click', completeTask)


    let delBtn = document.createElement('button')
    delBtn.className = 'del__btn'
    delBtn.innerHTML = 'Delete'
    delBtn.id = `${checkId}`
    task.append(delBtn)

    delBtn.addEventListener('click', deleteTask)

    addTaskTextarea.value = ''

}




addTaskBtn.addEventListener('click', addTask)