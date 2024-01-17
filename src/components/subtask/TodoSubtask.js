class TodoSubtask extends HTMLElement {
  constructor() {
    super();
    this.subtasks = [];
  }

  connectedCallback() {
    this.render();
    this.addEventListener('change', (event) => {
      if (event.target.type === 'checkbox') {
        const index = Array.from(this.querySelectorAll('input[type="checkbox"]')).indexOf(event.target);
        this.toggleSubtask(index);
      }
    });
  }

  addSubtask(subtask) {
    this.subtasks.push({ text: subtask, completed: false });
    this.render();
  }

  toggleSubtask(index) {
    const subtask = this.subtasks[index];
    subtask.completed = !subtask.completed;
    this.render();
  }

  setAllSubtasksChecked(checked) {
    this.subtasks.forEach(subtask => subtask.completed = checked);
    this.render();
  }

  addSubtaskFromInput() {
    const input = this.querySelector('.new-subtask');
    this.addSubtask(input.value);
    input.value = ''; 
  }
  
  render() {
    this.innerHTML = `
      <ul>
        ${this.subtasks.map((subtask) => `
          <li class="${subtask.completed ? 'completed' : ''}">
            <input type="checkbox" ${subtask.completed ? 'checked' : ''}>
            ${subtask.text}
          </li>
        `).join('')}
      </ul>
      <input type="text" class="new-subtask">
      <button>Add Subtask</button>
    `;

    this.querySelector('button').addEventListener('click', () => this.addSubtaskFromInput());
  }
}

customElements.define('todo-subtask', TodoSubtask);
