import React from 'react'
import { connect } from 'react-redux'

class TaskList extends React.Component {
    state ={

    }


    render() {
        return (
            <>
                {this.props.taskList.map(task => (
                    <div className='eachTask'><h3>{task.task}</h3></div>
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



export default connect(mapStateToProps)(TaskList)