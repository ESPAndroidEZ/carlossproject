import React, { Component } from 'react';
import './App.css';
import snimkaImg from './snimka.jpg';
import Footer from './footer.js';
import CyberS from './cyber.jpg'; 
import Progr from './prog.jpg'; 
import Networking from './network.jpg'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: false,
      displayProgr: false,
      displayNetworking: false
    };
    this.readMore = this.readMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  readMore(skill) {
    this.setState({ [skill]: true });
  }

  showLess(skill) {
    this.setState({ [skill]: false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#skills">Technical skills</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <section id="home">
            <img src={snimkaImg} className="App-logo1" alt="logo" />
          </section>
          <p className="text1">Welcome to my portfolio page</p>
          <a className="App-link" href="https://www.linkedin.com/in/carlos-georgiev/" target="_blank" rel="noopener noreferrer">
            Click here to check my LinkedIn profile
          </a>
        </header>
        <section id="skills" className="section">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skill1">
              <img src={CyberS} alt='skills' />
              <div className="buttons">
                {this.state.displayBio ? (
                  <div>
                    <p> As a third-year student specializing in cybersecurity, I am constantly learning about the latest methods and technologies used to protect sensitive information and systems. Though I am still a student, my growing understanding of cybersecurity best practices, threat detection, and system protection could be invaluable to any company. With my commitment to ongoing learning in this rapidly evolving field, I aim to be an asset in not just dealing with current threats, but also anticipating future cybersecurity challenges.

                    </p>
                    <button onClick={() => this.showLess('displayBio')}>Show less</button>
                  </div>
                ) : (
                  <div>
                    <p> Cybersecurity</p>
                    <button onClick={() => this.readMore('displayBio')}>Read more</button>
                  </div>
                )}
              </div>
            </div>
            <div className="skill2">
              <img src={Progr} alt='skills' />
              <div className="buttons">
                {this.state.displayProgr ? (
                  <div>
                    <p className='paragraph'> I developed a strong understanding of various programming languages such
                     as C++, Python, SQL and currently learning more about Javascript and it's framework - React by myself. I bring a problem-solving mindset to programming tasks, allowing me to develop effective and efficient software solutions. While my experience might be considered basic 
                    at this stage, it also means that I am adaptable and eager to learn - traits that can make a significant contribution to a dynamic and innovative tech team.</p>
                    <button onClick={() => this.showLess('displayProgr')}>Show less</button>
                  </div>
                ) : (
                  <div>
                    <p> Programming</p>
                    <button onClick={() => this.readMore('displayProgr')}>Read more</button>
                  </div>
                )}
              </div>
            </div>
            <div className="skill3">
              <img src={Networking} alt='skills' />
              <div className="buttons">
                {this.state.displayNetworking ? (
                  <div>
                    <p className='paragraph' >  My studies have given me a strong foundational understanding of network architectures, protocols, and management strategies. 
                    While I'm still building my expertise, 
                    I'm able to assist in the maintenance and optimization of a company's network infrastructure. I also strive to achieve one day the CCNA certificate.</p>
                    <button onClick={() => this.showLess('displayNetworking')}>Show less</button>
                  </div>
                ) : (
                  <div>
                    <p className='paragraph'> Networking</p>
                    <button onClick={() => this.readMore('displayNetworking')}>Read more</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <p className='abouttext'> 
            I'm Carlos, a 21-year-old Cybersecurity student from the Naval Academy in Varna, 
            with professional experience in various roles. Born in Spain, 
            I'm trilingual in Spanish, English, and Bulgarian.
             My love for chess and automotive manufacturing has strengthened my strategic thinking and attention 
             to detail. My academic training in Cybersecurity, Programming, and Networking fuels my 
             commitment to explore and secure the digital realm. With work experience in Pontica Solutions, 
             Sutherland Global Services, and DXC Technology, I bring pragmatic problem-solving skills, 
             adaptability, and ambition to my roles. I'm looking for to take on tech industry challenges and contribute to a team with my unique blend of skills and passions.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;

