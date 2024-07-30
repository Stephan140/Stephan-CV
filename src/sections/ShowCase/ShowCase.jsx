import styles from './ShowCaseStyle.module.css';
import iornman1 from '../../assets/iornman-1.jpg';
import iornman2 from '../../assets/iornman-4.jpg';
import iornman3 from '../../assets/iornman-5.jpg';
import photo1 from '../../assets/DJI_0169.jpg';
import photo2 from '../../assets/Jool-25.jpg';
import photo3 from '../../assets/Jool-3161.jpg';
import photo4 from '../../assets/Jool-3858.jpg';
import photo5 from '../../assets/vk-1526.jpg';
import photo6 from '../../assets/vk-1528.jpg';
import photo7 from '../../assets/vk-1530.jpg';
import ShowCasePhoto from '../../common/ShowCasePhoto';



function ShowCase() {
    return (
      <section id="projects" className={styles.container}>
        <h1 className="container">Show Case  </h1>
        <br />
        <p className={styles.description}>
         These are some of my life experience and photography work.
        </p>
        <hr />
        
        <h1 className="showcase-grid">Iron Man </h1>
        <hr  />
        <div className={styles.container2}>
          <ShowCasePhoto src={iornman1} className="showcase-photo"/>
          <ShowCasePhoto src={iornman3} className="showcase-photo"/>
          <ShowCasePhoto src={iornman2} className="showcase-photo"/>
          
        </div>
        <hr  />
  
        <h1 className="showcase-grid">Other Projects</h1>
       
        <hr  />
        <div className={styles.container2}>
          
          <ShowCasePhoto src={photo2} className="showcase-photo"/>
          <ShowCasePhoto src={photo3} className="showcase-photo"/>
          <ShowCasePhoto src={photo4} className="showcase-photo"/>
        </div>
        <hr />
  
        <h1 className="showcase-grid">Recent Works</h1>
        <hr  />
        <div className={styles.container2}>
          <ShowCasePhoto src={photo1} className="showcase-photo"/>
          <ShowCasePhoto src={photo5} className="showcase-photo"/>
          <ShowCasePhoto src={photo6} className="showcase-photo"/>
          <ShowCasePhoto src={photo7} className="showcase-photo"/>
        </div>
      </section>
    );
  }
  
  export default ShowCase;