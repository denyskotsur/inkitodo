import React from 'react'

export const FormContext = React.createContext({
    showForm: false,
    toggleShowForm: () => {},
    changeTaskId: () => {}
  });