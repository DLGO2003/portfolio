# 🚀 Portafolio - Daniel Leandro Gutierrez Ospina

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
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── i18n/
│   │   └── translations.ts   # Diccionario de traducciones ES/EN
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── i18n.ts           # Lógica de traducción
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## 🚀 Desarrollo Local

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

## ✏️ Editar Contenido

| Sección | Archivo |
|---|---|
| Información personal | `src/components/Hero.astro` |
| Sobre mí | `src/components/About.astro` |
| Habilidades | `src/components/Skills.astro` |
| Proyectos | `src/components/Projects.astro` |
| Experiencia | `src/components/Experience.astro` |
| Contacto | `src/components/Contact.astro` |

## 📧 Formulario de Contacto (Web3Forms)

El formulario de contacto utiliza [**Web3Forms**](https://web3forms.com) para enviar mensajes directamente al email sin necesidad de backend.

### Configuración actual:

| Parámetro | Valor |
|---|---|
| **Servicio** | Web3Forms |
| **Access Key** | `f0edaafc-6727-4cea-9d97-f4eef37ac95c` |
| **Email destino** | danileogutierrez@gmail.com |
| **Límite de envíos** | Ilimitado (gratis) |
| **Anti-spam** | Honeypot field incluido |

### ✅ Características del formulario:

- 📩 Envío directo al email configurado
- ✅ Validación de campos requeridos
- 🛡️ Protección anti-spam
- ⏳ Estado de carga ("Enviando...")
- ✅ Mensaje de confirmación visual
- 🔄 Reset automático después de enviar

### ⚠️ Si necesitas cambiar la Access Key:

1. Ve a [web3forms.com](https://web3forms.com)
2. Genera una nueva Access Key con tu email
3. Actualiza el valor en `src/components/Contact.astro`:

```html
<input type="hidden" name="access_key" value="TU_NUEVA_KEY_AQUI" />
```

### 🧪 Probar el formulario:

1. Inicia el servidor: `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario y envía
4. Verifica que llegue el mensaje a tu email

## 🌍 Sistema de Traducción (i18n)

El portafolio soporta **Español** e **Inglés** mediante un sistema de traducción basado en diccionarios.

### Archivos del sistema i18n:

| Archivo | Propósito |
|---|---|
| `src/i18n/translations.ts` | Diccionario con todas las traducciones (ES/EN) |
| `src/scripts/i18n.ts` | Lógica de cambio de idioma y persistencia |

### ⚠️ IMPORTANTE al editar traducciones

> **Si modificas un texto en español, DEBES actualizar también su equivalente en inglés.** Las traducciones están en diccionarios separados y NO se sincronizan automáticamente.

**Ejemplo:**

```typescript
// src/i18n/translations.ts

es: {
  'hero.title': 'Ingeniero de Software',    // ← Español
},
en: {
  'hero.title': 'Software Engineer',         // ← Inglés (actualizar manualmente)
},
```

### Cómo agregar un nuevo texto traducible:

1. **Agrega la clave** en ambos diccionarios (`es` y `en`) en `src/i18n/translations.ts`
2. **Agrega el atributo** `data-i18n="clave"` al elemento HTML en el componente
3. Para placeholders: usa `data-i18n-placeholder="clave"`
4. Para labels: usa `data-i18n="clave"` directamente en el `<label>`

### Idioma predeterminado:

El idioma predeterminado es **Español**. La selección del usuario se guarda en `localStorage` y persiste entre visitas.

## 📄 Licencia

MIT License © Daniel Leandro Gutierrez Ospina
