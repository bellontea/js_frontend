<template>
    <div class="home-page base-page">
        <CreateTodo @todo-created="onTodoCreated"/>
        <div class="separator"><hr/></div>
            <ul class="todo-list">
                <li 
                    v-for="todoItem in todoList" 
                    :key="todoItem.id"
                    class="todo-item"
                    :class="{ done: todoItem.isCompleted }"
                >
                    <div class="title">
                        {{ todoItem.title }}
                    </div>
                    <div class="actions">
                        <input 
                            type="checkbox" 
                            class="checkbox"
                            :checked="todoItem.isCompleted" 
                            @input="onCheckBoxInput(todoItem.id, todoItem.isCompleted)"
                        />
                        <button>x</button>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
import CreateTodo from '@/components/CreateTodo';
import { fetchTodoList, patchTodo } from '@/netClient/todoService';

export default {
    name: 'HomePage',
    components : {
        CreateTodo
    },
    data: () => ({
        todoList: [],
    }),
    created() {
        this.fetchTodoList();
    },
    methods: {
        onTodoCreated(data) {
            this.fetchTodoList();
        },
        async fetchTodoList() {
            try {
                this.todoList = await fetchTodoList();
            } catch (error) {
                console.error({ error })
            }
        },
        async onCheckBoxInput(id, isCompleted) {
            try {
                await patchTodo({ id, isCompleted: !isCompleted });
                this.fetchTodoList();   // fix
            } catch (error) {
                console.error({ error });
            }
        }
    }
};
</script>