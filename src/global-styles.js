import { injectGlobal } from 'styled-components'
import theme from 'theme'

export default injectGlobal`
    * {
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Lato', sans-serif;
    }

    body {
        background-color: ${theme.primaryColor};
        font-family: 'Roboto-Regular';
        font-weight: 400;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`