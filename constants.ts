import { Experience, SkillCategory, Education, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "E2OPEN by Wisetech",
    role: "Ingeniero de Software",
    period: "06/2024 - Actualidad",
    location: "Lima, Perú",
    achievements: [
      "Lidero el desarrollo y mantenimiento del sistema ShipIT, una solución logística crítica de alto volumen transaccional.",
      "Diseño e implemento integraciones robustas vía API con proveedores globales (DHL, UPS, FedEx), asegurando la consistencia de datos en tiempo real.",
      "Gestiono bases de datos Microsoft SQL, optimizando consultas para manejar grandes volúmenes de datos de envíos.",
      "Documento técnicamente la arquitectura del sistema para facilitar la integración de nuevos desarrolladores."
    ],
    technologies: ["C#", ".NET", "SQL", "APIs REST/SOAP"]
  },
  {
    company: "E2OPEN",
    role: "Ingeniero de Implementación",
    period: "04/2023 - 06/2024",
    location: "Lima, Perú",
    achievements: [
      "Consultoría técnica para clientes corporativos en USA y Canadá, adaptando la lógica de negocio a requisitos logísticos complejos.",
      "Resolución de incidencias críticas en producción relacionadas con la comunicación entre servicios de transporte.",
      "Automatización de reglas de negocio para optimizar los flujos de envío."
    ]
  },
  {
    company: "DELFOSTI (Cliente: IZIPAY)",
    role: "Desarrollador Web – Analista de Integraciones",
    period: "05/2021 - 03/2023",
    location: "Lima, Perú",
    achievements: [
      "Implementé pasarelas de pago seguras en aplicaciones web y móviles, garantizando estándares de seguridad financiera.",
      "Desarrollé la lógica backend para procesos de cobro, conciliación y gestión de transacciones fallidas.",
      "Diseñé y desplegué una plataforma web interna para la gestión eficiente de tickets y soporte operativo."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Alimday — Alimentación Corporativa",
    description: "Landing page corporativa para empresa de catering. Formulario de cotización, sección de servicios, certificaciones BPM/HACCP. +50 empresas atendidas.",
    tags: ["React", "Tailwind", "Vite", "FormSubmit"],
    type: "Web Corporativa",
    link: "https://alimday.netlify.app"
  },
  {
    title: "Sistema de Pedidos Online",
    description: "Plataforma donde los clientes hacen pedidos desde el celular, pagan por Yape, adjuntan comprobante y el negocio recibe todo por WhatsApp al instante.",
    tags: ["React", "Node.js", "WhatsApp API"],
    type: "SaaS / Producto",
    link: "https://pedidosdemo.netlify.app/"
  },
  {
    title: "Eddy's Ride — Menú Digital con QR",
    description: "Menú digital para venta de snacks en servicio de transporte. Escaneo por QR, diseño mobile-first, sección de servicios tech integrada.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Landing Page",
    link: "#"
  },
  {
    title: "Vibe Coding Workshop",
    description: "Landing page para taller de 3 sesiones sobre construcción de productos con IA. Animaciones de terminal, scroll reveal, diseño dark premium.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Landing Page",
    link: "#"
  },
  {
    title: "ShipIT Global Orchestrator",
    description: "Middleware de alta disponibilidad para la sincronización de guías y estados de envío con carriers internacionales. Procesa +10k peticiones/hora.",
    tags: [".NET Core", "SQL Server", "Redis", "Rest/SOAP"],
    type: "Logistics / Backend",
    link: "#"
  },
  {
    title: "Fintech Gateway Connector",
    description: "Orquestador de pagos multicurrencia con validación de seguridad PCI-DSS y sistema de reintentos automático para transacciones fallidas.",
    tags: ["Node.js", "TypeScript", "Express", "AWS Lambda"],
    type: "Fintech / Payments",
    link: "#"
  },
  {
    title: "Cloud Infrastructure as Code",
    description: "Plantillas de Terraform para el despliegue automático de microservicios en AWS (EKS, RDS, API Gateway) con monitoreo en CloudWatch.",
    tags: ["AWS", "Terraform", "Docker", "CI/CD"],
    type: "DevOps / Infrastructure",
    link: "#"
  },
    {
    title: "The Last Echo",
    description: "Landing page para un proyecto musical, desarrollada con React y Tailwind CSS, enfocada en la promoción de contenido multimedia.",
    tags: ["React", "Tailwind"],
    type: "Landing Page",
    link: "https://thelastecho.netlify.app"
  },
     {
    title: "Lumina Film Fest",
    description: "Landing page para un festival de cine, creada con React y Tailwind CSS, destacando la programación y eventos del festival.",
    tags: ["React", "Tailwind"],
    type: "Landing Page",
    link: "https://luminafilmfest.netlify.app/"
  },
      {
    title: "Cine Flow Festival",
    description: "Landing page para un festival de cine independiente, desarrollada con React y Tailwind CSS, con enfoque en la experiencia del usuario.",
    tags: ["React", "Tailwind"],
    type: "Landing Page",
    link: "https://flowcine.netlify.app/"
  },
  {
    title: "Escuela de Gobernabilidad y Ciudadania",
    description: "Landing page institucional desarrollada con Vue.js y Tailwind CSS para una mejor experiencia de usuario y adaptabilidad móvil.",
    tags: ["Vue", "Tailwind"],
    type: "Landing Page",
    link: "https://sparkly-liger-4bcd0a.netlify.app/"
  },
  {
    title: "Weather App React",
    description: "Aplicación web que consume una API pública para mostrar el clima actual y pronósticos, con diseño responsivo y funcionalidad de búsqueda por ciudad.",
    tags: ["React", "CSS"],
    type: "Web App",
    link: "https://weather-app-reactv1.netlify.app/"
  },
   {
    title: "Consorcio e Inversiones",
    description: "Landing page para una empresa de inversiones, creada con Vue.js y Tailwind CSS, optimizada para SEO y experiencia móvil.",
    tags: ["Vue", "Tailwind"],
    type: "Landing Page",
    link: "https://consorcioeinversiones.netlify.app/"
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Lambda, API Gateway, S3, EC2, DynamoDB)", "Docker", "CI/CD"],
    icon: "cloud"
  },
  {
    title: "Backend & Lenguajes",
    skills: ["Node.js", "TypeScript", "JavaScript (ES6+)", "C# (.NET Core)", "Python", "Express.js"],
    icon: "code"
  },
  {
    title: "Bases de Datos",
    skills: ["SQL Server", "MySQL", "MongoDB (NoSQL)"],
    icon: "database"
  },
  {
    title: "Integraciones",
    skills: ["RESTful APIs", "SOAP", "Webhooks", "Pasarelas de Pago (Izipay, Payme)", "APIs Logísticas"],
    icon: "zap"
  },
  {
    title: "IA & Herramientas",
    skills: ["Claude AI", "Microsoft 365 Copilot", "Prompt Engineering", "Vibe Coding", "Agentes AI", "Automatización con IA"],
    icon: "brain"
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Ingeniería Empresarial y de Sistemas",
    institution: "Universidad San Ignacio de Loyola",
    status: "En curso"
  },
  {
    degree: "Ingeniería de Software",
    institution: "Instituto San Ignacio de Loyola",
    status: "Egresado, 2020"
  }
];
