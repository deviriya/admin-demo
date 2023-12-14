
import { Link, useLocation } from 'react-router-dom'
import './style.scss';
import courses from '../assets/courses.png';
import dashboard from '../assets/dashboard.png';
import calendar from '../assets/calendar.png';


export const Sidebar = () => {

    const location = useLocation();

    return (
        <div className="sidebar">
            <ul className='side-item'>
                <li className={`side-link ${location.pathname == "/courses" && "active"}`}>
                    <Link to='/' className='m-0'>
                        <img src={courses} width={140} className="sidebaricon" />
                        <div className="sidebar-name">Courses</div>
                    </Link>
                </li>
                <li className={`side-link ${location.pathname == "/dashboard" && "active"}`}>
                    <Link to='/dashboard' className='m-0'>
                        <img src={dashboard} width={140} className="sidebaricon" />
                        <div className="sidebar-name">Dashboard</div>
                    </Link>
                </li>
                <li className={`side-link ${location.pathname == "/calendar" && "active"}`}>
                    <Link to='/calendar' className='m-0'>
                        <img src={calendar} width={140} className="sidebaricon" />
                        <div className="sidebar-name">Calendar</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}