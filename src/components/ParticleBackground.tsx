import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      // Rose-gold palette
      const r = 0.85 + Math.random() * 0.15;
      const g = 0.6 + Math.random() * 0.2;
      const b = 0.5 + Math.random() * 0.3;
      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
