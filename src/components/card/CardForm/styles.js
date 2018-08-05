import styled from 'styled-components'
import InputSC from 'components/core/Input/styles'
import PriorityLabelSC from 'components/core/PriorityLabel/styles'
import Button from 'components/core/Button/styles'

export default styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 70px;
    color: #fff;

    .title {
        font-weight: 400;
        text-align: center;
        width: 100%;
        font-size: 20px;
        border-bottom: 1px solid white;
        height: 40px;
    }

    .form-wrapper {
        height: 100%;        
        margin: 25px 0;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    ${InputSC} {
        margin-bottom: 20px;
    }

    ${Button} {
        align-self: center;
    }

    .inputs-wrapper {
        display: flex;

        ${InputSC} {
            margin-right: 20px;

            :last-child {
                margin-right: 0;
            }
        }
    }

    /*
       Form widgets customization
    */

    .deadline-calendar {
        &.deadline-calendar,
        &.deadline-calendar:hover, input {
           color: #fff;
           transition: none;           
           background: ${({ theme }) => `${theme.primaryColor}55`}; 
           box-shadow: none;
           border-radius: 0;
           border: none;
        }

        &.deadline-calendar:hover,
        &.deadline-calendar:focus {
            /* border: 1px solid ${({ theme }) => theme.buttonPrimaryColor}; */
        }

        &.deadline-calendar .rw-btn-select {
            vertical-align: inherit;

            :hover {
                background: ${({ theme }) => `${theme.buttonPrimaryHoverColor}`};
                transition: none;
            }
        }

        &.deadline-calendar .rw-select-bordered {
            background: transparent;
        }
    }

    .rw-btn.rw-btn-select,
    .rw-select-bordered  {
        color: ${({ theme }) => `${theme.buttonPrimaryColor}`};

        :hover {
            background-color: ${({ theme }) => `${theme.buttonPrimaryHoverColor}`};
        }
    }

    .rw-widget .rw-multiselect-tag {
        background: ${({ theme }) => `${theme.buttonPrimaryColor}`};
        border-radius: 0;
    }

    .rw-btn.rw-btn-select {
        color: #fff;

        :hover {
            background: transparent;
        }
    }

    .rw-btn {
        vertical-align: inherit;
    }

    .priority-dropdown {
        &.priority-dropdown {
            &, :hover {
                border-radius: 0;
                background: ${({ theme }) => `${theme.primaryColor}55`}; 
                border: none;
                box-shadow: none;
            }

            .rw-dropdown-list-input {
                color: #fff;
            }

            +.rw-popup-container .rw-popup {
                background: ${({ theme }) => `${theme.primaryColor}99`};
                border: none;

                .rw-list-option {
                    border: none;
                    color: #fff;
                    font-weight: 300;

                    &:hover {
                        background: ${({ theme }) => theme.buttonPrimaryHoverColor};
                    }
                    
                    &.rw-state-selected {
                        background: ${({ theme }) => theme.buttonPrimaryColor};
                    }
                }

                ${PriorityLabelSC} {
                    span {
                        color: #fff;
                        font-weight: 300;
                    }
                }
            }
        }
    }

`