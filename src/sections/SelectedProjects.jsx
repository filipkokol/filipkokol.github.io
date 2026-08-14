import './SelectedProjects.scss';

import PapertigerImg from '../assets/img/thumbs/papertiger.png';
import BusbusImg from '../assets/img/thumbs/busbus.png';
import SkratekImg from '../assets/img/thumbs/skratek.png';
import KnjizarnaImg from '../assets/img/thumbs/knjizarna.png';
import ProjectCard from '../components/ProjectCard';

const SelectedProjects = () => {
  const projects = [
    {
      title: 'Paper Tiger',
      desc: 'A study in GSAP web animations based on an award-winning website',
      tags: ['GSAP', 'case study'],
      img: PapertigerImg,
    },
    {
      title: 'Busbus',
      desc: "Ljubljana's bus arrival search and vehicle tracker with an ability to rate drivers",
      tags: ['Vue.js', 'NodeJS', 'MongoDB'],
      img: BusbusImg,
    },
    {
      title: 'Škratek',
      desc: 'A minimalistic web game inspired by "doodle jump"',
      tags: ['javascript', 'p5.js'],
      img: SkratekImg,
    },
    {
      title: 'Knjižarna',
      desc: 'A text library I made for sharing lesson material in my school',
      tags: ['NodeJS', 'MongoDB', 'Raspberry Pi'],
      img: KnjizarnaImg,
    },
  ];

  return (
    <section id="selected-projects">
      <div className="container">
        <h1>Selected projects</h1>

        <div className="carousel">
          {projects.map((proj) => (
            <ProjectCard {...proj} key={proj.title} />
          ))}
        </div>

        <p className="projects-text">
          For years I've been building passion projects, from simple <span className="underlined">games</span> and
          tools, case studies of awarded website designs to more advanced{' '}
          <span className="underlined">fullstack apps</span>.
        </p>
      </div>
    </section>
  );
};

export default SelectedProjects;
