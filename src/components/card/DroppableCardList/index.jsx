import React from 'react'
import PropTypes from 'prop-types'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import CardList from 'components/card/CardList'

// need to make react beautiful dnd working 
// to return HTMLElement instead of class instance
const DroppableWrapper = styled.div``

const _propTypes = {
    // unique id for drop target
    droppableId: PropTypes.any.isRequired,
    isDropDisabled: PropTypes.bool,
}

const _defaultProps = {
    isDropDisabled: true,
}

const DroppableCardList = ({ droppableId, isDropDisabled, ...rest }) => (
    <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
        {
            ({ droppableProps, innerRef, placeholder }, { isDraggingOver }) => (
                <DroppableWrapper
                    innerRef={innerRef}
                    {...droppableProps}
                >
                    <CardList
                        isDraggingOver={isDraggingOver}
                        {...rest}
                    />
                    {placeholder}
                </DroppableWrapper>
            )
        }
    </Droppable>
)

DroppableCardList.propTypes = _propTypes
DroppableCardList.defaultProps = _defaultProps

export default DroppableCardList

