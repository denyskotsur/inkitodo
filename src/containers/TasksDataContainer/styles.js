import styled from 'styled-components'

const DataScreen = styled.div`
    position: relative;
    display: flex;
    justify-content: ${({ showForm }) => showForm ? 'center' : 'space-between'};
    height: 100%;
    width: 100%;
`

const FormWrapper = styled.div`
    position: relative;
    width: 70%;
    background: rgba(255, 255, 255, 0.1);

    :before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.buttonPrimaryColor};
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export {
    FormWrapper,
    DataScreen
}