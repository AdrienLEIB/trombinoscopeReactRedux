import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useSelector, useDispatch} from 'react-redux';

import {addTodo, removeTodo} from '../../actions/todo'

const Todo = (props) =>{

       
    const [todoList, setTodo] = useState([])
    const [name, setName] = useState('');
    const todoState = useSelector(state => state.todo.todoList);
    const dispatch = useDispatch();
    
    return(
        <div>
            <ul>
                {todoState.map((item) => (
                    <li key={item.id}> {item.name} <button name={item.id} onClick={()=> dispatch(removeTodo(item.id))}>X</button></li>

                ))}
            </ul>
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button type="button" onClick={() => dispatch(addTodo(name))}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default Todo