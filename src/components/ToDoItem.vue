<template>
  <li data-cy="taskItem" :class="{ completed: isCompleted }">
    <span>{{ this.item.title }}</span>
    <button @click="deleteItem(item)" class="btn-delete">&times; Delete</button>
    <button @click="completeItem(item)" class="btn-complete" :class="taskStatus">
      ✔ {{ taskStatus }}
    </button>
  </li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    isCompleted() {
      return this.item.status
    },
    taskStatus() {
      return this.item.status ? 'reset' : 'done'
    }
  },
  methods: {
    deleteItem() {
      this.$emit('delete-task', this.item)
    },
    completeItem() {
      this.$emit('complete-task', this.item)
    }
  }
}
</script>

<style lang="scss">
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-right: auto;
  }

  &.completed {
    span {
      text-decoration: line-through;
    }
  }

  button {
    background-color: rgb(209, 68, 68);
    color: white;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    &.btn-delete {
      margin-left: auto;
      margin-right: 5px;

      &:hover {
        background-color: brown;
      }
    }

    &.btn-complete {
      background-color: rgb(27, 134, 68);
      text-transform: capitalize;
      width: 62px;

      &:hover {
        background-color: rgb(16, 105, 50);
      }

      &.reset {
        background-color: rgb(86, 159, 207);

        &:hover {
          background-color: rgb(60, 130, 177);
        }
      }
    }
  }
}
</style>