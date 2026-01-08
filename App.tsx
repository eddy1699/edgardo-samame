
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Phone,
  ChevronRight,
  Menu,
  X,
  Code2,
  Cloud,
  Database,
  Zap,
  Briefcase,
  Terminal,
  Server
} from 'lucide-react';
import { EXPERIENCES, SKILL_CATEGORIES, EDUCATIONS, PROJECTS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Educación', href: '#education' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-xl font-bold tracking-tighter text-white z-50"
        >
          EDGARDO<span className="text-blue-500">SAMAMÉ</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:edgardosamame@gmail.com" 
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-900/20"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white z-50 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0a0a0c] z-40 px-6 pt-24 pb-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-3xl font-bold text-white border-b border-white/5 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:edgardosamame@gmail.com" 
            className="w-full text-center py-4 mt-4 rounded-xl bg-blue-600 text-white font-bold text-xl shadow-xl shadow-blue-900/40"
          >
            Contáctame
          </a>
        </div>
      )}
    </nav>
  );
};

// const ProjectCard: React.FC<{ project: (typeof PROJECTS)[0] }> = ({ project }) => (
//   <div className="glass group p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all transform hover:-translate-y-2">
//     <div className="flex justify-between items-start mb-6">
//       <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
//         <Server size={24} />
//       </div>
//       <div className="flex gap-3">
//         {project.github && (
//           <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
//             <Github size={20} />
//           </a>
//         )}
//         {project.link && (
//           <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
//             <ExternalLink size={20} />
//           </a>
//         )}
//       </div>
//     </div>
    
//     <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">{project.type}</span>
//     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
//     <p className="text-slate-400 text-sm leading-relaxed mb-6">
//       {project.description}
//     </p>
    
//     <div className="flex flex-wrap gap-2">
//       {project.tags.map(tag => (
//         <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300">
//           {tag}
//         </span>
//       ))}
//     </div>
//   </div>
// );
const ProjectCard: React.FC<{ project: (typeof PROJECTS)[0] }> = ({ project }) => (
  <div className="glass group p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all transform hover:-translate-y-2">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
        <Server size={24} />
      </div>
      
      {/* Contenedor de enlaces */}
      <div className="flex items-center gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        )}
        
        {project.link && project.link !== '#' && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            // CAMBIOS AQUÍ:
            // 1. 'flex items-center gap-2': Alinea el texto y el ícono
            // 2. 'group/link': (Opcional) Para animaciones específicas si quisieras
            className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
          >
            {/* Texto añadido con estilo pequeño y negrita */}
            <span className="text-xs font-bold uppercase tracking-wide">Ver proyecto</span>
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
    
    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">{project.type}</span>
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300">
          {tag}
        </span>
      ))}
    </div>
  </div>
);
const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden scroll-mt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Ingeniero de Software Senior
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-6">
          Arquitectura <span className="gradient-text">Escalable</span> & Backend Moderno
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          Especialista en desarrollo backend con Node.js, TypeScript y AWS. 
          Transformo la complejidad logística y fintech en soluciones nativas en la nube de alto rendimiento.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://linkedin.com/in/edgardosamame" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all transform hover:-translate-y-1"
          >
            Ver LinkedIn
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#projects" 
            onClick={(e: any) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
          >
            Ver Portafolio
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2"><Code2 size={24}/> <span className="font-bold">TypeScript</span></div>
           <div className="flex items-center gap-2"><Cloud size={24}/> <span className="font-bold">AWS</span></div>
           <div className="flex items-center gap-2"><Database size={24}/> <span className="font-bold">SQL Server</span></div>
           <div className="flex items-center gap-2"><Zap size={24}/> <span className="font-bold">Node.js</span></div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ exp: (typeof EXPERIENCES)[0] }> = ({ exp }) => (
  <div className="relative pl-8 md:pl-12 pb-12 border-l border-white/10 last:border-0 last:pb-0 group">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0a0c] group-hover:scale-125 transition-transform"></div>
    
    <div className="glass p-6 md:p-8 rounded-2xl hover:border-blue-500/30 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
          <p className="text-blue-500 font-semibold">{exp.company}</p>
        </div>
        <div className="flex flex-col md:items-end">
          <span className="text-sm font-mono text-slate-500">{exp.period}</span>
          <span className="text-xs text-slate-600 flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {exp.achievements.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-400 leading-relaxed">
            <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
            {item}
          </li>
        ))}
      </ul>

      {exp.technologies && (
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const SkillGroup: React.FC<{ category: (typeof SKILL_CATEGORIES)[0] }> = ({ category }) => {
  const Icon = category.icon === 'cloud' ? Cloud : category.icon === 'code' ? Code2 : category.icon === 'database' ? Database : Zap;
  
  return (
    <div className="glass p-8 rounded-3xl group hover:bg-white/[0.05] transition-all">
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />

        {/* Resumen Profesional */}
        <section className="py-20 px-6 bg-white/[0.01]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Resumen Profesional</h2>
              <p className="text-xl text-slate-400 leading-relaxed text-left md:text-center italic">
                "Ingeniero de Software con sólida experiencia en desarrollo backend, arquitectura de sistemas y lógica de negocio en sectores de logística y fintech. Especializado en la integración de APIs complejas y optimización de bases de datos para maximizar la eficiencia operativa."
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Experiencia Profesional</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>
            
            <div className="flex flex-col">
              {EXPERIENCES.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Portfolio Section */}
        <section id="projects" className="py-24 px-6 scroll-mt-20 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                <p className="mt-6 text-slate-400 max-w-xl">
                  Una selección de arquitecturas y soluciones técnicas desarrolladas para optimizar procesos críticos.
                </p>
              </div>
              <a href="https://github.com/eddy1699" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                Ver más en GitHub <ChevronRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-blue-900/5 -skew-y-3 -z-10"></div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Habilidades Técnicas</h2>
              <p className="text-slate-400">Dominio de stacks modernos para infraestructuras escalables.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <SkillGroup key={idx} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Education & Info Section */}
        <section id="education" className="py-24 px-6 bg-[#0c0c0e] scroll-mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-10 flex items-center gap-4">
                Educación
              </h2>
              <div className="space-y-8">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0 group-hover:text-blue-400 transition-colors">
                      <ChevronRight size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-slate-400 font-medium">{edu.institution}</p>
                      <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Idiomas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="glass p-4 rounded-xl text-center">
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Español</p>
                    <p className="text-white font-bold">Nativo</p>
                  </div>
                  <div className="glass p-4 rounded-xl text-center border-blue-500/20">
                    <p className="text-blue-400 text-xs font-bold uppercase mb-1">Inglés</p>
                    <p className="text-white font-bold">Avanzado</p>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Francés</p>
                    <p className="text-white font-bold">Básico</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[2rem] flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Habilidades Blandas</h2>
                <div className="flex flex-wrap gap-3">
                  {["Trabajo en equipo", "Autodidacta", "Comunicación efectiva", "Adaptabilidad", "Liderazgo Técnico"].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <p className="text-slate-400 mb-6">Información de contacto:</p>
                <div className="flex items-center gap-4 text-slate-300">
                  <Mail className="text-blue-500" size={20} />
                  <span>edgardosamame@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Phone className="text-blue-500" size={20} />
                  <span>+51 936 430 407</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <MapPin className="text-blue-500" size={20} />
                  <span>La Molina, Lima, Perú</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Edgardo Samamé. Diseñado para el alto rendimiento.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/eddy1699" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/edgardosamame" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:edgardosamame@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-red-400 hover:bg-white/10 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
