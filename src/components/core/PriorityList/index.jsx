import React from 'react'
import PriorityListSC from './styles'
import PriorityLabel from 'components/core/PriorityLabel';

const _prioritiesList = ['Low', 'Medium', 'High', 'Urgent']

const PriorityList = props => (
    <PriorityListSC>
        {_prioritiesList.map(item =>
            <PriorityLabel key={item} label={item} priority={item.toLowerCase()} />
        )}
    </PriorityListSC>
)

export default PriorityList