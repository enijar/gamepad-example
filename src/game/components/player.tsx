import React from "react";
import * as THREE from "three";
import { Environment, useGLTF } from "@react-three/drei";
import useGamepad from "@/game/hooks/use-gamepad";

export default function Player() {
  const city = useGLTF("./assets/city.gltf");
  const car = useGLTF("./assets/car.glb");

  useGamepad(car.scene);

  React.useEffect(() => {
    const box = new THREE.Box3().setFromObject(city.scene);
    const center = box.getCenter(new THREE.Vector3());
    city.scene.position.x += city.scene.position.x - center.x;
    city.scene.position.y += city.scene.position.y - center.y;
    city.scene.position.z += city.scene.position.z - center.z;
    city.scene.position.y += 1.35;
    city.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        if (object.material instanceof THREE.MeshStandardMaterial) {
          object.material.envMapIntensity = 0.6;
        }
      }
    });
  }, [city.scene]);

  return (
    <>
      <Environment files="./assets/environment.hdr" />
      <primitive object={city.scene} scale={0.01} />
      <primitive
        object={car.scene}
        rotation-y={THREE.MathUtils.degToRad(180)}
        scale={0.75}
      />
    </>
  );
}
