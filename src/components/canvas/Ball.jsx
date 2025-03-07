// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;



// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const StylishBox = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);
//   const boxRef = useRef();

//   // Smooth Rotation Effect
//   useFrame(() => {
//     if (boxRef.current) {
//       boxRef.current.rotation.y += 0.005;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
//       {/* Soft ambient light for smooth shading */}
//       <ambientLight intensity={0.8} />
//       {/* Directional light to create depth */}
//       <directionalLight position={[3, 3, 3]} intensity={1.5} castShadow />
//       {/* Glowing spotlight for a futuristic look */}
//       <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#ff77ff" />
//       <spotLight position={[5, -5, 5]} angle={0.3} penumbra={1} intensity={1.8} color="#77ffff" />
//       <pointLight position={[0, 3, 0]} intensity={1} color="#ffffff" />
      
//       <mesh ref={boxRef} castShadow receiveShadow scale={2}>
//         <boxGeometry args={[1.5, 1.5, 1.5]} />
//         <meshStandardMaterial 
//           color="#6A0DAD" // Deep purple color
//           metalness={0.9} 
//           roughness={0.1} 
//           emissive="#8A2BE2" 
//           emissiveIntensity={0.3} 
//         />

//         {/* Front Side */}
//         <Decal 
//           position={[0, 0, 0.76]} 
//           rotation={[0, 0, 0]} 
//           scale={[1, 1]} 
//           map={decal} 
//           depthTest={false} 
//         />

//         {/* Right Side */}
//         <Decal 
//           position={[0.76, 0, 0]} 
//           rotation={[0, Math.PI / 2, 0]} 
//           scale={[1, 1]} 
//           map={decal} 
//           depthTest={false} 
//         />

//         {/* Top Side */}
//         <Decal 
//           position={[0, 0.76, 0]} 
//           rotation={[-Math.PI / 2, 0, 0]} 
//           scale={[1, 1]} 
//           map={decal} 
//           depthTest={false} 
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BoxCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <StylishBox imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BoxCanvas;
import React from "react";
import { technologies } from "../../constants/index";
const SimpleBox = ({ icon, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "15px",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div
        style={{
        
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={icon}
          alt={name}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
          }}
        />
      </div>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          color: "white", // Text color white
          textAlign: "center",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default SimpleBox;
