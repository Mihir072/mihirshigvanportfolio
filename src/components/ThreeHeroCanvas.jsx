import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xc0c1ff, 3, 50);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x47d6ff, 3, 50);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xddb7ff, 2, 50);
    light3.position.set(0, 5, -5);
    scene.add(light3);

    // Main 3D Flutter Logo / Cyber Cube Group
    const group = new THREE.Group();

    // Materials
    const materialPrimary = new THREE.MeshStandardMaterial({
      color: 0x8083ff,
      roughness: 0.15,
      metalness: 0.8,
      transparent: true,
      opacity: 0.95,
      emissive: 0x201060,
      emissiveIntensity: 0.3,
    });

    const materialCyan = new THREE.MeshStandardMaterial({
      color: 0x47d6ff,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.9,
    });

    const materialPurple = new THREE.MeshStandardMaterial({
      color: 0xddb7ff,
      roughness: 0.2,
      metalness: 0.7,
      transparent: true,
      opacity: 0.95,
    });

    const boxGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);

    // Cube 1 (Top diamond)
    const cube1 = new THREE.Mesh(boxGeo, materialPrimary);
    cube1.position.set(0, 0.75, 0);
    cube1.rotation.z = Math.PI / 4;
    cube1.rotation.x = Math.PI / 8;
    group.add(cube1);

    // Cube 2 (Middle connecting diamond)
    const cube2 = new THREE.Mesh(boxGeo, materialCyan);
    cube2.position.set(0.65, 0.1, 0.2);
    cube2.rotation.z = Math.PI / 4;
    cube2.rotation.y = Math.PI / 6;
    group.add(cube2);

    // Cube 3 (Bottom accent diamond)
    const cube3 = new THREE.Mesh(boxGeo, materialPurple);
    cube3.position.set(1.3, -0.6, 0);
    cube3.rotation.z = Math.PI / 4;
    group.add(cube3);

    // Central Core Sphere with wireframe
    const coreGeo = new THREE.IcosahedronGeometry(0.7, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xc0c1ff,
      wireframe: true,
      emissive: 0xc0c1ff,
      emissiveIntensity: 0.5,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(0.3, 0, -0.2);
    group.add(core);

    // Orbiting Particles Ring
    const particleCount = 80;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.2 + (Math.random() - 0.5) * 0.4;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x47d6ff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    group.add(particleSystem);

    scene.add(group);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = (y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse interaction
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;

      group.rotation.y = elapsedTime * 0.4 + targetRotationY * 0.8;
      group.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2 + targetRotationX * 0.5;

      // Floating sine wave motion
      group.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      particleSystem.rotation.y = -elapsedTime * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full relative min-h-[350px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4 py-2 bg-[#1c1b1b]/80 backdrop-blur-md rounded-xl border border-[#464554]/30 pointer-events-none text-xs text-[#c7c4d7]">
        <span className="flex items-center gap-1.5 font-mono text-[#c0c1ff]">
          <span className="w-2 h-2 rounded-full bg-[#47d6ff] animate-ping" />
          Interactive 3D Flutter Canvas
        </span>
        <span className="font-mono opacity-75 hidden sm:inline">Move cursor to rotate model</span>
      </div>
    </div>
  );
}
