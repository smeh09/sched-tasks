const tasksListsEl = document.querySelector('#tasks-lists')

let tasksLists = [
    {
        "name": "Game dev",
        "tasks": [
            "learn godot",
            "make small games",
            "make dream game"
        ]
    },
    {
        "name": "Exams prep",
        "tasks": [
            "revise for science exams",
            "get ready for maths exams",
            "do maths exam practise questions"
        ]
    }
];

const tasksNameList = [];

tasksLists.forEach((list, index) => {
    tasksNameList.push(list["name"]);
    tasksListsEl.innerHTML = tasksNameList.map(tasksListName => `<div class='taskListItem'>${tasksListName}</div>`).join('');
});

const selectedListsTask = document.querySelector('#selected-lists-task');

const tasksListEl = document.querySelector('#tasks-lists');

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