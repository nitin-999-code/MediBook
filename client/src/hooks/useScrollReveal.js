import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — fires `isVisible` when the element enters the viewport.
 * @param {Object} options  IntersectionObserver options
 * @param {boolean} once    If true, stays visible once triggered (default: true)
 */
const useScrollReveal = (options = {}, once = true) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return [ref, isVisible];
};

export default useScrollReveal;
