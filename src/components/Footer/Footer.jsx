import styles from './Footer.module.css';
import {useNavigate} from 'react-router-dom';

export default function Footer() {
     const navigate = useNavigate();

     const navigateToContact = () => {
          navigate('/contact');
     }

     return (
          <>
               <div className={styles.mainFooterSection}>
                    <h1 className={styles.footerHeading}>
                         Are you interested in collaborating with me?
                    </h1>
                    <p className={`${styles.footerText} ${styles.italics}`}>
                         If so, please click on the button below to access my contact page and send me a message. I would love to hear from you!
                    </p>
                    <button className={styles.contactButton} onClick={navigateToContact}>
                         Contact Me
                    </button>
               </div>
               <p className={styles.copyright}>
                    © 2026 Sarah Borgelt. All rights reserved.
               </p>
          </>
     )
}