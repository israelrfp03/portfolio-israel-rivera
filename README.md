# Portfolio — Israel Rivera

Portfolio personal de **Israel Rivera**, desarrollador web junior (PHP/Laravel, aprendiendo Python y React). Incluye un teclado 3D interactivo donde cada tecla representa una tecnología de mi stack: al pulsarla (o hacer clic) resalta esa tecnología en la sección de Tecnologías.

## ✨ Características

- **Teclado 3D interactivo** — escena hecha en [Spline](https://spline.design/), embebida en el Hero
- **Modo claro/oscuro**
- **Formulario de contacto** con envío de email vía Resend
- **Totalmente en español**
- **Responsive**
- **Funciones en tiempo real (opcional)** — cursores/presencia en vivo, activables con una variable de entorno

## 🛠️ Stack técnico

| Capa | Tecnologías |
|---|---|
| Framework | Next.js 16, React 19, TypeScript |
| Estilos | Tailwind CSS |
| Animación | GSAP, Motion (Framer Motion) |
| 3D | Spline (`@splinetool/react-spline`) |
| Email | Resend |
| Otros | Lenis (scroll suave), Zod, next-themes |

## 🚀 Puesta en marcha

### Requisitos

- Node.js 18+
- pnpm

### Instalación

```bash
git clone https://github.com/israelrfp03/portfolio-israel-rivera.git
cd portfolio-israel-rivera
pnpm install
```

### Variables de entorno

Copia `.env.example` a `.env.local` y rellena lo que necesites:

| Variable | Obligatoria | Descripción |
|---|---|---|
| `RESEND_API_KEY` | Sí | Clave de [Resend](https://resend.com) para el formulario de contacto |
| `NEXT_PUBLIC_WS_URL` | No | URL del servidor WebSocket para cursores/presencia en tiempo real |
| `UMAMI_DOMAIN` / `UMAMI_SITE_ID` | No | Analítica con Umami |
| `NEXT_PUBLIC_LEGACY_HOST` | No | Dominio antiguo, si alguna vez muevo el sitio, muestra un aviso de "nos hemos mudado" |

### Arrancar en desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## ⌨️ Actualizar el teclado 3D

El teclado vive como proyecto propio en Spline, no como archivo local del repo:

1. Abre el proyecto en [Spline](https://spline.design/).
2. Edita las teclas que quieras (color, logo, texto...).
3. **Export → Code Export → React → Update Code Export**.
4. Si cambia la URL de la escena, actualízala en `src/components/tech-stack-scene.tsx`.

Cada tecla debe llamarse igual que su skill correspondiente para que la interacción (resaltar la tarjeta de abajo) siga funcionando — revisa `SPLINE_OBJECT_BY_SKILL` en ese mismo archivo.

## 📄 Licencia

Uso personal — este es mi portfolio, no una plantilla para reutilizar.
