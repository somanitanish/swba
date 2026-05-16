import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm uppercase tracking-[0.18em] font-semibold transition-colors duration-300 ${
      isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
    }`;

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center font-black text-black text-lg group-hover:rotate-3 transition-transform">
            S
          </div>
          <div className="leading-tight">
            <div className="font-heading uppercase font-black text-white tracking-wider text-base md:text-lg">
              SWBA
            </div>
            <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-[0.2em] hidden sm:block">
              Siddharth Wagh Badminton Academy
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" end className={linkClass} data-testid="nav-home-link">
            Home
          </NavLink>
          <NavLink to="/about-coach" className={linkClass} data-testid="nav-about-link">
            About Coach
          </NavLink>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-black border-t border-white/10"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={linkClass}
              data-testid="mobile-nav-home"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-coach"
              onClick={() => setOpen(false)}
              className={linkClass}
              data-testid="mobile-nav-about"
            >
              About Coach
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
