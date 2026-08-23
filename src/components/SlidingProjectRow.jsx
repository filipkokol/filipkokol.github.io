import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import projectImages from '../data/projectImages';

const SlidingProjectRow = ({ projectArr, reverse }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const halfWidth = row.scrollWidth / 2;
    let x = 0;
    let frameId;
    const speed = reverse ? 0.5 : -0.5;

    const tick = () => {
      x += speed;
      if (x <= -halfWidth) x = 0;
      if (x >= 0 && speed > 0) x = -halfWidth;
      row.style.transform = `translate3d(${x}px, 0, 0)`;
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [reverse]);

  return (
    <div className="project-row" ref={rowRef}>
      {projectArr.map((proj, i) => {
        const imgSmall = projectImages[proj.slug].sm;

        return (
          <Link to={`/project/${proj.slug}`} key={i}>
            <div className="project-thumb" style={{ backgroundColor: proj.color }}>
              <img src={imgSmall} alt={proj.title} loading="eager" decoding="sync" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SlidingProjectRow;
