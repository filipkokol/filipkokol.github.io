import Hero from '../sections/Hero';
import AboutShort from '../sections/AboutShort';
import SelectedProjects from '../sections/SelectedProjects';
import MoreProjects from '../sections/MoreProjects';
import Toolbox from '../sections/Toolbox';
import Cta from '../sections/Cta';
import usePageTitle from '../assets/hooks/usePageTitle';

const Home = () => {
  usePageTitle('Home');

  return (
    <>
      <Hero />
      <AboutShort />
      <SelectedProjects />
      <MoreProjects />
      <Toolbox />
      <Cta />
    </>
  );
};

export default Home;
