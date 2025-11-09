import { skillsItem } from "@/data/static-data";
import styles from "./skills.module.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>My Skills</h1>

        <div className={styles.skills}>
          {skillsItem &&
            skillsItem.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;