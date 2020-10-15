import React, {Suspense, useRef} from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";
import { Canvas, useFrame } from "react-three-fiber";

import {Html, useGLTFLoader} from 'drei';

// MARS MODEL
const Model = () => {
  const gltf = useGLTFLoader('/Mars.glb', true);
  return <primitive object={gltf.scene} dispose={null}/>;
}

// LIGHT SHINING ON MARS MODEL
const Lights = () => {
  return (
    <>
    <ambientLight intensity={0.02} />
    <directionalLight position={[10,10,5]} intensity={1}/>
    </>
  )
}

const HTMLContent = () => {

  const ref = useRef()
  //useFrame(() => (ref.current.rotation.z += -0.0006))
  useFrame(() => (ref.current.rotation.y += 0.0005))
  useFrame(() => (ref.current.rotation.x += 0.0005))
  

  return (
    <Section factor={1} offset={0}>
      <group position={[0, 0, 0]}>
        <mesh ref={ref} position={[0, 0, -1000]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className='container'>
            <h1 className='title'>SpaceX</h1>
          </div>
        </Html>
      </group>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70}}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent/>
        </Suspense>
      </Canvas>
    </>
  );
}
