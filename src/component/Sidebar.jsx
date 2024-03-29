import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import '../style/Sidebar.css';
import myImage from '../assets/—Pngtree—vector fox_585540.png';
import { Link } from 'react-router-dom';
import { socialIcons } from '../Additional';
import { links } from '../Additional';

const Sidebar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null); // New state to track hovered index

    const handleChange = () => {
        setIsLoading((prevState) => !prevState);
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div
                className={`bg-transparent  ${
                    isLoading ? 'w-64' : 'w-20'
                } transition-all ease-linear duration-300 relative z-0`}
                style={{ height: '100vh' }}>
                <div className="side-arrow ">
                    <HiOutlineMenuAlt3
                        onClick={handleChange}
                        className="text-4x1 hover:text-orange-500 duration-100  transition-all"
                    />
                </div>
                <div className="main-contant ">
                    <div
                        className="logo  "
                        style={{ opacity: isLoading ? '1' : '0' }}>
                        <img
                            src={myImage}
                            alt=""
                        />
                    </div>

                    <div className="links pt-10 ">
                        <ul className={`${isLoading ? 'p-0' : 'p-2'}`}>
                            {links.map((link, index) => (
                                <li
                                    className="list-item py-3"
                                    key={index}>
                                    <Link
                                        to={link.to}
                                        className="nav-link">
                                        <div className="flex  items-center justify-evenly">
                                            <div
                                                className={`icon-link  text-2xl   flex relative justify-start ${
                                                    link.text === 'Blog' ? 'pl-2' : 'pl-0'
                                                }`}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave} // Add mouse event handlers
                                            >
                                                {link.icon}
                                                {!isLoading && hoveredIndex === index ? ( // Check if not loading and hovered index matches current index
                                                    <span className="">
                                                        {link.text}
                                                    </span>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                            {isLoading ? (
                                                <div className="link-text">
                                                    <span
                                                        className={`hover:text-orange-500 duration-100  transition-all  flex justify-end ${
                                                            link.text === 'Blog' ? 'pr-2' : 'pr-0'
                                                        }`}
                                                    >
                                                        {link.text}
                                                    </span>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div
                    className="social-icon"
                    style={{ flexDirection: isLoading ? 'row' : 'column' }}>
                    {socialIcons.map((socialIcon, index) => (
                        <div
                            key={index}
                            className="icon  ">
                            <Link
                                to={socialIcon.link}
                                className="text-white hover:text-red-600 transition-colors">
                                {socialIcon.icon}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
