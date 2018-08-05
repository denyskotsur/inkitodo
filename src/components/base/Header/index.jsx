import React from 'react'
import HeaderSC, { LogoWrapper } from './styles'
import logo from 'assets/images/logo-white.png'
import UserDropdown from 'components/core/UserDropdown'

const Header = props => (
    <HeaderSC>
        <LogoWrapper>
            <img src={logo} alt="Logo" />
            <div> 
                <span className="colored"> T </span> 
                <span className="colored"> o </span>
                <span className="colored"> D </span> 
                <span className="colored"> o </span>
                <span> .list </span> 
            </div>
        </LogoWrapper>

        <UserDropdown title="Denny Kotsur" />
    </HeaderSC>
)

export default Header