import {extend, useFrame, useThree} from "@react-three/fiber";
import {useRef} from "react";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject.jsx";

extend({OrbitControls})

const Experience = () => {

  const cubeRef = useRef()
  const groupRef = useRef()

  const {camera, gl} = useThree()

  useFrame(({camera, clock}, delta) => {
    cubeRef.current.rotation.y += delta;

    // const angle = clock.elapsedTime;
    // camera.position.x = Math.sin(angle) * 8;
    // camera.position.z = Math.cos(angle) * 8;
    // camera.lookAt(0, 0, 0);


    // groupRef.current.rotation.y -= delta
  })

  return <>

    <orbitControls args={[camera, gl.domElement]} />

    <directionalLight position={[1, 2, 3]} />

    <ambientLight intensity={0.2} />

    <group ref={groupRef}>
      <mesh ref={cubeRef} scale={1.5} position={[2, 0, 0]} rotation-y={Math.PI * 0.25}>
        <boxGeometry/>
        <meshStandardMaterial color="mediumpurple"/>
      </mesh>

      <mesh position-x={-2}>
        <sphereGeometry/>
        <meshStandardMaterial color="orange"/>
      </mesh>
    </group>

    <mesh rotation-x={-Math.PI * 0.5} scale={10} position-y={-1}>
      <planeGeometry/>
      <meshStandardMaterial color="green"/>
    </mesh>

    <CustomObject />
  </>;
};

export default Experience;
