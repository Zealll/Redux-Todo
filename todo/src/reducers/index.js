import { ADD_TASK } from '../actions'

const initialState = {
    todos: [
        {task: 'Sleep for 15hrs', id: 1, status: false}
    ]
}

function todosReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
        const newTask = {
            task: action.payload,
            id: Date.now(),
            status: false
        }
        return {
            ...state,
            todos: [...state.todos, newTask]
        }


        default: return state
    }
}

export default todosReducer
