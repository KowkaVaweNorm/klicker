import { useState, useCallback, useMemo, useEffect } from 'react';
import { debounce } from '../../utils/debounce';

export const useWidthScreen = (delayDebounce = 300): number => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidthScreen(
      Math.min(document.documentElement.clientWidth, window.innerWidth ?? 0),
    );
  }, []);
  const debouncedResize = useMemo(
    () => debounce(handleResize, delayDebounce),
    [delayDebounce, handleResize],
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    return (): void => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [debouncedResize]);
  return widthScreen;
};
