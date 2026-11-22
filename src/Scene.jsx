import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
function Core(){
  const group=useRef();
  useFrame((state,delta)=>{if(!group.current)return;group.current.rotation.y+=delta*.11;group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,state.pointer.y*.14,.025);group.current.rotation.z=THREE.MathUtils.lerp(group.current.rotation.z,-state.pointer.x*.16,.025)});
  return <group ref={group} rotation={[.1,.1,.4]}>
    <Float speed={1.5} rotationIntensity={.25} floatIntensity={.4}>
      <mesh scale={1.35}><icosahedronGeometry args={[1,12]}/><MeshDistortMaterial color="#7a52ff" roughness={.18} metalness={.78} distort={.28} speed={1.6}/></mesh>
      <mesh scale={1.52}><icosahedronGeometry args={[1,2]}/><meshBasicMaterial color="#b2a1ff" wireframe transparent opacity={.13}/></mesh>
      <mesh rotation={[1.1,.3,.4]}><torusGeometry args={[2.12,.012,8,140]}/><meshBasicMaterial color="#9b84ff" transparent opacity={.6}/></mesh>
      <mesh rotation={[.45,.7,.2]}><torusGeometry args={[2.4,.007,8,140]}/><meshBasicMaterial color="#6ce8ef" transparent opacity={.28}/></mesh>
    </Float>
  </group>
}
export default function Scene({reducedMotion=false}){
 return <div className="scene" aria-hidden="true"><Canvas dpr={[1,1.5]} camera={{position:[0,0,6.7],fov:48}} gl={{alpha:true,antialias:true,powerPreference:'high-performance'}} frameloop={reducedMotion?'demand':'always'}>
 <ambientLight intensity={.85}/><pointLight position={[3,3,4]} color="#9a80ff" intensity={50}/><pointLight position={[-3,-2,2]} color="#36cde9" intensity={26}/><Suspense fallback={null}><Core/><Stars radius={65} depth={45} count={reducedMotion?250:850} factor={3} saturation={0} fade speed={.45}/></Suspense>
 </Canvas></div>
}
