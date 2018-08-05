import React, { Component } from 'react'
import DroppableCardList from 'components/card/DroppableCardList'
import DraggableCard from 'components/card/DraggableCard'
import initialData from 'data/initial'
import { DragDropContext } from 'react-beautiful-dnd'
import { moveTask, removeTasks, getRandomInt, convertFromRWToArrayOfStr } from 'utils'
import CardFormConsumer from 'components/card/CardFormConsumer'
import CardForm from 'components/card/CardForm'
import { FormWrapper, DataScreen } from './styles'
import { createTask, updateTask, deleteTask, fetchTasks } from 'api-client/task'


class TasksDataContainer extends Component {

    state = {
        data: initialData,
    }

    // For future purpose if there API present
    // componentDidMount() {
    //     fetchTasks()
    //         .then(resp => {
    //             this.setState({ data: resp })
    //         })
    // }

    _onCardEditHandler = id => {

        // Change form displaying in context
        const { changeTaskId, toggleShowForm } = this.props
        changeTaskId(id)
        toggleShowForm()
    }

    _onCardDeleteHandler = (id, columnId) => {

        // For future purpose if there API present
        // deleteTask(id)
        //     .then(() => {
        //          // Delete locally
        //     })


        // move to then when API available
        const column = this.state.data.columns[columnId]
        const { column: newColumn, tasks } = removeTasks(column, this.state.data.tasks, id)
        const newState = {
            data: {
                ...this.state.data,
                columns: {
                    ...this.state.data.columns,
                    [columnId]: newColumn,
                }
            },
            tasks,
        }
        console.log(newState)
        this.setState(newState)
    }

    _renderCardElement = (isDragDisabled, columnId) => {
        return ({ id, ...rest }, index) => (
            <DraggableCard
                key={id}
                id={id}
                draggableId={id}
                editable={!isDragDisabled}
                index={index}
                columnId={columnId}
                isDragDisabled={isDragDisabled}
                onEditHandler={this._onCardEditHandler}
                onDeleteHandler={this._onCardDeleteHandler}
                {...rest}
            />
        )
    }

    _renderColumns = data => data.columnIds.map(columnId => {
        const column = data.columns[columnId]
        const tasks = column.taskIds.map(taskId => data.tasks[taskId])
        const { id, title } = column
        const isDragDisabled = column.id === 'col-2-complete'

        return (
            <DroppableCardList
                key={id}
                droppableId={id}
                title={title}
                data={tasks}
                isDropDisabled={!isDragDisabled}
                renderElement={this._renderCardElement(isDragDisabled, columnId)}
            />
        )
    })

    onDragEnd = ({ destination, source, draggableId }) => {
        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        // Move from one column to another
        const { startColumn, endColumn } = moveTask(this.state.data.columns, source, destination, draggableId)
        const newState = {
            data: {
                ...this.state.data,
                columns: {
                    ...this.state.data.columns,
                    [startColumn.id]: startColumn,
                    [endColumn.id]: endColumn
                }
            }
        }

        this.setState(newState)
    }

    _onFormSubmit = (values, editing) => {
        const { title, description, projectName, techLabels, deadline, priority } = values

        const newTask = {
            ...values,
            techLabels: convertFromRWToArrayOfStr(techLabels, 'key'),
            priority: priority.value,
            deadline: deadline.toLocaleDateString('en'),
        }

        let newState = {}

        if (editing) {
            newTask.id = this.props.taskId
            newState.data = {
                ...this.state.data,
                tasks: {
                    ...this.state.data.tasks,
                    [this.props.taskId]: newTask
                }
            }
        } else {
            const newTaskId = `task-${getRandomInt()}`
            newTask.id = newTaskId
            const todoColumn = this.state.data.columnIds[0]

            // Todo: merge props more nice
            newState.data = {
                ...this.state.data,
                tasks: {
                    ...this.state.data.tasks,
                    [newTaskId]: newTask
                },
                columns: {
                    ...this.state.data.columns,
                    [todoColumn]: {
                        ...this.state.data.columns[todoColumn],
                        taskIds: [
                            ...this.state.data.columns[todoColumn].taskIds,
                            newTaskId
                        ]
                    }
                }
            }
        }

        this.setState(newState, () => this.props.toggleShowForm())
    }

    render() {
        const { showForm, taskId } = this.props

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <DataScreen showForm={showForm}>
                    {
                        showForm ?
                            <FormWrapper>
                                <CardForm
                                    task={taskId ? this.state.data.tasks[taskId] : null}
                                    onSubmitHandler={this._onFormSubmit}
                                />
                            </FormWrapper>
                            : this._renderColumns(this.state.data)
                    }
                </DataScreen>
            </DragDropContext>
        )
    }
}

export default CardFormConsumer(TasksDataContainer)