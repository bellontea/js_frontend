<template>
    <div class="home-page base-page">
        <CreateTodo 
        @todo-created="onTodoCreated"
        @fetch="fetchTodoList"/>
        <div class="separator"><hr/></div>
            <ul> 
                <TodoItem 
                    @fetch="fetchTodoList"
                    v-for="todoItem in todoList" 
                    :key="todoItem.id"
                    class="todo-item"
                    :title="todoItem.title"
                    :id="todoItem.id"
                    :isCompleted="todoItem.isCompleted"
                />
            </ul>
    </div>
</template>

<script>
import CreateTodo from '@/components/CreateTodo';
import TodoItem from '@/components/TodoItem';
import { fetchTodoList } from '@/netClient/todoService';

export default {
    name: 'HomePage',
    components : {
        CreateTodo, TodoItem
    },
    data: () => ({
        todoList: [],
    }),
    created() {
        this.fetchTodoList();
    },

    props: {
        id: String,
        title: String,
        isCompleted: Boolean
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
    }
};
</script>