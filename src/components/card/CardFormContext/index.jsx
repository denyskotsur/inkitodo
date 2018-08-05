import React, { Component } from 'react'
import { FormContext } from './form-context'


class CardFormContext extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showForm: false,
            toggleShowForm: this.toggleShowForm,
            changeTaskId: this.changeTaskId,            
            taskId: null,
        }
    }

    toggleShowForm = () => {
        const { showForm } = this.state
        const newState = showForm ? { taskId: null } : {}
        newState.showForm = !showForm
        this.setState(newState)
    }

    changeTaskId = id => {
        this.setState({ taskId: id })
    }

    render() {
        return (
            <FormContext.Provider value={this.state}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}

export default CardFormContext