import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

interface Project {
  industry: string;
  industryColor: string;
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonLink: string;
  isExternal: boolean;
  isPrototype?: boolean;
  isLive?: boolean;
}

const projects: Project[] = [
  {
    industry: 'FITNESS',
    industryColor: '#f97316',
    title: 'Alex Moreno Personal Training',
    description:
      'A personal trainer website for Barcelona-based coach Alex Moreno — with session booking, schedule, and client reviews.',
    image: '/fitness.png',
    buttonLabel: 'View case study →',
    buttonLink: '/case-study/alex-moreno',
    isExternal: false,
    isPrototype: true,
  },
  {
    industry: 'B2B WHOLESALE',
    industryColor: '#2F81F7',
    title: 'Veld & Co.',
    description:
      'A B2B wholesale catalog for a Dutch snacks and beverages supplier — with tiered pricing and product catalog.',
    image: '/wholesale.png',
    buttonLabel: 'View case study →',
    buttonLink: '/case-study/veld-co',
    isExternal: false,
    isLive: true,
  },
  {
    industry: 'TRANSPORT',
    industryColor: '#22c55e',
    title: 'Actie Airport Taxi',
    description:
      'A live airport taxi booking site for a Dutch transport company — fixed pricing, automated confirmations, national coverage.',
    image: '/airport-taxi.png',
    buttonLabel: 'View case study →',
    buttonLink: '/case-study/actie-airport-taxi',
    isExternal: false,
    isLive: true,
  },
];

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,129,247,0.04),transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 space-y-6 headline-glow">
          <Reveal>
            <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
              <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black">PORTFOLIO</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              What we've <span className="text-accent-blue">built</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl reveal-initial ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
                transitionDelay: `${idx * 150}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(47,129,247,0.4)';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(47,129,247,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  'inset 0 0 0 1px rgba(255,255,255,0.04)';
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#0d1117]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent opacity-70 pointer-events-none" />

                {project.isPrototype && (
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest"
                    style={{
                      backgroundColor: 'rgba(251,191,36,0.15)',
                      color: '#fbbf24',
                      border: '1px solid rgba(251,191,36,0.35)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    Prototype — not a real client
                  </div>
                )}

                {project.isLive && (
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(74,222,128,0.35)',
                    }}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                    </span>
                    <span className="text-green-400 text-[10px] font-black uppercase tracking-widest">Live</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 space-y-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                  style={{
                    backgroundColor: `${project.industryColor}18`,
                    color: project.industryColor,
                    border: `1px solid ${project.industryColor}40`,
                  }}
                >
                  {project.industry}
                </span>

                <h3 className="text-lg font-black text-white leading-snug">{project.title}</h3>

                <p className="text-[var(--text-muted)] leading-relaxed text-sm">{project.description}</p>

                <div className="pt-2">
                  {project.isExternal ? (
                    <a
                      href={project.buttonLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-lg text-white transition-colors duration-200"
                      style={{ backgroundColor: '#2F81F7' }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1a6fd4')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2F81F7')
                      }
                    >
                      {project.buttonLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={project.buttonLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-lg text-white transition-colors duration-200"
                      style={{ backgroundColor: '#2F81F7' }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1a6fd4')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2F81F7')
                      }
                    >
                      {project.buttonLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
