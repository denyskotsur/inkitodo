import styled from 'styled-components'
import UserDropdownSC from 'components/core/UserDropdown/styles'

export const LogoWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    div {
        margin-left: 20px;
        font-size: 18px;

        span {
            color: #fff;
            margin-left: 5px;
        }

        span.colored {
            margin-left: 0;

            :nth-child(1) {
                color: ${({ theme }) => theme.priorityColors.low};
            }

            :nth-child(2) {
                color: ${({ theme }) => theme.priorityColors.medium};
            }

            :nth-child(3) {
                color: ${({ theme }) => theme.priorityColors.high};
            }

            :nth-child(4) {
                color: ${({ theme }) => theme.priorityColors.urgent};
            }
        }    
    }

    img {
        width: 50px;
    }
`

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    background-color: ${({theme}) => theme.secondaryColor};
    padding: 5px 25px;

    @media screen and (max-width: 768px) {
        ${UserDropdownSC} {
            display: none;
        }
    }
`