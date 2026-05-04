"use client";
import { useEffect, useRef, useState } from "react";

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    // Immediately reveal anything already in viewport
    targets.forEach((t) => {
      const rect = t.getBoundingClientRect();
      if (rect.top < window.innerHeight) t.classList.add("visible");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    targets.forEach((t) => { if (!t.classList.contains("visible")) observer.observe(t); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="page-loaded">
      {children}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#B8860B",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 9998,
          fontSize: "22px",
          boxShadow: "0 4px 20px rgba(196,146,42,0.3)",
          transform: showTop ? "translateY(0) scale(1)" : "translateY(20px) scale(0)",
          opacity: showTop ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        &#8593;
      </button>
    </div>
  );
}
