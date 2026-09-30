directorio de contactos
1
2
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Directorio de Contactos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="tarjeta">
    <h1>Directorio de Contactos</h1>

    <div class="formulario">
      <input type="text" id="nombre" placeholder="Nombre">
      <input type="tel" id="telefono" placeholder="Teléfono">
      <button id="btn-agregar" type="button">Agregar</button>
    </div>

    <input type="text" id="buscador" class="buscador" placeholder="Buscar contacto por nombre...">

    <ul id="lista-contactos" class="lista"></ul>
    <p id="mensaje-vacio" class="vacio">Todavía no agregaste contactos.</p>

    <footer class="pie">
      <p id="contador">Contactos: 0</p>
    </footer>
  </main>

  <script src="directorio.js"></script>
</body>
</html>



CODIGO.CSS


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #f3f5f2;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 16px;
}

.tarjeta {
  width: 100%;
  max-width: 575px;
  background: #fff;
  border-radius: 12px;
  padding: 40px 42px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

h1 {
  margin: 0 0 28px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 32px;
  color: #222;
}

/* ===== Estilos de formulario ===== */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 26px;
}

input {
  width: 100%;
  padding: 14px 16px;
  font-size: 17px;
  border: 1px solid #dcdfdb;
  border-radius: 8px;
  outline: none;
  color: #222;
  background: #fff;
}

input::placeholder {
  color: #777;
}

input:focus {
  border-color: #3f6f63;
  box-shadow: 0 0 0 3px rgba(63, 111, 99, 0.18);
}

button {
  font-family: inherit;
  cursor: pointer;
}

#btn-agregar {
  align-self: flex-start;
  padding: 12px 22px;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  background: #3f6f63;
  border: none;
  border-radius: 8px;
  transition: background 0.2s;
}

#btn-agregar:hover {
  background: #325a50;
}
