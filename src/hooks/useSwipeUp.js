import { useRef, useCallback } from 'react';

const SWIPE_THRESHOLD = 80; // px

export default function useSwipeUp(onSwipe) {
  const touchStart = useRef(null);

  const onTouchStart = useCallback((e) => {
    touchStart.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientY;
      if (diff > SWIPE_THRESHOLD) {
        onSwipe();
      }
      touchStart.current = null;
    },
    [onSwipe],
  );

  return { onTouchStart, onTouchEnd };
}
