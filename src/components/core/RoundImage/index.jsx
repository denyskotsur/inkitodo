import React from 'react'
import PropTypes from 'prop-types'
import RoundImageSC from './styles'
import defaultUser from 'assets/images/default-user.png'

const _propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
        // image url
        PropTypes.string,

        // imported element via webpack
        PropTypes.element,
    ]),

    // can be 'big', 'small'
    size: PropTypes.string,
}

const _defaultProps = {
    source: defaultUser,
    size: 'big',
}

const RoundImage = ({ image, name, size }) => (
    <RoundImageSC size={size}>
        <img src={image} alt={name} title={name} />
    </RoundImageSC>
)

RoundImage.propTypes = _propTypes
RoundImage.defaultProps = _defaultProps

export default RoundImage