import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SkillCard({ skill, color }) {
  return (
    <div style={{ width: 180, height: 180, margin: 16, borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.15)", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Canvas style={{ height: 100 }} camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} />
        <mesh rotation={[0.5, 0.5, 0]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color={color || "#0077ff"} metalness={0.5} roughness={0.3} />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div style={{ marginTop: 12, fontWeight: "bold", fontSize: 18, color: "#222" }}>{skill}</div>
    </div>
  );
}

export default SkillCard;
