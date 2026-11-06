# 🚀 Portafolio Personal

Portafolio web personal construido con **Astro** y **Tailwind CSS**, desplegado en **GitHub Pages**.

## 🛠️ Stack Tecnológico

- [Astro](https://astro.build/) - Framework web
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [TypeScript](https://www.typescriptlang.org/) - Tipado
- [Web3Forms](https://web3forms.com) - Formulario de contacto (sin backend)
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 📁 Estructura del Proyecto

```
/
├── .github/workflows/    # GitHub Actions para deploy
├── public/               # Assets estáticos
├── src/
│   ├── components/       # Componentes Astro
│   ├── i18n/             # Traducciones (ES/EN)
│   ├── layouts/          # Layout base
│   ├── pages/            # Páginas del sitio
│   ├── scripts/          # Lógica del cliente
│   └── styles/           # Estilos globales
├── astro.config.mjs
└── package.json
```

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Despliegue

El proyecto se despliega automáticamente a GitHub Pages al hacer push a la rama `main`.

### Configuración inicial en GitHub:

1. Ve a **Settings** > **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. Haz push a `main` y el deploy será automático

## 📄 Licencia

MIT License
