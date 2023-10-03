import React from 'react'
function Navbar() {
    return (
     <div className='main-cointainer fixed-top'>
        <nav className='cointainer'>
                 <ul className='navbar'>
                <img src='https://gotrip-next.vercel.app/img/general/logo-dark.svg'/>
                <li className='li'>
                     Home
                </li>
                <li className='li'>
                     Categories 
                </li>
                <li className='li'>
                     Destinations
                </li>
                <li className='li'>
                     Blog 
                </li>
                <li className='li'>
                     Pages 
                </li>
                <li className='li'>
                    Dashboard 
                </li>
                <li className='li'>
                     Contact
                </li>
                <li className='li'>
                <button className='btn-1'> Become An Expert </button>
                </li>
                <li className='li'>
                <button className='btn-2'> Sign In/Register</button>
                </li>
            </ul>
      </nav>
      </div>
  )
}
export default Navbar