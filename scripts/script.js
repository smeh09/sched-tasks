const tasksListsEl = document.querySelector('#tasks-lists')

let tasksLists = [];

let tasksNameList = [];

// viewing lists

const viewLists = () => {
    tasksListEl.innerHTML = '';
    tasksLists.forEach((list, index) => {
        // <div class='taskListItem'>${tasksListName}</div>
        const taskListItemEl = document.createElement('div');
        taskListItemEl.innerText = list['name'];
        taskListItemEl.classList.add('taskListItem');

        tasksListEl.appendChild(taskListItemEl);
    });
}

const selectedListsTask = document.querySelector('#selected-lists-task');

const tasksListEl = document.querySelector('#tasks-lists');

// Add tasks

function addTask(taskListName) {
    tasksLists.forEach(taskList => {
        if (taskList["name"] === taskListName)
        {
            const task = prompt('Task name');
            if (!task || task === '') return
            taskList['tasks'].push(task);
            selectedListsTask.innerHTML = taskList['tasks'].map(tasksListasks => `<div class='tasksListTasks'>${tasksListasks}</div>`).join('');
            
            const addTaskButton = document.createElement('button');
            addTaskButton.id = 'add-task-button';
            addTaskButton.classList.add('btn')
            addTaskButton.innerText = 'Add task'
            addTaskButton.onclick = () => addTask(taskListName);
            selectedListsTask.appendChild(addTaskButton);
        }
    })
}

// viewing tasks


tasksListEl.addEventListener('click', e => {
    if (e.target.className === 'taskListItem')
    {

        const taskName = e.target.innerHTML;

        tasksLists.forEach(taskList => {
            if (taskList['name'] === taskName)
            {
                e.target.classList.add('selectedList');
                selectedListsTask.innerHTML = taskList['tasks'].map(tasksListasks => `<div class='tasksListTasks'>${tasksListasks}</div>`).join('');
            }
            else
            {
                const taskListAll = document.querySelectorAll('.taskListItem');
                taskListAll.forEach(taskList => {
                    if (taskList.innerHTML !== taskName)
                    {
                        taskList.classList.remove('selectedList');
                    }
                })
            }
        })
        // <button id='add-task-button' class='btn'>Add Task</button>
        const addTaskButton = document.createElement('button');
        addTaskButton.id = 'add-task-button';
        addTaskButton.classList.add('btn')
        addTaskButton.innerText = 'Add task'
        addTaskButton.onclick = () => addTask(e.target.innerText);
        selectedListsTask.appendChild(addTaskButton);
    }
})

// Adding lists

function addList() {
    const listName = prompt('Tasks List name');
    if (!listName || listName === '') return
    tasksLists.push(
        {
            "name": listName,
            "tasks": [
                
            ],
        }
    )
    viewLists();
}