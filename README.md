# Caracteristicas

``` -Diseño minimalista pero atractivo, con animaciones sutiles.

    -Modo oscuro/claro persistente.

    -Secciones completas: Hero, Sobre mí, Experiencia laboral, Portafolio con filtros, Blog técnico y Contacto.

    -Blog integrado con Content Collections (Markdown/MDX), soporte para imágenes y vídeos.

    -Formulario de contacto funcional que guarda los mensajes en Google Sheets y envía copia por correo.

    -Totalmente responsive (móvil, tablet, escritorio).

    -Desplegado en Render con dominio personalizado y SSL automático.
```

# Tecnologias
``` -Framework: Astro (generación de sitios estáticos, islands architecture)

    -Estilos: Tailwind CSS + modo oscuro

    -Lenguaje: TypeScript

    -Blog: Content Collections + MDX

    -Formulario: Google Apps Script (integración con Sheets y envío de correos)

    -Despliegue: Render (Static Site)
```
# Desarrollo Local

## Clonar el repositorio
git clone https://github.com/maodas/portafolio-maodas.git
cd portafolio-maodas

## Instalar dependencias
npm install

## Iniciar servidor de desarrollo
npm run dev

El sitio estará disponible en http://localhost:4321.

# Construcción para Producción

npm run build
Los archivos estáticos se generan en la carpeta dist/.

# Despliege en Render

Cada push a la rama main activa automáticamente un despliegue en Render. La configuración incluye:

    Build Command: npm run build

    Publish Directory: dist

    Node Version: 20.11.0 (variable de entorno)

Dominio personalizado: maodas.online

# Licencia
Este proyecto es de código abierto bajo la licencia MIT. Puedes usarlo como inspiración para tu propio portafolio.