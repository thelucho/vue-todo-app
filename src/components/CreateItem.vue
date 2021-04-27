<template>
    <div class="create-item">
        <form @submit.prevent="addTodo()">
            <input
                v-model="value"
                type="text"
                placeholder="Ingrese una tarea"
            />
            <button type="button" class="btn-add-task" @click.prevent="addTodo()">Agregar tarea</button>
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
    methods: {
        addTodo() {
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
            height: 38px;
            border-radius: 0px;
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
        }
    }
}
</style>