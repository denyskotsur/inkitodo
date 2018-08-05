const data = {
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
  
      'task-4': {
        id: 'task-4',
        title: 'Clean mac',
        priority: 'medium',
        techLabels: ['python', 'php'],
        description: `I need to clean my mac.`,
        deadline: '05-18-2014',
        projectName: 'Homework'
      },
  
      'task-5': {
        id: 'task-5',
        title: 'Write ToDo app',
        priority: 'urgent',
        techLabels: ['vue', 'react'],
        description: `I need to create nice todo list app.`,
        deadline: '08-05-2018',
        projectName: 'Inkit Todo'
      },

      'task-6': {
        id: 'task-6',
        title: 'Play with dog',
        priority: 'low',
        description: `I need to play with dog.`,
        deadline: '08-05-2019',
        projectName: 'Entertainment'
      },
    },
  
    columns: {
      'col-1-todo': {
        id: 'col-1-todo',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-6'],
      },
  
      'col-2-complete': {
        id: 'col-2-complete',
        title: 'Complete',
        taskIds: ['task-3', 'task-4', 'task-5'],
      },
    },
  
    // To make dynamic creation and possible ordering
    columnIds: ['col-1-todo', 'col-2-complete'],
  };
  
  export default data
  