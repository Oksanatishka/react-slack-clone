import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                {/* Avatars for logged in user */}
                <Avatar
                    className="header__avatar"
                    // alt="Oksana B."
                    alt={user?.displayName}
                    src={user?.photoURL}
                />

                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />

                <input type="text" placeholder="Search Clever Programmer" />
            </div>
            <div className="header__right">
                <HelpIcon />
            </div>
        </div>
    );
};

export default Header;
