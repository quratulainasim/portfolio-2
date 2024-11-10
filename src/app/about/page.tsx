import React from "react";
import "../../styles/about.css";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
function About() {
  return (
    
    <main className="main-content">
  <div className="about-title">
    <h1>About Me</h1>
  </div>
    
  <section className="about-section">
  <div className="about-text">
    <p>
      I am Qurat ul Ain a frontend developer with a unique background
      in science and management. Holding an MSc in Analytical Chemistry
      and an EMBA plus six years as an Assistant Manager in Quality
      Control at a multinational company. I have honed strong analytical
      detail-oriented and strategic skills. I am now focused on frontend
      technologies like HTML CSS Next.js TypeScript and React bringing
      precision and creativity to crafting high-performing intuitive
      interfaces. My multidisciplinary experience enables me to bridge
      technical detail with strategic vision and I am eager to contribute
      to impactful tech projects.
    </p>
  </div>
  
  <div className="about-image">
    <Image src="/about.jpg" alt="Image of Qurat ul Ain" width={400} height={400} />
  </div>
</section>

<div className="skills">
<button>HTML</button>
<button>CSS</button>
<button>TypeScript</button>
<button>Next.js</button>
<button>React</button>
<button>Tailwind CSS</button>
</div>
  </main>

  
  );
}

export default About;