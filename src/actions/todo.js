export const ADD_TODO = 'ADD_TODO';

export const addTodo = (name) => ({
    type: ADD_TODO,
    name
})

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})