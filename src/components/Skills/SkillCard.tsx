"use client"
import { useState } from "react";
import styles from "./skills.module.css";

interface SkillCardProps {
  skill: {
    title: string;
    proficiency?: number;
    experience?: string;
  };
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const playTechBeep = (index: number) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    const frequencies = [
      800, 900, 1000, 1100, 1200, 1300, 1400, 1500,
      1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300,
      2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100
    ];
    
    const noteIndex = index % frequencies.length;
    oscillator.frequency.value = frequencies[noteIndex];
    oscillator.type = 'sine';
    
    const currentTime = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, currentTime);
    gainNode.gain.linearRampToValueAtTime(0.08, currentTime + 0.005);
    gainNode.gain.linearRampToValueAtTime(0.04, currentTime + 0.02);
    gainNode.gain.linearRampToValueAtTime(0, currentTime + 0.08);
    
    oscillator.start(currentTime);
    oscillator.stop(currentTime + 0.08);
  };

  const handleClick = () => {
    playTechBeep(index);
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.skillWrapper} onClick={handleClick}>
      <div className={`${styles.skillCard} ${isFlipped ? styles.flipped : ""}`}>
        {/* Front of card */}
        <div className={styles.skillFront}>
          {skill.title}
        </div>
        
        {/* Back of card */}
        <div className={styles.skillBack}>
          <div className={styles.backContent}>
            <div className={styles.proficiencyLabel}>Proficiency</div>
            <div className={styles.proficiencyBar}>
              <div 
                className={styles.proficiencyFill}
                style={{ 
                  width: `${skill.proficiency || 75 + (index * 3) % 25}%` 
                }}
              ></div>
            </div>
            <div className={styles.experience}>
              {skill.experience || `${1 + (index % 5)}+ years`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;