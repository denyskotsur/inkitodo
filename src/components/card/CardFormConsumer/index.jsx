import React from 'react'
import { FormContext } from 'components/card/CardFormContext/form-context'

const CardFormConsumer = (Component) => {
    return props => {
        return (
            <FormContext.Consumer>
                {
                    (context) => {
                        return (
                            <Component {...context} {...props} />
                        )
                    }
                }
            </FormContext.Consumer>
        )
    }
}

export default CardFormConsumer