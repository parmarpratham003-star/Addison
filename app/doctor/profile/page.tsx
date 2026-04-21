"use client";

import { useEffect, useState, useRef } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function DoctorProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    specialty: "",
    credentials: "",
    location: "",
    languages: "",
    type: "",
    phone: "",
    email: "",
    address: "",
    bio: "",
  });

  const [savedForm, setSavedForm] = useState(form);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [savedPreview, setSavedPreview] = useState("");

  // ✅ Load saved profile on mount
  useEffect(() => {
    fetch("/api/doctor-profile")
      .then((res) => res.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setForm((prev) => ({ ...prev, ...data }));
          setSavedForm((prev) => ({ ...prev, ...data }));
          if (data.image) {
            setPreview(data.image);
            setSavedPreview(data.image);
          }
        }
      })
      .then(() =>
        fetch("/api/me")
          .then((res) => res.json())
          .then((user) => {
            if (!user) return;
            setForm((prev) => ({
              ...prev,
              name: prev.name || user.name || "",
              email: prev.email || user.email || "",
            }));
            setSavedForm((prev) => ({
              ...prev,
              name: prev.name || user.name || "",
              email: prev.email || user.email || "",
            }));
          })
      )
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleCancel = () => {
    setForm(savedForm);
    setPreview(savedPreview);
    setFile(null);
    setIsEditing(false);
  };

  const handleSave = async () => {
    setSaving(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      formData.append(key, value || "")
    );
    if (file) formData.append("file", file);

    const res = await fetch("/api/doctor-profile", {
      method: "POST",
      body: formData,
    });
    setSaving(false);

    if (!res.ok) {
      alert("Error saving profile");
      return;
    }

    const updated = await res.json();
    setForm((prev) => ({ ...prev, ...updated }));
    setSavedForm((prev) => ({ ...prev, ...updated }));
    if (updated.image) {
      setPreview(updated.image);
      setSavedPreview(updated.image);
    }
    setFile(null);
    setIsEditing(false);
  };

  const completionFields = [
    form.name,
    form.email,
    form.specialty,
    form.location,
    form.phone,
    form.bio,
    form.languages,
  ];
  const percent = Math.round(
    (completionFields.filter(Boolean).length / completionFields.length) * 100
  );

  const inputCls = `${outfit.className} w-full px-4 py-2.5 text-[13px] font-light
    border border-[#2d3c59]/12 bg-[#f5f5f5] text-[#2d3c59]
    placeholder-[#2d3c59]/30 outline-none
    focus:border-[#2d3c59]/30 focus:bg-white
    transition-all duration-200`;

  const Field = ({ label, value }: { label: string; value: string }) => (
    <div>
      <p
        className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38 mb-1`}
      >
        {label}
      </p>
      <p className={`${outfit.className} text-[13px] sm:text-[13.5px] font-light leading-[1.8] text-[#2d3c59]/70`}>
        {value || (
          <span className="text-[#2d3c59]/25 italic">Not provided</span>
        )}
      </p>
    </div>
  );

  // ✅ Loading state
  if (loading) {
    return (
      <div className={`${outfit.className} min-h-screen bg-[#f5f5f5] flex items-center justify-center`}>
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border border-[#2d3c59]/20 border-t-[#2d3c59] rounded-full animate-spin mx-auto" />
          <p className="text-[12px] font-light text-[#2d3c59]/45 tracking-wide">
            Loading your profile…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${outfit.className} min-h-screen bg-[#f5f5f5] relative overflow-hidden`}>

      {/* Background blobs — same as UserTypeSection */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#eaebd0] opacity-45 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[96px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16">
        <div className="lg:pl-8 xl:pl-12">

          {/* ── PAGE HEADER ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 sm:gap-4 mb-5 sm:mb-9">
            <h1
              className={`${cormorant.className} text-[2rem] sm:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.9] text-[#2d3c59] tracking-tight`}
            >
              {isEditing ? (
                <>
                  Edit{" "}
                  <span className="font-normal text-[#2d3c59]/65">Profile</span>
                </>
              ) : (
                <>
                  Doctor{" "}
                  <span className="font-normal text-[#2d3c59]/65">Profile</span>
                </>
              )}
            </h1>

            <div className="flex items-center gap-3 sm:pb-0.5">
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  style={{ borderRadius: "3px" }}
                  className={`${outfit.className} inline-flex items-center gap-2 px-5 py-[9px]
                    text-[10px] font-medium tracking-[0.08em] uppercase
                    text-[#eaebd0] bg-[#2d3c59]
                    shadow-[0_2px_10px_rgba(45,60,89,0.18)]
                    transition-all duration-200
                    hover:shadow-[0_4px_18px_rgba(45,60,89,0.28)] hover:-translate-y-px
                    group`}
                >
                  <span>Edit Profile</span>
                  <svg
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* ── PHOTO + IDENTITY STRIP ── */}
          <div className="border-t border-[#2d3c59]/10">
            <div className="border-b border-[#2d3c59]/10 py-5 sm:py-7 px-3 sm:px-7 flex items-center gap-5 sm:gap-8 bg-[#2d3c59]/[0.03]">

              {/* Avatar */}
              <div className="relative group shrink-0">
                {preview ? (
                  <img
                    src={preview}
                    alt="Profile"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover border border-[#2d3c59]/15"
                    style={{ borderRadius: "3px" }}
                  />
                ) : (
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2d3c59]/[0.06] border border-dashed border-[#2d3c59]/20 flex items-center justify-center"
                    style={{ borderRadius: "3px" }}
                  >
                    <svg className="w-5 h-5 text-[#2d3c59]/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}

                {isEditing && (
                  <label
                    className="absolute inset-0 flex items-center justify-center bg-[#2d3c59]/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    style={{ borderRadius: "3px" }}
                  >
                    <span className={`${outfit.className} text-[#eaebd0] text-[10px] font-medium tracking-wide`}>
                      Change
                    </span>
                    <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
                  </label>
                )}
              </div>

              {/* Name + specialty */}
              <div className="flex-1 min-w-0">
                <p className={`${cormorant.className} text-[1.3rem] sm:text-[1.6rem] font-semibold leading-tight text-[#2d3c59] truncate`}>
                  {form.name || "Your name"}
                </p>
                <p className={`${outfit.className} text-[11px] sm:text-[12px] font-light text-[#2d3c59]/48 mt-0.5 truncate`}>
                  {form.specialty || (
                    <span className="italic text-[#2d3c59]/28">Specialization</span>
                  )}
                </p>
                {form.location && (
                  <p className={`${outfit.className} text-[10px] text-[#2d3c59]/35 mt-1 truncate`}>
                    {form.location}
                  </p>
                )}
              </div>

              {/* Completion ring — edit mode only */}
              {isEditing && (
                <div className="hidden sm:flex items-center gap-3 shrink-0">
                  <div className="relative w-10 h-10">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                      <circle
                        cx="18" cy="18" r="15.9" fill="none"
                        stroke={percent === 100 ? "#16a34a" : "#2d3c59"}
                        strokeWidth="3"
                        strokeDasharray={`${percent} ${100 - percent}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className={`${outfit.className} absolute inset-0 flex items-center justify-center text-[9px] font-medium text-[#2d3c59]`}>
                      {percent}%
                    </span>
                  </div>
                  <div>
                    <p className={`${outfit.className} text-[11px] font-medium text-[#2d3c59]`}>
                      {percent === 100 ? "Complete" : "Incomplete"}
                    </p>
                    <p className={`${outfit.className} text-[10px] font-light text-[#2d3c59]/40`}>
                      {percent === 100 ? "Visible in search" : "Fill all fields"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── VIEW MODE ── */}
          {!isEditing && (
            <div className="border-b border-[#2d3c59]/10">

              {/* Empty state */}
              {!form.specialty && !form.phone && !form.bio && (
                <div className="py-12 px-3 sm:px-7 text-center">
                  <p className={`${outfit.className} text-[13px] font-light text-[#2d3c59]/45`}>
                    Your profile is empty.{" "}
                    <button
                      onClick={() => setIsEditing(true)}
                      className="underline underline-offset-2 text-[#2d3c59]/65 hover:text-[#2d3c59] transition-colors"
                    >
                      Click Edit Profile
                    </button>{" "}
                    to fill in your details.
                  </p>
                </div>
              )}

              {/* Bio */}
              {form.bio && (
                <div className="border-b border-[#2d3c59]/10 py-5 sm:py-7 px-3 sm:px-7">
                  <p className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38 mb-2`}>
                    About
                  </p>
                  <p className={`${outfit.className} text-[12.5px] sm:text-[13.5px] font-light leading-[1.8] sm:leading-[1.85] text-[#2d3c59]/52 max-w-lg`}>
                    {form.bio}
                  </p>
                </div>
              )}

              {/* Fields grid */}
              {(form.specialty || form.credentials || form.location || form.languages ||
                form.phone || form.type || form.address) && (
                <div className="grid sm:grid-cols-2 py-5 sm:py-7 px-3 sm:px-7 gap-x-10 gap-y-0">

                  {/* Left col */}
                  <div className="border-b sm:border-b-0 sm:border-r border-[#2d3c59]/10 pb-5 sm:pb-0 sm:pr-10 space-y-5">
                    <p className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38`}>
                      Professional info
                    </p>
                    <Field label="Specialization" value={form.specialty} />
                    <Field label="Experience & Credentials" value={form.credentials} />
                    <Field label="Hospital / Clinic" value={form.location} />
                    <Field label="Languages" value={form.languages} />
                  </div>

                  {/* Right col */}
                  <div className="pt-5 sm:pt-0 sm:pl-10 space-y-5">
                    <p className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38`}>
                      Contact & availability
                    </p>
                    <Field label="Phone" value={form.phone} />
                    <Field label="Email" value={form.email} />
                    <Field label="Consultation Type" value={form.type} />
                    <Field label="Address" value={form.address} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── EDIT MODE ── */}
          {isEditing && (
            <>
              <div className="border-b border-[#2d3c59]/10 grid sm:grid-cols-2 py-5 sm:py-7 px-3 sm:px-7 gap-x-10 gap-y-0">

                {/* Left */}
                <div className="border-b sm:border-b-0 sm:border-r border-[#2d3c59]/10 pb-5 sm:pb-0 sm:pr-10 space-y-3.5">
                  <p className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38`}>
                    Professional info
                  </p>
                  {[
                    { name: "name",        placeholder: "Full name" },
                    { name: "specialty",   placeholder: "Specialization" },
                    { name: "credentials", placeholder: "Experience & credentials" },
                    { name: "location",    placeholder: "Hospital / Clinic" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      value={(form as any)[field.name] ?? ""}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      style={{ borderRadius: "3px" }}
                      className={inputCls}
                    />
                  ))}
                </div>

                {/* Right */}
                <div className="pt-5 sm:pt-0 sm:pl-10 space-y-3.5">
                  <p className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38`}>
                    Contact & availability
                  </p>
                  {[
                    { name: "phone",     placeholder: "Phone number" },
                    { name: "languages", placeholder: "Languages spoken" },
                    { name: "type",      placeholder: "Consultation type" },
                    { name: "address",   placeholder: "Clinic address" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      value={(form as any)[field.name] ?? ""}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      style={{ borderRadius: "3px" }}
                      className={inputCls}
                    />
                  ))}
                </div>

                {/* Email — full width, disabled */}
                <div className="sm:col-span-2 pt-3.5">
                  <input
                    name="email"
                    value={form.email ?? ""}
                    disabled
                    placeholder="Email address"
                    style={{ borderRadius: "3px" }}
                    className={`${inputCls} opacity-40 cursor-not-allowed`}
                  />
                </div>

                {/* Bio — full width */}
                <div className="sm:col-span-2 pt-3.5 space-y-1.5">
                  <p className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38`}>
                    About you
                  </p>
                  <textarea
                    name="bio"
                    value={form.bio ?? ""}
                    onChange={handleChange}
                    placeholder="Write a short bio that patients will see on your profile…"
                    rows={4}
                    style={{ borderRadius: "3px" }}
                    className={`${inputCls} resize-none`}
                  />
                  <p className={`${outfit.className} text-[10px] font-light text-[#2d3c59]/30 text-right`}>
                   {(form.bio || "").length} / 500
                  </p>
                </div>
              </div>

              {/* Edit footer */}
              <div className="py-4 sm:py-5 px-3 sm:px-7 flex items-center justify-between gap-3 border-b border-[#2d3c59]/10 bg-[#2d3c59]/[0.025]">
                <p className={`${outfit.className} text-[11px] font-light text-[#2d3c59]/38`}>
                  Changes are visible to patients after saving
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleCancel}
                    style={{ borderRadius: "3px" }}
                    className={`${outfit.className} px-5 py-[9px]
                      text-[10px] font-medium tracking-[0.08em] uppercase
                      border border-[#2d3c59]/20 text-[#2d3c59]
                      hover:bg-[#2d3c59]/5 transition-all duration-200`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    style={{ borderRadius: "3px" }}
                    className={`${outfit.className} inline-flex items-center gap-2 px-6 py-[9px]
                      text-[10px] font-medium tracking-[0.08em] uppercase
                      text-[#eaebd0]
                      shadow-[0_2px_10px_rgba(45,60,89,0.18)]
                      transition-all duration-200 group
                      ${saving
                        ? "bg-[#2d3c59]/40 cursor-not-allowed"
                        : "bg-[#2d3c59] hover:shadow-[0_4px_18px_rgba(45,60,89,0.28)] hover:-translate-y-px"
                      }`}
                  >
                    <span>{saving ? "Saving…" : "Save Profile"}</span>
                    {!saving && (
                      <svg
                        className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}