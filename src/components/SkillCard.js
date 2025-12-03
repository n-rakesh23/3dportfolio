import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function AnimatedIcosahedron({ color, hovered }) {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });
  return (
    <mesh ref={meshRef} scale={hovered ? 1.15 : 1} castShadow receiveShadow>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color={color || "#0077ff"}
        metalness={0.7}
        roughness={0.2}
        emissive={hovered ? color : "#000"}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
    </mesh>
  );
}

function SkillCard({ skill, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        width: 180,
        height: 200,
        margin: 16,
        borderRadius: 20,
        boxShadow: hovered
          ? "0 12px 32px 0 rgba(0,0,0,0.25)"
          : "0 8px 24px 0 rgba(0,0,0,0.15)",
        background: hovered
          ? `linear-gradient(135deg, ${color} 60%, #fff 100%)`
          : `linear-gradient(135deg, #fff 60%, ${color} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "box-shadow 0.3s, background 0.3s, transform 0.3s",
        transform: hovered ? "scale(1.07)" : "scale(1)"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas style={{ height: 110 }} camera={{ position: [0, 0, 3] }} shadows>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <AnimatedIcosahedron color={color} hovered={hovered} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <div style={{ marginTop: 16, fontWeight: "bold", fontSize: 18, color: hovered ? color : "#222", letterSpacing: 1 }}>{skill}</div>
    </div>
  );
}

export default SkillCard;
