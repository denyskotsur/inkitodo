import React, { Component } from 'react'
import CardFormSC from './styles'
import Button from 'components/core/Button'
import { DateTimePicker, DropdownList } from 'react-widgets'
import PriorityLabel from 'components/core/PriorityLabel'
import Input from 'components/core/Input'
import RWMultiselect from 'components/core/RWMultiselect'
import prioritiesList from 'data/priorities'
import techList from 'data/tech'
import { convertTechToRWFormat } from 'utils'


const TagItem = ({ item }) => (
    <span>
        <strong>{item.name}</strong>
    </span>
);

const ListItem = ({ item }) => (
    <PriorityLabel label={item.name} priority={item.value} />
);

class CardForm extends Component {

    constructor(props) {
        super(props)

        if (!props.task) {
            this.state = {
                projectName: '',
                title: '',
                description: '',
                deadline: new Date(),
                techLabels: [techList[0]],
                priority: prioritiesList[0],
                isEditing: false,
            }
        } else {
            this.state = {
                ...props.task,
                isEditing: true,
                techLabels: convertTechToRWFormat(props.task.techLabels, techList),
                priority: prioritiesList.find(item => item.value === props.task.priority),
                deadline: new Date(props.task.deadline)
            }
        }
    }

    _onChangeField = name => {
        let value

        return values => {
            switch (name) {
                case 'projectName':
                case 'title':
                case 'description':
                    value = values.target.value
                    break
                default:
                    value = values
            }

            this.setState({
                [name]: value
            })
        }
    }

    _onSubmit = e => {
        e.preventDefault()
        e.stopPropagation()

        this.props.onSubmitHandler(this.state, this.state.isEditing)
    }

    render() {
        return (
            <CardFormSC>
                <div className="title"> {this.state.isEditing ? 'Edit' : 'Add'} task </div>
                <div className="form-wrapper">
                    <form onSubmit={this._onSubmit}>
                        <div className="inputs-wrapper">
                            <Input
                                name="title"
                                value={this.state.title}
                                onChange={this._onChangeField('title')}
                                label="Title"
                                required
                            />

                            <Input
                                name="projectName"
                                label="Project name"
                                value={this.state.projectName}
                                onChange={this._onChangeField('projectName')}
                                required
                            />
                        </div>

                        <Input
                            label="Deadline"
                            component={() => (
                                <DateTimePicker
                                    time={false}
                                    value={this.state.deadline}
                                    min={new Date()}
                                    onChange={this._onChangeField('deadline')}
                                    containerClassName="deadline-calendar"
                                />
                            )}
                        />

                        <Input
                            label="Technology labels"
                            component={() => (
                                <RWMultiselect
                                    data={techList}
                                    textField='name'
                                    valueField='key'
                                    tagComponent={TagItem}
                                    value={this.state.techLabels}
                                    onChange={this._onChangeField('techLabels')}
                                />
                            )}
                        />

                        <div className="inputs-wrapper">
                            <Input
                                label="Priority"
                                component={() => (
                                    <DropdownList
                                        data={prioritiesList}
                                        textField='name'
                                        itemComponent={ListItem}
                                        value={this.state.priority}
                                        onChange={this._onChangeField('priority')}
                                        containerClassName="priority-dropdown"
                                    />
                                )}
                            />

                            <Input
                                type="textarea"
                                label="Description"
                                onChange={this._onChangeField('description')}
                                value={this.state.description}
                                name="description"
                                maxLength="100"
                                required
                            />
                        </div>

                        <Button text="Confirm" />
                    </form>
                </div>
            </CardFormSC>
        )
    }
}

export default CardForm