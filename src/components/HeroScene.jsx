import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Sparkles,
  Text,
} from "@react-three/drei";
import * as THREE from "three";

/* =========================================================
   CENTRAL AMA
========================================================= */

function CentralAMA() {
  const glowRef = useRef();
  const textRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (textRef.current) {
      // Tiny floating motion only.
      textRef.current.position.y =
        Math.sin(t * 0.75) * 0.035;

      // Very subtle response to cursor.
      textRef.current.rotation.x =
        THREE.MathUtils.lerp(
          textRef.current.rotation.x,
          state.pointer.y * 0.035,
          0.035
        );

      textRef.current.rotation.y =
        THREE.MathUtils.lerp(
          textRef.current.rotation.y,
          state.pointer.x * 0.05,
          0.035
        );
    }

    if (glowRef.current) {
      const pulse =
        1 +
        Math.sin(t * 1.8) * 0.035;

      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={textRef}>

      {/* Extremely subtle glow behind AMA.
          Not a shape — just light. */}

      <pointLight
        ref={glowRef}
        position={[0, 0, 0]}
        intensity={2.8}
        distance={4}
        color="#ff1493"
      />

      {/* Main AMA */}

      <Text
        position={[0, 0, 0]}
        fontSize={0.72}
        letterSpacing={0.07}
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
        outlineWidth={0.025}
        outlineColor="#ff1493"
        material-toneMapped={false}
      >
        AMA
      </Text>

      {/* Tiny blue depth edge */}

      <Text
        position={[0, 0, -0.025]}
        fontSize={0.72}
        letterSpacing={0.07}
        anchorX="center"
        anchorY="middle"
        color="#38bdf8"
        transparent
        opacity={0.22}
        material-toneMapped={false}
      >
        AMA
      </Text>

    </group>
  );
}


/* =========================================================
   3D ORBITAL WORD
========================================================= */

function OrbitWord({
  text,
  radiusX,
  radiusZ,
  height,
  speed,
  phase,
  color,
  size = 0.15,
  depth = 0,
}) {
  const group = useRef();
  const textMesh = useRef();
  const { camera } = useThree();

  useFrame((state) => {
    if (!group.current) return;

    const t =
      state.clock.elapsedTime * speed +
      phase;

    /*
      True 3D elliptical orbit.

      x = horizontal movement
      z = depth movement
      y = vertical movement
    */

    group.current.position.x =
      Math.cos(t) * radiusX;

    group.current.position.z =
      Math.sin(t) * radiusZ + depth;

    group.current.position.y =
      height +
      Math.sin(t * 1.7 + phase) * 0.18;

    /*
      Keep the words readable.

      They physically move through 3D space,
      but always face the camera like premium
      motion-graphics typography.
    */

    if (textMesh.current) {
      textMesh.current.quaternion.slerp(
        camera.quaternion,
        0.14
      );
    }

    /*
      Small individual rotation creates a
      little dimensional motion.
    */

    group.current.rotation.z =
      Math.sin(t) * 0.08;
  });

  return (
    <group ref={group}>

      {/* soft energy behind each word */}

      <pointLight
        position={[0, 0, -0.1]}
        color={color}
        intensity={0.3}
        distance={1.7}
      />

      {/* WORD */}

      <Text
        ref={textMesh}
        fontSize={size}
        letterSpacing={0.025}
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
        outlineWidth={0.012}
        outlineColor={color}
        material-toneMapped={false}
      >
        {text}
      </Text>

    </group>
  );
}


/* =========================================================
   ORBITAL LINE
========================================================= */

function OrbitalLine({
  radiusX,
  radiusZ,
  rotation,
  color,
  speed,
  opacity,
  thickness = 0.008,
}) {
  const ref = useRef();

  /*
    Build the ellipse from many points.
    This gives us much more control than a simple torus
    and allows genuine 3D tilted orbital paths.
  */

  const points = useMemo(() => {
    const result = [];

    const segments = 160;

    for (let i = 0; i <= segments; i++) {
      const t =
        (i / segments) *
        Math.PI *
        2;

      result.push(
        new THREE.Vector3(
          Math.cos(t) * radiusX,
          0,
          Math.sin(t) * radiusZ
        )
      );
    }

    return result;
  }, [radiusX, radiusZ]);

  const geometry = useMemo(() => {
    const curve =
      new THREE.CatmullRomCurve3(
        points,
        true,
        "centripetal"
      );

    return curve.getPoints(260);
  }, [points]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x +=
      delta * speed;

    ref.current.rotation.y +=
      delta * speed * 0.17;

    ref.current.rotation.z +=
      delta * speed * 0.08;
  });

  return (
    <group
      ref={ref}
      rotation={rotation}
    >

      <line>
        <bufferGeometry
          attach="geometry"
          onUpdate={(geometry) => {
            const positions = new Float32Array(
              geometry.pointsArray?.length || 0
            );

            if (geometry.pointsArray) {
              geometry.pointsArray.forEach(
                (point, index) => {
                  positions[index * 3] =
                    point.x;

                  positions[index * 3 + 1] =
                    point.y;

                  positions[index * 3 + 2] =
                    point.z;
                }
              );
            }
          }}
        />
      </line>

      {/* Main orbit */}

      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={geometry.length}
            array={new Float32Array(
              geometry.flatMap((p) => [
                p.x,
                p.y,
                p.z,
              ])
            )}
            itemSize={3}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color={color}
          transparent
          opacity={opacity}
          blending={THREE.AdditiveBlending}
        />
      </line>

      {/* Soft secondary glow line */}

      <line scale={1.012}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={geometry.length}
            array={new Float32Array(
              geometry.flatMap((p) => [
                p.x,
                p.y,
                p.z,
              ])
            )}
            itemSize={3}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color={color}
          transparent
          opacity={opacity * 0.22}
          blending={THREE.AdditiveBlending}
        />
      </line>

    </group>
  );
}


/* =========================================================
   ORBITING ENERGY DOT
========================================================= */

function OrbitDot({
  radiusX,
  radiusZ,
  height,
  speed,
  phase,
  color,
}) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const t =
      state.clock.elapsedTime * speed +
      phase;

    ref.current.position.x =
      Math.cos(t) * radiusX;

    ref.current.position.z =
      Math.sin(t) * radiusZ;

    ref.current.position.y =
      height +
      Math.sin(t * 1.6) * 0.15;
  });

  return (
    <group ref={ref}>

      <mesh>
        <sphereGeometry
          args={[0.035, 16, 16]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.95}
        />
      </mesh>

      <pointLight
        color={color}
        intensity={0.7}
        distance={1.3}
      />

    </group>
  );
}


/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>

      {/* ===================================================
          DARK CINEMATIC LIGHTING
      =================================================== */}

      <ambientLight intensity={0.16} />

      <pointLight
        position={[3, 2, 2]}
        intensity={2.6}
        distance={7}
        color="#ff1493"
      />

      <pointLight
        position={[-3, -1, 2]}
        intensity={2.2}
        distance={7}
        color="#38bdf8"
      />

      <pointLight
        position={[0, 3, -2]}
        intensity={1.2}
        distance={5}
        color="#a855f7"
      />


      {/* ===================================================
          CENTER
      =================================================== */}

      <CentralAMA />


      {/* ===================================================
          THREE LARGE REVOLUTIONARY PATHS
      =================================================== */}

      <OrbitalLine
        radiusX={1.55}
        radiusZ={0.72}
        rotation={[
          Math.PI / 2.15,
          0,
          0
        ]}
        color="#ff1493"
        speed={0.34}
        opacity={0.78}
      />

      <OrbitalLine
        radiusX={1.85}
        radiusZ={0.82}
        rotation={[
          0.78,
          0.35,
          0.18
        ]}
        color="#38bdf8"
        speed={-0.25}
        opacity={0.58}
      />

      <OrbitalLine
        radiusX={2.1}
        radiusZ={0.94}
        rotation={[
          1.05,
          -0.35,
          0.4
        ]}
        color="#a855f7"
        speed={0.19}
        opacity={0.4}
      />


      {/* ===================================================
          INNER WORD ORBITS
      =================================================== */}

      <OrbitWord
        text="CODE"
        radiusX={1.35}
        radiusZ={0.68}
        height={0.42}
        speed={0.62}
        phase={0}
        color="#ff1493"
        size={0.16}
        depth={0.05}
      />

      <OrbitWord
        text="BUILD"
        radiusX={1.38}
        radiusZ={0.7}
        height={-0.43}
        speed={-0.52}
        phase={1.7}
        color="#38bdf8"
        size={0.16}
        depth={0.08}
      />

      <OrbitWord
        text="INNOVATE"
        radiusX={1.5}
        radiusZ={0.74}
        height={0.08}
        speed={0.44}
        phase={3.35}
        color="#a855f7"
        size={0.14}
        depth={0.1}
      />


      {/* ===================================================
          OUTER WORD ORBITS
      =================================================== */}

      <OrbitWord
        text="PROJECTS"
        radiusX={1.9}
        radiusZ={0.9}
        height={0.52}
        speed={-0.32}
        phase={0.9}
        color="#38bdf8"
        size={0.145}
        depth={0.14}
      />

      <OrbitWord
        text="AI"
        radiusX={2.0}
        radiusZ={0.97}
        height={-0.5}
        speed={0.26}
        phase={2.7}
        color="#ff1493"
        size={0.19}
        depth={0.16}
      />

      <OrbitWord
        text="SOFTWARE"
        radiusX={2.04}
        radiusZ={1}
        height={0.05}
        speed={-0.22}
        phase={4.65}
        color="#f5c76a"
        size={0.125}
        depth={0.2}
      />

      <OrbitWord
        text="DIGITAL"
        radiusX={2.13}
        radiusZ={1.02}
        height={0.67}
        speed={0.18}
        phase={5.4}
        color="#a855f7"
        size={0.12}
        depth={0.24}
      />


      {/* ===================================================
          MORE 3D ORBITING WORDS
      =================================================== */}

      <OrbitWord
        text="CREATE"
        radiusX={2.15}
        radiusZ={1.04}
        height={-0.05}
        speed={0.16}
        phase={1.2}
        color="#38bdf8"
        size={0.115}
        depth={0.26}
      />

      <OrbitWord
        text="IDEAS"
        radiusX={1.76}
        radiusZ={0.86}
        height={-0.72}
        speed={-0.29}
        phase={4.1}
        color="#ff1493"
        size={0.13}
        depth={0.12}
      />


      {/* ===================================================
          ORBITING LIGHT POINTS
      =================================================== */}

      <OrbitDot
        radiusX={1.58}
        radiusZ={0.74}
        height={0.28}
        speed={0.72}
        phase={0}
        color="#ff1493"
      />

      <OrbitDot
        radiusX={1.9}
        radiusZ={0.91}
        height={-0.22}
        speed={-0.47}
        phase={1.8}
        color="#38bdf8"
      />

      <OrbitDot
        radiusX={2.08}
        radiusZ={1}
        height={0.37}
        speed={0.28}
        phase={3.2}
        color="#a855f7"
      />

      <OrbitDot
        radiusX={2.14}
        radiusZ={1.04}
        height={-0.42}
        speed={-0.2}
        phase={5}
        color="#f5c76a"
      />


      {/* ===================================================
          VERY SUBTLE PARTICLE FIELD
      =================================================== */}

      <Sparkles
        count={130}
        scale={[5.5, 4.5, 5.5]}
        size={1.05}
        speed={0.14}
        noise={1}
        color="#ffffff"
      />

      <Sparkles
        count={35}
        scale={[4.5, 4, 4.5]}
        size={1.6}
        speed={0.06}
        noise={0.8}
        color="#ff1493"
      />


      <Environment preset="night" />

    </>
  );
}


/* =========================================================
   HERO SCENE
========================================================= */

export default function HeroScene() {
  return (
    <div className="hero-scene">

      <Canvas
        camera={{
          position: [0, 0, 6.4],
          fov: 40,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >

        <Suspense fallback={null}>
          <Scene />
        </Suspense>

      </Canvas>

    </div>
  );
}