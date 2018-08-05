import React from 'react'
import Button from 'components/core/Button'
import SubHeaderSC from './styles'
import { MdAdd } from 'react-icons/md'
import CardFormConsumer from 'components/card/CardFormConsumer'
import PriorityList from 'components/core/PriorityList'

const SubHeader = props => (
    <SubHeaderSC>
        <PriorityList />
        <Button
            text={props.showForm ? "Cancel" : "New task"}
            icon={props.showForm ? null : <MdAdd />}
            onClick={props.toggleShowForm}
        />
    </SubHeaderSC>
)

export default CardFormConsumer(SubHeader)