// Called by tech-stack-scene.tsx when a keycap is pressed (click or matching
// physical key) or hovered. Briefly flashes the matching card in the skills
// grid — ties the 3D keyboard to real content instead of it just sitting
// there decoratively.
//
// `scroll` defaults to true (click/key-press: a deliberate one-off action).
// Hover passes `scroll: false` — Spline's mouseHover event keeps re-firing
// the whole time the cursor sits over a keycap, and scrolling on every
// re-fire would fight the user's own scrolling.
export function pingSkill(skillName: string, { scroll = true }: { scroll?: boolean } = {}) {
  const el = document.getElementById(`skill-${skillName}`);
  if (!el) return;
  if (scroll) el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.remove("is-pinged");
  void el.offsetWidth; // restart the animation if the same skill is pinged twice in a row
  el.classList.add("is-pinged");
  window.setTimeout(() => el.classList.remove("is-pinged"), 1200);
}
