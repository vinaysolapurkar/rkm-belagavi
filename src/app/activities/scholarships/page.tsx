"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import SubpageLayout from "@/components/SubpageLayout";
import PageHero from "@/components/PageHero";

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "22px",
  fontWeight: 700,
  color: "#1A2F2F",
  marginBottom: "20px",
  paddingBottom: "10px",
  borderBottom: "2px solid #E8E2D8",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
  color: "#1A2F2F",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #E8E2D8",
  padding: "12px 16px",
  fontSize: "15px",
  borderRadius: "4px",
  color: "#4A4743",
  backgroundColor: "#fff",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const fieldWrapStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const sectionStyle = (alt: boolean): React.CSSProperties => ({
  background: alt ? "#F3EDE4" : "#fff",
  padding: "32px 28px",
  borderRadius: "8px",
  marginBottom: "24px",
});

interface FormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  course: string;
  college: string;
  yearOfStudy: string;
  marks: string;
  marksheet: File | null;
  familyIncome: string;
  guardianOccupation: string;
  incomeCertificate: File | null;
  scholarshipReason: string;
  receivedOtherScholarship: string;
  otherScholarshipDetails: string;
  declaration: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  dateOfBirth: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  course: "",
  college: "",
  yearOfStudy: "",
  marks: "",
  marksheet: null,
  familyIncome: "",
  guardianOccupation: "",
  incomeCertificate: null,
  scholarshipReason: "",
  receivedOtherScholarship: "",
  otherScholarshipDetails: "",
  declaration: false,
};

export default function ScholarshipsPage() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      setForm((prev) => ({
        ...prev,
        [name]: files && files.length > 0 ? files[0] : null,
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getInputStyle = (fieldName: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focusedField === fieldName ? "#B8860B" : "#E8E2D8",
  });

  return (
    <SubpageLayout>
      <PageHero
        title="Scholarship Application 2026"
        subtitle="Annual scholarships for deserving and needy students pursuing higher education"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Scholarships" },
        ]}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "40px 20px 60px",
        }}
      >
        {submitted ? (
          <div
            style={{
              background: "#F3EDE4",
              border: "1px solid #B8860B",
              borderRadius: "8px",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#1A2F2F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B8860B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "#1A2F2F",
                marginBottom: "16px",
              }}
            >
              Application Submitted Successfully
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#4A4743",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Your application has been submitted successfully. The Ashrama will
              contact you for verification and interview.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Personal Details */}
            <div style={sectionStyle(false)}>
              <h2 style={sectionHeadingStyle}>Personal Details</h2>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="fullName">
                  Full Name <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("fullName")}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="dateOfBirth">
                  Date of Birth <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("dateOfBirth")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("dateOfBirth")}
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="gender">
                  Gender <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={form.gender}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("gender")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("gender")}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="phone">
                  Phone Number <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("phone")}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="email">
                  Email Address <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("email")}
                  placeholder="Enter your email address"
                />
              </div>

              <div style={{ marginBottom: 0 }}>
                <label style={labelStyle} htmlFor="address">
                  Full Address <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("address")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...getInputStyle("address"), resize: "vertical" }}
                  placeholder="Enter your full address"
                />
              </div>
            </div>

            {/* Academic Details */}
            <div style={sectionStyle(true)}>
              <h2 style={sectionHeadingStyle}>Academic Details</h2>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="course">
                  Current Course / Degree{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="course"
                  name="course"
                  type="text"
                  required
                  value={form.course}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("course")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("course")}
                  placeholder="e.g., B.E. in Computer Science"
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="college">
                  College / Institution Name{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  required
                  value={form.college}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("college")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("college")}
                  placeholder="Enter your college or institution name"
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="yearOfStudy">
                  Year of Study <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  required
                  value={form.yearOfStudy}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("yearOfStudy")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("yearOfStudy")}
                >
                  <option value="">Select year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                  <option value="5th">5th Year</option>
                </select>
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="marks">
                  Previous Year Marks / CGPA{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="marks"
                  name="marks"
                  type="text"
                  required
                  value={form.marks}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("marks")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("marks")}
                  placeholder="e.g., 85% or 8.5 CGPA"
                />
              </div>

              <div style={{ marginBottom: 0 }}>
                <label style={labelStyle} htmlFor="marksheet">
                  Attach Marksheet{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="marksheet"
                  name="marksheet"
                  type="file"
                  required
                  accept=".pdf,.jpg,.png"
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    padding: "10px 16px",
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  Accepted formats: PDF, JPG, PNG
                </span>
              </div>
            </div>

            {/* Financial Details */}
            <div style={sectionStyle(false)}>
              <h2 style={sectionHeadingStyle}>Financial Details</h2>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="familyIncome">
                  Annual Family Income{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <select
                  id="familyIncome"
                  name="familyIncome"
                  required
                  value={form.familyIncome}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("familyIncome")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("familyIncome")}
                >
                  <option value="">Select income range</option>
                  <option value="Below 1 Lakh">Below 1 Lakh</option>
                  <option value="1-2 Lakhs">1-2 Lakhs</option>
                  <option value="2-3 Lakhs">2-3 Lakhs</option>
                  <option value="3-5 Lakhs">3-5 Lakhs</option>
                  <option value="Above 5 Lakhs">Above 5 Lakhs</option>
                </select>
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="guardianOccupation">
                  Father / Guardian Occupation{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <input
                  id="guardianOccupation"
                  name="guardianOccupation"
                  type="text"
                  required
                  value={form.guardianOccupation}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("guardianOccupation")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("guardianOccupation")}
                  placeholder="Enter occupation"
                />
              </div>

              <div style={{ marginBottom: 0 }}>
                <label style={labelStyle} htmlFor="incomeCertificate">
                  Attach Income Certificate{" "}
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#888" }}>
                    (optional)
                  </span>
                </label>
                <input
                  id="incomeCertificate"
                  name="incomeCertificate"
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    padding: "10px 16px",
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  Accepted formats: PDF, JPG, PNG
                </span>
              </div>
            </div>

            {/* Additional Information */}
            <div style={sectionStyle(true)}>
              <h2 style={sectionHeadingStyle}>Additional Information</h2>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="scholarshipReason">
                  Why do you need this scholarship?{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <textarea
                  id="scholarshipReason"
                  name="scholarshipReason"
                  required
                  rows={5}
                  maxLength={1200}
                  value={form.scholarshipReason}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("scholarshipReason")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...getInputStyle("scholarshipReason"),
                    resize: "vertical",
                  }}
                  placeholder="Describe your need for this scholarship (max 200 words)"
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  Maximum 200 words
                </span>
              </div>

              <div style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor="receivedOtherScholarship">
                  Have you received any other scholarship?{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </label>
                <select
                  id="receivedOtherScholarship"
                  name="receivedOtherScholarship"
                  required
                  value={form.receivedOtherScholarship}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("receivedOtherScholarship")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("receivedOtherScholarship")}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {form.receivedOtherScholarship === "Yes" && (
                <div style={{ marginBottom: 0 }}>
                  <label style={labelStyle} htmlFor="otherScholarshipDetails">
                    If yes, please provide details{" "}
                    <span style={{ color: "#B8860B" }}>*</span>
                  </label>
                  <input
                    id="otherScholarshipDetails"
                    name="otherScholarshipDetails"
                    type="text"
                    required
                    value={form.otherScholarshipDetails}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("otherScholarshipDetails")}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle("otherScholarshipDetails")}
                    placeholder="Scholarship name, amount, duration"
                  />
                </div>
              )}
            </div>

            {/* Declaration */}
            <div style={sectionStyle(false)}>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "#4A4743",
                  lineHeight: 1.6,
                }}
              >
                <input
                  type="checkbox"
                  name="declaration"
                  required
                  checked={form.declaration}
                  onChange={handleChange}
                  style={{
                    marginTop: "4px",
                    width: "18px",
                    height: "18px",
                    accentColor: "#B8860B",
                    flexShrink: 0,
                  }}
                />
                <span>
                  I hereby declare that all the information provided above is
                  true and correct to the best of my knowledge.{" "}
                  <span style={{ color: "#B8860B" }}>*</span>
                </span>
              </label>
            </div>

            {/* Submit */}
            <div style={{ textAlign: "center", marginTop: "8px" }}>
              <button
                type="submit"
                style={{
                  background: "#B8860B",
                  color: "#fff",
                  border: "none",
                  padding: "14px 48px",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "4px",
                  cursor: "pointer",
                  letterSpacing: "0.5px",
                  transition: "background 0.2s, transform 0.1s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#9A7209")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#B8860B")
                }
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.98)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </SubpageLayout>
  );
}
