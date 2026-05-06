"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavChild {
  label: string;
  href: string;
}

interface MegaCard {
  title: string;
  description: string;
  href: string;
  mobileItems?: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  megaMenu?: MegaCard[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    megaMenu: [
      {
        title: "Sri Ramakrishna",
        description: "The great Master & Avatara of the modern age",
        href: "/about/sri-ramakrishna",
      },
      {
        title: "Sri Sarada Devi",
        description: "The Holy Mother & spiritual consort",
        href: "/about/sri-sarada-devi",
      },
      {
        title: "Swami Vivekananda",
        description: "The great disciple & world teacher",
        href: "/about/swami-vivekananda",
      },
      {
        title: "Swamiji in Belagavi",
        description: "The historic 12-day visit of October 1892",
        href: "/about/swamiji-in-belagavi",
      },
      {
        title: "The Ramakrishna Order",
        description: "The worldwide spiritual movement",
        href: "/about/ramakrishna-order",
      },
    ],
  },
  { label: "Ashrama at Fort", href: "/ashrama" },
  { label: "Swami Vivekananda Memorial", href: "/memorial" },
  {
    label: "Activities",
    href: "/activities",
    megaMenu: [
      {
        title: "Spiritual",
        description: "Temple, discourses & retreats",
        href: "/activities#spiritual",
        mobileItems: [
          { label: "Temple", href: "/activities#temple" },
          { label: "Discourses & Satsangs", href: "/activities#discourses" },
          { label: "Japa Yajna", href: "/activities#japa-yajna" },
        ],
      },
      {
        title: "Bookstore & Sales",
        description: "Spiritual literature",
        href: "/activities#bookstore",
      },
      {
        title: "Swamiji\u0027s House",
        description: "Haripada Mitra\u0027s house & monument",
        href: "/activities#swamijis-house",
      },
      {
        title: "Educational",
        description: "Learning & development",
        href: "/activities#educational",
        mobileItems: [
          { label: "Free Computer Training", href: "/activities#computer-training" },
          { label: "Free Reading Room", href: "/activities#reading-room" },
          { label: "Scholarships", href: "/activities#scholarships" },
        ],
      },
      {
        title: "Welfare",
        description: "Healthcare & social service",
        href: "/activities#welfare",
        mobileItems: [
          { label: "Sharada Netralaya", href: "/activities/sharada-netralaya" },
          { label: "Dravya Yajna", href: "/activities#dravya-yajna" },
          { label: "Miscellaneous", href: "/activities#misc-welfare" },
        ],
      },
      {
        title: "Value Education /\nPersonality Development",
        description: "For Students, Teachers, Parents & General Public",
        href: "/activities#value-education",
        mobileItems: [
          { label: "For Students", href: "/activities#for-students" },
          { label: "For Teachers", href: "/activities#for-teachers" },
          { label: "For Parents & General Public", href: "/activities#for-parents" },
        ],
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
    megaMenu: [
      {
        title: "Upcoming Events",
        description: "What's happening next",
        href: "/events#upcoming",
      },
      {
        title: "Annual Calendar",
        description: "Jayantis & yearly observances",
        href: "/events#annual-calendar",
      },
      {
        title: "Past Events",
        description: "Previous programmes & celebrations",
        href: "/events#past",
      },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
  },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  {
    label: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029Vb0I74wLikg9O3VjhD2b",
    d: "M17.472,14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94,1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198,0-.52.074-.792.372-.272.297-1.04,1.016-1.04,2.479,0,1.462,1.065,2.875,1.213,3.074.149.198,2.096,3.2,5.077,4.487.709.306,1.262.489,1.694.625.712.227,1.36.195,1.871.118.571-.085,1.758-.719,2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421,7.403h-.004a9.87,9.87,0,0,1-5.031-1.378l-.361-.214-3.741.982L4.045,17.62l-.235-.374a9.86,9.86,0,0,1-1.51-5.26c.001-5.45,4.436-9.884,9.888-9.884a9.825,9.825,0,0,1,6.988,2.896,9.83,9.83,0,0,1,2.892,6.994c-.003,5.45-4.437,9.884-9.885,9.884ZM20.52,3.449C18.24,1.245,15.24.001,12.05,0,5.495,0,.16,5.335.157,11.892a11.86,11.86,0,0,0,1.587,5.945L.057,24l6.305-1.654a11.882,11.882,0,0,0,5.683,1.448h.005c6.554,0,11.890-5.335,11.893-11.893A11.821,11.821,0,0,0,20.52,3.449Z"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/Belgaumashrama",
    d: "M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.75,15.02V8.98L15.5,12Z"
  },
];

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const hasDropdown = item.children || item.megaMenu;

  if (!hasDropdown) {
    return (
      <Link
        href={item.href}
        className="px-[12px] py-[14px] text-[14px] font-bold text-white uppercase tracking-[0.3px] whitespace-nowrap hover:bg-[#B8860B] transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 px-[12px] py-[14px] text-[14px] font-bold text-white uppercase tracking-[0.3px] whitespace-nowrap hover:bg-[#B8860B] transition-colors"
      >
        {item.label}
        <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Mega menu — Delhi-style card grid */}
      {open && item.megaMenu && (
        <div className={"absolute top-full left-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 border-t-[3px] border-[#B8860B] rounded-b-md " + (item.megaMenu.length <= 4 ? "min-w-[480px]" : "min-w-[660px]")}>
          <div className={"grid gap-0 " + (item.megaMenu.length <= 4 ? "grid-cols-2" : "grid-cols-3")}>
            {item.megaMenu.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group/card flex items-start justify-between gap-2 px-5 py-4 border-b border-r border-gray-100 hover:bg-[#FBF7ED] transition-colors"
              >
                <div>
                  <p className="text-[14px] font-bold text-[#1A2F2F] group-hover/card:text-[#B8860B] transition-colors whitespace-pre-line">{card.title}</p>
                  <p className="text-[12px] text-[#7A756D] mt-0.5 leading-snug">{card.description}</p>
                </div>
                <svg className="w-4 h-4 mt-1 text-[#B8860B] opacity-60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Regular dropdown */}
      {open && item.children && (
        <div className="absolute top-full left-0 bg-[#1A2F2F] min-w-[240px] shadow-lg z-50 border-t-2 border-[#B8860B]">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block px-5 py-3 text-[13px] font-semibold text-white hover:bg-[#B8860B] transition-colors border-b border-white/10"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const fontSizes = [
  { label: "A-", size: "small", zoom: 0.9 },
  { label: "A", size: "medium", zoom: 1 },
  { label: "A+", size: "large", zoom: 1.15 },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(1); // 0=small, 1=medium, 2=large

  const handleFontSize = (idx: number) => {
    setFontSize(idx);
    (document.body.style as CSSStyleDeclaration & { zoom: string }).zoom = String(fontSizes[idx].zoom);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div style={{ background: "#F1EAD8", borderBottom: "1px solid #E2D9BF" }}>
        <div className="site-container" style={{ position: "relative", padding: "18px 15px" }}>
          {/* Logo (absolute, far left) */}
          <Link
            href="/"
            aria-label="Home"
            className="hidden md:block"
            style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)" }}
          >
            <Image
              src="/images/cropped-ashrama_logo-1-180x180.png"
              alt="Ramakrishna Mission Ashrama, Belagavi"
              width={180}
              height={180}
              className="h-[64px] w-[64px] object-contain"
            />
          </Link>

          {/* Centered title block */}
          <Link href="/" className="block text-center" style={{ textDecoration: "none" }}>
            <h1
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(20px, 3.4vw, 38px)",
                fontWeight: 700,
                color: "#B8860B",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Sri Ramakrishna Mission Ashrama, Belagavi
            </h1>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(12px, 1.4vw, 16px)",
                fontStyle: "italic",
                color: "#8C6914",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              (A Branch of Ramakrishna Math and Mission, Belur Math, Howrah, West Bengal)
            </p>
          </Link>

          {/* Controls (absolute, far right) */}
          <div
            className="hidden md:flex items-center gap-3"
            style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)" }}
          >
            {/* Font size adjuster */}
            <div className="flex items-center gap-1 border border-[#C9BC97] rounded-full px-2 py-1 bg-white/40">
              {fontSizes.map((f, i) => (
                <button
                  key={f.label}
                  onClick={() => handleFontSize(i)}
                  className={`px-2 py-0.5 rounded-full text-[12px] font-bold transition-all ${
                    fontSize === i
                      ? "bg-[#1A2F2F] text-white"
                      : "text-[#1A2F2F] hover:bg-[#F0EBE1]"
                  }`}
                  aria-label={`Font size ${f.size}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            {/* Social icons */}
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                aria-label={icon.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d={icon.d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="bg-[#1A2F2F]">
        <div className="site-container">
          {/* Desktop nav */}
          <div className="hidden xl:flex items-center justify-between">
            <div className="flex items-center">
              {navItems.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </div>
            <Link
              href="/donate"
              className="ml-auto px-5 py-[11px] bg-[#B8860B] text-white text-[14px] font-bold uppercase tracking-[0.3px] hover:bg-[#96700A] transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="xl:hidden flex items-center justify-between">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="py-3 text-white flex items-center gap-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              <span className="text-[14px] font-bold uppercase">Menu</span>
            </button>
            <Link
              href="/donate"
              className="px-4 py-[8px] bg-[#B8860B] text-white text-[13px] font-bold uppercase hover:bg-[#96700A] transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile nav dropdown */}
          {mobileOpen && (
            <div className="xl:hidden pb-4">
              {navItems.map((item) => {
                const hasSubmenu = item.children || item.megaMenu;
                return (
                  <div key={item.label}>
                    <div className="flex items-center justify-between border-b border-white/10">
                      <Link
                        href={item.href}
                        className="flex-1 block px-4 py-3 text-[14px] font-bold text-white uppercase hover:bg-[#B8860B]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasSubmenu && (
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="px-4 py-3 text-white"
                        >
                          <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {/* Regular children */}
                    {item.children && mobileExpanded === item.label && (
                      <div className="bg-[#142424]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-8 py-2.5 text-[13px] text-white/90 hover:bg-[#B8860B] border-b border-white/5"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    {/* Mega menu cards — mobile */}
                    {item.megaMenu && mobileExpanded === item.label && (
                      <div className="bg-[#142424]">
                        {item.megaMenu.map((card) => (
                          <div key={card.title}>
                            <Link
                              href={card.href}
                              className="block px-6 py-2.5 text-[13px] font-semibold text-[#B8860B] hover:bg-[#B8860B] hover:text-white border-b border-white/5"
                              onClick={() => setMobileOpen(false)}
                            >
                              {card.title}
                            </Link>
                            {card.mobileItems?.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-10 py-2 text-[13px] text-white/80 hover:bg-[#B8860B] hover:text-white border-b border-white/5"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
