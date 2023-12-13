import { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import user from '../assets/user.png';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { BsBellFill } from 'react-icons/bs';

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
                    <BiMenuAltLeft />
                </div>

                <div className="navbar-items">
                    <ul className="nav-item">
                        <li className="nav-link grpField">
                            <span className="srchIcn"><FiSearch /></span>
                            <input type="text" className="form-control" placeholder="search" />
                        </li>
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