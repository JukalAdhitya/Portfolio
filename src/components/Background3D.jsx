import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

const Particles = ({ theme }) => {
  const mesh = useRef();
  
  // Create random positions for particles
  const particlesCount = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20; // Spread across a 20x20x20 area
    }
    return pos;
  }, [particlesCount]);

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  const color = theme === 'dark' ? '#3b82f6' : '#2563eb';

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={color}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Background3D = () => {
  const { theme } = useTheme();

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles theme={theme} />
      </Canvas>
    </div>
  );
};

export default Background3D;
