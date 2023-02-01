import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Player from "@/game/components/player";

export default function Game() {
  return (
    <Canvas flat linear legacy>
      <OrbitControls makeDefault />
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <Player />
    </Canvas>
  );
}
