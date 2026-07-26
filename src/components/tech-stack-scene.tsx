"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Html, ContactShadows } from "@react-three/drei";
import type { Group } from "three";
import { SKILLS, SkillNames } from "@/data/constants";
import { pingSkill } from "@/lib/ping-skill";

// Physical keyboard letter each keycap responds to. Kept separate from
// SkillNames so this component doesn't have to touch constants.ts.
const KEY_CHARS: Partial<Record<SkillNames, string>> = {
  [SkillNames.PHP]: "P",
  [SkillNames.LARAVEL]: "L",
  [SkillNames.PYTHON]: "Y",
  [SkillNames.MYSQL]: "M",
  [SkillNames.JS]: "J",
  [SkillNames.REACT]: "R",
  [SkillNames.HTML]: "H",
  [SkillNames.CSS]: "C",
  [SkillNames.GITHUB]: "G",
  [SkillNames.ELOQUENT]: "E",
  [SkillNames.APIS_REST]: "A",
  [SkillNames.VSCODE]: "V",
};

const KEYS = Object.entries(KEY_CHARS).map(([name, keyChar]) => {
  const skill = SKILLS[name as SkillNames];
  return {
    name: name as SkillNames,
    keyChar: keyChar as string,
    label: skill.label,
    color: skill.color,
    icon: skill.icon,
  };
});

const COLS = 4;
const ROWS = 3;
const GAP_X = 1.9;
const GAP_Z = 7;
// Small per-row horizontal cascade, like a real keyboard's row stagger —
// also keeps labels from adjacent rows drifting into the same screen area.
const ROW_STAGGER = [-0.4, 0, 0.4];

type KeycapProps = {
  label: string;
  color: string;
  icon: string;
  x: number;
  z: number;
  active: boolean;
  onDown: () => void;
  onUp: () => void;
};

function Keycap({ label, color, icon, x, z, active, onDown, onUp }: KeycapProps) {
  const pressRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!pressRef.current) return;
    const targetY = active ? -0.1 : hovered ? 0.035 : 0;
    pressRef.current.position.y += (targetY - pressRef.current.position.y) * 0.35;
  });

  return (
    <group position={[x, 0, z]}>
      <group
        ref={pressRef}
        onPointerDown={(e) => {
          e.stopPropagation();
          onDown();
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          onUp();
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => {
          setHovered(false);
          onUp();
        }}
      >
        <RoundedBox args={[0.82, 0.3, 0.82]} radius={0.09} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
        </RoundedBox>
        <Html center position={[0, 0.18, 0]} occlude style={{ pointerEvents: "none" }}>
          <div className="keycap-content">
            <img src={icon} alt="" className="keycap-icon" />
            <span className="keycap-label">{label}</span>
          </div>
        </Html>
      </group>
    </group>
  );
}

// Fixed angle, no per-frame rotation math — a live-updating angle kept
// drifting into bad-looking (near edge-on) views depending on cursor
// position/timing. Static framing is the reliable choice here.
function Rig({ children }: { children: React.ReactNode }) {
  return <group rotation={[-0.62, 0, 0]}>{children}</group>;
}

export default function TechStackScene() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const update = () => setNarrow(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const positions = KEYS.map((k, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    return {
      ...k,
      x: (col - (COLS - 1) / 2) * GAP_X + ROW_STAGGER[row],
      z: (row - (ROWS - 1) / 2) * GAP_Z,
    };
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const k = KEYS.find((item) => item.keyChar.toLowerCase() === e.key.toLowerCase());
      if (!k) return;
      setActiveKey(k.keyChar);
      pingSkill(k.name);
    };
    const up = (e: KeyboardEvent) => {
      const k = KEYS.find((item) => item.keyChar.toLowerCase() === e.key.toLowerCase());
      if (!k) return;
      setActiveKey((cur) => (cur === k.keyChar ? null : cur));
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      orthographic
      camera={{ position: [-0.05, 4, 7.1], zoom: narrow ? 52 : 70, near: 0.1, far: 30 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-4, 2, -3]} intensity={0.35} />

      <Suspense fallback={null}>
        {/* rotationIntensity must stay 0 — any rotation drift swings the whole
            keyboard toward the near edge-on angle the static Rig below was
            written to avoid (see Rig's comment). Only vertical bob is safe. */}
        <Float speed={1.2} rotationIntensity={0} floatIntensity={0.35} floatingRange={[-0.05, 0.12]}>
          <Rig>
            {positions.map((k) => (
              <Keycap
                key={k.keyChar}
                label={k.label}
                color={k.color}
                icon={k.icon}
                x={k.x}
                z={k.z}
                active={activeKey === k.keyChar}
                onDown={() => {
                  setActiveKey(k.keyChar);
                  pingSkill(k.name);
                }}
                onUp={() => setActiveKey((cur) => (cur === k.keyChar ? null : cur))}
              />
            ))}
          </Rig>
        </Float>
        <ContactShadows position={[0, -0.25, 0]} opacity={0.45} scale={11} blur={2.4} far={2} />
      </Suspense>
    </Canvas>
  );
}
