import React from "react";
import { heroItem } from "@/data/static-data";
import Link from "next/link";
import styles from "./hero.module.css";
import CodeEditor from "./CodeEditor"; // Import the client component

// Define the project interface
interface CodeProject {
  id: number;
  title: string;
  tech: string;
  code: string;
  language: string;
  description: string;
}

// Static data - this stays on the server
const projects: CodeProject[] = [
  {
    id: 1,
    title: "AI-Generated Community",
    tech: "Next.js • MongoDB • DALL·E API",
    language: "javascript",
    description: "Generate AI images with DALL·E",
    code: `// AI Image Generation with DALL·E
const generateImage = async (prompt) => {
  const response = await fetch('/api/generate', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
  });
  
  const { imageUrl } = await response.json();
  return imageUrl;
};

// Usage
const image = await generateImage(
  "A futuristic city at sunset"
);`,
  },
  {
    id: 2,
    title: "Chatter",
    tech: "MERN Stack • Socket.io • Tailwind",
    language: "javascript",
    description: "Real-time messaging with Socket.io",
    code: `// Real-time Chat Implementation
io.on('connection', (socket) => {
  socket.on('message', (data) => {
    // Broadcast to all users
    io.emit('newMessage', {
      user: data.user,
      text: data.text,
      timestamp: new Date()
    });
  });
  
  socket.on('typing', (user) => {
    socket.broadcast.emit('userTyping', user);
  });
});`,
  },
  {
    id: 3,
    title: "Restaurant Reservation App",
    tech: "React • Firebase • Realtime Sync",
    language: "javascript",
    description: "Real-time reservation system",
    code: `// Firebase Realtime Reservations
const bookTable = async (reservation) => {
  const ref = db.ref('reservations');
  
  await ref.push({
    name: reservation.name,
    date: reservation.date,
    guests: reservation.guests,
    status: 'confirmed',
    timestamp: Date.now()
  });
  
  return { success: true };
};`,
  },
];

// Server Component - renders on the server
const Hero = () => {
  return (
    <section className={styles.container} style={{ paddingTop: '8rem' }}>
      {/* Interactive Code Editor - Client Component */}
      <CodeEditor projects={projects} />

      {/* Static Hero Text - Server Rendered (SEO friendly) */}
      <div className={styles.desc}>
        <h1
          style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}
        >
          Building AI-driven & Scalable Web Applications
        </h1>

        <p
          style={{ 
            fontSize: '1.3rem', 
            marginBottom: '1rem',
            color: 'var(--softTextColor)',
            lineHeight: '1.6',
          }}
        >
          Full Stack Developer (AI/ML) with hands-on experience building
          production-grade applications at <b>ZenteIQ</b> and for freelance
          clients worldwide.
        </p>
      </div>

      {/* Static CTA Buttons - Server Rendered */}
      <div className={styles.connect}>
        <Link
          target="_blank"
          className={styles.btnSecondary}
          href={heroItem.cv.url}
        >
          {heroItem.cv.title}
        </Link>
         <Link className={styles.btnPrimary} href={heroItem.contact.url}>
          {heroItem.contact.title}
        </Link>
      </div>
    </section>
  );
};

export default Hero;