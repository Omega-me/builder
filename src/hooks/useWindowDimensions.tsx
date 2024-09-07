'use client';

import { getWindowDimensions } from '@/common/lib/utils';
import { RefObject, useEffect, useState } from 'react';

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

export const useClickOutsideElement = <T extends HTMLElement = HTMLElement>(ref: RefObject<MouseEvent>, handler: (e: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || (el as any).contains(event.target as Node) || null) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
