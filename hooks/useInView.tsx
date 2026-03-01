import { useState, useEffect, useRef, type RefObject } from 'react';

/**
 * Lightweight IntersectionObserver hook.
 * Returns [ref, isInView] — isInView is true when the element is
 * within `margin` pixels of the viewport.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  margin = '200px'
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return [ref, isInView];
}
