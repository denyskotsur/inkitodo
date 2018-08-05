import styled from 'styled-components'
import PriorityLabel from 'components/core/PriorityLabel/styles'

export default styled.div`
    display: flex;
    align-items: center;

    ${PriorityLabel} {
        margin-left: 15px;

        :first-child {
            margin-left: 0;
        }
    }
`