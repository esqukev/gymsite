# FFO GYM — Sitio web

Sitio web del gimnasio **FFO GYM** (multi-página). Incluye: Inicio, Instalaciones, Equipo, Modalidades, Intizom (filial funcional) y Contacto/Reservas.

## Tecnologías

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Requisitos

- Node.js 18+
- npm o pnpm

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/esqukev/gymsite.git
cd gymsite

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run start`| Servidor de producción   |
| `npm run lint` | Ejecutar ESLint          |

## Estructura del proyecto

```
gymapp/
├── app/
│   ├── page.tsx              # Inicio
│   ├── instalaciones/        # Página Instalaciones
│   ├── equipo/               # Página Equipo
│   ├── modalidades/          # Página Modalidades
│   ├── intizom/              # Página Intizom
│   └── contacto/             # Página Contacto + Reservas
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Facilities.tsx
│   ├── Team.tsx
│   ├── Modalities.tsx
│   ├── Intizom.tsx
│   ├── Booking.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── mock.js                   # Datos (gymData, facilities, staff, etc.)
└── public/
```

## Subir a GitHub

Si el proyecto aún no está vinculado al remoto:

```bash
git init
git add .
git commit -m "Initial commit: FFO GYM website"
git branch -M main
git remote add origin https://github.com/esqukev/gymsite.git
git push -u origin main
```

Si ya tienes un repo local y solo quieres apuntar a este remoto:

```bash
git remote add origin https://github.com/esqukev/gymsite.git
git branch -M main
git push -u origin main
```

## Licencia

Proyecto privado — FFO GYM.
