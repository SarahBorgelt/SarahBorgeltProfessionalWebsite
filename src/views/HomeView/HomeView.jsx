import styles from './HomeView.module.css';
import ProfessionalHeadershot from '../../assets/ProfessionalHeadshot.png'
import { Helmet } from "react-helmet-async";

export default function HomeView() {

     return (
          <>
          <Helmet>
                    <title>
                         Sarah Borgelt | Software Engineer and Data Engineer
                    </title>
                    <meta
                         name="description"
                         content="Sarah Borgelt is a Software Engineer who specializes in Java, JavaScript, SQL, and React."
                    />
                    <meta
                    property="og:title"
                    content="Sarah Borgelt | Data Engineer | Software Engineer"
                    />

                    <meta
                         property="og:description"
                         content="Connect with Sarah Borgelt to discuss projects, opportunities, or collaborations in software and data engineering."
                    />


                    <meta property="og:type" content="website" />

                    <meta
                         property="og:url"
                         content="https://sarahborgelt.com/"
                    />
                    <meta property="og:image" content="https://sarahborgelt.com/ProfessionalHeadshot" />
                    <link
                         rel="canonical"
                         href="https://sarahborgelt.com/"
                    />
                    <script type="application/ld+json">
                         {JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "Person",
                              "name": "Sarah Borgelt",
                              "url": "https://sarahborgelt.com", // replace with purchased domain if different
                              "jobTitle": "Software Engineer & Data Engineer",
                              "description":
                                   "Software Engineer and Data Engineer specializing in Java, JavaScript, React, SQL, ETL pipelines, HTML, CSS, and modern web development.",
                              "image": "https://sarahborgelt.com/ProfessionalHeadshot", 
                              "sameAs": [
                                   "https://about.me/sarahborgelt",
                                   "https://www.crunchbase.com/person/sarah-borgelt-f843",
                                   "https://www.f6s.com/member/sarah-borgelt#about",
                                   "https://linktr.ee/sarahborgelt",
                                   "https://medium.com/@borgelt.sarah",
                                   "https://github.com/SarahBorgelt?tab=repositories",
                                   "https://www.instagram.com/borgelts97/",
                                   "https://www.linkedin.com/in/sarahborgelt",
                                   "https://www.pinterest.com/sarahn0297",
                                   "https://www.youtube.com/@sarahborgelt8600",
                                   "https://www.facebook.com/sarah.borgelt.5/",
                                   "https://lnk.bio/sarahborgelt",
                                   "https://penwellfuneralhome.com/obituaries/rhonda-k-steele-borgelt/",
                                   "https://pubmed.ncbi.nlm.nih.gov/35988298/",
                                   "https://www.legacy.com/us/obituaries/sdgnewsgroup/name/rhonda-borgelt-obituary?id=57393902",
                                   "https://www.flickr.com/photos/164237504@N07/",
                                   "https://penwellfuneralhome.com/obituaries/james-b-borgelt/",
                                   "https://dev.to/sarah_borgelt_cd2e3100391"
                              ]
                         })}
                    </script>
          </Helmet>
          <div className={styles.aboutMe}>
               <img src={ProfessionalHeadershot} alt="Professional Header Shot" className={styles.profileImage} />
               <div className={styles.intro}>
               <h1 className={styles.name}>Sarah Borgelt</h1>
               <div className={styles.description}>
                    <p>
                         Sarah Borgelt is a software engineer with a passion for creating innovative 
                         solutions and building user-friendly applications. She enjoys working 
                         with modern web technologies and continuously learning new skills to 
                         enhance her expertise. Her current tech stack includes Java (Spring Boot), JavaScript,
                         HTML, CSS, SQL (PostgreSQL, SQL Server), React, and SQL Server Integration Services (SSIS). 
                         She is familiar with tools such as pgadmin, SQL Server Management Studio, Visual Studio,
                         and Visual Studio Code. She is also experienced in using Git for version control and collaboration.
                    </p>
                    <br></br>
                    <p>
                         She is an avid learner and enjoys exploring new technologies and frameworks. 
                         She is also a strong advocate for clean code practices, code reviews, and 
                         collaborative development. She believes in the power of teamwork and strives to 
                         contribute positively to any project she is a part of. If you are interested in
                         collaborating on a project or learning more about her work, please feel free to reach out!
                    </p>
               </div>
               </div>
          </div>
          </>
     )
}