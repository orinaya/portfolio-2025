"use client";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {TypewriterTypes} from "@/definitions/types";

function TypewriterMotion({text, speed = 100, delay = 0, className}: TypewriterTypes) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (start && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, start]);

  return (
    <>
      <motion.div className={className}>
        {displayedText}
        <motion.span animate={{opacity: [0, 1]}} transition={{repeat: Infinity, duration: 0.5}} />
      </motion.div>
    </>
  );
}

export default TypewriterMotion;
