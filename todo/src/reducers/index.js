import React from 'react';

const initialState = {
    todos: [
        {task: 'Sleep for 15hrs', id: 1, status: false}
    ]
}

function todosReducer(state = initialState, action) {
    switch(action.type) {
        default: return state
    }
}

export default todosReducer
