"use client";

import Spline from "@splinetool/react-spline";
import type { Application, SplineEvent } from "@splinetool/runtime";
import { useCallback, useEffect, useRef } from "react";
import { SkillNames } from "@/data/constants";
import { pingSkill } from "@/lib/ping-skill";

// Physical keyboard letter each keycap responds to.
const KEY_CHARS: Record<string, SkillNames> = {
  p: SkillNames.PHP,
  l: SkillNames.LARAVEL,
  y: SkillNames.PYTHON,
  m: SkillNames.MYSQL,
  e: SkillNames.ELOQUENT,
  a: SkillNames.APIS_REST,
  j: SkillNames.JS,
  h: SkillNames.HTML,
  c: SkillNames.CSS,
  r: SkillNames.REACT,
  g: SkillNames.GITHUB,
  i: SkillNames.GIT,
  n: SkillNames.NPM,
  s: SkillNames.VSCODE,
  t: SkillNames.VITE,
};

// Object names as set inside the Spline scene — they don't all match the
// SkillNames enum values, so this bridges the two.
const SPLINE_OBJECT_BY_SKILL: Partial<Record<SkillNames, string>> = {
  [SkillNames.PHP]: "php",
  [SkillNames.LARAVEL]: "laravel",
  [SkillNames.PYTHON]: "python",
  [SkillNames.MYSQL]: "mysql",
  [SkillNames.ELOQUENT]: "eloquent",
  [SkillNames.APIS_REST]: "api",
  [SkillNames.JS]: "javascript",
  [SkillNames.HTML]: "html5",
  [SkillNames.CSS]: "css3",
  [SkillNames.REACT]: "react",
  [SkillNames.GITHUB]: "github",
  [SkillNames.GIT]: "git",
  [SkillNames.NPM]: "npm",
  [SkillNames.VSCODE]: "vscode",
  [SkillNames.VITE]: "vite",
};

const SKILL_BY_SPLINE_OBJECT: Record<string, SkillNames> = Object.fromEntries(
  Object.entries(SPLINE_OBJECT_BY_SKILL).map(([skill, name]) => [name as string, skill as SkillNames])
);

export default function TechStackScene() {
  const appRef = useRef<Application | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // Each keycap's resting Y, captured once so repeated presses (or hover
  // re-firing) always animate from the true rest position instead of
  // compounding off whatever the position happens to be mid-animation.
  const restYRef = useRef<Map<string, number>>(new Map());

  const pressKey = useCallback((skill: SkillNames) => {
    const app = appRef.current;
    const objectName = SPLINE_OBJECT_BY_SKILL[skill];
    if (!app || !objectName) return;
    const obj = app.findObjectByName(objectName);
    if (!obj) return;
    if (!restYRef.current.has(objectName)) restYRef.current.set(objectName, obj.position.y);
    const restY = restYRef.current.get(objectName)!;
    obj.position.y = restY - 6;
    window.setTimeout(() => {
      obj.position.y = restY;
    }, 140);
    pingSkill(skill);
  }, []);

  // Hover only highlights the matching card below — no position animation,
  // since Spline's mouseHover keeps re-firing the whole time the cursor sits
  // over the keycap (not just once on entry), which made a position-based
  // animation compound and sink the key further with every re-fire.
  const hoverKey = useCallback((skill: SkillNames) => {
    pingSkill(skill, { scroll: false });
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const skill = KEY_CHARS[e.key.toLowerCase()];
      if (!skill) return;
      pressKey(skill);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [pressKey]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const MAX_TILT = 16;
    const onMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      wrapper.style.transform = `perspective(1200px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      wrapper.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    };
    wrapper.addEventListener("mousemove", onMove);
    wrapper.addEventListener("mouseleave", onLeave);
    return () => {
      wrapper.removeEventListener("mousemove", onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleLoad = useCallback((app: Application) => {
    appRef.current = app;
    app.setZoom(1.15);
    app.addEventListener("mouseDown", (e: SplineEvent) => {
      const skill = SKILL_BY_SPLINE_OBJECT[e.target.name];
      if (skill) pressKey(skill);
    });
    app.addEventListener("mouseHover", (e: SplineEvent) => {
      const skill = SKILL_BY_SPLINE_OBJECT[e.target.name];
      if (skill) hoverKey(skill);
    });
  }, [pressKey, hoverKey]);

  return (
    <div
      ref={wrapperRef}
      style={{ width: "100%", height: "100%", transition: "transform 0.3s ease-out", pointerEvents: "auto" }}
    >
      <Spline
        scene="https://prod.spline.design/a9akO3RRAsfz73Au/scene.splinecode"
        onLoad={handleLoad}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
