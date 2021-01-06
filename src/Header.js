import React, { Component } from 'react';
import './header.css'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Header = () => {
    return (
        <div className="header" >
            <div className="header__icons" >
                <div className="header__icon" >
                    <HomeIcon fontSize="" />
                    <p className="" >Home</p>
                </div>

                <div className="header__icon" >
                    <FlashOnIcon fontSize="" />
                    <p className="header__icon__hint">news</p>
                </div>

                <div className="header__icon" >
                    <LiveTvIcon fontSize="" />
                    <p className="header__icon__hint" >Live</p>
                </div>

                <div className="header__icon" >
                    <VideoLibraryIcon fontSize="" />
                    <p className="header__icon__hint" >Videos</p>
                </div>

                <div className="header__icon" >
                    <SearchIcon fontSize="" />
                    <p className="header__icon__hint" >Search</p>
                </div>

                <div className="header__icon" >
                    <PermIdentityIcon fontSize="" />
                    <p className="header__icon__hint" >Accounts</p>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680" alt="logo" />

        </div>
    );
}

export default Header;