import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import { Vector2, Quaternion, Euler } from "three";
import SimplePlanetGenerator from "./SimplePlanetGenerator";
import SimplePlanet from "./SimplePlanet";
import Nebula from "./Nebula";
import HelloWorldText from "./HelloWorldText";

interface InteractivePlanetSceneProps {
  scrollPercent?: number;
}

const InteractivePlanetScene: React.FC<InteractivePlanetSceneProps> = ({ 
  scrollPercent = 0 
}) => {
  const planetRef = useRef<any>();
  const { camera } = useThree();
  
  // Interaction state
  const [isDragging, setIsDragging] = useState(false);
  const [previousPointerPosition] = useState(new Vector2());
  const [velocity] = useState(new Vector2());
  const [quaternion] = useState(new Quaternion());
  
  // Animation constants
  const maxSpeed = 0.03;
  const acceleration = 0.0002;
  const damping = 0.98;
  const distance = 5;

  // Handle pointer events
  const onPointerMove = (event: PointerEvent | TouchEvent) => {
    if (!isDragging) return;
    event.preventDefault();

    let clientX = 0, clientY = 0;
    if (window.TouchEvent && event instanceof TouchEvent) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else if (event instanceof PointerEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    const deltaMove = new Vector2(
      clientX - previousPointerPosition.x,
      clientY - previousPointerPosition.y
    );

    velocity.x += deltaMove.x * acceleration;
    velocity.y += deltaMove.y * acceleration;

    // Limit the speed
    if (velocity.length() > maxSpeed) {
      velocity.normalize().multiplyScalar(maxSpeed);
    }

    previousPointerPosition.set(clientX, clientY);
  };

  const onPointerDown = (event: PointerEvent | TouchEvent) => {
    setIsDragging(true);
    let clientX = 0, clientY = 0;
    if (window.TouchEvent && event instanceof TouchEvent) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else if (event instanceof PointerEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    }
    previousPointerPosition.set(clientX, clientY);

    if (window.TouchEvent && event instanceof window.TouchEvent) {
      event.preventDefault();
    }
  };

  const onPointerUp = () => {
    setIsDragging(false);
  };

  // Set up event listeners
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    canvas.addEventListener("pointermove", onPointerMove, { passive: false });
    canvas.addEventListener("pointerup", onPointerUp, false);
    canvas.addEventListener("touchmove", onPointerMove, { passive: false });
    canvas.addEventListener("touchend", onPointerUp, false);

    return () => {
      canvas.removeEventListener("pointermove", onPointerMove, false);
      canvas.removeEventListener("pointerup", onPointerUp, false);
      canvas.removeEventListener("touchmove", onPointerMove, false);
      canvas.removeEventListener("touchend", onPointerUp, false);
    };
  }, [isDragging]);

  // Animation loop
  useFrame((state, delta) => {
    velocity.multiplyScalar(damping);

    let rotate = isDragging ? 0.0 : 0.001;

    const deltaRotationQuaternion = new Quaternion().setFromEuler(
      new Euler(
        velocity.y * delta * 120,
        (velocity.x + rotate) * delta * 120,
        0,
        "XYZ"
      )
    );
    quaternion.multiplyQuaternions(deltaRotationQuaternion, quaternion);

    if (planetRef.current) {
      planetRef.current.quaternion.copy(quaternion);
      // Position based on scroll
      planetRef.current.position.set(scrollPercent * 2 - 1, -0.5, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={[0, 0, distance]} 
        far={100}
      />
      
      <ambientLight intensity={0.1} />
      <directionalLight
        intensity={2}
        position={[5, 2, 2]}
        castShadow
        shadow-bias={0.0001}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />

      <group ref={planetRef}>
        <SimplePlanetGenerator preset="beach" />
        
        {/* Invisible sphere for interaction */}
        <mesh
          visible={false}
          onPointerDown={(evt) => {
            onPointerDown(evt.nativeEvent);
          }}
          onTouchStart={(evt) => {
            onPointerDown(evt.nativeEvent);
          }}
        >
          <sphereGeometry args={[1.2, 8, 8]} />
          <meshBasicMaterial />
        </mesh>
      </group>

      <Stars />
      <Nebula />
      <HelloWorldText />
    </>
  );
};

export default InteractivePlanetScene;
