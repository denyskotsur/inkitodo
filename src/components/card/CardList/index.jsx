import React from 'react'
import PropTypes from 'prop-types'
import CardListSC from './styles'

const _propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.any.isRequired,
            title: PropTypes.string.isRequired,

            // priority can be 'low', 'medium', 'high', 'urgent'
            priority: PropTypes.string.isRequired,
        })
    ),

    // func that takes every element of `data`
    renderElement: PropTypes.func.isRequired,
}

const CardList = ({ id, title, data, sourceTargetType, renderElement }) => {
    const _renderItems = data => data.map((item, index) => renderElement(item, index))
    return (
        <CardListSC>
            <div className="title-wrapper">
                {title}
                <span> ({data.length}) </span>
            </div>

            <div className="list-wrapper">
                {_renderItems(data)}
            </div>
        </CardListSC>
    )
}

CardList.propTypes = _propTypes

export default CardList