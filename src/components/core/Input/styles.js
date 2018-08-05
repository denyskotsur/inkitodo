import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 5px;
    }

    .native {
        border: none;
        outline: none;
        padding: 5px;
        color: #fff;
        background: ${({ theme }) => `${theme.primaryColor}55`}; 
        border-color: ${({ theme }) => theme.buttonPrimaryColor};
        border-style: solid;
        font-weight: 300;
        border-width: 0;   
        transition: border-width 0.15s ease-in-out;

        :focus {
            border-width: 1px;
        }    
    }

    input.native {
        height: 38px;
    }

    textarea.native {
        resize: none;
        height: 100px;
    }
`