import { injectGlobal } from 'styled-components'
import theme from 'theme'

injectGlobal`
    .tech-multiselect {
        &.tech-multiselect {
            &, :hover {
                border: none;
                outline: none;
                background: ${`${theme.primaryColor}55`};      
                border-style: solid;
                font-weight: 300;
                border-width: 0;
                border-radius: 0;
                transition: border-width 0.15s ease-in-out;
                color: #fff;
            }

            &.rw-widget-container,
            &.rw-widget-container:hover {
                background: ${`${theme.primaryColor}55`};
                border-color: ${theme.buttonPrimaryColor};
                box-shadow: none;                                
            }

            +.rw-popup-container  {
                .rw-popup {
                    background: ${`${theme.primaryColor}99`};
                    border: none;

                    .rw-list-option {
                        border: none;
                        color: #fff;
                        font-weight: 300;

                        &:hover {
                            background: ${theme.buttonPrimaryHoverColor};
                        }
                        
                        &.rw-state-selected {
                            background: ${theme.buttonPrimaryColor};
                        }
                    }

                    .rw-list-empty {
                        color: #fff;
                    }
                }
            }
        }
    }
`