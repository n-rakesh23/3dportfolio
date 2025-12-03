import React, { useRef, useEffect } from "react";
import { TextureLoader } from "three";

function PortfolioModel() {
  const globeRef = useRef();

  useEffect(() => {
    let frameId;
    const animate = () => {
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.01;
        globeRef.current.rotation.x += 0.002;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Load texture correctly from public folder
  const earthTexture = new TextureLoader().load("/textures/earth.jpg");

  return (
    <mesh ref={globeRef} castShadow receiveShadow>
      <sphereGeometry args={[0.9, 64, 64]} />
      <meshStandardMaterial
        map={earthTexture}
        metalness={0.6}
        roughness={0.25}
      />
    </mesh>
  );
}

export default PortfolioModel;
