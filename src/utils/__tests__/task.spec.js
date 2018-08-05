import { updateTasksIdsList, removeTasks } from 'utils'

describe('---> Task manipulations', () => {
    let data

    beforeEach(() => {
        data = {
            tasks: {
                'task-1': {
                    id: 'task-1',
                    title: 'Clean room',
                    priority: 'low',
                    techLabels: ['vue', 'react'],
                    description: `I have to clean room using vue and react.`,
                    deadline: '09-05-2022',
                    projectName: 'Homework'
                },

                'task-2': {
                    id: 'task-2',
                    title: 'Write essay',
                    priority: 'medium',
                    techLabels: ['vue', 'angular'],
                    description: `I need to write the greatest essay for IELTS exam.`,
                    deadline: '12-23-2019',
                    projectName: 'IELTS'
                },

                'task-3': {
                    id: 'task-3',
                    title: 'To swim',
                    priority: 'high',
                    techLabels: ['react', 'angular', 'vue', 'java'],
                    description: `I need to go to the swimming pool urgent.`,
                    deadline: '05-18-2019',
                    projectName: 'Health'
                },
            },

            columns: {
                'col-1-todo': {
                    id: 'col-1-todo',
                    title: 'To do',
                    taskIds: ['task-1', 'task-2'],
                },

                'col-2-complete': {
                    id: 'col-2-complete',
                    title: 'Complete',
                    taskIds: ['task-3'],
                },
            },

            columnIds: ['col-1-todo', 'col-2-complete'],
        }
    })


    it('Removing task from complete list', () => {
        const expected = []
        const column = data.columns['col-2-complete']

        expect(updateTasksIdsList({ data: column, index: 0 }).taskIds).toEqual(expected)
    })

    it('Moving taskId from todo to complete column', () => {
        const expected = ['task-2', 'task-3']
        const column = data.columns['col-2-complete']
        const draggableId = 'task-2'
        const movingResult = updateTasksIdsList({ data: column, index: 0, operation: 'add', draggableId })

        expect(movingResult.taskIds).toEqual(expected)
    })

    it('Moving taskId to the same column (from todo to todo) not allowed', () => {
        const expected = ['task-1', 'task-2']
        const column = data.columns['col-1-todo']
        const draggableId = 'task-2'

        const movingResult = updateTasksIdsList({ data: column, index: 0, operation: 'add', draggableId })
        expect(movingResult.taskIds).toEqual(expected)
    })

    it('Removing tasks from column and tasksList', () => {
        const expected = ['task-2']
        const column = data.columns['col-1-todo']
        const taskId = 'task-1'
        const removingResult = removeTasks(column, data.tasks, taskId)

        expect(removingResult.column.taskIds).toEqual(expected)
        expect(removingResult.tasks[taskId]).toBe(undefined)
    })
})