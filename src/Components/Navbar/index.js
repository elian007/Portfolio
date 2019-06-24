import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () =>{
    return(
        <div class="navbar navbar-dark bg-dark">
        <div className='container'>
            <div className='logo'>
                <h2 className='logo-text'>Elian Marcos</h2>
            </div>
            
            <ul className='ul-list'>
                <li className='list-item'><Link to='/'>Home</Link></li>
                <li className='list-item'><Link to='/work'>Serviços</Link></li>
                <li className='list-item'><Link to='/portfolio'>Portfólio</Link></li>
                <li className='list-item'><Link to='/perfil'>Perfil</Link></li>
                <li className='list-item'><Link to='/'>Blog</Link></li>

                <li className='list-item'><Link to='/contact'>Contato</Link></li>
            </ul>
            
        </div>
        </div>
    )
}

export default Navbar