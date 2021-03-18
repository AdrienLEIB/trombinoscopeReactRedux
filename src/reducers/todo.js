/* eslint-disable import/no-anonymous-default-export */
import {ADD_TODO, REMOVE_TODO} from '../actions/todo';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todoList: []
}

const addTodo = (state, name) =>{
    // event.preventDefault();
    const newTodo = {"name": name, "id": uuidv4()}
    return [...state.todoList, newTodo]
}

const removeTodo = (state, id) =>{
    const newTodo = state.todoList.filter(todo => todo.id !== id);
    return [...newTodo]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todoList: addTodo(state, action.name)
            }
        case REMOVE_TODO:
            return{
                ...state,
                todoList: removeTodo(state, action.id)
            }
        default:
            return state
    }
}