import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function Field({ rows = 64, cols = 112 }) {
  const ref = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();

  // Grid positions once
  const positions = useMemo(() => {
    const pts = new Float32Array(rows * cols * 3);
    let i = 0;
    const w = 12, h = 7; // world size in units
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = (x / (cols - 1) - 0.5) * w;
        const py = (y / (rows - 1) - 0.5) * h;
        pts[i++] = px; pts[i++] = py; pts[i++] = 0;
      }
    }
    return pts;
  }, [rows, cols]);

  // Keep a copy of base XY for waves
  const base = useMemo(() => positions.slice(), [positions]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;

    // Mouse world coords on z=0 plane (approx)
    const mx = mouse.x * viewport.width / 2;
    const my = mouse.y * viewport.height / 2;

    for (let i = 0; i < pos.count; i++) {
      const bx = base[i * 3], by = base[i * 3 + 1];

      // base wave
      const wave = Math.sin(bx * 0.6 + by * 0.8 + t * 1.2) * 0.15;

      // mouse “bump” with gaussian falloff
      const dx = bx - mx, dy = by - my;
      const dist = Math.hypot(dx, dy);
      const bump = Math.exp(-(dist * dist) * 0.4) * 0.6;

      pos.setZ(i, wave + bump);
    }
    pos.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial size={0.03} depthWrite={false} transparent opacity={0.9} color="#8ad5ff" />
    </Points>
  );
}

export default function ReactiveField() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 2]}>
      <color attach="background" args={["#0b1020"]} />
      <Field />
    </Canvas>
  );
}
