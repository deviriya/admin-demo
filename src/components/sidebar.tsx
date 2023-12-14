
import { Link, useLocation } from 'react-router-dom'
import { BsGrid, BsCurrencyDollar } from 'react-icons/bs';
import { IoMdWallet } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { BiSolidUser } from "react-icons/bi";
import { MdContacts } from 'react-icons/md';
import './style.scss';


export const Sidebar = () => {

    const location = useLocation();

    return (
        <div className="sidebar">
            <ul className='side-item'>
                <li className={`side-link ${location.pathname == "/dashboard" && "active"}`}>
                    <Link to='/' className='m-0'><BsGrid /> Dashboard</Link>
                </li>
                <li className={`side-link ${location.pathname == "/accounts" && "active"}`}>
                    <Link to='/accounts' className='m-0'><IoMdWallet /> Accounts</Link>
                </li>
                <li className={`side-link ${location.pathname == "/payroll" && "active"}`}>
                    <Link to='/payroll' className='m-0'><BsCurrencyDollar /> Payroll</Link>
                </li>
                <li className={`side-link ${location.pathname == "/reports" && "active"}`}>
                    <Link to='/reports' className='m-0'><AiFillFileText /> Reports</Link>
                </li>
                <li className={`side-link ${location.pathname == "/advisor" && "active"}`}>
                    <Link to='/advisor' className='m-0'><BiSolidUser /> Advisor</Link>
                </li>
                <li className={`side-link ${location.pathname == "/contacts" && "active"}`}>
                    <Link to='/contacts' className='m-0'><MdContacts /> Contacts</Link>
                </li>
            </ul>
        </div>
    )
}