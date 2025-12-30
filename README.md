````markdown
# Catálogo estático — Next.js (Export) + WhatsApp

Resumen rápido
- Sitio estático creado con Next.js (App Router). Datos en `/data/*.json`.
- Pedidos y consultas por WhatsApp (link generado desde frontend). No hay pagos ni streaming en fichas.

Requisitos
- Node 18+, npm

Scripts
```bash
npm install
npm run dev      # desarrollo
npm run build    # build (next build)
npm run export   # build + export to `out/`
npm run test     # run unit tests (vitest)
```

Variables de configuración (opcional, en GitHub Actions o .env durante build)
- `PHONE_NUMBER` — número internacional sin símbolos (p. ej. `59171234567`).
- `TIMEZONE` — por defecto `America/La_Paz`.
- `SITE_TITLE`, `SITE_OWNER`, `CONTACT_EMAIL` — opcionales.

Estructura relevante
- `app/` — rutas (Home, productos, peliculas, calendario, servicios)
- `components/` — `WhatsAppButton`, `ProductCard`, `MovieCard`, `CalendarWeek`, `Header`, `Footer`
- `lib/` — utilidades (`whatsapp.ts`, `calendar.ts`, `types.ts`)
- `data/` — JSON editables (administración por PR)
- `public/img/` — imágenes públicas

Datos y administración
- Edita `/data/*.json` y abre un Pull Request. Esto es la forma recomendada de administrar el catálogo.
- Opcional: crear una UI admin estática que use la API de GitHub para crear PRs (requiere token y seguridad).

WhatsApp
- Mensajes predefinidos se generan en `lib/whatsapp.ts`. `components/WhatsAppButton.tsx` crea enlaces `https://wa.me/<phone>?text=<message>`.

Deploy a GitHub Pages (autodeploy)
1. Crear repo y push de la rama `main`.
2. Workflow incluido `.github/workflows/deploy.yml` genera `out/` con `next export` y publica `out/` a `gh-pages`.
3. En GitHub: Settings → Pages → seleccionar branch `gh-pages` (root) si hace falta.

Cloudflare (DNS / CDN)
- Añadir registro CNAME apuntando a `<username>.github.io` o usar el dominio de GitHub Pages.
- Activar proxy (orange cloud) si se desea; habilitar HTTPS.
- Opcional: Workers / R2 si se necesitan assets o lógica adicional.

QA checklist
- Todas las fichas muestran título, imagen, estado y resumen.
- Botones WhatsApp abren chat con `PHONE_NUMBER` y mensaje correcto.
- Calendario muestra la semana activa con enlace sólo en la semana activa.
- Editar `data/*.json` y crear PR produce cambios visibles tras build.

Tests
- Unit tests para la lógica de calendario con `vitest` en `test/calendar.test.ts`.

Notas de seguridad
- No se procesan pagos ni datos sensibles.
- Validar y sanear contenido de JSON antes de mostrar en producción.

Si quieres, añado: administración mediante GitHub API, validación de esquema JSON en CI, o estilos con Tailwind.
# Sitio estático: Catálogo (Productos, Películas, Calendario) - Next.js

Este repositorio contiene una implementación mínima para un sitio estático exportable con `next export`.

Variables configurables (usar en GitHub Actions / entorno de build):
- `PHONE_NUMBER` (ej. 59171234567)
- `TIMEZONE` (por defecto `America/La_Paz`)

Comandos locales:

```bash
npm install
npm run build
npm run export
```

Deploy recomendado: GitHub Actions que corra `next build && next export` y publique la carpeta `out` en la rama `gh-pages`.

Cloudflare: apuntar DNS al sitio GitHub Pages y activar proxy y HTTPS. Opcional: Workers para automatizaciones futuras.

Notas importantes:
- No hay backend. Datos en `/data/*.json`.
- Todos los pedidos y consultas se realizan por WhatsApp (botones usan `PHONE_NUMBER`).

## Instrucciones rápidas para subir a GitHub

1) Inicializar repo local y hacer commit:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

2) Crear repo remoto y empujar:

- Usando GitHub CLI (`gh`):

```bash
gh repo create TU_USUARIO/TU_REPO --public --source=. --remote=origin --push
```

- Usando la web (alternativa):

  - Crea un nuevo repo en github.com (sin README).
  - Añade el remoto y empuja:

```bash
git remote add origin git@github.com:TU_USUARIO/TU_REPO.git
git push -u origin main
```

Si prefieres HTTPS usa `https://github.com/TU_USUARIO/TU_REPO.git` en el `git remote add`.

¿Quieres que añada un workflow de GitHub Actions para ejecutar `next build && next export` y desplegar a `gh-pages` automáticamente?

````
# Catálogo estático — Next.js (Export) + WhatsApp

Resumen rápido
- Sitio estático creado con Next.js (App Router). Datos en `/data/*.json`.
- Pedidos y consultas por WhatsApp (link generado desde frontend). No hay pagos ni streaming en fichas.

Requisitos
- Node 18+, npm

Scripts
```bash
npm install
npm run dev      # desarrollo
npm run build    # build (next build)
npm run export   # build + export to `out/`
npm run test     # run unit tests (vitest)
```

Variables de configuración (opcional, en GitHub Actions o .env durante build)
- `PHONE_NUMBER` — número internacional sin símbolos (p. ej. `59171234567`).
- `TIMEZONE` — por defecto `America/La_Paz`.
- `SITE_TITLE`, `SITE_OWNER`, `CONTACT_EMAIL` — opcionales.

Estructura relevante
- `app/` — rutas (Home, productos, peliculas, calendario, servicios)
- `components/` — `WhatsAppButton`, `ProductCard`, `MovieCard`, `CalendarWeek`, `Header`, `Footer`
- `lib/` — utilidades (`whatsapp.ts`, `calendar.ts`, `types.ts`)
- `data/` — JSON editables (administración por PR)
- `public/img/` — imágenes públicas

Datos y administración
- Edita `/data/*.json` y abre un Pull Request. Esto es la forma recomendada de administrar el catálogo.
- Opcional: crear una UI admin estática que use la API de GitHub para crear PRs (requiere token y seguridad).

WhatsApp
- Mensajes predefinidos se generan en `lib/whatsapp.ts`. `components/WhatsAppButton.tsx` crea enlaces `https://wa.me/<phone>?text=<message>`.

Deploy a GitHub Pages (autodeploy)
1. Crear repo y push de la rama `main`.
2. Workflow incluido `.github/workflows/deploy.yml` genera `out/` con `next export` y publica `out/` a `gh-pages`.
3. En GitHub: Settings → Pages → seleccionar branch `gh-pages` (root) si hace falta.

Cloudflare (DNS / CDN)
- Añadir registro CNAME apuntando a `<username>.github.io` o usar el dominio de GitHub Pages.
- Activar proxy (orange cloud) si se desea; habilitar HTTPS.
- Opcional: Workers / R2 si se necesitan assets o lógica adicional.

QA checklist
- Todas las fichas muestran título, imagen, estado y resumen.
- Botones WhatsApp abren chat con `PHONE_NUMBER` y mensaje correcto.
- Calendario muestra la semana activa con enlace sólo en la semana activa.
- Editar `data/*.json` y crear PR produce cambios visibles tras build.

Tests
- Unit tests para la lógica de calendario con `vitest` en `test/calendar.test.ts`.

Notas de seguridad
- No se procesan pagos ni datos sensibles.
- Validar y sanear contenido de JSON antes de mostrar en producción.

Si quieres, añado: administración mediante GitHub API, validación de esquema JSON en CI, o estilos con Tailwind.
# Sitio estático: Catálogo (Productos, Películas, Calendario) - Next.js

Este repositorio contiene una implementación mínima para un sitio estático exportable con `next export`.

Variables configurables (usar en GitHub Actions / entorno de build):
- `PHONE_NUMBER` (ej. 59171234567)
- `TIMEZONE` (por defecto `America/La_Paz`)

Comandos locales:

```bash
npm install
npm run build
npm run export
```

Deploy recomendado: GitHub Actions que corra `next build && next export` y publique la carpeta `out` en la rama `gh-pages`.

Cloudflare: apuntar DNS al sitio GitHub Pages y activar proxy y HTTPS. Opcional: Workers para automatizaciones futuras.

Notas importantes:
- No hay backend. Datos en `/data/*.json`.
- Todos los pedidos y consultas se realizan por WhatsApp (botones usan `PHONE_NUMBER`).
