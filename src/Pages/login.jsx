import { useState, useRef, useEffect } from "react";
import "../Styles/login.css";

// ─── STARFIELD ────────────────────────────────────────────────────────────────
function Starfield() {
  const stars = Array.from({ length: 110 }, (_, i) => ({
    id: i,
    size: Math.random() * 2.4 + 0.4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: (Math.random() * 4 + 2).toFixed(1) + "s",
    minOp: (Math.random() * 0.15 + 0.04).toFixed(2),
    maxOp: (Math.random() * 0.55 + 0.25).toFixed(2),
    delay: (Math.random() * 6).toFixed(1) + "s",
  }));

  return (
    <div className="lg-starfield">
      <div className="lg-nebula lg-nebula-1" />
      <div className="lg-nebula lg-nebula-2" />
      <div className="lg-nebula lg-nebula-3" />

      {/* Large planet — top right */}
      <div className="lg-orbit-tr">
        <div className="lg-ring lg-ring-1" />
        <div className="lg-ring lg-ring-2" />
        <div className="lg-ring lg-ring-3" />
        <div className="lg-planet-main">
          <div className="lg-planet-band" />
          <div className="lg-planet-shine" />
        </div>
      </div>

      {/* Small planet — bottom left */}
      <div className="lg-orbit-bl">
        <div className="lg-ring lg-ring-1" />
        <div className="lg-planet-sm">
          <div className="lg-planet-shine" />
        </div>
      </div>

      {/* Micro planet — mid left */}
      <div className="lg-orbit-ml">
        <div className="lg-ring lg-ring-1" />
        <div className="lg-planet-xs" />
      </div>

      {stars.map((s) => (
        <div
          key={s.id}
          className="lg-star"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            "--dur": s.dur,
            "--min-op": s.minOp,
            "--max-op": s.maxOp,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

// ─── SHOOTING STAR ────────────────────────────────────────────────────────────
function ShootingStars() {
  return (
    <div className="lg-shooting-stars" aria-hidden="true">
      {[...Array(4)].map((_, i) => (
        <div key={i} className={`lg-shoot lg-shoot-${i + 1}`} />
      ))}
    </div>
  );
}

// ─── MAIN LOGIN COMPONENT ─────────────────────────────────────────────────────
export default function LoginPage({ onLogin }) {
  const [mode, setMode] = useState("login"); // "login" | "forgot"
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors] = useState({});

  function onChange(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate() {
    const errs = {};
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = "Enter a valid email";
    if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    return errs;
  }

  async function handleLogin() {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    if (onLogin) onLogin(form);
  }

  async function handleForgot() {
    if (!forgotEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrors({ forgotEmail: "Enter a valid email" });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setForgotSent(true);
  }

  return (
    <>
      <Starfield />
      <ShootingStars />

      <div className="lg-wrapper">
        <div className="lg-card">
          {/* ── Glow halo behind card ── */}
          <div className="lg-card-halo" />

          {/* ── Header ── */}
          <div className="lg-header">
            <div className="lg-icon">
              <div className="lg-icon-ring" />
              <div className="lg-icon-ring lg-icon-ring-2" />
              <div className="lg-icon-core" />
            </div>
            <h1 className="lg-title">
              {mode === "forgot" ? "Recover Access" : "Mission Control"}
            </h1>
            <p className="lg-subtitle">
              {mode === "forgot"
                ? "We'll beam a reset link to your coordinates"
                : "TECHSHASTRA 2026"}
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="lg-divider">
            <span className="lg-divider-line" />
            <span className="lg-divider-dot" />
            <span className="lg-divider-line" />
          </div>

          {/* ── Forms ── */}
          {success ? (
            <SuccessState name={form.email.split("@")[0]} />
          ) : mode === "login" ? (
            <LoginForm
              form={form}
              errors={errors}
              showPass={showPass}
              loading={loading}
              onChange={onChange}
              onTogglePass={() => setShowPass((v) => !v)}
              onSubmit={handleLogin}
              onForgot={() => { setMode("forgot"); setErrors({}); }}
            />
          ) : (
            <ForgotForm
              email={forgotEmail}
              setEmail={setForgotEmail}
              error={errors.forgotEmail}
              loading={loading}
              sent={forgotSent}
              onSubmit={handleForgot}
              onBack={() => { setMode("login"); setErrors({}); setForgotSent(false); }}
            />
          )}
        </div>

        {/* ── Register link ── */}
        {mode === "login" && !success && (
          <p className="lg-register-link">
            New to the mission?{" "}
            <a href="/register" className="lg-link">Request clearance →</a>
          </p>
        )}
      </div>
    </>
  );
}

// ─── LOGIN FORM ───────────────────────────────────────────────────────────────
function LoginForm({ form, errors, showPass, loading, onChange, onTogglePass, onSubmit, onForgot }) {
  return (
    <div className="lg-form-body">
      {/* Email */}
      <div className="lg-field">
        <label className="lg-label">Email Address</label>
        <div className="lg-input-wrap">
          <span className="lg-input-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </span>
          <input
            className={`lg-input ${errors.email ? "lg-input-err" : ""}`}
            type="email"
            placeholder="you@cosmos.edu"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            autoComplete="email"
          />
        </div>
        {errors.email && <span className="lg-error">⚠ {errors.email}</span>}
      </div>

      {/* Password */}
      <div className="lg-field">
        <div className="lg-label-row">
          <label className="lg-label">Password</label>
          <button className="lg-forgot-btn" type="button" onClick={onForgot}>
            Forgot password?
          </button>
        </div>
        <div className="lg-input-wrap">
          <span className="lg-input-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </span>
          <input
            className={`lg-input lg-input-pass ${errors.password ? "lg-input-err" : ""}`}
            type={showPass ? "text" : "password"}
            placeholder="••••••••••"
            value={form.password}
            onChange={(e) => onChange("password", e.target.value)}
            autoComplete="current-password"
          />
          <button className="lg-eye-btn" type="button" onClick={onTogglePass} tabIndex={-1}>
            {showPass ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>
        {errors.password && <span className="lg-error">⚠ {errors.password}</span>}
      </div>

      {/* Remember me */}
      <label className="lg-remember">
        <input
          type="checkbox"
          checked={form.remember}
          onChange={(e) => onChange("remember", e.target.checked)}
        />
        <span className="lg-checkbox-custom" />
        <span className="lg-remember-text">Keep me signed in</span>
      </label>

      {/* Submit */}
      <button
        className="lg-btn-primary"
        type="button"
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="lg-spinner" />
            Authenticating…
          </>
        ) : (
          <>
            <span>Enter Mission Control</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </>
        )}
      </button>

      {/* OR divider */}
      <div className="lg-or">
        <span className="lg-or-line" />
        <span className="lg-or-text">or continue with</span>
        <span className="lg-or-line" />
      </div>

      {/* Social */}
      <div className="lg-socials">
        <button className="lg-social-btn" type="button">
          <svg width="17" height="17" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Google
        </button>
        <button className="lg-social-btn" type="button">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </button>
      </div>
    </div>
  );
}

// ─── FORGOT FORM ──────────────────────────────────────────────────────────────
function ForgotForm({ email, setEmail, error, loading, sent, onSubmit, onBack }) {
  return (
    <div className="lg-form-body">
      {sent ? (
        <div className="lg-sent-state">
          <div className="lg-sent-icon">✦</div>
          <p className="lg-sent-title">Transmission Sent</p>
          <p className="lg-sent-desc">
            A reset link has been beamed to<br />
            <strong>{email}</strong>
          </p>
          <button className="lg-btn-ghost" type="button" onClick={onBack}>
            ← Return to login
          </button>
        </div>
      ) : (
        <>
          <div className="lg-field">
            <label className="lg-label">Your Email Address</label>
            <div className="lg-input-wrap">
              <span className="lg-input-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <input
                className={`lg-input ${error ? "lg-input-err" : ""}`}
                type="email"
                placeholder="you@cosmos.edu"
                value={email}
                onChange={(e) => { setEmail(e.target.value); }}
                autoComplete="email"
              />
            </div>
            {error && <span className="lg-error">⚠ {error}</span>}
          </div>

          <button
            className="lg-btn-primary"
            type="button"
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? (
              <><span className="lg-spinner" /> Sending…</>
            ) : (
              "Send Reset Link ✦"
            )}
          </button>

          <button className="lg-btn-ghost" type="button" onClick={onBack}>
            ← Back to login
          </button>
        </>
      )}
    </div>
  );
}

// ─── SUCCESS STATE ────────────────────────────────────────────────────────────
function SuccessState({ name }) {
  return (
    <div className="lg-success">
      <div className="lg-success-orbit">
        <div className="lg-success-ring" />
        <div className="lg-success-planet">✓</div>
      </div>
      <p className="lg-success-title">Welcome back, {name}</p>
      <p className="lg-success-sub">Identity confirmed. Redirecting…</p>
      <div className="lg-success-bar">
        <div className="lg-success-fill" />
      </div>
    </div>
  );
}
