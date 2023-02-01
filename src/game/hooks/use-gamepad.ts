import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const pos = new THREE.Vector3();
const pos2 = new THREE.Vector3();
const force = new THREE.Vector3();
const speed = 0.05;

export default function useGamepad(group: THREE.Group) {
  useFrame(({ camera }) => {
    const gamepads = navigator.getGamepads();
    for (const gamepad of gamepads) {
      if (gamepad === null) continue;
      if (!gamepad.connected) continue;
      const [a, b] = gamepad.buttons;

      const [x, y] = gamepad.axes;
      if (!(x === 0 && y === 0)) {
        const r = (THREE.MathUtils.radToDeg(Math.atan2(y, x)) + 360 - 90) % 360;
        group.rotation.y = THREE.MathUtils.degToRad(r * -1);
      }

      group.getWorldPosition(pos);

      force.set(0, 0, a.pressed ? 1 : b.pressed ? -1 : 0);
      group.translateZ(force.multiplyScalar(speed).z);

      group.getWorldPosition(pos2);

      const delta = pos2.clone().sub(pos);
      camera.lookAt(group.position);
      camera.position.add(delta);
    }
  });
}
