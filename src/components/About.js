import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am a former healthcare professional turned coder. In my previous role, I loved meeting and caring for people from all walks of life, but found that I was
        constantly craving a bigger challenge. When I was introduced to MATLab at work one day, I gained an immediate appreciation for the scalability
        and endless possibilities that coding offers. I took a leap of faith and decided
        to teach myself programming full-time. Since then, I've learned a multitude of technologies and am committed to always learning. Web development allows me to focus in on details in a way
        I've never been able to do before, while bringing out my creative side.
        My mission is to create visually pleasing and responsive apps that have the
        ability to better people’s lives.
      </p>
    );
    const two = (
      <p>
        I’m currently seeking a software engineering position.
        I’m confident that my past experience combined with my technical skills will allow me
        to make meaningful contributions in my next role.
      </p>
    );
    const three = (
      <p>
        When I’m not coding, you can find me doing yoga, lifting weights at the gym,
        meditating, journaling, or playing video games.
      </p>
    );

    const desc_items = [one, two, three];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
