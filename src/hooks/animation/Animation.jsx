import { useEffect } from 'react';
import "./Animation.scss"

const withFadeInOnScroll = (selector = '.fade-in, .fade-in-left, .fade-in-right') => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold:0.25,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);
};

export default withFadeInOnScroll;
