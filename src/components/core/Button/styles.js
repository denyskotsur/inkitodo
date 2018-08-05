import styled from 'styled-components'

export default styled.button`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px ${({ theme, size }) => theme[`${size}ButtonSize`]};
    color: ${({ theme, type }) => type === 'primary' ? '#fff' : theme.buttonPrimaryColor};
    background-color: ${({ theme, type }) => type === 'primary' ? theme.buttonPrimaryColor : theme.buttonSecondaryColor};
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 300;
    transition: background-color 0.15s linear;

    :hover {
        background-color: ${({ theme }) => theme.buttonPrimaryHoverColor};
    }

    i, svg {
        margin-left: 20px;
    }

    svg {
        width: 25px;
        height: 25px;
    }
`