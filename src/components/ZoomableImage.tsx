"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  thumbnailStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  sizes?: string;
}

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  thumbnailStyle,
  containerStyle,
  sizes = "400px",
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });

  const close = useCallback(() => {
    setOpen(false);
    setZoom(1);
    setPos({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 5));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
      if (e.key === "0") { setZoom(1); setPos({ x: 0, y: 0 }); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom((z) => Math.max(1, Math.min(5, z + delta)));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, posX: pos.x, posY: pos.y };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPos({
      x: dragStart.current.posX + (e.clientX - dragStart.current.x),
      y: dragStart.current.posY + (e.clientY - dragStart.current.y),
    });
  };

  const stopDrag = () => setDragging(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Open ${alt} in zoomable view`}
        style={{
          padding: 0,
          border: "none",
          background: "none",
          cursor: "zoom-in",
          position: "relative",
          display: "block",
          width: "100%",
          ...containerStyle,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "auto", display: "block", ...thumbnailStyle }}
          sizes={sizes}
        />
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(26,47,47,0.85)",
            color: "#fff",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
            transition: "all 0.2s",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
          }}
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (zoom === 1) setZoom(2);
              else { setZoom(1); setPos({ x: 0, y: 0 }); }
            }}
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom})`,
              transition: dragging ? "none" : "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
              maxWidth: "92vw",
              maxHeight: "92vh",
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={width * 4}
              height={height * 4}
              style={{ maxWidth: "92vw", maxHeight: "92vh", width: "auto", height: "auto", display: "block", userSelect: "none", pointerEvents: "none" }}
              sizes="92vw"
              priority
            />
          </div>

          {/* Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "12px",
              background: "rgba(26,47,47,0.85)",
              padding: "10px 16px",
              borderRadius: "999px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(184,134,11,0.3)",
            }}
          >
            <button
              onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
              aria-label="Zoom out"
              style={btnStyle}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600, alignSelf: "center", minWidth: "44px", textAlign: "center" }}>
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(5, z + 0.5))}
              aria-label="Zoom in"
              style={btnStyle}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
            <button
              onClick={() => { setZoom(1); setPos({ x: 0, y: 0 }); }}
              aria-label="Reset zoom"
              style={btnStyle}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            </button>
          </div>

          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(26,47,47,0.85)",
              color: "#fff",
              border: "1px solid rgba(184,134,11,0.3)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          {/* Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              background: "rgba(26,47,47,0.85)",
              color: "#fff",
              padding: "10px 18px",
              fontSize: "13px",
              fontWeight: 500,
              borderRadius: "999px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(184,134,11,0.3)",
              maxWidth: "60vw",
            }}
          >
            {alt}
          </div>
        </div>
      )}
    </>
  );
}

const btnStyle: React.CSSProperties = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "rgba(184,134,11,0.2)",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",
};
