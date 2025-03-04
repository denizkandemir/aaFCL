import { useEffect } from 'react';
import "./Animation.scss"
import { useParams } from 'react-router-dom';

const withFadeInOnScroll = (selector = '.fade-in, .fade-in-left, .fade-in-right') => {
  const { routeId } = useParams();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length > 0) {
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
          threshold: 0.25,
        }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }
  }, [selector, routeId]);

};

export default withFadeInOnScroll;
