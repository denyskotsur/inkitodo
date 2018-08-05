import React from 'react'
import PropTypes from 'prop-types'
import InputSC from './styles'

const requiredPropsCheck = (props, propName, componentName) => {
    if (!props.name && !props.component) {
        return new Error(`One of 'component' or 'name' is required by '${componentName}' component.`)
    }
}

const _propTypes = {
    name: requiredPropsCheck,
    type: PropTypes.string,
    label: PropTypes.string,

    // returned via render props custom component
    component: requiredPropsCheck,
}

const _defaultProps = {
    type: 'text',
}

const Input = props => {
    const { type, name, component, label, ...rest } = props

    return (
        <InputSC>
            {label && <label> {label} </label>}
            {component
                ? component(props) :
                    type === 'textarea' ?
                        <textarea className="native" type={type} name={name} {...rest} />
                        : <input className="native" type={type} name={name} {...rest} /> 
            }
        </InputSC>
    )
}

Input.propTypes = _propTypes
Input.defaultProps = _defaultProps

export default Input
