import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, Vector3 } from 'three';
import { useSpring, animated } from '@react-spring/three';
import { OrbitControls, Sphere } from '@react-three/drei';

function FloatingObject({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={new Vector3(...position)}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color={hovered ? "#4f46e5" : "#6366f1"}
          wireframe
          transparent
          opacity={0.6}
        />
      </Sphere>
    </animated.mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingObject position={[-2, 0, 0]} />
        <FloatingObject position={[2, 0, 0]} />
        <FloatingObject position={[0, 2, 0]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}