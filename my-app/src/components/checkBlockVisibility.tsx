import React, { useEffect, useRef } from 'react';

interface VisibilityCheckerProps {
  blockRefs?: React.RefObject<(HTMLDivElement | null)[]>;
  additionalRefs: React.RefObject<(HTMLDivElement | null)[]>;
}

const VisibilityChecker: React.FC<VisibilityCheckerProps> = ({ blockRefs, additionalRefs }) => {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const allRefs = blockRefs?.current ? [...blockRefs.current, ...additionalRefs.current] : additionalRefs.current;

      allRefs.forEach((blockRef, index) => {
        if (blockRef) {
          const blockPosition = blockRef.getBoundingClientRect().top;

          if (blockPosition < windowHeight - 100) {
            blockRef.style.opacity = "1";
            blockRef.style.transform = "translateY(0) translateX(0)";
          } else {
            blockRef.style.opacity = "0";
            const refClass = blockRef.className;
            const subString = "description";
            const subString2 = "service-description"
            if (refClass.includes(subString2) && index%2===1) {
                blockRef.style.transform = "translateX(45vw)"
            } else {
                blockRef.style.transform = refClass.includes(subString)
              ? "translateX(-45vw)"
              : "translateY(5vh)";
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blockRefs, additionalRefs]);

  return null;
};

export default VisibilityChecker;
