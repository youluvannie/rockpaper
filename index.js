const todoList = [
];
renderTodoList()

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const { name, dueDate } = todoObject;
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        //Generating the html
        const html =
            `<div>${name}</div>
            <div>${dueDate}</div>
           <button onclick="
             todoList.splice(${i},1);
             renderTodoList();
           ">Delete</button>
           
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}




function addTodo() {
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;


    const task = document.getElementById('toDo');

    const name = task.value;


    todoList.push({
        name: name,
        dueDate: dueDate
        //name,
        // dueDate
    });

    renderTodoList()
} 
