import React, { useState, useEffect } from 'react';

interface IProps{
  text: string
}

const TypingAnimation = (props: IProps) => {
  const [animatedText, setAnimatedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex <= props.text.length) {
        setAnimatedText(props.text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <div className="2xl:text-[45px] md:text-[40px] lg:text-[30px] sm:text-[25px] font-medium text-[20px] famiky terminal-font">
      {animatedText}
    </div>
  );
};

export default TypingAnimation;
