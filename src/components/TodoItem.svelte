<script>
  export let todo;
  export let onToggle;
  export let onDelete;

  const toggleDone = () => {
    onToggle(todo);
  };

  const deleteTodo = () => {
    onDelete(todo.id);
  };
</script>

<li class:done={todo.done}>
  <input type="checkbox" checked={todo.done} on:change={toggleDone} />
  {todo.text}
  <button on:click={deleteTodo}>Delete</button>
</li>

<style>
  .done {
    text-decoration: line-through;
  }
</style>