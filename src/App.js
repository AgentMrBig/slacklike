import * as THREE from 'three';
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Box from './components/Box.component';
import useStore from './store'
import Stars from './components/Starts.component';

export default function App() {
  const { fov } = useStore(state => state.mutation)
  const actions = useStore(state => state.actions)
  return (
    <Canvas 
      oncurrent
        gl={{ antialias: false }}
        //onPointerMove={actions.updateMouse}
        //onClick={actions.shoot}
        camera={{ position: [0, 0, 2000], near: 0.01, far: 10000, fov }}
        onCreated={({ gl, camera }) => {
          actions.init(camera)
          gl.gammaInput = true
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.setClearColor(new THREE.Color('#020209'))
        }}>
        <fog attach="fog" args={['#070710', 100, 700]} />
        <ambientLight intensity={0.25} />
        <Stars />

      <Stars />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}


    </Canvas>
  )
}