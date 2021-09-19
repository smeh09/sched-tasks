const tasksListsEl = document.querySelector('#tasks-lists')

let tasksLists = [

];

let tasksNameList = [];

// viewing lists

const viewTasks = () => {
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
    viewTasks();
}