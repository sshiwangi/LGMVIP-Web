const mainContent = document.querySelector('.main-content');
const btn = document.querySelector('.add-task-button');
const task = document.querySelector('.input-box');
const allTasks = document.querySelector('.all-tasks');
const completedTasks = document.querySelector('.completed-task-list');
const completed_task_heading = document.querySelector('.Completed-task');


btn.onclick = function() {
    const inputVal = task.value;
    if(inputVal !== ''){
        const newtaskbox = document.createElement('div');
        newtaskbox.classList.add('Task');

        const newtask = document.createElement('input');
        newtask.classList.add('text');
        newtask.type = 'text';
        newtask.value = inputVal;
        newtask.setAttribute('readonly','readonly');

        const Buttons = document.createElement('div');
        Buttons.classList.add('buttons');

        const done_btn = document.createElement('button');
        done_btn.classList.add('done')
        done_btn.innerText = 'Done';

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete')
        delete_btn.innerText = 'Delete';

        Buttons.appendChild(done_btn);
        Buttons.appendChild(delete_btn);

        newtaskbox.appendChild(newtask);
        newtaskbox.appendChild(Buttons);
        allTasks.appendChild(newtaskbox);
    

        task.value='';

        delete_btn.onclick = () => {
            allTasks.removeChild(newtaskbox);
        }

        done_btn.onclick = () => {
            allTasks.removeChild(newtaskbox);
            completed_task_heading.classList.remove('visibility');

            const new_completed_task_box = document.createElement('div');
            new_completed_task_box.classList.add('Task');

            const new_completed_task = document.createElement('input');
            new_completed_task.classList.add('text');
            new_completed_task.type = 'text';
            new_completed_task.value = newtask.value;
            new_completed_task.setAttribute('readonly','readonly');

            new_completed_task_box.appendChild(new_completed_task);
            completedTasks.appendChild(new_completed_task_box);
            
        }


    }
};
