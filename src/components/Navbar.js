import React from 'react';
import logo from './logo.jpeg';
import './navbar.css'

const Navbar =() => {
    return(
        <nav className='ui raised very padded segment'>
            <img class="logo" src={logo} height='200px'></img>
            {/* <a className='ui teal inverted segment'> teentalk</a> */}
            <div className='ui right floated header'>
                <button className='ui button'><a href="/">Sexualhealth</a></button>
                <button className='ui button'><a href ="/Peerpressure">Peerpressure</a></button>
                <button className='ui button'><a href ="/Parentalpressure">Parentalpressure</a></button>

            </div>
        </nav>
    )
}
export default Navbar;