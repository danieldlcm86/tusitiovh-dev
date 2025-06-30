# TuSitioVH

**Módulo CSS para React que define las reglas `@font-face` para las fuentes.**

```css
@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Urbanist';
  src: url('/fonts/Urbanist-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Urbanist';
  src: url('/fonts/Urbanist-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

/* Aplicación por clase o elemento */
h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 24px;
}

.emphasis {
  font-family: 'Urbanist', sans-serif;
  font-weight: 500;
  font-size: 18px;
}

p {
  font-family: 'Urbanist', sans-serif;
  font-weight: 400;
  font-size: 16px;
}
```

**Estilos personalizados de CSS**

```css
:root {
  --lavanda-suave: #9A8FA6;
  --rosa-lavanda: #E4D5F2;
  --morado-claro: #D7C4F2;
  --gris-lavanda: #EDE9F2;
  --morado: #8E7DCC;
  --negro-profundo: #0D0D0D;
}
```