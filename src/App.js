import "./styles.css";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import Home from "./components/Home";
import Anime from "./components/Anime";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import AnimatedSphere from "./components/AnimatedSphere";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </Canvas>
      {/* <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Anime />
        </Suspense>
      </Canvas> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  canvas {
  height: 500px;
  ;
  }
`;

