import styled from 'styled-components'
import CardSC from 'components/card/Card/styles'

export default styled.div`
    width: ${({ theme }) => `calc(${theme.cardWidth} + 60px)`};
    background-color: ${({ theme, isDraggingOver }) => isDraggingOver ? theme.secondaryColor : theme.secondaryColor};
    position: relative;
    height: 100%;

    :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.buttonPrimaryColor};
    }

    .title-wrapper {
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 16px;
        padding: 10px 30px;
        color: ${({ theme }) => theme.alternativeColor};
        border-bottom: 1px solid ${({ theme }) => theme.alternativeColor};

        span {
            margin-left: 5px;
        }
    }

    .list-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height: calc(100% - 50px);
        overflow-y: scroll;

        ${CardSC} {
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        width: ${({ theme }) => `calc(${theme.cardMobileWidth} + 60px)`};
    }
`