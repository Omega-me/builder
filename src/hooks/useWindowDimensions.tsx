'use client';

import { RefObject, useEffect, useState } from 'react';

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const useMediaQuery = ({ query, ref }: { query: (width: number, height: number) => boolean; ref: RefObject<HTMLElement> }) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const updateMatches = () => {
      if (!ref.current) return;
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      setMatches(query(width, height));
    };
    updateMatches();
    const resizeObserver = new ResizeObserver(() => {
      updateMatches();
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        resizeObserver.unobserve(ref.current);
      }
      resizeObserver.disconnect();
    };
  }, [query, ref]);

  return matches;
};
