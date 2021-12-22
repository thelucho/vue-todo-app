<template>
  <div class="create-item">
    <form @submit.prevent="addItem()">
      <input v-model="value" type="text" placeholder="Ingrese una tarea..." />
      <button type="button" class="btn-add-task" @click.prevent="addItem()" :disabled="!isFormValid">
        Agregar tarea
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateItem',
  data() {
    return {
      value: '',
      item: {
        title: '',
        description: 'Lorem ipsum dolor sit amet',
        status: false
      }
    }
  },
  computed: {
    isFormValid() {
      return this.value !== ''
    }
  },
  methods: {
    addItem() {
      if (this.value.length > 0) {
        this.item.title = this.value
        this.$emit('create-task', this.item)
      }
      this.value = ''
      this.item = Object.assign({}, this.item)
    }
  }
}
</script>

<style lang="scss">
.create-item {
  width: 100%;

  form {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 450px;

    input {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #ccc;
      height: 58px;
      border-radius: 5px;
      font-size: 16px;
      padding: 7px 15px;
    }

    .btn-add-task {
      width: 100%;
      display: block;
      color: white;
      font-size: 17px;
      background-color: rgb(45, 177, 133);
      border: none;
      border-radius: 5px;
      height: 50px;
      margin-top: 15px;
      cursor: pointer;

      &:hover {
        background-color: rgb(31, 160, 117);
      }

      &:disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
}
</style>