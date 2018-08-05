export const updateTasksIdsList = ({ data, index, draggableId, operation = 'remove', taskIdsKey = 'taskIds' }) => {
    /*
       Update task ids list in given data object.

       Array of task ids must be the same as `taskIdsKey` param.
    */
    if (!data[taskIdsKey]) {
        throw 'No such task IDs key'
    }

    const taskIdsList = data[taskIdsKey]

    // Check if can be updated
    if (operation !== 'remove' && taskIdsList.indexOf(draggableId) !== -1) {
        return {
            data,
            taskIds: taskIdsList,
        }
    }

    const taskIds = [...taskIdsList]
    const isRemoving = operation === 'remove'
    const args = [index, 1]

    if (!isRemoving) {
        args[1] = 0
        args[2] = draggableId
    }

    taskIds.splice.apply(taskIds, args)
    return {
        ...data,
        taskIds,
    }
}

export const removeTasks = (column, tasksList, taskId) => {
    /*
        Removing task from given array of task objects and from column
    */
    const taskIndex = column.taskIds.indexOf(taskId)
    const tasks = {...tasksList}
    const newTasks = filterObject(tasks, item => item.id !== taskId)
    const newColumn = updateTasksIdsList({ data: column, index: taskIndex })

    return {
        tasks: newTasks,
        column: newColumn,
    }
}

export const moveTask = (columns, source, destination, draggableId) => {
    /*
       Move task from source to destination column 
       using react-beautiful-dnd. 

       columns - source array of columns which looks like:
        'col-id': {
            id: 'col-id',
            title: 'Column title',
            taskIds: ['task-1', 'task-2'],
        },

       Note: droppableIds  must be the same as declared in columns array.
    */

    const startColumn = columns[source.droppableId]
    const endColumn = columns[destination.droppableId]

    // Disable reordering
    if (startColumn === endColumn) {
        return
    }

    // Moving from one column to another
    const newStartColumn = updateTasksIdsList({ data: startColumn, index: source.index })
    const newEndColumn = updateTasksIdsList({
        draggableId,
        data: endColumn,
        index: destination.index,
        operation: 'add'
    })

    return {
        startColumn: newStartColumn,
        endColumn: newEndColumn
    }
}

export const getRandomInt = (max = 9999) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const uppercaseFirstLetter = string => string[0].toUpperCase() + string.slice(1)

export const convertTechToRWFormat = (values, source, labelField = 'name', keyField = 'key') => {
    /*
        Convert to React widgets select format from array of string
     */
    if (!values) {
        return
    }

    return values.map(item => {
        return source.find(s => s.key === item)
    })
}

export const convertFromRWToArrayOfStr = (source, key) => source.map(item => item[key])

export const filterObject = (obj, predicate) => (
    /*
       Filter for objects like in arrays
    */
    Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => (res[key] = obj[key], res), {})
)