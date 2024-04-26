const input = document.querySelector('.tasks__input');
const form = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list');

form.addEventListener('submit', event => {
    event.preventDefault();

    const task = document.createElement('div');
    task.classList.add('task');
    tasksList.appendChild(task);

    const title = document.createElement('div');
    title.classList.add('task__title');
    task.appendChild(title);
    title.innerText = input.value;
    task.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');
    
    let remove = task.querySelector(".task__remove");
    remove.addEventListener("click", () => {
        task.remove();
    });

    form.reset();
});