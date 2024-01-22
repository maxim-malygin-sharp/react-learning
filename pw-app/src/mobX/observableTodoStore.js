class ObservableTodoStore {

    @observable todos = [];

    @observable pendingRequests = 0;

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}

const observableTodoStore = new ObservableTodoStore();
export default observableTodoStore;