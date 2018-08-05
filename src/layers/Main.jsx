import React from 'react'
import styled from 'styled-components'
import questionaire from 'assets/images/questionaire.png'

const LayerWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 25px;

    .image-wrapper {
        width: 400px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
            opacity: 0.1;
        }
    }
`

const MainLayer = props => (
    <LayerWrapper>
        <div className="image-wrapper">
            <img src={questionaire} alt="centered" />
        </div>
        {props.children}
    </LayerWrapper>
)

export default MainLayer