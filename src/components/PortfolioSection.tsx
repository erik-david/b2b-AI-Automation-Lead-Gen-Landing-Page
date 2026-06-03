import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      industry: 'FITNESS',
      industryColor: '#f97316',
      title: 'Alex Moreno Personal Training',
      description:
        'A personal trainer website for Barcelona-based coach Alex Moreno — with session booking, schedule, and client reviews.',
      image: '/fitness.png',
      link: '#',
    },
    {
      industry: 'B2B WHOLESALE',
      industryColor: '#2F81F7',
      title: 'Veld & Co.',
      description:
        'A B2B wholesale catalog for a Dutch snacks and beverages supplier — with tiered pricing and product catalog.',
      image: '/wholesale.png',
      link: '#',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,129,247,0.04),transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
            <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black">
              PORTFOLIO
            </p>
          </div>
          <h2>
            What we've{' '}
            <span className="text-accent-blue">built</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 reveal-initial ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'rgba(255,255,255,0.08)',
                transitionDelay: `${idx * 150}ms`,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  'rgba(47,129,247,0.4)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  'rgba(255,255,255,0.08)')
              }
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#0d1117]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent opacity-70 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                  style={{
                    backgroundColor: `${project.industryColor}18`,
                    color: project.industryColor,
                    border: `1px solid ${project.industryColor}30`,
                  }}
                >
                  {project.industry}
                </span>

                <h3 className="text-xl font-black text-white leading-snug">
                  {project.title}
                </h3>

                <p className="text-[var(--text-muted)] leading-relaxed text-base">
                  {project.description}
                </p>

                <div className="pt-2">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-lg text-white transition-colors duration-200"
                    style={{ backgroundColor: '#2F81F7' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        '#1a6fd4')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        '#2F81F7')
                    }
                  >
                    View project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
