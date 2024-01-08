import './Navbar.css';
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import { logo, download }  from '../../assets';

function Navbar () {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='flex justify-between section__margin section__padding text-white items-center text-center static'>
        <div className='opacity-50'><img height="30" width="30" src={logo}/></div>

        <div className=' font-ubuntu text-[14px] text-gray-400 navigation-subblock'>
            <div className='nav-items'>
                <a className='nav-item'>about</a>
                <a className='nav-item'>contacts</a>
                <a className='nav-item'>experience</a>
                <a className='nav-item'>work</a>
            </div>      

            <div className='flex items-center justify-between border-[1px] px-4 py-3 rounded-2xl
            border-lightPurple hover:bg-lightPurple hover:text-black transition duration-500 resume'>

                <p className='mr-1 ml-1'>resume</p>
                <div className='opacity-75 logo'><img height="20px" width="20px" src={download}/></div>
                
            </div>
        </div>

            <div className='navigation-menu'>
                
                <div className='sign absolute right-8'>
                    { toggleMenu 
        ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
                </div>
        
        { toggleMenu && (
            <div>

                <div className='navigation-subblock-menu absolute top-0 right-0 flex transition-all duration-500'>

                    <div className='nav-blur'></div>
                    <div className='right-nav'>
                        <a className='nav-item2'>about</a>
                        <a className='nav-item2'>contacts</a>
                        <a className='nav-item2'>experience</a>
                        <a className='nav-item2'>work</a>
                        <div className='flex items-center justify-between border-[1px] px-4 py-3 rounded-2xl
                        border-lightPurple hover:bg-lightPurple hover:text-black transition duration-500 resume mt-3'>
                        <p className=''>resume</p>
                        <div className='opacity-75 logo'><img height="20px" width="20px" src={download}/></div>
                    </div>
                    </div>
                    
                </div>
            </div>
                            
            )}
        </div>

    <script>
        const toggle = document.addE
    </script>
    </nav>
    
    )
}

export default Navbar