import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.js'
import { Multiselect } from 'react-widgets'

const _propTypes = {
    data: PropTypes.array.isRequired,
    limit: PropTypes.number,
}

const _defaultProps = {
    limit: 5,
}

class RWMultiselect extends Component {
    /*
        Wrapper for react widgets multiselect
        all list of props you can find here:
            https://jquense.github.io/react-widgets/api/Multiselect/
    */

    state = {
        value: [],
    }

    _onChange = values => {
        if (values.length <= this.props.limit) {
            const { onChange } = this.props
            this.setState({ value: values }, () => onChange ? onChange(this.state.values) : null)
        }
    }

    render() {
        const { data, ...rest } = this.props
        return (
            <Multiselect
                data={data}
                containerClassName="tech-multiselect"
                {...rest}
            />
        )
    }
}

RWMultiselect.propTypes = _propTypes
RWMultiselect.defaultProps = _defaultProps

export default RWMultiselect