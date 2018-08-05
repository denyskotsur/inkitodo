import styled from 'styled-components'
import RoundImage from 'components/core/RoundImage/styles'

export const CardLabel = styled.div`
    position: absolute;
    right: 9px;
    bottom: -7px;
    font-weight: 300;
    font-size: 10px;
    padding: 2px 15px;
    transform: skew(-20deg);
`

export default styled.div`
    position: relative;
    background-color: ${({ priority, theme, isDragging }) => `${theme.priorityColors[priority]}${isDragging ? '99' : '11'}`};
    width: ${({ theme }) => theme.cardWidth}; 
    border-radius: ${({ theme }) => theme.cardColorLineWidth};
    min-height: ${({ theme }) => `calc(${theme.cardWidth} / 2)`};
    padding: 10px;
    padding-left: ${({ theme }) => `calc(${theme.cardColorLineWidth} + 10px)`};
    color: #fff;
    flex-shrink: 0;
    cursor: pointer;
    transition: background-color 0.1s linear;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${({ theme }) => theme.cardColorLineWidth};
        height: 100%;
        background: ${({ priority, theme }) => priority ? theme.priorityColors[priority] : 'inherit'};
        border-radius: 10px 0 0 10px;
    }

    &:hover {
        .controls {
            opacity: 1;
        }
    }

    .title {
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 75%;
        overflow: hidden;
    }

    .description {
        font-weight: 300;        
    }

    .deadline {
        display: flex;
        font-size: 11px;
        margin-top: 5px;

        span {
            margin-left: 3px;
            font-style: italic;
        }
    }

    .tech-labels {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 10px;

        ${RoundImage} {
            margin-right: 5px;
        }
    }

    .controls {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0;
        transition: opacity 0.15s linear;

        svg {
            margin-left: 5px;
            font-size: 20px;

            :hover {
                color: ${({ priority, theme }) => `${theme.priorityColors[priority]}`};
            }
        }
    }

    ${CardLabel} {
        background: ${({ priority, theme }) => `${theme.priorityColors[priority]}`};
    }

    @media screen and (max-width: 768px) {
        width: ${({ theme }) => theme.cardMobileWidth};
        min-height: ${({ theme }) => `calc(${theme.cardMobileWidth} / 2)`};

        .description {
            display: none;
        }

        .tech-labels {
            margin-top: 10px;
        }
    }
`