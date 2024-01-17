<script>
  import './subtask/TodoSubtask';

  export let todo;
  export let onToggle;
  export let onDelete;

  const toggleDone = () => {
    todo.done = !todo.done;
    toggleAllSubtasks(todo.done);
  };

  const deleteTodo = () => {
    onDelete(todo.id);
  };

  const toggleAllSubtasks = (checked) => {
    const todoSubtaskElement = document.querySelector(`todo-subtask[data-todo-id="${todo.id}"]`);
    if (todoSubtaskElement) {
      todoSubtaskElement.setAllSubtasksChecked(checked);
    }
  }
</script>

<li class:done={todo.done}>
  <input type="checkbox" checked={todo.done} on:change={toggleDone} />
  {todo.text}
  <todo-subtask data-todo-id={todo.id}></todo-subtask>
  <button on:click={deleteTodo}>Delete</button>
</li>

<style>
  .done {
    text-decoration: line-through;
  }
</style>