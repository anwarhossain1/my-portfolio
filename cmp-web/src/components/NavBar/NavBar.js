import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css'
function NavBar() {
    const [click,setClick]=useState(false);
    const onClickHandler=()=>setClick(!click);

    return (
       <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to='/' className="navbar-logo"></Link>
           </div>
           <div className='menu-icon' onClick={onClickHandler}>
               <i className={click? 'fas fa-times':'fas fa-bars'}/>

           </div>
           <ul className={click?'nav-menu active':'nav-menu'}>
               <li className='nav-item'>
                   <Link className='nav-links' to='/' onClick={onClickHandler}>
                   Home
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link className='nav-links' to='/projects' onClick={onClickHandler}>
                   Projects
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link className='nav-links' to='/about-me' >
                   About Me
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link className='nav-links' to='/' >
                   My Resume
                   </Link>
               </li>




           </ul>


       </nav>
       </>
    )
}

export default NavBar;
