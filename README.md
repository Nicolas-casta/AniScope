# AniScope

**Estudiante:** Nicolás Castaño Diosa
**Fecha:** 22 de abril de 2026

## Decisiones arquitectónicas
Se siguió una arquitectura de módulos para separar las responsabilidades del proyecto. Esto permite que cada módulo tenga su propia lógica, tipos y componentes sin mezclarse con los demás. La capa core centraliza la configuración de la API y React Query para que todos los módulos la consuman de forma consistente.

## Cómo correr el proyecto
\`\`\`bash
npm install
npm run dev
\`\`\`

## Decisiones técnicas relevantes
- Se usó TanStack Query para manejar el estado del servidor y el caché de peticiones
- Los favoritos se guardan en localStorage para que persistan entre sesiones
- Se usó lazy loading en las páginas para mejorar el tiempo de carga inicial