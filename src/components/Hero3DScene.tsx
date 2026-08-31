import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Eye, RotateCw } from 'lucide-react';

export const Hero3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Clean any prior children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Master Group for the entire product assembly
    const productGroup = new THREE.Group();
    scene.add(productGroup);

    // Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f59e0b'),
      metalness: 0.9,
      roughness: 0.22,
      emissive: new THREE.Color('#78350f'),
      emissiveIntensity: 0.15
    });

    const roseGoldMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#e07a8b'),
      metalness: 0.85,
      roughness: 0.25,
      emissive: new THREE.Color('#881337'),
      emissiveIntensity: 0.12
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffe4e6'),
      transmission: 0.88,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      ior: 1.52,
      thickness: 1.2,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    const perfumeLiquidMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#be185d'),
      transmission: 0.65,
      transparent: true,
      roughness: 0.15,
      emissive: new THREE.Color('#9d174d'),
      emissiveIntensity: 0.25
    });

    const lipstickBulletMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#9f1239'),
      roughness: 0.35,
      metalness: 0.15
    });

    const creamMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#fff1f2'),
      roughness: 0.6,
      metalness: 0.05
    });

    const brushBristleMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#fda4af'),
      roughness: 0.85,
      metalness: 0.0
    });

    const blackGlossyMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1e1b1e'),
      roughness: 0.2,
      metalness: 0.4
    });

    // 1. PERFUME BOTTLE (Center-Left)
    const perfumeGroup = new THREE.Group();
    // Glass Body
    const bottleGeom = new THREE.BoxGeometry(1.1, 1.4, 0.75);
    const bottleMesh = new THREE.Mesh(bottleGeom, glassMaterial);
    bottleMesh.castShadow = true;
    perfumeGroup.add(bottleMesh);

    // Inner Perfume Liquid
    const liquidGeom = new THREE.BoxGeometry(0.9, 1.15, 0.55);
    const liquidMesh = new THREE.Mesh(liquidGeom, perfumeLiquidMaterial);
    liquidMesh.position.y = -0.05;
    perfumeGroup.add(liquidMesh);

    // Perfume Golden Collar & Nozzle
    const collarGeom = new THREE.CylinderGeometry(0.2, 0.22, 0.22, 32);
    const collarMesh = new THREE.Mesh(collarGeom, goldMaterial);
    collarMesh.position.y = 0.8;
    perfumeGroup.add(collarMesh);

    const pumpGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.3, 32);
    const pumpMesh = new THREE.Mesh(pumpGeom, goldMaterial);
    pumpMesh.position.y = 1.0;
    perfumeGroup.add(pumpMesh);

    // Crystal Cap
    const capGeom = new THREE.BoxGeometry(0.55, 0.5, 0.45);
    const capMesh = new THREE.Mesh(capGeom, glassMaterial);
    capMesh.position.y = 1.35;
    perfumeGroup.add(capMesh);

    perfumeGroup.position.set(-0.9, 0.1, 0.2);
    perfumeGroup.rotation.set(0.08, 0.25, -0.05);
    productGroup.add(perfumeGroup);

    // 2. LUXURY LIPSTICK (Center-Right)
    const lipstickGroup = new THREE.Group();
    // Outer Base Case
    const lipBaseGeom = new THREE.CylinderGeometry(0.26, 0.26, 0.9, 32);
    const lipBaseMesh = new THREE.Mesh(lipBaseGeom, blackGlossyMaterial);
    lipBaseMesh.position.y = -0.45;
    lipstickGroup.add(lipBaseMesh);

    // Rose Gold Middle Ring
    const lipRingGeom = new THREE.CylinderGeometry(0.265, 0.265, 0.12, 32);
    const lipRingMesh = new THREE.Mesh(lipRingGeom, roseGoldMaterial);
    lipRingMesh.position.y = 0.05;
    lipstickGroup.add(lipRingMesh);

    // Inner Golden Sleeve
    const lipSleeveGeom = new THREE.CylinderGeometry(0.22, 0.22, 0.5, 32);
    const lipSleeveMesh = new THREE.Mesh(lipSleeveGeom, goldMaterial);
    lipSleeveMesh.position.y = 0.32;
    lipstickGroup.add(lipSleeveMesh);

    // Lipstick Slanted Bullet
    const bulletGeom = new THREE.CylinderGeometry(0.18, 0.19, 0.65, 32);
    const bulletMesh = new THREE.Mesh(bulletGeom, lipstickBulletMaterial);
    bulletMesh.position.y = 0.72;
    bulletMesh.rotation.z = -0.15;
    lipstickGroup.add(bulletMesh);

    lipstickGroup.position.set(0.85, 0.3, 0.5);
    lipstickGroup.rotation.set(-0.1, -0.4, 0.12);
    productGroup.add(lipstickGroup);

    // 3. PROFESSIONAL MAKEUP BRUSH (Angled Diagonal)
    const brushGroup = new THREE.Group();
    // Handle
    const handleGeom = new THREE.CylinderGeometry(0.12, 0.06, 1.8, 32);
    const handleMesh = new THREE.Mesh(handleGeom, blackGlossyMaterial);
    handleMesh.position.y = -0.9;
    brushGroup.add(handleMesh);

    // Ferrule (Rose Gold)
    const ferruleGeom = new THREE.CylinderGeometry(0.15, 0.12, 0.45, 32);
    const ferruleMesh = new THREE.Mesh(ferruleGeom, roseGoldMaterial);
    ferruleMesh.position.y = 0.15;
    brushGroup.add(ferruleMesh);

    // Bristles (Soft Dome)
    const bristleGeom = new THREE.ConeGeometry(0.28, 0.7, 32);
    const bristleMesh = new THREE.Mesh(bristleGeom, brushBristleMaterial);
    bristleMesh.position.y = 0.65;
    brushGroup.add(bristleMesh);

    brushGroup.position.set(1.4, -0.2, -0.2);
    brushGroup.rotation.set(0.3, 0.2, -0.65);
    productGroup.add(brushGroup);

    // 4. COMPACT POWDER WITH MIRROR (Foreground Flat)
    const compactGroup = new THREE.Group();
    // Bottom Tray
    const trayGeom = new THREE.CylinderGeometry(0.75, 0.75, 0.15, 48);
    const trayMesh = new THREE.Mesh(trayGeom, roseGoldMaterial);
    compactGroup.add(trayMesh);

    // Inner Pressed Powder
    const powderGeom = new THREE.CylinderGeometry(0.62, 0.62, 0.08, 48);
    const powderMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#fbcfe8'),
      roughness: 0.9,
      metalness: 0.05
    });
    const powderMesh = new THREE.Mesh(powderGeom, powderMat);
    powderMesh.position.y = 0.06;
    compactGroup.add(powderMesh);

    // Open Top Lid
    const lidGeom = new THREE.CylinderGeometry(0.75, 0.75, 0.08, 48);
    const lidMesh = new THREE.Mesh(lidGeom, roseGoldMaterial);
    lidMesh.position.set(0, 0.55, -0.65);
    lidMesh.rotation.x = -1.1; // Opened angled lid
    compactGroup.add(lidMesh);

    // Mirror inside lid
    const mirrorGeom = new THREE.CylinderGeometry(0.65, 0.65, 0.02, 48);
    const mirrorMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffffff'),
      roughness: 0.05,
      metalness: 0.98
    });
    const mirrorMesh = new THREE.Mesh(mirrorGeom, mirrorMat);
    mirrorMesh.position.set(0, 0.55, -0.63);
    mirrorMesh.rotation.x = -1.1;
    compactGroup.add(mirrorMesh);

    compactGroup.position.set(-0.2, -0.95, 0.9);
    compactGroup.rotation.set(0.2, 0.35, -0.05);
    productGroup.add(compactGroup);

    // 5. SKINCARE LUXURY CREAM JAR (Left Background)
    const jarGroup = new THREE.Group();
    const jarGeom = new THREE.CylinderGeometry(0.6, 0.55, 0.65, 36);
    const jarMesh = new THREE.Mesh(jarGeom, glassMaterial);
    jarGroup.add(jarMesh);

    const jarCreamGeom = new THREE.CylinderGeometry(0.5, 0.48, 0.5, 36);
    const jarCreamMesh = new THREE.Mesh(jarCreamGeom, creamMaterial);
    jarCreamMesh.position.y = -0.04;
    jarGroup.add(jarCreamMesh);

    const jarCapGeom = new THREE.CylinderGeometry(0.62, 0.62, 0.18, 36);
    const jarCapMesh = new THREE.Mesh(jarCapGeom, goldMaterial);
    jarCapMesh.position.y = 0.38;
    jarGroup.add(jarCapMesh);

    jarGroup.position.set(-1.6, -0.4, -0.5);
    jarGroup.rotation.set(0.15, 0.4, 0.1);
    productGroup.add(jarGroup);

    // 6. FLOATING FLOWER PETALS (Rose & Peony Petals)
    const petals: THREE.Mesh[] = [];
    const petalGeom = new THREE.SphereGeometry(0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    petalGeom.scale(1, 0.3, 1.4);

    const petalMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f43f5e'),
      roughness: 0.5,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    const petalPositions = [
      { x: -2.0, y: 1.2, z: 0.5, rx: 0.4, ry: 0.6, rz: 0.2 },
      { x: 1.8, y: 1.4, z: 0.3, rx: -0.5, ry: 0.3, rz: 0.8 },
      { x: -0.4, y: 1.6, z: -0.2, rx: 0.8, ry: -0.4, rz: 0.5 },
      { x: 0.3, y: -1.3, z: 1.2, rx: 0.2, ry: 0.9, rz: -0.3 },
      { x: 2.1, y: -0.8, z: 0.7, rx: -0.3, ry: -0.7, rz: 0.4 },
      { x: -1.8, y: -1.1, z: 0.8, rx: 0.5, ry: 0.2, rz: -0.6 },
    ];

    petalPositions.forEach((pos, idx) => {
      const petal = new THREE.Mesh(petalGeom, petalMaterial);
      petal.position.set(pos.x, pos.y, pos.z);
      petal.rotation.set(pos.rx, pos.ry, pos.rz);
      petal.scale.setScalar(0.7 + (idx % 3) * 0.25);
      scene.add(petal);
      petals.push(petal);
    });

    // 7. AMBIENT SPARKLE PARTICLES
    const sparklesCount = 45;
    const sparkleGeom = new THREE.BufferGeometry();
    const sparklePositions = new Float32Array(sparklesCount * 3);
    const sparkleScales = new Float32Array(sparklesCount);

    for (let i = 0; i < sparklesCount; i++) {
      sparklePositions[i * 3] = (Math.random() - 0.5) * 6;
      sparklePositions[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      sparkleScales[i] = Math.random() * 0.6 + 0.4;
    }

    sparkleGeom.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));

    // Particle texture (circle glow)
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 230, 240, 1)');
    grad.addColorStop(0.3, 'rgba(244, 114, 182, 0.8)');
    grad.addColorStop(0.7, 'rgba(225, 29, 72, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const sparkleTexture = new THREE.CanvasTexture(canvas);
    const sparkleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      map: sparkleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const sparklePoints = new THREE.Points(sparkleGeom, sparkleMaterial);
    scene.add(sparklePoints);

    // LIGHTING (Studio Glamour Lighting)
    const ambientLight = new THREE.AmbientLight(0xfff1f2, 1.2);
    scene.add(ambientLight);

    // Main Warm Studio Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 5, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Dark Pink Rim Light (Back-Left)
    const rimLight = new THREE.PointLight(0xbe185d, 3.5, 12);
    rimLight.position.set(-4, 3, -2);
    scene.add(rimLight);

    // Rose Fill Light (Front-Bottom)
    const fillLight = new THREE.PointLight(0xf472b6, 1.8, 10);
    fillLight.position.set(2, -3, 3);
    scene.add(fillLight);

    // Top Gold Accent Light
    const goldAccentLight = new THREE.PointLight(0xf59e0b, 1.5, 8);
    goldAccentLight.position.set(0, 4, 1);
    scene.add(goldAccentLight);

    // Interaction & Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        productGroup.rotation.y += deltaX * 0.008;
        productGroup.rotation.x += deltaY * 0.008;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        mouseX = x;
        mouseY = y;
        targetRotationY = mouseX * 0.35;
        targetRotationX = -mouseY * 0.25;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('touchmove', handlePointerMove, { passive: true });
    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating physics for product group
      if (!isDragging) {
        if (autoRotate) {
          productGroup.rotation.y += 0.004;
        } else {
          productGroup.rotation.y += (targetRotationY - productGroup.rotation.y) * 0.05;
        }
        productGroup.rotation.x += (targetRotationX - productGroup.rotation.x) * 0.05;
      }

      // Individual product organic floating
      perfumeGroup.position.y = 0.1 + Math.sin(elapsedTime * 1.6) * 0.08;
      perfumeGroup.rotation.z = -0.05 + Math.cos(elapsedTime * 1.2) * 0.04;

      lipstickGroup.position.y = 0.3 + Math.sin(elapsedTime * 1.8 + 1.2) * 0.07;
      lipstickGroup.rotation.y = -0.4 + Math.sin(elapsedTime * 1.1) * 0.06;

      brushGroup.position.y = -0.2 + Math.cos(elapsedTime * 1.5 + 2.0) * 0.09;
      brushGroup.rotation.z = -0.65 + Math.sin(elapsedTime * 1.3) * 0.05;

      compactGroup.position.y = -0.95 + Math.sin(elapsedTime * 1.4 + 3.0) * 0.05;

      jarGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.7 + 0.8) * 0.06;

      // Tumbling floating petals
      petals.forEach((petal, i) => {
        petal.rotation.x += 0.008 * (i % 2 === 0 ? 1 : -1);
        petal.rotation.y += 0.006;
        petal.position.y += Math.sin(elapsedTime * 1.5 + i) * 0.003;
      });

      // Shimmering particle field
      sparklePoints.rotation.y = elapsedTime * 0.05;
      sparklePoints.rotation.x = Math.sin(elapsedTime * 0.08) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchend', handlePointerUp);

      // Clean Three.js resources
      renderer.dispose();
      bottleGeom.dispose();
      liquidGeom.dispose();
      lipBaseGeom.dispose();
      lipRingGeom.dispose();
      lipSleeveGeom.dispose();
      bulletGeom.dispose();
      handleGeom.dispose();
      ferruleGeom.dispose();
      bristleGeom.dispose();
      trayGeom.dispose();
      lidGeom.dispose();
      mirrorGeom.dispose();
      jarGeom.dispose();
      petalGeom.dispose();
      sparkleGeom.dispose();
      sparkleTexture.dispose();
      goldMaterial.dispose();
      roseGoldMaterial.dispose();
      glassMaterial.dispose();
      perfumeLiquidMaterial.dispose();
      lipstickBulletMaterial.dispose();
      creamMaterial.dispose();
      brushBristleMaterial.dispose();
      blackGlossyMaterial.dispose();
    };
  }, [autoRotate]);

  return (
    <div 
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial studio glow */}
      <div className="absolute inset-0 bg-radial from-rose-200/40 via-pink-100/20 to-transparent pointer-events-none rounded-full filter blur-3xl scale-95" />
      
      {/* 3D Canvas Mount */}
      <div 
        ref={containerRef} 
        className="w-full h-full relative z-10"
        title="Interactive 3D Beauty Suite — Click and drag to rotate"
      />

      {/* Floating Interactive Badge & Controls */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-pink-100 text-xs font-medium text-rose-950 transition-all hover:bg-white">
        <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
        <span className="hidden sm:inline">Interactive 3D Studio:</span>
        <span>Drag to rotate</span>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`ml-1 px-2 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1 transition-colors ${
            autoRotate ? 'bg-rose-100 text-rose-800' : 'bg-gray-100 text-gray-700'
          }`}
          title={autoRotate ? 'Pause auto spin' : 'Resume auto spin'}
        >
          <RotateCw className={`w-3 h-3 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          <span>{autoRotate ? 'Spin On' : 'Spin Off'}</span>
        </button>
      </div>

      {/* Luxury Product Label Pills */}
      <div className="absolute top-6 left-4 sm:left-6 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-rose-100 flex items-center gap-2 text-xs text-rose-900 animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
        <span className="font-semibold">Pure French Fragrance</span>
      </div>

      <div className="absolute bottom-12 right-4 sm:right-6 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-rose-100 flex items-center gap-2 text-xs text-rose-900 animate-float-delayed">
        <span className="w-2 h-2 rounded-full bg-amber-500" />
        <span className="font-semibold">Rose Gold Aesthetics</span>
      </div>
    </div>
  );
};
