# Requirements: Portafolio Comercial — Edgardo Samamé

**Defined:** 2026-03-24
**Core Value:** Un cliente potencial entiende en menos de 10 segundos qué puede construir Edgardo para su negocio y cómo contactarlo.

## v1 Requirements

### Hero & Posicionamiento

- [ ] **HERO-01**: Título principal actualizado a "Ingeniero de Software & Experto en IA"
- [ ] **HERO-02**: Subtítulo comercial sobre soluciones para empresas y negocios
- [ ] **HERO-03**: Stats actualizados (+4 Años, +15 Proyectos, +50 Empresas, Experto en IA)
- [ ] **HERO-04**: Botón CTA "Ver mis servicios" con scroll a sección de servicios
- [ ] **HERO-05**: Badge "Disponible para proyectos" con animación pulse verde

### Servicios

- [ ] **SERV-01**: Componente Services.tsx con grid de 4 cards de servicios
- [ ] **SERV-02**: Card "Páginas Web & Landing Pages" (Globe icon, blue-500)
- [ ] **SERV-03**: Card "Sistemas de Pedidos Online" (ShoppingCart icon, green-500)
- [ ] **SERV-04**: Card "Gestión de Ventas por Suscripción" (BarChart3 icon, purple-500)
- [ ] **SERV-05**: Card "Automatización & Soluciones a Medida" (Zap icon, orange-500)
- [ ] **SERV-06**: Cards con línea de color accent en top, hover translateY(-4px)
- [ ] **SERV-07**: Botón "Más info →" en cada card abre WhatsApp con mensaje predeterminado
- [ ] **SERV-08**: Grid 2 columnas desktop, 1 columna mobile

### Contenido — Proyectos

- [ ] **PROJ-01**: Proyecto "Alimday" agregado a constants.ts (al inicio)
- [ ] **PROJ-02**: Proyecto "Sistema de Pedidos Online" agregado a constants.ts
- [ ] **PROJ-03**: Proyecto "Eddy's Ride" agregado a constants.ts
- [ ] **PROJ-04**: Proyecto "Vibe Coding Workshop" agregado a constants.ts
- [ ] **PROJ-05**: Badge visual de tipo en cada card de proyecto con color por categoría

### Contenido — Sobre mí & Skills

- [ ] **CONT-01**: Texto "Sobre mí" reescrito con enfoque comercial
- [ ] **CONT-02**: Nueva categoría "IA & Herramientas" en SKILL_CATEGORIES con Brain icon
- [ ] **CONT-03**: Icono Brain importado y mapeado en el render de skill categories

### Diseño Visual

- [ ] **VIS-01**: Títulos de sección con gradiente blue-400→purple-400
- [ ] **VIS-02**: Botones CTA con gradiente blue-600→purple-600
- [ ] **VIS-03**: Animaciones entrada desde izquierda y derecha (variantes)
- [ ] **VIS-04**: Stagger delay 0.1s entre cards en sección de servicios
- [ ] **VIS-05**: Hover glow en cards de proyectos

### Navegación & Estructura

- [ ] **NAV-01**: "Servicios" agregado a la nav entre "Inicio" y "Experiencia"
- [ ] **NAV-02**: Sección Servicios incluida en App.tsx con id="servicios"

### Contacto & Footer

- [ ] **CONT-04**: WhatsApp como método principal (wa.me/51XXXXXXXXX)
- [ ] **CONT-05**: Texto "¿Tienes un proyecto en mente? Escríbeme sin compromiso."
- [ ] **FOOT-01**: Footer tagline actualizado a "Ingeniero de Software & Experto en IA — Lima, Perú"

### SEO & Meta

- [ ] **SEO-01**: Title tag actualizado en index.html
- [ ] **SEO-02**: Meta description actualizado
- [ ] **SEO-03**: OG tags actualizados (og:title, og:description)

## v2 Requirements

### Mejoras Futuras

- **V2-01**: Sección de testimonios de clientes
- **V2-02**: Formulario de cotización rápida
- **V2-03**: Blog técnico / casos de estudio
- **V2-04**: Número real de WhatsApp cuando esté disponible
- **V2-05**: Links reales para Eddy's Ride y Vibe Coding Workshop

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / API propia | Sitio estático en Netlify, no requerido |
| CMS | Contenido manejado en constants.ts, suficiente para este volumen |
| Autenticación | Portafolio público, no hay área privada |
| Cambio de stack | React + TS + Vite + Tailwind se mantiene por decisión del usuario |
| React Router | Single-page app con scroll, no hay páginas separadas |
| Modo claro / light theme | Dark theme es parte de la identidad visual |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| HERO-01 a HERO-05 | Phase 1 | Pending |
| SERV-01 a SERV-08 | Phase 1 | Pending |
| PROJ-01 a PROJ-05 | Phase 1 | Pending |
| CONT-01 a CONT-03 | Phase 1 | Pending |
| VIS-01 a VIS-05 | Phase 2 | Pending |
| NAV-01 a NAV-02 | Phase 1 | Pending |
| CONT-04 a CONT-05 | Phase 2 | Pending |
| FOOT-01 | Phase 2 | Pending |
| SEO-01 a SEO-03 | Phase 2 | Pending |

**Coverage:**
- v1 requirements: 35 total
- Mapped to phases: 35
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-24*
*Last updated: 2026-03-24 after initial definition*
