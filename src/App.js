import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Header from 'components/base/Header'
import SubHeader from 'components/base/SubHeader'
import TasksDataContainer from 'containers/TasksDataContainer'
import CardFormContext from 'components/card/CardFormContext'

import MainLayer from 'layers/Main'
import './global-styles'
import 'normalize.css'
import 'react-widgets/dist/css/react-widgets.css';


const App = props => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Header />
      <CardFormContext>
        <SubHeader />
        <MainLayer>
          <TasksDataContainer />
        </MainLayer>
      </CardFormContext>
    </Fragment>
  </ThemeProvider>
)

export default App
