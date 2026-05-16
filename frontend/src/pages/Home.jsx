import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Trophy, Filter } from "lucide-react";
import { tournaments, players } from "../data/tournaments";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/b83fdeb4-a3a8-41e6-a83d-edbbc68abf8d/images/2827c3f1058ba8fd8d4065f2122a8ca7f2fb98c274a1f2ad6c7659a7e73af906.png";

const LEVELS = ["All", "International", "National", "State", "District"];

const levelStyle = (l) => {
  switch (l) {
    case "International":
      return "bg-yellow-400 text-black";
    case "National":
      return "bg-white text-black";
    case "State":
      return "bg-white/10 text-white border border-white/20";
    case "District":
      return "bg-white/5 text-white/80 border border-white/10";
    default:
      return "bg-white/10 text-white";
  }
};

export default function Home() {
  useEffect(() => {
    document.title = "SWBA – Siddharth Wagh Badminton Academy | Nashik";
  }, []);

  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? tournaments
        : tournaments.filter((t) => t.level === filter),
    [filter]
  );

  return (
    <div data-testid="home-page" className="bg-black text-white">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative min-h-[100svh] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(250,204,21,0.18),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
          <div className="flex items-center gap-3 mb-6 fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="h-px w-10 bg-yellow-400" />
            <span className="text-xs md:text-sm text-yellow-400 uppercase tracking-[0.3em] font-bold">
              Est. Nashik · Maharashtra
            </span>
          </div>

          <h1
            data-testid="hero-heading"
            className="font-heading font-black uppercase leading-[0.9] tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Dominate
            <br />
            <span className="text-yellow-400">The Court</span>
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Train with passion, discipline, and championship mindset. SWBA
            forges relentless badminton athletes — drill by drill, point by
            point, rally by rally.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              to="/about-coach"
              data-testid="hero-cta-coach"
              className="group inline-flex items-center gap-3 bg-yellow-400 text-black font-bold uppercase tracking-widest text-xs md:text-sm px-7 py-4 hover:bg-white transition-all"
            >
              Meet the Coach
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="#tournaments"
              data-testid="hero-cta-tournaments"
              className="inline-flex items-center gap-3 border border-white/30 text-white font-bold uppercase tracking-widest text-xs md:text-sm px-7 py-4 hover:bg-white hover:text-black hover:border-white transition-all"
            >
              Tournament Calendar
            </a>
          </div>

          {/* Stat strip */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 fade-up max-w-3xl"
            style={{ animationDelay: "0.65s" }}
            data-testid="hero-stats"
          >
            {[
              ["85+", "Tournaments"],
              ["10+", "Years"],
              ["50+", "Players"],
              ["1", "Vision"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="bg-black px-5 py-5 md:py-6 flex flex-col"
              >
                <div className="font-heading font-black text-2xl md:text-4xl text-yellow-400">
                  {n}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom marquee accent */}
        <div className="absolute bottom-0 inset-x-0 bg-yellow-400 text-black overflow-hidden border-t border-yellow-500/40">
          <div className="flex whitespace-nowrap animate-marquee py-3 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="px-6 flex items-center gap-6">
                Smash · Footwork · Stamina · Strategy · Mindset
                <span className="opacity-50">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYERS */}
      <section
        id="players"
        data-testid="players-section"
        className="relative py-24 md:py-32 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-yellow-400" />
                <span className="text-xs text-yellow-400 uppercase tracking-[0.3em] font-bold">
                  Roster
                </span>
              </div>
              <h2
                data-testid="players-heading"
                className="font-heading uppercase font-black text-4xl md:text-6xl tracking-tight leading-none"
              >
                Our <span className="text-yellow-400">Players</span>
              </h2>
            </div>
            <p className="text-white/60 text-sm md:text-base max-w-md leading-relaxed">
              Athletes representing SWBA across district, state, national and
              international circuits. Built on the court, sharpened in
              competition.
            </p>
          </div>

          <div
            data-testid="players-grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {players.map((p, i) => (
              <article
                key={p.id}
                data-testid={`player-card-${p.id}`}
                className="group relative overflow-hidden bg-neutral-900 border border-white/10 hover:border-yellow-400/60 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
                  <div className="text-[10px] md:text-xs text-yellow-400 uppercase tracking-[0.2em] font-bold mb-1">
                    {p.category}
                  </div>
                  <div className="font-heading font-black uppercase text-base md:text-xl tracking-tight leading-tight">
                    {p.name}
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-yellow-400 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <ArrowRight size={14} />
                </div>
              </article>
            ))}
          </div>

          <p
            className="mt-10 text-center text-xs md:text-sm uppercase tracking-[0.25em] text-white/40"
            data-testid="players-placeholder-note"
          >
            Full roster updating soon
          </p>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section
        id="tournaments"
        data-testid="tournaments-section"
        className="relative py-24 md:py-32 bg-neutral-950 border-t border-white/5"
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Trophy size={16} className="text-yellow-400" />
                <span className="text-xs text-yellow-400 uppercase tracking-[0.3em] font-bold">
                  Calendar 2026 – 27
                </span>
              </div>
              <h2
                data-testid="tournaments-heading"
                className="font-heading uppercase font-black text-4xl md:text-6xl tracking-tight leading-none"
              >
                <span className="text-yellow-400">Tournaments</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-xl text-sm md:text-base">
                Official Maharashtra Badminton Association calendar — every
                circuit our athletes train, target and compete in.
              </p>
            </div>

            {/* Filter */}
            <div
              className="flex flex-wrap items-center gap-2"
              data-testid="tournament-filters"
            >
              <Filter size={14} className="text-white/40 mr-1" />
              {LEVELS.map((l) => (
                <button
                  key={l}
                  data-testid={`filter-${l.toLowerCase()}`}
                  onClick={() => setFilter(l)}
                  className={`text-[10px] md:text-xs uppercase tracking-widest font-bold px-3 py-2 border transition-all ${
                    filter === l
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "border-white/15 text-white/70 hover:border-yellow-400 hover:text-yellow-400"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Table */}
          <div
            data-testid="tournaments-table"
            className="hidden md:block border border-white/10 bg-black"
          >
            <div className="grid grid-cols-12 px-6 py-4 border-b border-white/10 bg-white/[0.03] text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold">
              <div className="col-span-3">Dates</div>
              <div className="col-span-6">Tournament</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-1 text-right">Level</div>
            </div>
            <div className="max-h-[640px] overflow-y-auto custom-scroll">
              {filtered.map((t, idx) => (
                <div
                  key={`${t.name}-${idx}`}
                  className="grid grid-cols-12 px-6 py-4 border-b border-white/5 text-sm hover:bg-yellow-400/[0.06] transition-colors group"
                >
                  <div className="col-span-3 text-white/80 font-mono text-xs">
                    {t.date}
                  </div>
                  <div className="col-span-6 text-white group-hover:text-yellow-400 transition-colors">
                    {t.name}
                  </div>
                  <div className="col-span-2 text-white/60 flex items-center gap-1">
                    <MapPin size={12} className="text-white/30" />
                    {t.location}
                  </div>
                  <div className="col-span-1 text-right">
                    <span
                      className={`inline-block text-[9px] uppercase tracking-widest font-bold px-2 py-1 ${levelStyle(
                        t.level
                      )}`}
                    >
                      {t.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3" data-testid="tournaments-mobile">
            {filtered.map((t, idx) => (
              <div
                key={`m-${idx}`}
                className="border border-white/10 bg-black p-4 hover:border-yellow-400/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="text-[10px] uppercase tracking-widest text-yellow-400 font-mono">
                    {t.date}
                  </div>
                  <span
                    className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 ${levelStyle(
                      t.level
                    )}`}
                  >
                    {t.level}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white leading-snug">
                  {t.name}
                </div>
                <div className="mt-2 text-xs text-white/50 flex items-center gap-1">
                  <MapPin size={11} /> {t.location}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/40">
            Showing {filtered.length} of {tournaments.length} events
          </div>
        </div>
      </section>
    </div>
  );
}
