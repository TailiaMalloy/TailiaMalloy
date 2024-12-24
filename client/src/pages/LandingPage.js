import React, { useEffect, useRef, useState } from 'react';
import '../css/LandingPage.css';
import agentSelectionImage from '../images/agentSelection.webp';
import foundationPhishing from '../images/foundationPhishing.webp';
import marbleJar from '../images/marbleJar.webp';
import cmuImage from '../images/CMU.jpg'
import rpiImage from '../images/RPI.png'
import ibmImage from '../images/IBM.jpg'

function LandingPage() {
  const [bgColor, setBgColor] = useState('rgb(255, 255, 255)'); // White
  const [textColor, setTextColor] = useState('rgb(0, 0, 0)'); // Black
  const [aboutMeHeight, setAboutMeHeight] = useState('0'); // Initial height
  const [aboutFontSize, setAboutFontSize] = useState(64); // Initial height
  const [navbarHeight, setNavBarHeight] = useState('0px'); // Initial height

  const aboutMeRef = useRef(null);

  useEffect(() => {
    let scrollPosition = 0; // Current interpolated scroll position
    let targetScrollPosition = 0; // Actual scroll position from `window.scrollY`
    const scrollSpeed = 0.1; // Adjust this value to control the scroll slowdown (lower = slower)
  
    const updateScrollEffect = () => {
      scrollPosition += (targetScrollPosition - scrollPosition) * scrollSpeed;
  
      // Calculate properties based on the interpolated scroll position
      const maxScroll = window.innerHeight; // First 100vh
      const ratio = Math.min(scrollPosition / maxScroll, 0.8);
      const textVal = 255 * ratio; // goes from 0 up to 255
  
      const newBgColor = `rgba(${ratio}, ${ratio}, ${ratio}, ${ratio})`;
      const newTextColor = `rgb(${textVal}, ${textVal}, ${textVal})`;
      const newFontSize = 64 + 128 * ratio;
      const newHeight = `${ratio * 100}vh`;
      const newNavbarHeight = `${ratio * 100}px`;
  
      // Update state with calculated values
      setBgColor(newBgColor);
      setTextColor(newTextColor);
      setAboutMeHeight(newHeight);
      setAboutFontSize(newFontSize);
      setNavBarHeight(newNavbarHeight)
  
      // Continue the animation loop if not at target
      if (Math.abs(targetScrollPosition - scrollPosition) > 0.1) {
        requestAnimationFrame(updateScrollEffect);
      }
    };
  
    const handleScroll = () => {
      targetScrollPosition = window.scrollY; // Update the target scroll position
      requestAnimationFrame(updateScrollEffect); // Start the animation loop
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="scroll-container">
      {/* Navbar */}
      <header className="navbar"
      style={{
        background: bgColor,
        color: textColor,
        height: navbarHeight,
      }}>
        <div className="navbar-logo">Tailia Malloy, PhD</div>
        <nav>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#talks">Talks</a></li>
            <li><a href="#teaching">Teaching</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#cv">CV</a></li>
          </ul>
        </nav>
      </header>
      <div className="about-me-wrapper" ref={aboutMeRef}>
        <section
          className="about-me-pinned"
          style={{
            background: bgColor,
            color: textColor,
            height: aboutMeHeight,
            opacity: aboutMeHeight === '0' ? 0 : 1,
            fontSize: aboutFontSize,
          }}
        >
          <div className="about-me-overlay">
            <h1 style={{fontSize: aboutFontSize}} >
              Hey,
            </h1>
            <h1 style={{fontSize: aboutFontSize}} >
              I'm Tailia.
            </h1>
          </div>
        </section>
        <section
          className="about-me-bottom"
          style={{
            background: bgColor,
            color: textColor,
            height: aboutMeHeight,
            opacity: aboutMeHeight === '0' ? 0 : 1,
            fontSize: aboutFontSize,
          }}
        ></section>
      </div>

      {/* Additional sections (Projects, Publications, etc.) */}
      <section id="projects" className="content-section">
      <h1>Projects</h1>
      <div className="image-grid">
        <a href="/projects/agentSelection" className="image-link">
          <img src={agentSelectionImage} alt="Agent Selection" />
          <h2>Agent Selection</h2>
        </a>
        <a href="/projects/foundationPhishing" className="image-link">
          <img src={foundationPhishing} alt="Foundation Phishing" />
          <h2>Foundation Phishing</h2>
        </a>
        <a href="/projects/marbleJar" className="image-link">
          <img src={marbleJar} alt="Marble Jar Selection" />
          <h2>Marble Jar Selection</h2>
        </a>
      </div>
    </section>

      <section id="publications" className="content-section">
        <h1>Publications</h1>
        <div className="image-grid">
        <a href="/projects/agentSelection" className="image-link">
          <img src={agentSelectionImage} alt="Agent Selection" />
          <h2>Agent Selection</h2>
        </a>
        <a href="/projects/foundationPhishing" className="image-link">
          <img src={foundationPhishing} alt="Foundation Phishing" />
          <h2>Foundation Phishing</h2>
        </a>
        <a href="/projects/marbleJar" className="image-link">
          <img src={marbleJar} alt="Marble Jar Selection" />
          <h2>Marble Jar Selection</h2>
        </a>
      </div>
      </section>

      <section id="talks" className="content-section">
        <h1>Talks</h1>
        <div className="image-grid">
        <a href="/projects/agentSelection" className="image-link">
          <img src={agentSelectionImage} alt="Agent Selection" />
          <h2>Agent Selection</h2>
        </a>
        <a href="/projects/foundationPhishing" className="image-link">
          <img src={foundationPhishing} alt="Foundation Phishing" />
          <h2>Foundation Phishing</h2>
        </a>
        <a href="/projects/marbleJar" className="image-link">
          <img src={marbleJar} alt="Marble Jar Selection" />
          <h2>Marble Jar Selection</h2>
        </a>
      </div>
      </section>

      <section id="teaching" className="content-section">
        <h1>Teaching</h1>
        <div className="image-grid">
        <a href="/projects/agentSelection" className="image-link">
          <img src={agentSelectionImage} alt="Agent Selection" />
          <h2>Agent Selection</h2>
        </a>
        <a href="/projects/foundationPhishing" className="image-link">
          <img src={foundationPhishing} alt="Foundation Phishing" />
          <h2>Foundation Phishing</h2>
        </a>
        </div>
      </section>

      <section id="blog" className="content-section">
        <h1>Blog</h1>
        <div className="image-grid">
        <a href="/blog/2024" className="image-link">
          <img src={cmuImage} alt="2024" />
          <h2>2024</h2>
        </a>
        <a href="/blog/2023" className="image-link">
          <img src={rpiImage} alt="2023" />
          <h2>2023</h2>
        </a>
        <a href="/blog/2022" className="image-link">
          <img src={ibmImage} alt="2022" />
          <h2>2022</h2>
        </a>
        </div>
      </section>

      <section id="cv" className="content-section">
        <h1>CV</h1>
        <p>Download or view my CV here...</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
