import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Sphere({ position, color, size, speed, distort }: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        position[0] + pointer.x * 0.5,
        0.02
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        position[1] + pointer.y * 0.3,
        0.02
      );
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={1.5}
          distort={distort}
          roughness={0.1}
          metalness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function Spheres() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-3, -3, 2]} intensity={0.5} color="#E8845C" />

      <Sphere position={[0, 0.5, 0]} color="#E8845C" size={1.2} speed={2} distort={0.4} />
      <Sphere position={[-1.8, -0.5, -1]} color="#E6A04D" size={0.8} speed={1.5} distort={0.3} />
      <Sphere position={[1.5, 1, -0.5]} color="#5BA8D9" size={0.6} speed={2.5} distort={0.35} />
      <Sphere position={[2, -1, 0.5]} color="#D4C5A9" size={0.5} speed={1.8} distort={0.25} />
      <Sphere position={[-1, 1.5, 0.5]} color="#E8845C" size={0.4} speed={3} distort={0.3} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Spheres />
      </Canvas>
    </div>
  );
}
