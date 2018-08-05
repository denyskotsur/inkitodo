import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    padding: 10px 25px;

    @media screen and (max-width: 768px) {
        height: 130px;        
        flex-direction: column;
        margin-top: 20px;
    }
`