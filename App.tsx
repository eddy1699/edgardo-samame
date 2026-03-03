
import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  Menu,
  X,
  Code2,
  Cloud,
  Database,
  Zap,
  ArrowUp,
} from 'lucide-react';
import { EXPERIENCES, SKILL_CATEGORIES, EDUCATIONS, PROJECTS } from './constants';
import profilePhoto from './edgardo-samame.jpg';

// ─── Hooks ────────────────────────────────────────────────────────────────────

const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState('');
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= y) { setActive(ids[i]); return; }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
  return active;
};

const useScrollReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('animate-visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// ─── Shared styles ────────────────────────────────────────────────────────────

const card = 'border border-white/10 bg-white/[0.02] rounded-xl';
const cardHover = `${card} hover:border-white/20 hover:bg-white/[0.04] transition-colors`;

// ─── SectionHeader ────────────────────────────────────────────────────────────

const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
    <div className={`w-6 h-px bg-blue-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    {subtitle && (
      <p className={`mt-4 text-slate-500 text-sm max-w-lg ${align === 'center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(['home', 'experience', 'projects', 'skills', 'education']);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Inicio',      href: '#home' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos',   href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Educación',   href: '#education' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/5 py-4' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="text-sm font-bold tracking-tight text-white">
          EDGARDO <span className="text-blue-500">SAMAMÉ</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className={`text-xs font-medium transition-colors ${active === href.replace('#', '') ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {label}
            </a>
          ))}
          <a href="mailto:edgardosamame@gmail.com" className="text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors">
            Contacto
          </a>
        </div>

        <button className="md:hidden text-slate-400 p-2" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-[#0a0a0c] z-40 px-6 pt-24 pb-8 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className={`text-2xl font-bold pb-4 border-b border-white/5 ${active === href.replace('#', '') ? 'text-blue-400' : 'text-white'}`}
            >
              {label}
            </a>
          ))}
          <a href="mailto:edgardosamame@gmail.com" className="mt-4 py-3 text-center rounded-lg bg-blue-600 text-white font-semibold">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 overflow-hidden scroll-mt-20">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] -z-10" />

    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
      {/* Text */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-slate-600 text-xs font-medium uppercase tracking-widest mb-5">
          Ingeniero de Software Senior · Lima, Perú
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Backend &amp;<br />
          <span className="text-blue-500">Arquitectura</span> Escalable
        </h1>

        <p className="text-slate-400 text-base max-w-md mb-10 leading-relaxed">
          Especialista en Node.js, TypeScript y AWS. Transformo la complejidad logística y fintech en soluciones de alto rendimiento.
        </p>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="https://linkedin.com/in/edgardosamame"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            LinkedIn <ExternalLink size={14} />
          </a>
          <a
            href="#projects"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-white text-sm font-semibold transition-colors"
          >
            Ver proyectos
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {[
            { value: '4+',   label: 'Años exp.' },
            { value: '9',    label: 'Proyectos' },
            { value: '3',    label: 'Empresas' },
            { value: '10k+', label: 'Req/hora' },
          ].map(({ value, label }) => (
            <div key={label} className="border border-white/10 rounded-lg p-4 text-center">
              <p className="text-xl font-bold text-white mb-0.5">{value}</p>
              <p className="text-[10px] text-slate-600 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo */}
      <div className="flex-shrink-0">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <img
            src={profilePhoto}
            alt="Edgardo Samamé"
            className="w-full h-full rounded-full object-cover object-top border border-white/10"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#0a0a0c] text-[10px] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
            E2OPEN by Wisetech
          </div>
        </div>
      </div>
    </div>

    {/* Tech strip */}
    <div className="max-w-6xl mx-auto mt-16 flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 opacity-25 hover:opacity-40 transition-opacity duration-300">
      {[
        { icon: <Code2 size={14} />, label: 'TypeScript' },
        { icon: <Cloud size={14} />, label: 'AWS' },
        { icon: <Database size={14} />, label: 'SQL Server' },
        { icon: <Zap size={14} />, label: 'Node.js' },
      ].map(({ icon, label }) => (
        <div key={label} className="flex items-center gap-2 text-xs font-medium text-slate-400">
          {icon} {label}
        </div>
      ))}
    </div>
  </section>
);

// ─── ExperienceCard ───────────────────────────────────────────────────────────

const ExperienceCard: React.FC<{ exp: (typeof EXPERIENCES)[0] }> = ({ exp }) => (
  <div className="animate-on-scroll relative pl-8 pb-10 border-l border-white/10 last:border-0 last:pb-0">
    <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />

    <div className={`${cardHover} p-6`}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base font-semibold text-white">{exp.role}</h3>
          <p className="text-blue-500 text-sm mt-0.5">{exp.company}</p>
        </div>
        <div className="md:text-right flex-shrink-0">
          <p className="text-[10px] font-mono text-slate-600">{exp.period}</p>
          <p className="text-[10px] text-slate-700 flex items-center gap-1 md:justify-end mt-0.5">
            <MapPin size={9} /> {exp.location}
          </p>
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {exp.achievements.map((item: string, idx: number) => (
          <li key={idx} className="text-slate-500 text-sm flex gap-2.5 leading-relaxed">
            <span className="text-white/20 mt-1.5 flex-shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>

      {exp.technologies && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {exp.technologies.map((tech: string) => (
            <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-600 border border-white/8">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ─── ProjectCard ──────────────────────────────────────────────────────────────

const ProjectCard: React.FC<{ project: (typeof PROJECTS)[0] }> = ({ project }) => (
  <div className={`animate-on-scroll ${cardHover} flex flex-col p-6`}>
    <div className="flex justify-between items-start mb-4">
      <span className="text-[10px] font-medium uppercase tracking-widest text-slate-600">{project.type}</span>
      <div className="flex items-center gap-2.5">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-300 transition-colors">
            <Github size={15} />
          </a>
        )}
        {project.link && project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Ver proyecto" className="text-slate-600 hover:text-slate-300 transition-colors">
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </div>

    <h3 className="text-sm font-semibold text-white mb-2">{project.title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((tag: string) => (
        <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-600 border border-white/8">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// ─── SkillGroup ───────────────────────────────────────────────────────────────

const SkillGroup: React.FC<{ category: (typeof SKILL_CATEGORIES)[0] }> = ({ category }) => {
  const Icon = category.icon === 'cloud' ? Cloud : category.icon === 'code' ? Code2 : category.icon === 'database' ? Database : Zap;
  return (
    <div className={`animate-on-scroll ${cardHover} p-6`}>
      <Icon size={16} className="text-slate-500 mb-4" />
      <h3 className="text-sm font-semibold text-white mb-3">{category.title}</h3>
      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
        {category.skills.map((skill: string) => (
          <span key={skill} className="text-xs text-slate-500">{skill}</span>
        ))}
      </div>
    </div>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────

const App: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 selection:bg-blue-500/20">
      <Navbar />

      <main>
        <Hero />

        {/* Sobre mí */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto max-w-2xl">
            <p className="text-slate-400 text-base leading-relaxed">
              Ingeniero de Software con experiencia en desarrollo backend, arquitectura de sistemas y lógica de negocio en sectores de{' '}
              <span className="text-slate-200">logística</span> y{' '}
              <span className="text-slate-200">fintech</span>. Especializado en integración de APIs complejas y optimización de bases de datos.
            </p>
          </div>
        </section>

        {/* Experiencia */}
        <section id="experience" className="py-20 px-6 border-t border-white/5 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Experiencia" />
            <div className="flex flex-col">
              {EXPERIENCES.map((exp, idx) => <ExperienceCard key={idx} exp={exp} />)}
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="py-20 px-6 border-t border-white/5 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <SectionHeader title="Proyectos" />
              <a
                href="https://github.com/eddy1699"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors flex items-center gap-1.5 mb-12"
              >
                <Github size={13} /> GitHub
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROJECTS.map((project, idx) => <ProjectCard key={idx} project={project} />)}
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section id="skills" className="py-20 px-6 border-t border-white/5 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Stack técnico" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SKILL_CATEGORIES.map((cat, idx) => <SkillGroup key={idx} category={cat} />)}
            </div>
          </div>
        </section>

        {/* Educación & Contacto */}
        <section id="education" className="py-20 px-6 border-t border-white/5 scroll-mt-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <SectionHeader title="Formación" />

              <div className="space-y-4 mb-10">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className={`animate-on-scroll ${cardHover} p-5`}>
                    <h4 className="text-sm font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-xs text-slate-500">{edu.institution}</p>
                    <span className="inline-block mt-2 text-[10px] font-medium uppercase tracking-wider text-blue-500">{edu.status}</span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-600 mb-3">Idiomas</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { lang: 'Español', level: 'Nativo' },
                  { lang: 'Inglés',  level: 'Avanzado' },
                  { lang: 'Francés', level: 'Básico' },
                ].map(({ lang, level }) => (
                  <div key={lang} className={`${card} p-3 text-center`}>
                    <p className="text-[10px] text-slate-600 uppercase mb-1">{lang}</p>
                    <p className="text-xs text-white font-medium">{level}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <SectionHeader title="Contacto" />

              <div className="space-y-2 mb-8">
                {[
                  { icon: <Mail size={14} />, text: 'edgardosamame@gmail.com', href: 'mailto:edgardosamame@gmail.com' },
                  { icon: <Phone size={14} />, text: '+51 936 430 407', href: undefined },
                  { icon: <MapPin size={14} />, text: 'La Molina, Lima, Perú', href: undefined },
                ].map(({ icon, text, href }) =>
                  href ? (
                    <a key={text} href={href} className={`flex items-center gap-3 p-3 rounded-lg ${cardHover}`}>
                      <span className="text-slate-500">{icon}</span>
                      <span className="text-sm text-slate-400">{text}</span>
                    </a>
                  ) : (
                    <div key={text} className={`flex items-center gap-3 p-3 ${card}`}>
                      <span className="text-slate-600">{icon}</span>
                      <span className="text-sm text-slate-500">{text}</span>
                    </div>
                  )
                )}
              </div>

              <a
                href="mailto:edgardosamame@gmail.com"
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
              >
                <Mail size={15} /> Enviar mensaje
              </a>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[10px] font-medium uppercase tracking-widest text-slate-600 mb-3">Habilidades blandas</p>
                <div className="flex flex-wrap gap-2">
                  {['Trabajo en equipo', 'Autodidacta', 'Comunicación', 'Adaptabilidad', 'Liderazgo técnico'].map(s => (
                    <span key={s} className={`${card} px-3 py-1 text-xs text-slate-500`}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-lg border border-white/10 bg-[#0a0a0c] hover:border-white/20 text-slate-400 hover:text-white flex items-center justify-center transition-all"
        >
          <ArrowUp size={16} />
        </button>
      )}

      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-700 text-xs">© {new Date().getFullYear()} Edgardo Samamé</p>
          <div className="flex gap-3">
            <a href="https://github.com/eddy1699" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-400 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/edgardosamame" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:edgardosamame@gmail.com" aria-label="Email" className="text-slate-600 hover:text-slate-400 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
