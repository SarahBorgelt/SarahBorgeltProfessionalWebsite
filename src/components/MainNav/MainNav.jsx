import { Link, NavLink } from 'react-router-dom';
import styles from './MainNav.module.css';

export default function MainNav() {

     return (
          <aside className={styles.sidebar}>
               <nav className={styles.nav}>

                    <NavLink 
                         to="/"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Home
                    </NavLink>
                    <NavLink 
                         to="/aboutme"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         About Me
                    </NavLink>
                    <NavLink 
                         to="/career"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Career
                    </NavLink>
                    <NavLink 
                         to="/philanthropy"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Philanthropy
                    </NavLink>
                    <NavLink 
                         to="/contact"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Contact
                    </NavLink>
               </nav>
          </aside>
     )
}