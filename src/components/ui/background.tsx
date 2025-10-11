"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Three.js Wave Background
export function WaveBackground() {
  const canvasRef = useRef(null);
  const scrollRef = useRef(0);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    const handleScroll = () => {
      scrollRef.current = window.scrollY * 0.001;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Create wave geometry
    const geometry = new THREE.PlaneGeometry(15, 15, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff6b35,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 3;
    scene.add(mesh);
    
    // Animation
    let time = 0;
    function animate() {
      requestAnimationFrame(animate);
      time += 0.01;
      const scroll = scrollRef.current;
      
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave1 = Math.sin(x * 0.5 + time) * (0.3 + scroll);
        const wave2 = Math.sin(y * 0.5 + time * 0.8) * (0.2 + scroll);
        const wave3 = Math.cos((x + y) * 0.5 + time) * (0.2 * scroll);
        positions.setZ(i, wave1 + wave2 + wave3);
      }
      positions.needsUpdate = true;
      mesh.rotation.x = -Math.PI / 3 + (scroll * 0.2);
      mesh.rotation.y = scroll * 0.1;
      
      mesh.rotation.z = time * 0.1;
      renderer.render(scene, camera);
    }
    
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}

// Floating Orbs
export function FloatingOrbs() {
  const orbs = [...Array(12)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    colorIndex: Math.floor(Math.random() * 3)
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => {
        const color = orb.colorIndex === 0 ? 'rgba(239, 68, 68, 0.3)' :
                     orb.colorIndex === 1 ? 'rgba(249, 115, 22, 0.3)' :
                                          'rgba(234, 179, 8, 0.3)';
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            initial={{ 
              x: `${orb.x}%`,
              y: `${orb.y}%`,
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: [`${orb.x}%`, `${(orb.x + 20) % 100}%`, `${orb.x}%`],
              y: [`${orb.y}%`, `${(orb.y + 20) % 100}%`, `${orb.y}%`],
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
            }}
          />
        );
      })}
    </div>
  );
}