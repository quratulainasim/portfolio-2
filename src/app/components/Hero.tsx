import React from "react";
import "../../styles/hero.css";
import Image from "next/image";

function Hero() {
  return (

  <div className="main">
    <section className="intro-section">
      <div className="text-content">
        <h1 className="title">Qurat ul Ain Frontend Developer</h1>
        <h2 className="subtitle">
          Blending expertise in Analytical science and management to create intuitive high-performing web experiences
        </h2>
      </div>
      <div className="image-container">
        <Image src="/webdeveloper.jpg" alt="Image" className="profile-image" width={350} height={350} />
      </div>
    </section>

    <div className="vision-goals">
      <h2 className="vision-title">My Vision and Goals</h2>
      <p className="vision-text">
        I aim to leverage my skills in analysis management and frontend development to create intelligent, user-focused web applications. Passionate about the potential of AI and robotic technologies, I am especially interested in their applications within healthcare and scientific research. My goal is to develop streamlined, accessible solutions that enhance precision and improve outcomes in these fields.
      </p>
       <div className="image-div">
      <Image src="/mygoal.webp" alt="image" className="goal-image" width={1200} height={200} />
      </div>
    
      </div>
  </div>
  );
}

export default Hero;