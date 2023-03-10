import React from "react"
import * as THREE from "three"
import { Canvas, extend, useLoader } from "@react-three/fiber"
import {
  Effects,
  OrbitControls,
  OrthographicCamera,
  Sparkles,
  Cloud,
  Edges,
} from "@react-three/drei"
import { UnrealBloomPass } from "three-stdlib"
import logo from "@images/model.png"

extend({ UnrealBloomPass })

const CanvasAnimation = () => {
  const repeatX = 1
  const repeatY = 1
  const base = useLoader(THREE.TextureLoader, logo)
  base.wrapS = THREE.RepeatWrapping
  base.wrapT = THREE.RepeatWrapping
  base.repeat.set(repeatX, repeatY)

  return (
    <Canvas shadow gl={{ antialias: false }}>
      <color attach="background" args={["#202030"]} />
      <mesh scale={2.5}>
        <boxGeometry />
        <meshPhysicalMaterial map={base} />
        <Edges scale={1.1} threshold={2} color="#000000" />
      </mesh>
      <directionalLight intensity={1} position={[10, 10, 10]} />
      <OrbitControls autoRotate enableZoom={false} />
      <OrthographicCamera
        makeDefault
        far={500}
        near={0.1}
        position={[-10, 2, -10]}
        zoom={100}
      />
      <hemisphereLight intensity={2} color={"white"} groundColor={"white"} />

      <Cloud opacity={0.1} speed={0.1} width={30} depth={0.1} segments={40} />
    </Canvas>
  )
}

export default CanvasAnimation
