'use strict'

const body = document.querySelector('body')

let taskList = document.createElement('div')
taskList.className = 'task__list'
body.append(taskList)

let actList = document.createElement('div')
actList.className = 'act__list'
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


if (localStorage.getItem('acttasks') == null && localStorage.getItem('comptasks') == null) {
    localStorage.setItem('acttasks', JSON.stringify([]))
    localStorage.setItem('comptasks', JSON.stringify([]))
}


const deleteTask = (event) => {
    let target = event.target.dataset.name

    let actTasks = JSON.parse(localStorage.getItem('acttasks'))
    let compTasks = JSON.parse(localStorage.getItem('comptasks'))

    actTasks.forEach((e, i) => {
        if (e == target) {
            actTasks.splice(i, 1)
            localStorage.setItem('acttasks', JSON.stringify(actTasks))
            displayTasks()
            return
        }
    });

    compTasks.forEach((e, i) => {
        if (e == target) {
            compTasks.splice(i, 1)
            localStorage.setItem('comptasks', JSON.stringify(compTasks))
            displayTasks()
            return
        }
    });

    displayTasks()
}


const completeTask = (event) => {
    let target = event.path[0].dataset.task

    let actTasks = JSON.parse(localStorage.getItem('acttasks'))
    let compTasks = JSON.parse(localStorage.getItem('comptasks'))

    actTasks.forEach((e, i) => {
        if (e == target) {
            compTasks.unshift(e)
            actTasks.splice(i, 1)
            localStorage.setItem('acttasks', JSON.stringify(actTasks))
            localStorage.setItem('comptasks', JSON.stringify(compTasks))
            displayTasks()
            return
        }
    })

}


const deCompleteTask = (event) => {
    let target = event.path[0].dataset.task

    let actTasks = JSON.parse(localStorage.getItem('acttasks'))
    let compTasks = JSON.parse(localStorage.getItem('comptasks'))

    compTasks.forEach((e, i) => {
        if (e == target) {
            actTasks.unshift(e)
            compTasks.splice(i, 1)
            localStorage.setItem('acttasks', JSON.stringify(actTasks))
            localStorage.setItem('comptasks', JSON.stringify(compTasks))
            displayTasks()
            return
        }
    })
}

const changeTaskVal = (changedTaskTextareaVal, target) => {

    let actTasks = JSON.parse(localStorage.getItem('acttasks'))
    let compTasks = JSON.parse(localStorage.getItem('comptasks'))

    actTasks.forEach((e, i) => {
        if (e == target) {
            actTasks.splice(i, 1, changedTaskTextareaVal)
            localStorage.setItem('acttasks', JSON.stringify(actTasks))
            localStorage.setItem('comptasks', JSON.stringify(compTasks))
            displayTasks()
            return true
        }
    })

    compTasks.forEach((e, i) => {
        if (e == target) {
            compTasks.splice(i, 1, changedTaskTextareaVal)
            localStorage.setItem('acttasks', JSON.stringify(actTasks))
            localStorage.setItem('comptasks', JSON.stringify(compTasks))
            displayTasks()
            return true
        }
    })
}

const editTask = (event) => {
    let target = event.target.dataset.taskname

    let popupWrapper = document.createElement('div')
    popupWrapper.className = 'popupWrapper'
    body.prepend(popupWrapper)

    let popup = document.createElement('article')
    popup.className = 'popup'
    popupWrapper.append(popup)

    let changedTask = document.createElement('p')
    changedTask.className = 'changedTask'
    changedTask.innerHTML = `Введите новое значение для задачи: <strong style='text-decoration:underline;'>${target}</strong>`
    popup.append(changedTask)

    let changedTaskTextarea = document.createElement('textarea')
    changedTaskTextarea.className = 'changedTaskTextarea'
    changedTaskTextarea.id = 'changedTaskTextarea'
    popup.append(changedTaskTextarea)

    let editBtns = document.createElement('div')
    editBtns.className = 'editBtns'
    editBtns.id = 'editBtns'
    popup.append(editBtns)


    let successChange = document.createElement('span')
    successChange.className = 'successChange'
    successChange.id = 'successChange'
    successChange.innerHTML = 'Задача заменена'

    let errorChange = document.createElement('span')
    errorChange.className = 'errorChange'
    errorChange.id = 'errorChange'
    errorChange.innerHTML = 'Ошибка при замене'


    let changeTaskBtn = document.createElement('button')
    changeTaskBtn.innerHTML = 'Изменить'
    changeTaskBtn.className = 'changeTaskBtn'
    changeTaskBtn.id = 'changeTaskBtn'
    changeTaskBtn.addEventListener('click', () => {
        changeTaskVal(changedTaskTextarea.value, target)
        popup.append(successChange)
        setTimeout(() => {
            popupWrapper.remove()
        }, 800)

    })
    editBtns.append(changeTaskBtn)

    let cancelChangeBtn = document.createElement('button')
    cancelChangeBtn.innerHTML = 'Отмена'
    cancelChangeBtn.className = 'cancelChangeBtn'
    cancelChangeBtn.id = 'cancelChangeBtn'
    cancelChangeBtn.addEventListener('click', () => {
        popupWrapper.remove()
    })
    editBtns.append(cancelChangeBtn)

}

const displayTasks = () => {
    let actTasks = JSON.parse(localStorage.getItem('acttasks'))
    let compTasks = JSON.parse(localStorage.getItem('comptasks'))

    actList.innerHTML = ''
    compList.innerHTML = ''


    for (const i of actTasks) {
        let taskId = transliterate(i)

        let actTaskArticle = document.createElement('article')
        actTaskArticle.className = 'actTaskArticle'
        actTaskArticle.id = `${taskId}`
        actTaskArticle.setAttribute('data-task', `${i}`)
        actTaskArticle.addEventListener('click', completeTask)
        actList.append(actTaskArticle)

        let actTaskText = document.createElement('p')
        actTaskText.className = 'actTaskText'
        actTaskText.id = `${taskId}`
        actTaskText.setAttribute('data-task', `${i}`)
        actTaskText.innerHTML = `${i}`
        actTaskArticle.append(actTaskText)

        let editBtn = document.createElement('button')
        editBtn.className = 'editBtn'
        editBtn.innerHTML = 'Edit'
        editBtn.id = `${taskId}`
        editBtn.setAttribute('data-taskname', `${i}`)
        editBtn.addEventListener('click', editTask)
        actTaskArticle.append(editBtn)


        let delBtn = document.createElement('button')
        delBtn.className = 'delBtn'
        delBtn.innerHTML = 'Delete'
        delBtn.id = `${taskId}`
        delBtn.setAttribute('data-name', `${i}`)
        delBtn.addEventListener('click', deleteTask)


        actTaskArticle.append(delBtn)

    }

    for (const i of compTasks) {
        let taskId = transliterate(i)

        let compTaskArticle = document.createElement('article')
        compTaskArticle.className = 'compTaskArticle'
        compTaskArticle.id = `${taskId}`
        compTaskArticle.setAttribute('data-task', `${i}`)
        compTaskArticle.addEventListener('click', deCompleteTask)
        compList.append(compTaskArticle)

        let compTaskText = document.createElement('p')
        compTaskText.className = 'compTaskText'
        compTaskText.id = `${taskId}`
        compTaskText.setAttribute('data-task', `${i}`)
        compTaskText.innerHTML = `${i}`
        compTaskArticle.append(compTaskText)

        let editBtn = document.createElement('button')
        editBtn.className = 'editBtn'
        editBtn.innerHTML = 'Edit'
        editBtn.id = `${taskId}`
        editBtn.setAttribute('data-taskname', `${i}`)
        editBtn.addEventListener('click', editTask)
        compTaskArticle.append(editBtn)

        let delBtn = document.createElement('button')
        delBtn.className = 'delBtn'
        delBtn.innerHTML = 'Delete'
        delBtn.id = `${taskId}`
        delBtn.setAttribute('data-name', `${i}`)
        delBtn.addEventListener('click', deleteTask)


        compTaskArticle.append(delBtn)


    }
}


const localStorageAdd = (text) => {

    let actTasks = JSON.parse(localStorage.getItem('acttasks'))
    actTasks.unshift(text)

    localStorage.setItem('acttasks', JSON.stringify(actTasks))

    displayTasks()
}





const addTask = () => {
    let taskTextareaVal = addTaskTextarea.value
    // let taskId = transliterate(taskTextareaVal)
    let localStorageActTasks = JSON.parse(localStorage.getItem('acttasks'))
    let localStorageCompTasks = JSON.parse(localStorage.getItem('comptasks'))
    let localStorageTasks = [...localStorageActTasks, ...localStorageCompTasks]

    if (taskTextareaVal == '') {
        alert('write some')
        addTaskTextarea.value = ''

        return
    }


    for (const i of localStorageTasks) {
        if (addTaskTextarea.value == i) {
            alert('write another')
            addTaskTextarea.value = ''
            return
        }
    }


    localStorageAdd(taskTextareaVal)
    addTaskTextarea.value = ''
}


addTaskBtn.addEventListener('click', addTask)
displayTasks()