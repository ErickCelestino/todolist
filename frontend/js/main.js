const doc = document;

const tdBody = doc.querySelector('tbody');
const addForm = doc.querySelector('.add-form');
const inputTask = doc.querySelector('.input-task');
const headers = {
    'Content-Type': 'application/json'
};

const url = 'http://localhost:3000/tasks';


const fetchTasks = async () => {
    const response = await fetch(url);
    const tasks = await response.json();
    return tasks;
}; 

const addTask = async (event) => {
    event.preventDefault();

    const task = {
        title: inputTask.value
    };

    await fetch(url,{
        method: 'post',
        headers: headers,
        body: JSON.stringify(task),
    });

    inputTask.value = '';
    loadTasks();
};

const deleteTask = async (id) => {
    await fetch(`${url}/${id}`,{
        method: 'delete',
    });
    loadTasks();
};

const updateTask = async ({id,title,status}) => {
  
    await fetch(`${url}/${id}`,{
        method: 'put',
        headers: headers,
        body: JSON.stringify({title,status})
    });

    loadTasks();
};

const formatDate = (dateUTC) => {
    const options = {
        dateStyle: 'short',
        timeStyle: 'short'
    };
    const date = new Date(dateUTC).toLocaleString('pt-br',options);
    return date;
}

/**
 * Function that returns an html element
 */
const createHTMLElement = (tag, innerText = '', innerHtml = '') => {
    const element = doc.createElement(tag);
    
    if(innerText) {
        element.innerText = innerText;
    }
    
    if(innerHtml) {
        element.innerHTML = innerHtml;
    }

    return element;
};

const createSelect = (value) => {
    const options = `
        <option value="pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Concluida">Concluida</option>
    `;

    const select = createHTMLElement('select','',options);

    select.value = value;

    return select;
};

const createTask = (task) => {
    
    const { 
        id, 
        title, 
        created_at, 
        status 
    } = task;

    const tr = createHTMLElement('tr');
    const tdTitle = createHTMLElement('td', title);
    const tdCreatedAt = createHTMLElement('td', formatDate(created_at));
    const tdStatus = createHTMLElement('td');
    const tdActions = createHTMLElement('td');

    const select = createSelect(status);
    select.addEventListener('change',({target}) => {
        updateTask({...task, status: target.value})
    });

    const editButton = createHTMLElement('button','','<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createHTMLElement('button','','<span class="material-symbols-outlined">delete</span>');

    const editForm = createHTMLElement('form');
    const editInput = createHTMLElement('input');

    editInput.classList.add('input-task');
    editInput.value = title;
    editForm.appendChild(editInput);

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        updateTask({ id, title: editInput.value, status });
    });

    editButton.addEventListener('click', () => {
        tdTitle.innerText = '';
        tdTitle.appendChild(editForm);

    });

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');
    
    deleteButton.addEventListener('click', () => {deleteTask(id)});

    tdStatus.appendChild(select);

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);
    
    return tr;
};

const loadTasks = async () => {
    const tasks = await fetchTasks();

    tdBody.innerHTML = '';

    tasks.forEach((task) => {
        const tr = createTask(task);
        tdBody.appendChild(tr);
    });
};

addForm.addEventListener('submit', addTask);

loadTasks();