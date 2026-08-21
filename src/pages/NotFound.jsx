import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';

import './NotFound.scss';
import arrowRight from '../assets/img/svgs/arrow-right.svg';

const NotFound = ({ title = 'Not Found.', link = '/', linkText = 'Go Home' }) => {
  usePageTitle('Not Found');

  return (
    <section id="not-found">
      <div className="container">
        <h1>{title}</h1>

        <Link to={link}>
          <button className="btn-outlined">
            <span>{linkText}</span>
            <img src={arrowRight} alt="Right arrow" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
