import React from 'react'
import PropTypes from 'prop-types'
import PriorityLabelSC from './styles'

const _propTypes = {
    priority: PropTypes.string.isRequired,
    label: PropTypes.string,
}

const _defaultProps = {
    label: 'Label'
}

const PriorityLabel = ({ priority, label }) => (
    <PriorityLabelSC priority={priority}>
        <div className="doughnut"></div>
        <span> {label} </span>
    </PriorityLabelSC>
)

PriorityLabel.propTypes = _propTypes
PriorityLabel.defaultProps = _defaultProps

export default PriorityLabel

