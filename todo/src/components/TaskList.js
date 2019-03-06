import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import {toggleTask} from '../actions'

class TaskList extends React.Component {
    state ={
        newTask: '',
    }

    handleChanges = e => {
        this.setState({newTask: e.target.value})
    }

    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask)
        this.setState({newTask: ''})
    }

    toggleTask = id => {
        this.props.toggleTask(id)
    }


    render() {
        return (
            <>
                <input type='text'
                name='newTask'
                value={this.state.newTask}
                onChange={this.handleChanges}
                />
                
                <button onClick={this.addTask}>Add Task</button>
                {this.props.taskList.map(task => (
                    <div    
                        className={task.completed ? ' completed' : ''}
                        key={task.id} 
                        onClick={() => this.toggleTask(task.id)}
                    >
                            
                        <h3>{task.task}</h3>
                    </div>
                ))}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        taskList: state.todos
    }
        
    
}



export default connect(
    mapStateToProps,
    { addTask, toggleTask }
    )(TaskList)