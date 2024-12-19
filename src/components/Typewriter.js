import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const strings = [
    'Full Stack Developer',
    'Mobile App Developer',
    'Frontend Developer',
    'Graphic Designer',
    'Backend Developer',
    'Freelancer',
    'Data Analyst',
    'Template Designer'
    'Devops Engineer'
  ];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentString === strings[currentStringIndex]) {
        setTimeout(() => {
          setIsTyping(false);
        }, 400); // Pause before erasing
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(strings[currentStringIndex].slice(0, currentString.length + 1));
        }, 70); // Typing speed

        return () => clearTimeout(timeout);
      }
    } else {
      if (currentString === '') {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(currentString.slice(0, currentString.length - 1));
        }, 50); // Erasing speed

        return () => clearTimeout(timeout);
      }
    }
  }, [currentString, currentStringIndex, isTyping]);

  return (
    <span className="font-medium text-[#ec6e59] text-[1.5rem] sm:text-[2rem]">
      {currentString}
    </span>
  );
};

export default Typewriter;
