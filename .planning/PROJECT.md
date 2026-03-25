# Portafolio Comercial — Edgardo Samamé

## What This Is

Portafolio personal en React 19 + TypeScript + Vite + Tailwind CSS transformado de CV técnico a página comercial. Dirigido a empresas, emprendedores y negocios que buscan un ingeniero de software especializado en IA y soluciones tecnológicas. El objetivo es que potenciales clientes vean los servicios ofrecidos y tomen contacto.

## Core Value

Un cliente potencial entiende en menos de 10 segundos qué puede construir Edgardo para su negocio y cómo contactarlo.

## Requirements

### Validated

- ✓ Dark theme con fondo #0a0a0c, tipografía Inter, Tailwind CSS — existing
- ✓ Secciones Hero, Experiencia, Proyectos, Skills, Educación, Contacto — existing
- ✓ Animaciones scroll reveal con IntersectionObserver — existing
- ✓ Navegación fija con scroll suave y sección activa — existing
- ✓ Responsive mobile-first — existing
- ✓ Integración con lucide-react para iconos — existing

### Active

- [ ] Hero reescrito con posicionamiento comercial ("Ingeniero de Software & Experto en IA")
- [ ] Stats actualizados: +4 Años exp., +15 Proyectos, +50 Empresas atendidas, Experto en IA
- [ ] Botón CTA "Ver mis servicios" con scroll a sección de servicios
- [ ] Nueva sección Servicios con 4 cards (Web/Landing, Pedidos, Suscripciones, Automatización)
- [ ] Cards de servicios con color accent en top, hover effect y link a WhatsApp
- [ ] 4 nuevos proyectos agregados a constants.ts (Alimday, Pedidos, Eddy's Ride, Vibe Coding)
- [ ] Texto "Sobre mí" actualizado con enfoque comercial
- [ ] Nueva categoría IA & Herramientas en Skills
- [ ] Gradientes blue→purple en títulos de sección y botones CTA
- [ ] Badge "Disponible para proyectos" con animación pulse
- [ ] Badges de tipo en cards de proyectos con colores por categoría
- [ ] Animaciones mejoradas: entrada desde izquierda/derecha, stagger en servicios
- [ ] WhatsApp como contacto principal con link wa.me/51XXXXXXXXX
- [ ] Texto "¿Tienes un proyecto en mente? Escríbeme sin compromiso" en Contacto
- [ ] "Servicios" agregado a la navegación entre Inicio y Experiencia
- [ ] Footer tagline: "Ingeniero de Software & Experto en IA — Lima, Perú"
- [ ] Meta tags / OG actualizados en index.html

### Out of Scope

- Backend / servidor propio — sitio estático en Netlify, no se necesita
- CMS — contenido manejado directamente en constants.ts
- Autenticación / área privada — portafolio público
- Cambio de stack — mantener React 19 + TS + Vite + Tailwind

## Context

- Sitio deployado en edgardosamame.netlify.app (Netlify, static)
- Stack: React 19.2.3, TypeScript 5.8.2, Vite 6.2.0, Tailwind CSS CDN, lucide-react
- Codebase mapeado en .planning/codebase/ (STACK.md, ARCHITECTURE.md, etc.)
- Todo el contenido vive en constants.ts (EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EDUCATIONS)
- Componente principal en App.tsx (monolítico con inline styles y Tailwind)
- WhatsApp placeholder: +51XXXXXXXXX (el usuario lo actualiza después)
- Número real de WhatsApp pendiente — usar wa.me/51XXXXXXXXX como placeholder
- Los proyectos "Eddy's Ride" y "Vibe Coding Workshop" tienen link "#" (aún no publicados)

## Constraints

- **Tech stack**: React + TypeScript + Vite + Tailwind — no cambiar
- **Tailwind**: Vía CDN (no instalado como módulo node), usar clases estándar
- **Dark theme**: Mantener #0a0a0c como fondo base, no cambiar esquema de colores base
- **Animaciones**: Solo agregar, no eliminar las existentes
- **Single-page app**: Mantener navegación con smooth scroll, no React Router

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Mantener Tailwind CDN | No requiere build config changes, stack existente | — Pending |
| Services.tsx como nuevo componente | Separar concerns, facilitar mantenimiento | — Pending |
| WhatsApp como CTA principal en servicios | Canal de contacto principal del target peruano | — Pending |
| Gradiente blue→purple para diferenciación | Más distintivo que el blue sólido actual | — Pending |

---

## Evolution

Este documento evoluciona en cada transición de fase y milestone.

**After each phase transition:**
1. Requirements invalidados? → Mover a Out of Scope con razón
2. Requirements validados? → Mover a Validated con referencia de fase
3. Nuevos requirements? → Agregar a Active
4. Decisiones a registrar? → Agregar a Key Decisions
5. "What This Is" sigue siendo preciso? → Actualizar si hubo drift

**After each milestone:**
1. Revisión completa de todas las secciones
2. Core Value check — ¿sigue siendo la prioridad correcta?
3. Auditar Out of Scope — ¿las razones siguen siendo válidas?
4. Actualizar Context con estado actual

---
*Last updated: 2026-03-24 after initialization*
