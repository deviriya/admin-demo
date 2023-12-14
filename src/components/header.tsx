import { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import user from '../assets/user.png';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
// import { FiSearch } from 'react-icons/fi';
import { BsBellFill } from 'react-icons/bs';
import './style.scss';
import Logo from '../assets/Mazenet Logo PNG.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const [notify, setnotify] = useState(false);
    const notifytoggle = () => setnotify((prevState) => !prevState);

    const sidebar = (): void => {
        const Sidemenu = document.querySelector("body");
        if (Sidemenu instanceof HTMLElement) {
            Sidemenu.classList.add("showSide");
        }
    };

    return (
        <div className="container-fluid">
            <nav className="navbar">
                <div className="nav-brand" onClick={sidebar}>
                    <div className='mb-4 d-flex justify-content-between align-items-center'>
                        <p className='m-0'>
                            <BiMenuAltLeft />
                            <Link to="/" className='logo'>
                                <img src={Logo} width={180} className="img-fluid p-2" />
                            </Link>
                        </p>
                        <span className='Mbllogo m-2' onClick={sidebar}><AiOutlineClose /></span>
                    </div>
                </div>

                <div className="navbar-items">
                    <ul className="nav-item">
                       
                        <li className="nav-link">
                            <div className='drop'>
                                <Dropdown isOpen={notify} toggle={notifytoggle}>
                                    <DropdownToggle>
                                        <div className="position-relative">
                                            <BsBellFill />
                                            <span className="position-absolute top-25 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                                <span className="visually-hidden">New alerts</span>
                                            </span>
                                        </div>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            Notification 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Notification 2
                                        </DropdownItem>
                                        <DropdownItem>
                                            Notification 3
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </li>
                        <li className="nav-link">
                            <div className='drop'>
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        <img src={user} width={30} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <h6>Site Settings</h6>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <h6>Security Settings</h6>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <h6>Logout</h6>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}