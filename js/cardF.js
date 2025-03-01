const taskOne = document.getElementById('task-1');
const TaskName1 = document.getElementById('task-name-1');

const taskTwo = document.getElementById('task-2');
const TaskName2 = document.getElementById('task-name-2');

const taskThree = document.getElementById('task-3');
const TaskName3 = document.getElementById('task-name-3');

const taskFour = document.getElementById('task-4');
const TaskName4 = document.getElementById('task-name-4');

const taskFive = document.getElementById('task-5');
const TaskName5 = document.getElementById('task-name-5');

const taskSix = document.getElementById('task-6');
const TaskName6 = document.getElementById('task-name-6');

const taskReduce = document.getElementById('task-assigned');
const taskAdD = document.getElementById('taskAdd');
const addActivity = document.getElementById('add-activity');
const clearActivity = document.getElementById('clear-btn');

const tasks = [
    { button: taskOne, name: TaskName1 },
    { button: taskTwo, name: TaskName2 },
    { button: taskThree, name: TaskName3 },
    { button: taskFour, name: TaskName4 },
    { button: taskFive, name: TaskName5 },
    { button: taskSix, name: TaskName6 }
];

function completeTask(task) {
    if (confirm(`Mark "${task.name.textContent}" task as completed?`)) {
        let currentTaskCount = parseInt(taskReduce.textContent);

        if (!isNaN(currentTaskCount) && currentTaskCount > 0) {
            taskReduce.textContent = currentTaskCount - 1;

            let completedTaskCount = parseInt(taskAdD.textContent) || 0;
            taskAdD.textContent = completedTaskCount + 1;

            const completedTaskPara = document.createElement('p');
            completedTaskPara.classList.add('m-2', 'p-2');
            completedTaskPara.textContent = task.name.textContent = `You have completed "${task.name.textContent}"`;
            addActivity.appendChild(completedTaskPara);

            alert("Task completed!");

            // Disable the clicked task button and add dark bg
            task.button.disabled = true;
            task.button.classList.remove('bg-blue-500');
            task.button.classList.add('bg-gray-600');
        } else {
            alert("No tasks remaining or invalid task count.");
        }
    }
}

tasks.forEach(task => {
    if (task.button) {
        task.button.addEventListener('click', function () {
            completeTask(task);
        });
    }
});

clearActivity.addEventListener('click', function () {
    while (addActivity.firstChild) {
        addActivity.removeChild(addActivity.firstChild);
    }
});