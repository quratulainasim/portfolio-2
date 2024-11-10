import React from "react";
import "../../styles/projects.css";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";

function Projects() {
  return (
    

      <div className="main-content">
        <div className="project-title">
          <h1>My Projects</h1>
        </div>
        <p className="project-description">
          I have developed a range of projects showcasing my frontend skills
          including a responsive e-commerce website with Next.js and Tailwind
          CSS a custom CSS company website and a dynamic resume builder using
          React and TypeScript with HTML CSS and JavaScript. These projects
          highlight my abilities in creating engaging high-performance
          interfaces and my dedication to delivering a seamless user experience.
        </p>

        <div className="projects-container">

        <div className="project-card">
        <a href="https://final-html-css-web.vercel.app/">
          <Image src="/comapny.png" alt="Company Project Image" width={500} height={500} />
        </a>
        <div className="project-details">
          <p>Html CSS React</p>
          <p>Project <a href="https://final-html-css-web.vercel.app/">View</a></p>
        </div>
      </div>

      <div className="project-card">
      <a href="https://hack-milestone-4.vercel.app/">
        <Image src="/resume.png" alt="Resume Project Image" width={500} height={500} /> 
      </a>
      <div className="project-details">
        <p>Html CSS React JavaScript</p>
        <p>Project <a href="https://hack-milestone-4.vercel.app/">View</a></p>
      </div>
    </div>

    <div className="project-card">
      <a href="https://bk-shop-1-website.vercel.app/">
        <Image src="/ecom-t.png" alt="E-commerce Project Image" width={500} height={500} />
      </a>
      <div className="project-details">
        <p>Tailwind CSS React Next.js</p>
        <p>Project <a href="https://bk-shop-1-website.vercel.app/">View</a></p>
      </div>
    </div>
    </div>

    <div className="projects-container">
    <div className="project-card">
        <a href="https://new-website-olive-psi.vercel.app/">
          <Image src="/organicfood.png" alt="Image" width={500} height={500} />
        </a>
        <div className="project-details">
          <p>Html CSS React</p>
          <p>Project <a href="https://new-website-olive-psi.vercel.app/">View</a></p>
        </div>
      </div>

      <div className="project-card">
      <a href="https://book-shop-2-five.vercel.app/">
        <Image src="/ecomcss.png" alt="Image" width={500} height={500} /> 
      </a>
      <div className="project-details">
        <p>Html CSS React JavaScript</p>
        <p>Project <a href="https://book-shop-2-five.vercel.app/">View</a></p>
      </div>
    </div>

    <div className="project-card">
    <a href="https://github.com/quratulainasim?tab=repositories">
      <Image src="/NPM.webp" alt="Image" width={500} height={500} /> 
    </a>
    <div className="project-details">
      <p>Html CSS React JavaScript</p>
      <p>Project <a href="https://github.com/quratulainasim?tab=repositories">View</a></p>
    </div>
  </div>
    </div>
      
      </div>

      
  );
}

export default Projects;
