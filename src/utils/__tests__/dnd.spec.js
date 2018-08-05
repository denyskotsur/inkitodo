import { moveTask } from 'utils'

describe("---> Drag'n'drop cases", () => {
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
                'todo': {
                    id: 'todo',
                    title: 'To do',
                    taskIds: ['task-1', 'task-2'],
                },

                'complete': {
                    id: 'complete',
                    title: 'Complete',
                    taskIds: ['task-3'],
                },
            },

            columnIds: ['todo', 'complete'],
        }
    })

    it('Drag from todo to complete column', () => {
        const expetedCompleteIds = ['task-3', 'task-2']
        const expectedTodoIds = ['task-1']

        const draggableId = 'task-2'
        const source = {
            droppableId: 'todo',
            index: 1,
        }

        const destination = {
            droppableId: 'complete',
            index: 1,
        }

        const moveResults = moveTask(data.columns, source, destination, draggableId)

        expect(moveResults.startColumn.taskIds).toEqual(expectedTodoIds)
        expect(moveResults.endColumn.taskIds).toEqual(expetedCompleteIds)
    })

    it('Drag from todo to todo is not allowed', () => {
        const expectedTodoIds = ['task-1', 'task-2']
        const draggableId = 'task-2'
        const source = {
            droppableId: 'todo',
            index: 1,
        }

        const destination = {
            droppableId: 'todo',
            index: 0,
        }

        const moveResults = moveTask(data.columns, source, destination, draggableId)
        expect(moveResults).toEqual(undefined)
    })

})