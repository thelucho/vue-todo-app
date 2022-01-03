<template>
  <div data-cy="tasksList" class="todo-list">
    <ul>
      <div v-if="isDataEmpty" class="empty">No hay tareas por realizar. Great &#128076; !!</div>
      <div v-else class="filters">
        <button
          v-for="(btn, idx) in filterList"
          :key="idx"
          @click="filterBy = btn.key"
          :class="[{ active: filterBy === btn.key }]"
        >
          {{ btn.name }}
        </button>
      </div>
      <to-do-item
        v-for="(item, index) in filteredTasks"
        :key="index"
        :item="item"
        v-on:delete-task="deleteTask"
        v-on:complete-task="completeTask"
      />

    </ul>
    <p>Tareas por hacer: {{ remainingTasks }}</p>

    <create-item @create-task="addTask($event)" />
  </div>
</template>

<script>
import CreateItem from './CreateItem.vue'
import ToDoItem from './ToDoItem.vue'
export default {
  components: { ToDoItem, CreateItem },
  name: 'ToDoList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      filterBy: 'all',
      filterList: [
        {
          key: 'all',
          name: 'Todos'
        },
        {
          key: 'todo',
          name: 'Por hacer'
        },
        {
          key: 'completed',
          name: 'Completados'
        },
      ]
    }
  },
  computed: {
    isDataEmpty() {
      return this.data.length === 0
    },
    filteredTasks() {
      let filtered = []
      if (this.filterBy === 'all') {
        filtered = this.data
      } else if (this.filterBy === 'todo') {
        filtered = this.data.filter(task => task.status === false)
      } else if (this.filterBy === 'completed') {
        filtered = this.data.filter(task => task.status === true)
      }

      return filtered
    },
    remainingTasks() {
      return this.data.filter(task => !task.status).length
    }
  },
  methods: {
    addTask(value) {
      console.log(value)
      this.data.push(value)
    },
    deleteTask(item) {
      console.log(item)
      const todoIndex = this.data.indexOf(item)
      this.data.splice(todoIndex, 1)
    },
    completeTask(item) {
      item.status = !item.status
    }
  }
}
</script>
<style lang="scss">
.todo-list {
  width: 100%;

  .empty {
    text-align: center;
    width: 100%;
  }

  ul {
    background-color: rgb(238, 238, 238);
    width: 100%;
    padding: 30px 22px;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    li {
      list-style: none;
    }
  }

  .filters {
    button {
      border: none;
      color: white;
      padding: 4px 10px;
      margin-right: 7px;
      margin-bottom: 20px;
      border-radius: 5px;
      cursor: pointer;

      &:nth-child(1) {
        background-color: #3a3a3a;
      }

      &:nth-child(2) {
        background-color: #356db1;
      }

      &:nth-child(3) {
        background-color: #35b186;
      }

      &.active {
        box-shadow: 0px 3px 5px 0px #a9a9a9;
        font-weight: 600;
      }
    }
  }
}
</style>