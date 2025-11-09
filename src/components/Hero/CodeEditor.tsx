// CodeEditor.tsx (Client Component - HAS "use client")

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Copy, Check } from "lucide-react";
import styles from "./hero.module.css";

// Interface for project type
interface CodeProject {
  id: number;
  title: string;
  tech: string;
  code: string;
  language: string;
  description: string;
}

// Props interface
interface CodeEditorProps {
  projects: CodeProject[];
}

// Client Component with all interactive features
const CodeEditor: React.FC<CodeEditorProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editedCode, setEditedCode] = useState(projects[0].code);
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState("");

  // Auto-rotate carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    
    return () => {
      clearInterval(timer);
    };
  }, [projects.length]);

  // Update code when project changes
  useEffect(() => {
    if (projects[currentIndex]) {
      setEditedCode(projects[currentIndex].code);
      setOutput("");
    }
  }, [currentIndex, projects]);

  // Copy code to clipboard
  const handleCopy = () => {
    if (navigator.clipboard && editedCode) {
      navigator.clipboard.writeText(editedCode)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Copy failed:', err);
        });
    }
  };

  // Run code (demo)
  const handleRun = () => {
    setOutput("✓ Code executed successfully!\n\nThis is a demo preview. In production, this would connect to actual APIs and databases.");
  };

  const currentProject = projects[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ width: '100%', maxWidth: '900px' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: 'var(--softBg)',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            border: '2px solid var(--softTextColor)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* ===== EDITOR HEADER ===== */}
          <div
            style={{
              backgroundColor: 'rgba(var(--bg-rgb), 0.8)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--softTextColor)',
            }}
          >
            {/* Mac-style dots & filename */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
              </div>
              <span style={{ color: 'var(--softTextColor)', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                {currentProject.title}.js
              </span>
            </div>

            {/* Copy & Run buttons */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleCopy}
                style={{
                  padding: '0.5rem',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--softTextColor)',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--text-color)',
                }}
                title="Copy code"
                aria-label="Copy code"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
              <button
                onClick={handleRun}
                className={styles.btnPrimary}
                style={{
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '4px 4px 0 -1px var(--softTextColor)',
                }}
                title="Run code"
                aria-label="Run code"
              >
                <Play size={16} />
                Run
              </button>
            </div>
          </div>

          {/* ===== CODE EDITOR TEXTAREA ===== */}
          <div style={{ padding: '1.5rem' }}>
            <textarea
              value={editedCode}
              onChange={(e) => setEditedCode(e.target.value)}
              style={{
                width: '100%',
                height: '300px',
                backgroundColor: 'var(--bg)',
                color: 'var(--text-color)',
                fontFamily: 'monospace',
                fontSize: '0.95rem',
                padding: '1rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--softTextColor)',
                outline: 'none',
                resize: 'none',
                lineHeight: '1.6',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              className="no-scrollbar"
              spellCheck={false}
              aria-label="Code editor"
            />
          </div>

          {/* ===== OUTPUT SECTION ===== */}
          {output && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                borderTop: '1px solid var(--softTextColor)',
                backgroundColor: 'var(--softBg)',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                <span style={{ color: 'var(--softTextColor)', fontSize: '0.9rem', fontFamily: 'monospace' }}>Output</span>
              </div>
              <pre style={{ 
                color: '#22c55e', 
                fontFamily: 'monospace', 
                fontSize: '0.9rem', 
                whiteSpace: 'pre-wrap',
                margin: 0,
              }}>
                {output}
              </pre>
            </motion.div>
          )}

          {/* ===== TECH STACK BADGE ===== */}
          <div style={{ padding: '0 1.5rem 1.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--softBg)',
                border: '1px solid var(--softTextColor)',
                borderRadius: '2rem',
              }}
            >
              <span style={{ color: 'var(--text-color)', fontSize: '0.9rem', fontWeight: '500' }}>
                {currentProject.tech}
              </span>
            </div>
          </div>

          {/* ===== PROJECT DESCRIPTION ===== */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              fontSize: '1.1rem', 
              padding: '0 1.5rem 1.5rem',
              margin: 0,
              color: 'var(--softTextColor)',
              fontStyle: 'italic',
            }}
          >
            {currentProject.description} - Try editing the code above!
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* ===== PROJECT NAVIGATION DOTS ===== */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              height: '8px',
              width: index === currentIndex ? '32px' : '8px',
              borderRadius: '4px',
              backgroundColor: index === currentIndex ? 'var(--text-color)' : 'var(--softTextColor)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CodeEditor;