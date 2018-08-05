import React from 'react'
import PropTypes from 'prop-types'
import RoundImage from 'components/core/RoundImage'
import CardSC, { CardLabel } from './styles'
import { MdAccessTime, MdModeEdit, MdClear } from 'react-icons/md'
import tech from 'data/tech'

const _propTypes = {
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,

    // priority can be 'low', 'medium', 'high', 'urgent'
    // affects on displayed color
    priority: PropTypes.string,
    projectName: PropTypes.string,
    description: PropTypes.string,
    techLabels: PropTypes.arrayOf(PropTypes.string),

    // for displaying edit/delete icons
    editable: PropTypes.bool,
    deletable: PropTypes.bool,

    // functions that takes id of item
    onEditHandler: PropTypes.func,
    onDeleteHandler: PropTypes.func,
}

const _defaultProps = {
    priority: 'low',
    size: 'big',
    editable: true,
    deletable: true,
    onEditHandler: () => { },
    onDeleteHandler: () => { },
}

const Card = props => {
    const {
        id,
        title,
        priority,
        deadline,
        techLabels,
        description,
        size,
        projectName,
        editable,
        onEditHandler,
        onDeleteHandler,
        columnId
    } = props

    const _renderLabels = data => data.map(item => {
        const { name, image, key } = tech.find(el => el.key === item)
        return <RoundImage key={key} name={name} image={image} size="small" />
    })

    return (
        <CardSC priority={priority} size={size}>
            {
                projectName && <CardLabel> {projectName} </CardLabel>
            }

            <div className="title" title={title}> {title} </div>

            {
                deadline &&
                <div className="deadline" title="Deadline">
                    <MdAccessTime />
                    <span> {deadline} </span>
                </div>
            }

            <p className="description"> {description} </p>

            {
                techLabels && techLabels.length ?
                    <div className="tech-labels">
                        {_renderLabels(techLabels)}
                    </div> : null
            }

            <div className="controls">
                {editable && <MdModeEdit onClick={() => onEditHandler(id)} />}
                <MdClear onClick={() => onDeleteHandler(id, columnId)} />
            </div>
        </CardSC>
    )
}

Card.propTypes = _propTypes
Card.defaultProps = _defaultProps

export default Card