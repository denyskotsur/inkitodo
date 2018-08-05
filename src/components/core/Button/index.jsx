import React from 'react'
import PropTypes from 'prop-types'
import ButtonSC from './styles'

const _propTypes = {
    onClick: PropTypes.func,

    // size can be 'small', 'medium', 'big'    
    size: PropTypes.string,

    // type can be 'primary', 'secondary'
    type: PropTypes.string,
    icon: PropTypes.element,
    text: PropTypes.string,
}

const _defaultProps = {
    size: 'medium',
    type: 'primary'
}

const Button = ({ type, size, icon, onClick, text }) => (
    <ButtonSC onClick={onClick} size={size} type={type}>
        {text} {icon ? icon : null}
    </ButtonSC>
)

Button.propTypes = _propTypes
Button.defaultProps = _defaultProps

export default Button