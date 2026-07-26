// Called by tech-stack-scene.tsx when a keycap is pressed (click or matching
// physical key). Scrolls to and briefly flashes the matching card in the
// skills grid — ties the 3D keyboard to real content instead of it just
// sitting there decoratively.
export function pingSkill(skillName: string) {
  const el = document.getElementById(`skill-${skillName}`);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.remove("is-pinged");
  void el.offsetWidth; // restart the animation if the same skill is pinged twice in a row
  el.classList.add("is-pinged");
  window.setTimeout(() => el.classList.remove("is-pinged"), 1200);
}
