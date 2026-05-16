import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Target, Users, Flame } from "lucide-react";

const COACH_PHOTO =
  "https://customer-assets.emergentagent.com/job_b83fdeb4-a3a8-41e6-a83d-edbbc68abf8d/artifacts/0dovvgl7_Sir.jpeg";

const PILLARS = [
  {
    icon: Target,
    title: "Precision Training",
    text: "Footwork drills, stroke mechanics and tactical play sharpened with measurable benchmarks each week.",
  },
  {
    icon: Flame,
    title: "Championship Mindset",
    text: "Building grit, focus and composure — the invisible muscles that separate good players from great ones.",
  },
  {
    icon: Users,
    title: "Personalised Coaching",
    text: "Small-batch attention with structured progression from grassroots fundamentals to elite competition.",
  },
  {
    icon: Award,
    title: "Tournament Ready",
    text: "Year-round preparation aligned with district, state, national and international circuit calendars.",
  },
];

export default function AboutCoach() {
  useEffect(() => {
    document.title = "About Coach Siddharth Wagh | SWBA Nashik";
  }, []);

  return (
    <div data-testid="about-coach-page" className="bg-black text-white">
      {/* Header band */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,204,21,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-yellow-400" />
            <span className="text-xs text-yellow-400 uppercase tracking-[0.3em] font-bold">
              The Mentor
            </span>
          </div>
          <h1
            data-testid="about-heading"
            className="font-heading uppercase font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]"
          >
            About <span className="text-yellow-400">Coach</span>
          </h1>
        </div>
      </section>

      {/* Bio split */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="lg:col-span-5">
            <div
              data-testid="coach-photo-wrap"
              className="relative group"
            >
              <div className="absolute -inset-3 border border-yellow-400/60 -z-0 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              <div className="relative overflow-hidden bg-neutral-900 z-10">
                <img
                  data-testid="coach-photo"
                  src={COACH_PHOTO}
                  alt="Coach Siddharth Wagh"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
                  <div className="text-[10px] md:text-xs text-yellow-400 uppercase tracking-[0.3em] font-bold mb-1">
                    Head Coach · Founder
                  </div>
                  <div className="font-heading font-black uppercase text-2xl md:text-3xl tracking-tight">
                    Siddharth Wagh
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <div
              data-testid="coach-bio"
              className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed"
            >
              <p>
                <span className="text-yellow-400 font-semibold">
                  Coach Siddharth Wagh
                </span>{" "}
                is the founder and head coach of SWBA — Siddharth Wagh
                Badminton Academy in Nashik. With over a decade on the
                court as both player and mentor, he has dedicated his
                career to shaping disciplined, technically sound and
                mentally resilient badminton athletes.
              </p>
              <p>
                His coaching philosophy blends old-school discipline with
                modern sports science: footwork patterns refined to the
                centimetre, stroke biomechanics broken down frame-by-frame,
                and structured periodisation aligned with tournament
                calendars. Every session at SWBA is engineered — not
                improvised.
              </p>
              <p>
                Coach Wagh has personally mentored players competing across
                district, state, national and international circuits.
                Beyond technique, he is known for the championship mindset
                he instills — composure under pressure, intelligent
                shot-selection and the relentless work ethic that defines
                top-tier athletes.
              </p>
              <p>
                Whether you are a beginner picking up a racket for the
                first time or a ranked junior chasing a national title,
                the SWBA system is built to meet you where you are — and
                push you to where you want to be.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                data-testid="about-cta-home"
                className="group inline-flex items-center gap-3 bg-yellow-400 text-black font-bold uppercase tracking-widest text-xs md:text-sm px-7 py-4 hover:bg-white transition-all"
              >
                Explore the Academy
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href="tel:+918605981981"
                data-testid="about-cta-call"
                className="inline-flex items-center gap-3 border border-white/30 text-white font-bold uppercase tracking-widest text-xs md:text-sm px-7 py-4 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                Call +91 8605981981
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section
        data-testid="pillars-section"
        className="py-16 md:py-24 bg-neutral-950 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-yellow-400" />
              <span className="text-xs text-yellow-400 uppercase tracking-[0.3em] font-bold">
                The Method
              </span>
            </div>
            <h2 className="font-heading uppercase font-black text-3xl md:text-5xl tracking-tight leading-none">
              How Champions Are <span className="text-yellow-400">Built</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                data-testid={`pillar-${i}`}
                className="group border border-white/10 bg-black p-6 md:p-7 hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-yellow-400 text-black flex items-center justify-center mb-5 group-hover:rotate-3 transition-transform">
                  <p.icon size={22} strokeWidth={2.4} />
                </div>
                <div className="font-heading uppercase font-black text-lg md:text-xl tracking-tight mb-2">
                  {p.title}
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
