import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const Competences = () => {
  return (
    <div className="skills-page">
      <div className="title-page">
        <h1 className="title-page__skills">Compétences</h1>
      </div>
      <div className="competences">
        <div className="skills">
          <h1 className="skills-title">Front-End Skills</h1>
          <ProgressBar title="HTML" value="100" />
          <ProgressBar title="CSS" value="95" />
          <ProgressBar title="JavaScript" value="75" />
          <ProgressBar title="ReactJS" value="65" />
        </div>
        <div className="skills">
          <h1 className="skills-title">Back-End Skills</h1>
          <ProgressBar title="NodeJS" value="30" />
          <ProgressBar title="ExpressJS" value="30" />
          <ProgressBar title="MongoDB" value="30" />
        </div>
      </div>
    </div>
  );
};

export default Competences;
