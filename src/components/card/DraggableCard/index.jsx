import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'
import Card from 'components/card/Card'
import styled from 'styled-components'

const _propTypes = {
    // unique id of draggable element
    draggableId: PropTypes.any.isRequired,
    index: PropTypes.any.isRequired,
    isDragDisabled: PropTypes.bool,
}

const _defaultProps = {
    isDragDisabled: false,
}

// need to make react beautiful dnd working 
// to return HTMLElement instead of class instance
const DraggableWrapper = styled.div``

const DraggableCard = ({ id, index, isDragDisabled, ...rest }) => (
    /*
       Draggable card element using react-beautiful-dnd
    */

    <Draggable
        draggableId={id}
        index={index}
        isDragDisabled={isDragDisabled}
    >
        {({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => (
            <DraggableWrapper
                innerRef={innerRef}
                {...draggableProps}
                {...dragHandleProps}
            >
                <Card
                    isDragging={isDragging}
                    id={id}
                    {...rest}
                />
            </DraggableWrapper>
        )}
    </Draggable>
)

DraggableCard.propTypes = _propTypes
DraggableCard.defaultProps = _defaultProps

export default DraggableCard