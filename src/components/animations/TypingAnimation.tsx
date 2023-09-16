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
    }, 75);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <div className="text-[45px] font-medium">
      {animatedText}
    </div>
  );
};

export default TypingAnimation;
