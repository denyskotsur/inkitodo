import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from 'assets/images/default-user.png'
import UserDropdownSC from './styles'
import RoundImage from 'components/core/RoundImage'

const _propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
        PropTypes.string, PropTypes.element
    ]),
}

const _defaultProps = {
    image: defaultImage,
}

const UserDropdown = ({ title, image }) => (
    <UserDropdownSC>
        <span> {title} </span>
        <RoundImage image={image} name={title} />
    </UserDropdownSC>
)

UserDropdown.propTypes = _propTypes
UserDropdown.defaultProps = _defaultProps

export default UserDropdown