import * as http from 'api-client/base'

const fetchTasks = params => http.get('tasks', params)

const deleteTask = id => http.remove(`tasks/${id}`)

const createTask = (id, data) => http.post('tasks', data)

const updateTask = (id, data) => http.update(`tasks/${id}`, data)

export {
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,    
}