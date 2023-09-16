import React from 'react'
import { Route, Router, Link , Routes} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { UserPage } from '../pages/UserPage'
import { About } from '../pages/About'
import { GitsPage } from '../pages/GitsPage'
import { Nav } from '../styled'
import { NavList } from '../styled'
export const Navbar = () => {
  return (
    <Nav>
   <NavList>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/about">About</Link>
     </li>
     <li>
       <Link to="/gits"></Link>
     </li>
   </NavList>
 

   <Routes>
   <Route path='/about' element = {<About/>}/>
       {/* <Route path='/' element = {<HomePage/>}/> */}
       
       <Route path='/gits' element = {<GitsPage/>}/>
       <Route path='/users' element = {<UserPage/>}/>
   </Routes>
   </Nav>
 
  )
}
