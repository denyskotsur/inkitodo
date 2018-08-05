import styled from 'styled-components'

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${({ theme }) => theme.alternativeColor};
    
    span {
        margin-right: 10px;
    }
` 