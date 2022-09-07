import { useCallback, useEffect, useRef } from 'react';

export const useInfiniteScroll = (onIntersect, options) => {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [handleIntersect, ref, options]);

  return ref;
};
