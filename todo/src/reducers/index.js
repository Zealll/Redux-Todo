import { ADD_TASK, TOGGLE_TASK } from '../actions'

const initialState = {
    todos: [
        {task: 'Sleep for 15hrs', id: 1, completed: false}
    ]
}

function todosReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
            const newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTask]
            }
        case TOGGLE_TASK:
        return {
            ...state,
            todos: state.todos.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
        }

        default: return state
    }
}

export default todosReducer
