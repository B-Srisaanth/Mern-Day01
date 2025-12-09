import React from 'react'
import{Link} from 'react-router-dom'

const Header = () => {
    return (
        <div >
            <header className="font-mono flex justify-around bg-blue-300 h-25 ">
                <div>
                    <img src="https://e0.pxfuel.com/wallpapers/249/805/desktop-wallpaper-olympic-ring-logo-background-olympic-rings.jpg" className="w-25 h-25  object-contain" />

                </div>
                <ul className="py-8 flex justify-center gap-x-10 text-black ">
                    <Link to='/'> <li className='hover:text-amber-50 cursor-pointer transition  duration-700 hover:scale-200 text-2xl'>Home</li></Link>
                    <Link to='/about'><li className='hover:text-amber-50 cursor-pointer transition  duration-700 hover:scale-200 text-2xl'>About</li></Link>
                    <Link to='/contact'><li className='hover:text-amber-50 cursor-pointer transition  duration-700 hover:scale-200 text-2xl '>Contact</li></Link>
                </ul>
            </header>
        </div>
    )
}

export default Header