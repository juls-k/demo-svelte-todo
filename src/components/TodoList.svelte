<script>
  import TodoItem from "./TodoItem.svelte";

  let todos = [];
  let newTodo = '';
  
  function addTodo() {
    if (newTodo.trim() !== '') {
      todos = [...todos, { id: Date.now(), text: newTodo, done: false }];
      newTodo = '';
    }
  }

  function toggleDone(todo) {
    todo.done = !todo.done;
    todos = todos.slice();
  }

  function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
  }
  
</script>

<main>
  <input type="text" bind:value={newTodo} placeholder="Add new item" on:keydown={(e) => e.key === 'Enter' && addTodo()} />
  <button on:click={addTodo}>Add</button>

  <ul>
    {#each todos as todo (todo.id)}
      <TodoItem todo={todo} onToggle={toggleDone} onDelete={deleteTodo} />
    {/each}
  </ul>
</main>

<style></style>