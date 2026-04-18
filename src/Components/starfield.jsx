// ─── DROP THIS INSIDE <div className="starfield"> ─────────────────────────
// Place it right after the three .nebula-glow divs, before the stars.map()

<>
  {/* ── Large planet system — top-right ── */}
  <div className="orbit-system-tr">
    <div className="orbit-ring-1" />
    <div className="orbit-ring-2" />
    <div className="planet-main" />
  </div>

  {/* ── Small planet system — bottom-left ── */}
  <div className="orbit-system-bl">
    <div className="orbit-ring-1" />
    <div className="planet-main" />
  </div>
</>

// So your full Starfield return looks like:
/*
  return (
    <div className="starfield">
      <div className="nebula-glow nebula-1" />
      <div className="nebula-glow nebula-2" />
      <div className="nebula-glow nebula-3" />

      <div className="orbit-system-tr">
        <div className="orbit-ring-1" />
        <div className="orbit-ring-2" />
        <div className="planet-main" />
      </div>

      <div className="orbit-system-bl">
        <div className="orbit-ring-1" />
        <div className="planet-main" />
      </div>

      {stars.map((s) => (
        <div key={s.id} className="star" style={{ ... }} />
      ))}
    </div>
  );
*/
