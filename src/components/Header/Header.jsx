import styles from './Header.module.css';
import Logo from '../../assets/Logo.png';

export default function Header() {


     return (
          <>
               <img className={styles.logo} src={Logo} alt="Logo" />
          </>
     )
}