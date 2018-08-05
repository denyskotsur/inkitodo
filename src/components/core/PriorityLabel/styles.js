import styled from 'styled-components'

export default styled.div`
    display: flex;
    align-items: center;

    .doughnut {
        border: 2px solid ${({ theme, priority }) => priority ? theme.priorityColors[priority] : theme.alternativeColor};
        border-radius: 15px;
        height: 15px;
        width: 15px;
    }

    span {
        font-size: 14px;
        margin-left: 5px;
        color: ${({ theme }) => theme.alternativeColor};
    }
`