const tasksListsEl = document.querySelector('#tasks-lists')
const selectedListsTask = document.querySelector('#selected-lists-task');

const loadTasks = () => {
    schedTasksData = JSON.parse(localStorage.getItem('sched-tasks-data'));
    if (schedTasksData)
    {
        return schedTasksData;
    }
    else
    {
        return [];
    }
}

// update tasks
const updateTasks = tasksList => {
    localStorage.setItem('sched-tasks-data', JSON.stringify(tasksList));
}

let tasksLists = loadTasks();

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

const tasksListEl = document.querySelector('#tasks-lists');
viewLists();

// Clear tasks

const clearTask = (taskListName) => {
    tasksLists.forEach(taskList => {
        if (taskList["name"] === taskListName)
        {
            taskList["tasks"] = [];
        }
    })
    
    updateTasks(tasksLists)
    tasksLists.forEach(taskList => {
        selectedListsTask.innerHTML = taskList['tasks'].map(tasksListasks => `<div class='tasksListTasks'><div class='taskName'>${tasksListasks}</div><div class='tasksRightArea'><div class='delete-task-button'><i class="fa fa-trash tasksListsDeleteIcon" aria-hidden="true"></i></div><div class='tasksListsEditIcon'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div></div></div>`).join('');
    })
    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'add-task-button';
    addTaskButton.classList.add('btn')
    addTaskButton.innerText = 'Add task'
    addTaskButton.onclick = () => addTask(taskListName);
    selectedListsTask.appendChild(addTaskButton);

    //<button id='clear-button'></button>
    const clearButton = document.createElement('button');
    clearButton.id = 'clear-button';
    clearButton.innerText = '🗑'
    clearButton.title = 'Clear tasks'
    clearButton.onclick = () => clearTask(taskListName);
    selectedListsTask.appendChild(clearButton);
}

// Clear lists

const clearList = () => {

    if (tasksLists.length === 0)
    {
        alert("You have no lists! ");
        return;
    }

    const confirmerBox = confirm("Are you sure you want to clear all the tasks? ")
    if (confirmerBox)
    {
        tasksLists = [];

        updateTasks(tasksLists)
        selectedListsTask.innerHTML = `<img style="width: 170px;margin: auto;" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/no-task-3082561-2586646.png" alt="No list selected">
        <h3 style="color: white;text-align: center; margin-top: 20px; margin-left: 30px;">No list selected</h3>`
        viewLists();
    }
}

// Add tasks

function addTask(taskListName) {
    tasksLists.forEach(taskList => {
        if (taskList["name"] === taskListName)
        {
            const task = prompt('Task name');
            let continuing = true;
            tasksLists.forEach(taskList => {
                if (taskList.tasks.includes(task))
                {
                    alert("You cannot have same tasks name! ");
                    continuing = false;
                    return;
                }
            })
            if (!continuing) return;
            if (!task || task === '' || task.trim() === '') {
                alert("Wrong input or canceled");
                return;
            }
            taskList['tasks'].push(task);
            selectedListsTask.innerHTML = taskList['tasks'].map(tasksListasks => `<div class='tasksListTasks'><div class='taskName'>${tasksListasks}</div><div class='tasksRightArea'><div class='delete-task-button'><i class="fa fa-trash tasksListsDeleteIcon" aria-hidden="true"></i></div><div class='tasksListsEditIcon'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div></div></div>`).join('');
            
            const addTaskButton = document.createElement('button');
            addTaskButton.id = 'add-task-button';
            addTaskButton.classList.add('btn')
            addTaskButton.innerText = 'Add task'
            addTaskButton.onclick = () => addTask(taskListName);
            selectedListsTask.appendChild(addTaskButton);

            //<button id='clear-button'></button>
            const clearButton = document.createElement('button');
            clearButton.id = 'clear-button';
            clearButton.innerText = '🗑'
            clearButton.title = 'Clear tasks'
            clearButton.onclick = () => clearTask(taskListName);
            selectedListsTask.appendChild(clearButton);

            updateTasks(tasksLists);
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
                selectedListsTask.innerHTML = taskList['tasks'].map(tasksListasks => `<div class='tasksListTasks'><div class='taskName'>${tasksListasks}</div><div class='tasksRightArea'><div class='delete-task-button'><i class="fa fa-trash tasksListsDeleteIcon" aria-hidden="true"></i></div><div class='tasksListsEditIcon'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div></div></div>`).join('');
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
        updateTasks(tasksLists);
        // <button id='add-task-button' class='btn'>Add Task</button>
        const addTaskButton = document.createElement('button');
        addTaskButton.id = 'add-task-button';
        addTaskButton.classList.add('btn')
        addTaskButton.innerText = 'Add task'
        addTaskButton.onclick = () => addTask(e.target.innerText);
        selectedListsTask.appendChild(addTaskButton);

        //<button id='clear-button'></button>
        const clearButton = document.createElement('button');
        clearButton.id = 'clear-button';
        clearButton.innerText = '🗑'
        clearButton.onclick = () => clearTask(e.target.innerText);
        selectedListsTask.appendChild(clearButton);
    }
})

// Adding lists

function addList() {
    var continuing = true;
    const listName = prompt('Tasks List name');
    tasksLists.forEach(taskList => {
        if (taskList.name === listName) {
            alert("You cannot have lists of the same name! ");
            continuing = false;
            return;
        }
    })
    if (!continuing) return;
    console.log('hello')
    if (!listName || listName === '' || listName.trim() === '') {
        alert("Wrong input or canceled");
        return;
    }
    tasksLists.push(
        {
            "name": listName,
            "tasks": [
                
            ],
        }
    )
    updateTasks(tasksLists);
    viewLists();
}