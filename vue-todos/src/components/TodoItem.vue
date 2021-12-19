<template>
    <li class="todo-item" :class="{ done: isCompleted }">
        <div class="title">
            {{ title }}
        </div>
        <div class="actions">
            <input 
                type="checkbox" 
                class="checkbox"
                :checked="isCompleted" 
                @input="onCheckBoxInput(id, isCompleted)"
            />
            <button @click="onDeleteTodoClicked(id)">x</button>
        </div>
    </li>
</template>

<script>
import { patchTodo, deleteTodo } from '@/netClient/todoService';

export default {
	name: 'TodoItem',
    props: {
        id: String,
        title: String,
        isCompleted: Boolean
    },
	methods : {
		async onCheckBoxInput(id, isCompleted) {
            try {
                await patchTodo({ id, isCompleted: !isCompleted });
                this.$emit('fetch')
            } catch (error) {
                console.error({ error });
            }
        },
        async onDeleteTodoClicked(id) {
            try {
                await deleteTodo({ id })
                this.$emit('fetch')
            } catch (error) {
                console.error({ error })
            }
        }
  	}
}
</script>
