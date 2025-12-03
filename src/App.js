import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import PortfolioModel from "./components/PortfolioModel";
import SkillCard from "./components/SkillCard";

function App() {
  useEffect(() => {
    gsap.to(".header", { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <div>
      <header className="header" style={{ opacity: 0, transform: "translateY(-50px)" }}>
        <h1>Rakesh Nayak - 3D Developer Portfolio</h1>
        <p>
          Full Stack | React | Node.js | Three.js | Java | MongoDB | AWS
        </p>
      </header>
      <section>
        <Canvas style={{ height: "400px" }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PortfolioModel />
          <OrbitControls />
        </Canvas>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>3D Developer Portfolio:</strong> React, Three.js, GSAP, WebGL, GLSL Shaders
          </li>
          <li>
            <strong>E-Commerce App:</strong> React, Node.js, Express, MongoDB, Stripe
          </li>
          <li>
            <strong>Real-Time Chat App:</strong> React, Socket.io, Node.js, Express, MongoDB
          </li>
          <li>
            <strong>SaaS Admin Dashboard:</strong> React, Material-UI, Recharts, REST API
          </li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          {[
            { name: "React", color: "#61dafb" },
            { name: "Node.js", color: "#8cc84b" },
            { name: "Express", color: "#222" },
            { name: "Spring Boot", color: "#6db33f" },
            { name: "Three.js", color: "#000" },
            { name: "GLSL", color: "#7b2ff2" },
            { name: "MongoDB", color: "#47a248" },
            { name: "PostgreSQL", color: "#336791" },
            { name: "Docker", color: "#0db7ed" },
            { name: "AWS", color: "#ff9900" },
            { name: "REST APIs", color: "#e34c26" },
            { name: "Microservices", color: "#f7b731" }
          ].map(skill => (
            <SkillCard key={skill.name} skill={skill.name} color={skill.color} />
          ))}
        </div>
      </section>
      <footer>
        <p>
          Contact: n.rakesh0023@gmail.com | LinkedIn: linkedin.com/in/nrakesh23 | GitHub: github.com/n-rakesh23
        </p>
      </footer>
    </div>
  );
}

export default App;
