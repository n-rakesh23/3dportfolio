import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import PortfolioModel from "./components/PortfolioModel";

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
        <p>
          React, Node.js, Express, Spring Boot, Three.js, GLSL, MongoDB, PostgreSQL, Docker, AWS, REST APIs, Microservices
        </p>
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
