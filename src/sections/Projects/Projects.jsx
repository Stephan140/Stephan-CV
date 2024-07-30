import styles from './ProjectsStyles.module.css';
import FixIT from '../../assets/fixit.jpeg';
import ProjectCard from '../../common/ProjectCard';
import BitWizards from '../../assets/bitwizard.png';
import BitWizards1 from '../../assets/bitwizards.pdf';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={FixIT}
          link="https://github.com/r-swrt-GB/fix-it"
          h3="FixIt"
          p="Mechanic Workshop Management "
        />
        <ProjectCard
          src={BitWizards}
          link={BitWizards1}
          h3="Bit Wizards"
          p="Office management system"
        />
      
      </div>
    </section>
  );
}

export default Projects;
