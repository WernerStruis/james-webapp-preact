import React from 'react';
import Logo from 'assets/images/logo.svg';

const Header = (props) => (
    <div className="header">
        <div className="header-inner container">

            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="JAMES - Logo"/>
                </a>
            </div>

            <div className="navigation">
                <ul className="nav">
                    <li role="presentation">
                        {/*<LinkContainer to="/">*/}
                            {/*<a href="/">Inloggen</a>*/}
                        {/*</LinkContainer>*/}
                    </li>
                </ul>
            </div>

        </div>
    </div>
);

export default Header;