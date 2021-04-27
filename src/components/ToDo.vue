<template>
  <div class="todo-container">
    <h1>ToDo List</h1>
    <to-do-list :data="tasksList" />
  </div>
</template>

<script>
import ToDoList from './ToDoList.vue'
export default {
  name: 'ToDo',
  components: {
    ToDoList
  },
  data() {
    return {
      tasksList: [
        { title: 'Primer tarea', description: 'Lorem ipsum dolor sit amet', status: true },
        { title: 'Segunda tarea', description: 'Lorem ipsum dolor sit', status: true },
        { title: 'Tercer tarea', description: 'Lorem ipsum dolor sit amet', status: false },
        { title: 'Cuarta tarea', description: 'Lorem sit amet', status: false },
        { title: 'Quinta tarea', description: 'Ipsum dolor sit amet', status: false }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
a {
  color: #42b983;
}

.todo-container {
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  text-align: center;

  h1 {
    text-align: center;
    width: 100%;
  }
}
</style>
