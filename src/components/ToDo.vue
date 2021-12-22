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
        { title: 'Cambiar aceite auto', description: 'Lorem ipsum dolor sit amet', status: true },
        { title: 'Comprar café', description: 'Lorem ipsum dolor sit', status: true },
        { title: 'Llamar a Marty McFly', description: 'Lorem ipsum dolor sit amet', status: false },
        { title: 'Volver al pasado', description: 'Lorem sit amet', status: false },
        { title: 'Comprar bitcoins', description: 'Ipsum dolor sit amet', status: false }
      ]
    }
  }
}
</script>

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
