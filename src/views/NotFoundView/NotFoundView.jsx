import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from './NotFoundView.module.css'

export default function NotFound() {
     return (
     <>
          <Helmet>
               <title>404 | Sarah Borgelt</title>
               <meta
                    name="description"
                    content="The page you requested could not be found."
               />
          </Helmet>
          <div className={styles.NotFoundPage}>
               <h1>404 - Page Not Found</h1>
               <br></br>
               <p>Sorry, we couldn't find that page.</p>
               <Link to="/" className={styles.buttonName}>
                    <button className={styles.button}>Return Home</button>
               </Link>
               </div>
     </>
     );
}