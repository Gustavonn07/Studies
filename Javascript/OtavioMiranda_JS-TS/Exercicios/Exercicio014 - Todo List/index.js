const root = document.getElementById('root');
const criar = document.getElementById('btn');
const deletes = document.getElementsByClassName('delete');

const input = document.getElementById('input');

class Todo {
    static #nextId = 0;

    #titulo;
    #id;
    constructor() {
        this.#titulo = input.value.trim();
        this.#id = Todo.#nextId++;
    };

    createTodo() {
        this.#titulo == '' ? this.#titulo = `Tarefa #${this.#id}` : this.#titulo = this.#titulo;

        root.innerHTML += `
            <article id="todo-${this.#id}" class="w-100 d-flex justify-content-between align-items-center bg-secondary py-2 px-4 rounded shadow">
                <h4 class="h4 text-light">${this.#titulo}</h4>
                <button type="button" class="btn btn-danger delete">Deletar</button>
            </article>
        `;
        input.value = '';

        this.#addDeleteEvent();
    };

    #addDeleteEvent() {
        const deletes = document.querySelectorAll('.delete');

        deletes.forEach(button => {
            button.addEventListener('click', () => {
                button.parentElement.remove();
            });
        });
    }
}

criar.addEventListener('click', () => {
    new Todo().createTodo();
})
