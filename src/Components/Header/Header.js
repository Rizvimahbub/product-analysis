import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <CustomLink className='link' to='/home'>Home</CustomLink>
            <CustomLink className='link' to='/reviews'>Reviews</CustomLink>
            <CustomLink className='link' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='link' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='link' to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;