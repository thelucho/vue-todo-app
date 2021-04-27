<template>
    <li :class="{'completed': isCompleted}">
        <span>{{ this.item.title }}</span>
        <button @click="deleteItem(item)" class="btn-delete">&times; Delete</button>
        <button @click="completeItem(item)" class="btn-complete">✔ {{ taskStatus }}</button>
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
            return this.item.status ? 'Reset' : 'Done'
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

                &:hover {
                    background-color: rgb(16, 105, 50);
                }
            }

            
        }
    }
</style>