import { useState, useEffect, useMemo } from "react";

const RandomFontText = ({ text }) => {
  const fonts = useMemo(
    () => [
      "font-cabin",
      "font-caveat",
      "font-tangerine",
      "font-play",
      "font-noto",
      "font-funnel",
      "font-barrio",
      "font-flower",
    ],
    []
  ); // Add more fonts here
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  useEffect(() => {
    let fontCycle = [...fonts];
    let cycleIndex = 0;

    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    fontCycle = shuffle(fontCycle);

    const interval = setInterval(() => {
      setCurrentFont(fontCycle[cycleIndex]);
      cycleIndex++;
      if (cycleIndex >= fontCycle.length) {
        fontCycle = shuffle([...fonts]);
        cycleIndex = 0;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fonts]);

  return <div className={`${currentFont}`}>{text}</div>;
};

export default RandomFontText;
