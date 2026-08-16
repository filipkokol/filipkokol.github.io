const About = () => {
  return (
    <section id="about-me">
      <div className="container">
        <div className="cover-img">{/* <img src={meImg} alt="" /> */}</div>

        <h1>404.</h1>
        <div className="text-container">
          <div className="description">
            <p>
              I messed this one up.
              <br />
              Sorry...
            </p>
          </div>

          <div className="tags">
            <div className="tag">CV</div>
            <a href="https://github.com/vodnibivol">
              <div className="tag">Github</div>
            </a>
            <div className="tag">LinkedIn</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
