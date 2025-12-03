import React from "react";

function PortfolioModel() {
  // Example 3D object
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0077ff" />
    </mesh>
  );
}

export default PortfolioModel;
