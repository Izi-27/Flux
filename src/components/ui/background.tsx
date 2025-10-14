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
// export function FloatingOrbs() {
//   const orbs = [...Array(12)].map(() => ({
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 300 + 100,
//     duration: Math.random() * 20 + 10,
//     delay: Math.random() * 5,
//     colorIndex: Math.floor(Math.random() * 3)
//   }));

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//       {orbs.map((orb, i) => {
//         const color = orb.colorIndex === 0 ? '#ef44444c' :
//                      orb.colorIndex === 1 ? '#f973164c' :
//                                           '#eab3084c';
//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full blur-3xl"
//             initial={{ 
//               x: `${orb.x}%`,
//               y: `${orb.y}%`,
//               opacity: 0,
//               scale: 0.5
//             }}
//             animate={{ 
//               x: [`${orb.x}%`, `${(orb.x + 20) % 100}%`, `${orb.x}%`],
//               y: [`${orb.y}%`, `${(orb.y + 20) % 100}%`, `${orb.y}%`],
//               opacity: [0.2, 0.3, 0.2],
//               scale: [1, 1.2, 1]
//             }}
//             transition={{ 
//               duration: orb.duration,
//               delay: orb.delay,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             style={{
//               width: orb.size,
//               height: orb.size,
//               background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }

// 3D Geometric Background
export function FloatingOrbs() {
  const shapes = [...Array(8)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 200 + 150,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
    rotationSpeed: Math.random() * 20 + 10,
    shapeType: Math.floor(Math.random() * 3), // 0: cube, 1: pyramid, 2: sphere
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5" />
      
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            perspective: '1000px',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {shape.shapeType === 0 ? (
            // 3D Cube
            <motion.div
              className="w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: shape.rotationSpeed,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(6)].map((_, faceIndex) => (
                <div
                  key={faceIndex}
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-sm"
                  style={{
                    transform: 
                      faceIndex === 0 ? `rotateY(0deg) translateZ(${shape.size/2}px)` :
                      faceIndex === 1 ? `rotateY(180deg) translateZ(${shape.size/2}px)` :
                      faceIndex === 2 ? `rotateY(90deg) translateZ(${shape.size/2}px)` :
                      faceIndex === 3 ? `rotateY(-90deg) translateZ(${shape.size/2}px)` :
                      faceIndex === 4 ? `rotateX(90deg) translateZ(${shape.size/2}px)` :
                      `rotateX(-90deg) translateZ(${shape.size/2}px)`,
                  }}
                />
              ))}
            </motion.div>
          ) : shape.shapeType === 1 ? (
            // 3D Pyramid
            <motion.div
              className="w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: shape.rotationSpeed,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(4)].map((_, faceIndex) => (
                <div
                  key={faceIndex}
                  className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-orange-500/10 border border-red-500/30 backdrop-blur-sm"
                  style={{
                    clipPath: faceIndex < 3 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
                    transform: 
                      faceIndex === 0 ? `rotateY(0deg) translateZ(${shape.size/4}px)` :
                      faceIndex === 1 ? `rotateY(120deg) translateZ(${shape.size/4}px)` :
                      faceIndex === 2 ? `rotateY(240deg) translateZ(${shape.size/4}px)` :
                      `rotateX(90deg) translateZ(${shape.size/2}px)`,
                  }}
                />
              ))}
            </motion.div>
          ) : (
            // Glowing Sphere with rings
            <motion.div
              className="w-full h-full rounded-full relative"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: shape.rotationSpeed,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(249, 115, 22, 0.3), rgba(239, 68, 68, 0.2), transparent 70%)',
                  boxShadow: '0 0 60px rgba(249, 115, 22, 0.3), inset 0 0 60px rgba(239, 68, 68, 0.2)',
                }}
              />
              {/* Orbital rings */}
              {[...Array(3)].map((_, ringIndex) => (
                <div
                  key={ringIndex}
                  className="absolute inset-0 rounded-full border-2 border-orange-500/10"
                  style={{
                    transform: `rotateY(${ringIndex * 60}deg) rotateX(75deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-orange-500/40"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            y: [null, `${Math.random() * -100}%`],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}