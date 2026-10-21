# Mi Página Web

## Estructura

```
mi-pagina-web/
├── index.html          # Página de inicio
├── pages/              # Otras páginas del sitio
│   ├── nosotros.html
│   ├── servicios.html
│   ├── contacto.html
│   ├── registro.html   # Crear cuenta (Supabase)
│   ├── login.html      # Ingresar
│   └── perfil.html     # Solo para usuarios con sesión
├── assets/             # Recursos estáticos
│   ├── css/
│   │   ├── reset.css   # Quita estilos por defecto del navegador
│   │   └── styles.css  # Estilos principales (colores en :root)
│   ├── js/
│   │   ├── main.js     # JavaScript principal
│   │   ├── supabase.js # Conexión a Supabase (pon aquí tu URL y anon key)
│   │   ├── registro.js
│   │   ├── login.js
│   │   └── perfil.js
│   ├── img/            # Imágenes (fotos, banners)
│   ├── icons/          # Íconos y logo
│   └── fonts/          # Tipografías
├── components/         # Trozos de HTML reutilizables (opcional)
└── supabase/
    └── perfiles.sql    # Tabla de perfiles (ejecutar en Supabase SQL Editor)
```

## Cómo verla

Abre `index.html` en el navegador, o usa la extensión **Live Server** de VS Code.
