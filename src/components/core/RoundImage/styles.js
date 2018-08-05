import styled from 'styled-components'

export default styled.div`
    width: ${({ size }) => size === 'small' ? '25px' : '40px'};
    height: ${({ size }) => size === 'small' ? '25px' : '40px'};

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }    
`