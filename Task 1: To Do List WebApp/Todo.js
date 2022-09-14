const mainContent = document.querySelector('.main-content');
const btn = document.querySelector('.add-task-button');
const task = document.querySelector('.input-box');
const allTasks = document.querySelector('.all-tasks');
const completedTasks = document.querySelector('.completed-task-list');
const completed_task_heading = document.querySelector('.Completed-task');
const tasks_heading = document.querySelector('.tasks-heading');


btn.onclick = function() {
    const inputVal = task.value;
    if(inputVal !== ''){
        tasks_heading.classList.remove('visibility');

        const newtaskbox = document.createElement('div');
        newtaskbox.classList.add('Task');

        const checkbox_container = document.createElement('label');
        checkbox_container.classList.add('checkbox-container');

        const checkbox_input = document.createElement('input');
        checkbox_input.type = 'checkbox';

        const checkmark_ele = document.createElement('span');
        checkmark_ele.classList.add('checkmark');
        

        const newtask = document.createElement('input');
        newtask.classList.add('text');
        newtask.type = 'text';
        newtask.value = inputVal;
        newtask.setAttribute('readonly','readonly');

        checkbox_container.appendChild(checkbox_input);
        checkbox_container.appendChild(checkmark_ele);

        const Buttons = document.createElement('div');
        Buttons.classList.add('buttons');

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete')
        delete_btn.innerText = 'Delete';

        Buttons.appendChild(delete_btn);
        
        newtaskbox.appendChild(checkbox_container);
        newtaskbox.appendChild(newtask);
        newtaskbox.appendChild(Buttons);
        allTasks.appendChild(newtaskbox);
    

        task.value='';

        checkbox_input.addEventListener('change', function() {
            if(checkbox_input.checked == true){
                newtask.classList.add('done-text');
            }
            else{
                newtask.classList.remove('done-text');
            }
        });

        delete_btn.onclick = () => {
            allTasks.removeChild(newtaskbox);

            
        }

    }
};
