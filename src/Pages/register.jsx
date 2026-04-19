import { useState, useEffect, useRef } from "react";
import "../Styles/register.css";

// ─── STARFIELD ────────────────────────────────────────────────────────────────
function Starfield() {
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    size: Math.random() * 2.5 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: (Math.random() * 4 + 2).toFixed(1) + "s",
    minOp: (Math.random() * 0.2 + 0.05).toFixed(2),
    maxOp: (Math.random() * 0.6 + 0.3).toFixed(2),
    delay: (Math.random() * 5).toFixed(1) + "s",
  }));

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
        <div
          key={s.id}
          className="star"
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

// ─── TERMS MODAL ──────────────────────────────────────────────────────────────
function TermsModal({ onAgree }) {
  return (
    <div className="terms-overlay">
      <div className="terms-modal">
        <div className="terms-header">
          <span className="terms-icon">📋</span>
          <h2>Terms & Conditions</h2>
          <p className="terms-subtitle">TechShastra 2026 — Please read before registering</p>
        </div>
<div className="terms-body">
  <p>By registering for TechShastra 2026, you agree to the following:</p>
  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
    <li>Participants can register for multiple events (solo and/or team) with a single registration.</li>
    <li>Participants must review the event schedule/timeline to avoid clashes.</li>
    <li>It is strongly recommended to read all event details before registration.</li>
  </ul>

  <p style={{ fontWeight: "bold" }}>Registration Fee Structure</p>

  <p style={{ fontWeight: "bold" }}>For NSU Students:</p>
  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
    <li>Solo Participation: ₹250</li>
    <li>Team Participation: ₹250 (per team)</li>
  </ul>

  <p style={{ fontWeight: "bold" }}>For Students from Other Schools/Colleges/Institutes/Universities:</p>
  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
    <li>Solo Participation: ₹500</li>
    <li>Team Participation: ₹500 (per team)</li>
  </ul>

  <p style={{ fontWeight: "bold" }}>Important Notes:</p>
  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
    <li>Registration fees are strictly non-refundable under any circumstances.</li>
    <li>Participants must retain proof of payment for verification purposes.</li>
    <li>Any incorrect or excess payment will not be considered valid and will not be refunded.</li>
    <li>Participants are solely responsible for selecting the correct category (NSU/Other, Solo/Team) before payment.</li>
    <li>The organizing team will not be responsible for registration failures due to incorrect information or payment errors.</li>
    <li>In case of confusion, participants are advised to verify details through official contacts or social media channels before making payment.</li>
  </ul>
</div>

        <div className="terms-footer">
          <button className="btn btn-submit" onClick={onAgree}>
            I Agree & Continue ✦
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Identity" },
  { id: 2, label: "Institute" },
];

const NSUT_NAME = "Netaji Subhas University";

const initialData = {
  // Step 1 – Personal
  fullName: "",
  email: "",
  contactNumber: "",
  whatsappNumber: "",
  gender: "",
  // Step 2 – Institute
  isNSUT: false,
  college: "",
  university: "",
  collegeId: null,
  program: "",
  department: "",
  specifications: "",
};

// ─── VALIDATION ───────────────────────────────────────────────────────────────
function validateStep(step, data) {
  const errors = {};
  if (step === 1) {
    if (!data.fullName.trim()) errors.fullName = "Full name is required";
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Valid email required";
    if (!data.contactNumber.match(/^\+91?\d{10}$/)) errors.contactNumber = "Valid phone required";
    if (!data.whatsappNumber.match(/^\+91?\d{10}$/)) errors.whatsappNumber = "Valid WhatsApp required";
    if (!data.gender) errors.gender = "Select gender";
  }
  if (step === 2) {
    if (!data.college.trim()) errors.college = "College name required";
    if (!data.university.trim()) errors.university = "University required";
    if (!data.collegeId) errors.collegeId = "Upload ID proof";
    if (!data.program) errors.program = "Select program";
    if (!data.department.trim()) errors.department = "Department required";
  }
  return errors;
}

// ─── FIELD COMPONENTS ─────────────────────────────────────────────────────────
function Field({ label, error, children, className }) {
  return (
    <div className={`field-group ${className || ""}`}>
      {label && <label>{label}</label>}
      {children}
      {error && <span className="error-text">⚠ {error}</span>}
    </div>
  );
}

function IconInput({ icon, ...props }) {
  return (
    <div className="input-icon-wrap">
      <span className="input-icon">{icon}</span>
      <input {...props} />
    </div>
  );
}

// ─── STEP 1 – PERSONAL INFO ───────────────────────────────────────────────────
function Step1({ data, onChange, errors }) {
  return (
    <div className="step-enter">
      <p className="section-title">
        <span className="section-icon">👤</span> Personal Information
      </p>
      <div className="form-grid">
        <Field label="Full Name" error={errors.fullName} className="span-2">
          <IconInput
            icon="✦"
            type="text"
            placeholder="Jane Doe"
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
          />
        </Field>

        <Field label="Email Address" error={errors.email}>
          <IconInput
            icon="@"
            type="email"
            placeholder="jane@cosmos.edu"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </Field>

        <Field label="Contact Number" error={errors.contactNumber}>
          <IconInput
            icon="☎"
            type="tel"
            placeholder="+91 98765 43210"
            value={data.contactNumber}
            onChange={(e) => onChange("contactNumber", e.target.value)}
          />
        </Field>

        <Field label="WhatsApp Number" error={errors.whatsappNumber}>
          <IconInput
            icon="💬"
            type="tel"
            placeholder="+91 98765 43210"
            value={data.whatsappNumber}
            onChange={(e) => onChange("whatsappNumber", e.target.value)}
          />
        </Field>

        <Field label="Gender" error={errors.gender}>
          <div className="radio-group">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={data.gender === g}
                  onChange={() => onChange("gender", g)}
                />
                <span className="radio-label">
                  {g === "Male" ? "♂ " : g === "Female" ? "♀ " : "⚬ "}
                  {g}
                </span>
              </label>
            ))}
          </div>
        </Field>
      </div>
    </div>
  );
}

// ─── STEP 2 – INSTITUTE INFO ──────────────────────────────────────────────────
function Step2({ data, onChange, errors }) {
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef();

  function handleFile(file) {
    if (file) onChange("collegeId", file);
  }

  return (
    <div className="step-enter">
      <p className="section-title">
        <span className="section-icon">🏛️</span> Institute Details
      </p>

      {/* ─── NSUT QUICK-FILL CHECKBOX ─────────────────────────────────── */}
      <label className="nsut-checkbox-wrap">
        <input
          type="checkbox"
          checked={data.isNSUT}
          onChange={(e) => onChange("isNSUT", e.target.checked)}
        />
        <span className="nsut-checkbox-label">
          <span className="nsut-badge">NSUT</span>
          I am a student of Netaji Subhas University
        </span>
      </label>

      <div className="form-grid">
        <Field label="College / Institute Name" error={errors.college}>
          <input
            type="text"
            placeholder="Cosmos Institute of Technology"
            value={data.college}
            onChange={(e) => onChange("college", e.target.value)}
            readOnly={data.isNSUT}
            className={data.isNSUT ? "input-autofilled" : ""}
          />
        </Field>

        <Field label="University" error={errors.university}>
          <input
            type="text"
            placeholder="Stellar University"
            value={data.university}
            onChange={(e) => onChange("university", e.target.value)}
            readOnly={data.isNSUT}
            className={data.isNSUT ? "input-autofilled" : ""}
          />
        </Field>

        <Field label="Current Program" error={errors.program}>
          <select
            value={data.program}
            onChange={(e) => onChange("program", e.target.value)}
          >
            <option value="">— Select Program —</option>
            <option>B.Tech / B.E.</option>
            <option>M.Tech / M.E.</option>
            <option>BCA / MCA</option>
            <option>B.Sc / M.Sc</option>
            <option>MBA</option>
            <option>Diploma</option>
            <option>Other</option>
          </select>
        </Field>

        <Field label="Department" error={errors.department}>
          <input
            type="text"
            placeholder="Computer Science"
            value={data.department}
            onChange={(e) => onChange("department", e.target.value)}
          />
        </Field>

        <div className="field-group span-2">
          <label>College ID Proof</label>
          <div
            className={`file-upload-zone ${dragOver ? "drag-over" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFile(e.dataTransfer.files[0]);
            }}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFile(e.target.files[0])}
            />
            <div className="upload-icon">🪪</div>
            <p className="upload-text">Drop your ID here or <u>browse</u></p>
            <p className="upload-hint">JPG, PNG or PDF · Max 5MB</p>
            {data.collegeId && (
              <p className="file-name">✓ {data.collegeId.name}</p>
            )}
          </div>
          {errors.collegeId && (
            <span className="error-text">⚠ {errors.collegeId}</span>
          )}
        </div>

        <div className="field-group span-2">
          <label>Specifications / Additional Info</label>
          <textarea
            placeholder="Year of study, achievements, anything else..."
            value={data.specifications}
            onChange={(e) => onChange("specifications", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

// ─── SUCCESS ──────────────────────────────────────────────────────────────────
function SuccessScreen({ regId }) {
  return (
    <div className="success-screen">
      <div className="success-orbit">
        <div className="success-ring" />
        <div className="success-planet">✓</div>
      </div>
      <h2 className="success-title">Launch Successful!</h2>
      <p className="success-message">
        Your registration has been received.<br />
        Check your email for the confirmation details.
      </p>
      <div className="success-id">
        Registration ID: <span>{regId}</span>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function RegistrationForm({ onSubmit }) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState("");
  const [loading, setLoading] = useState(false);

  // ─── NSUT AUTO-FILL EFFECT ────────────────────────────────────────────────
  useEffect(() => {
    if (data.isNSUT) {
      setData((d) => ({
        ...d,
        college: NSUT_NAME,
        university: NSUT_NAME,
      }));
    } else {
      setData((d) => ({
        ...d,
        college: d.college === NSUT_NAME ? "" : d.college,
        university: d.university === NSUT_NAME ? "" : d.university,
      }));
    }
  }, [data.isNSUT]);

  function onChange(key, val) {
    setData((d) => ({ ...d, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function next() {
    const errs = validateStep(step, data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => s - 1);
    setErrors({});
  }

  async function handleSubmit() {
    const errs = validateStep(2, data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);

    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (k === "collegeId" && v) formData.append("collegeId", v);
      else if (Array.isArray(v)) formData.append(k, JSON.stringify(v));
      else formData.append(k, v ?? "");
    });

    // ── BACKEND HOOK ────────────────────────────────────────────────────────
    // const res = await fetch("https://your-api.com/register", {
    //   method: "POST",
    //   body: formData,
    // });
    // const json = await res.json();
    // setRegId(json.registrationId);
    // ── END BACKEND HOOK ────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 1400));
    const mockId = "EVT-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setRegId(mockId);
    if (onSubmit) onSubmit(formData);

    setLoading(false);
    setSubmitted(true);
  }

  const progress = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <>
      <Starfield />

      {!agreedToTerms && (
        <TermsModal onAgree={() => setAgreedToTerms(true)} />
      )}

      <div className="form-wrapper">
        {/* Header */}
        <div className="form-header">
          <div className="orbit-icon">
            <div className="orbit-ring"><div className="orbit-dot" /></div>
            <div className="planet-core" />
          </div>
          <h1 className="form-title">EVENT REGISTRATION</h1>
          <p className="form-subtitle">TechShastra 2026</p>
        </div>

        {/* Progress */}
        {!submitted && (
          <div className="progress-container">
            <div className="step-labels">
              {STEPS.map((s) => (
                <div
                  key={s.id}
                  className={`step-label ${step === s.id ? "active" : step > s.id ? "done" : ""}`}
                >
                  {s.label}
                </div>
              ))}
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="step-dots">
              {STEPS.map((s) => (
                <div
                  key={s.id}
                  className={`step-dot ${step === s.id ? "active" : step > s.id ? "done" : ""}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Card */}
        <div className="form-card">
          {submitted ? (
            <SuccessScreen regId={regId} />
          ) : (
            <>
              {step === 1 && <Step1 data={data} onChange={onChange} errors={errors} />}
              {step === 2 && <Step2 data={data} onChange={onChange} errors={errors} />}

              <div className="form-nav">
                {step > 1 && (
                  <button className="btn btn-back" onClick={back}>
                    ← Back
                  </button>
                )}
                {step < STEPS.length ? (
                  <button className="btn btn-next" onClick={next}>
                    Continue →
                  </button>
                ) : (
                  <button
                    className="btn btn-submit"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Launching… 🚀" : "Launch Registration ✦"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}