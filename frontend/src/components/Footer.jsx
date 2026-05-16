import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-black border-t border-white/10 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center font-black text-black text-2xl">
              S
            </div>
            <div>
              <div className="font-heading uppercase font-black text-2xl tracking-wider">
                SWBA
              </div>
              <div className="text-xs text-white/60 uppercase tracking-[0.2em]">
                Siddharth Wagh Badminton Academy
              </div>
            </div>
          </div>
          <p className="mt-6 text-white/60 max-w-md leading-relaxed text-sm">
            Forging the next generation of badminton champions through
            discipline, drills and championship mindset. Train where
            performance meets passion.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-instagram"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-facebook"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-youtube"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <div className="text-xs text-yellow-400 uppercase tracking-[0.25em] font-bold mb-5">
            Navigate
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                data-testid="footer-link-home"
                className="text-white/80 hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-coach"
                data-testid="footer-link-about"
                className="text-white/80 hover:text-yellow-400 transition-colors"
              >
                About Coach
              </Link>
            </li>
            <li>
              <a
                href="#tournaments"
                data-testid="footer-link-tournaments"
                className="text-white/80 hover:text-yellow-400 transition-colors"
              >
                Tournaments
              </a>
            </li>
            <li>
              <a
                href="#players"
                data-testid="footer-link-players"
                className="text-white/80 hover:text-yellow-400 transition-colors"
              >
                Our Players
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <div className="text-xs text-yellow-400 uppercase tracking-[0.25em] font-bold mb-5">
            Contact
          </div>
          <a
            href="tel:+918605981981"
            data-testid="footer-phone"
            className="flex items-start gap-3 text-sm text-white/80 hover:text-yellow-400 transition-colors mb-4 group"
          >
            <Phone size={16} className="mt-0.5 text-yellow-400 group-hover:text-yellow-300" />
            <span>+91 8605981981</span>
          </a>
          <div
            data-testid="footer-address"
            className="flex items-start gap-3 text-sm text-white/80 leading-relaxed"
          >
            <MapPin size={16} className="mt-0.5 text-yellow-400 shrink-0" />
            <span>
              Niwec Club, A/16, MIDC, Satpur Colony, Plot No. 29, Swargiya
              Sitamai Sawliram Kale Marg, near Reliance Petrol Pump, MIDC,
              Satpur Colony, Nashik, Maharashtra 422007
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40 uppercase tracking-widest">
          <div data-testid="footer-copyright">
            © {new Date().getFullYear()} SWBA. All Rights Reserved.
          </div>
          <div>Dominate. Discipline. Distinction.</div>
        </div>
      </div>
    </footer>
  );
};
