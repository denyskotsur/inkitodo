import axios from 'axios'
import config from 'App.config'

export const BASE_API_URL = `${config.baseApiUrl}api/`

const request = (method, path, params, data = {}) => {
    const headers = {}

    return axios({
        method,
        headers,
        data,
        params,
        baseURL: BASE_API_URL,
        url: path,
    })
        .then(response => response.data ? response.data : response)
        .catch(err => new Promise((resolve, reject) => {
            /*
               Make error response more flatten
            */
            if (err.response && err.response.data) {
                const error = err.response.data

                if (typeof error !== 'string') {
                    error.status = err.response.status
                }

                return reject(error)
            }
        }))
}

export const post = (path, data, params) => {
    return request('post', path, params, data)
}

export const get = (path, params) => {
    return request('get', path, params)
}

export const remove = path => {
    return request('delete', path)
}

export const update = (path, data) => {
    return request('put', path, data)
}

export const patchUpdate = (path, data) => {
    return request('patch', path, data)
}
