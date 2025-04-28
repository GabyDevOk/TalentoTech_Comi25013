
# Guía Paso a Paso: Ejercicios Prácticos de Git y GitHub

## Ejercicio Práctico #1: Crear una Nueva Rama en Git

### Objetivo
Crear una nueva rama en tu repositorio Git y subirla a GitHub.

### Pasos:

1. **Crear la Rama:**
   - Abre la terminal en la carpeta de tu proyecto local.
   - Usa el siguiente comando para crear una nueva rama y cambiarte a ella al mismo tiempo:
     ```bash
     git checkout -b nombre-de-la-rama
     ```
     > *Nota:* Sustituye `nombre-de-la-rama` con el nombre que describa la funcionalidad que estás desarrollando, por ejemplo, `nueva-funcionalidad`.

2. **Verificar la Rama Actual:**
   - Para asegurarte de que estás en la rama correcta, usa el siguiente comando:
     ```bash
     git branch
     ```
   - Esto te mostrará la lista de ramas locales y la rama en la que estás trabajando actualmente estará marcada con un asterisco.

3. **Hacer Cambios y Commit:**
   - Realiza los cambios que necesites en tu proyecto.
   - Usa el siguiente comando para agregar todos los archivos modificados:
     ```bash
     git add .
     ```
   - Luego, realiza un commit con un mensaje que describa los cambios realizados:
     ```bash
     git commit -m "Descripción de los cambios"
     ```

4. **Subir la Nueva Rama a GitHub:**
   - Para subir tu nueva rama al repositorio remoto en GitHub, usa el siguiente comando:
     ```bash
     git push origin nombre-de-la-rama
     ```
   - Esto subirá tu rama a GitHub y estará disponible en tu repositorio remoto.

---

## Ejercicio Práctico #2: Crear un Repositorio en GitHub

### Objetivo
Crear un repositorio en GitHub, subir el código y documentar los cambios con commits.

### Pasos:

1. **Crear el Repositorio en GitHub:**
   - Ingresa a [GitHub](https://github.com) y crea un nuevo repositorio.
   - Nombralo siguiendo el formato: `proyecto-final-ecommerce-[nombre-apellido]`.
     > *Ejemplo:* `proyecto-final-ecommerce-juan-perez`.

2. **Subir el Proyecto a GitHub:**
   - En la terminal, inicializa el repositorio de Git en tu proyecto si aún no lo has hecho:
     ```bash
     git init
     ```
   - Agrega el repositorio remoto:
     ```bash
     git remote add origin https://github.com/tu-usuario/proyecto-final-ecommerce-nombre-apellido.git
     ```
   - Asegúrate de hacer commit y subir el código por primera vez:
     ```bash
     git add .
     git commit -m "Primer commit con el código inicial"
     git push -u origin main
     ```

3. **Hacer Commits Frecuentes:**
   - A medida que realices cambios en tu proyecto, asegúrate de hacer commits frecuentes con mensajes descriptivos:
     ```bash
     git commit -m "Añadido formulario de contacto"
     ```

4. **Mantener el Repositorio Actualizado:**
   - Antes de subir tus cambios, asegúrate de actualizar tu repositorio local:
     ```bash
     git pull origin main
     ```
   - Esto te asegura que estás trabajando con la versión más reciente del código antes de hacer un nuevo `push`.

5. **Documentación de Commits:**
   - Los mensajes de tus commits deben ser claros y descriptivos. Asegúrate de explicar qué cambios hiciste en cada commit para que cualquier persona que revise tu código pueda entender lo que se ha modificado.
     > *Ejemplo:* `git commit -m "Añadido diseño responsive para la página de inicio"`.

---

## Recomendaciones Finales

- Asegúrate de subir tus cambios a GitHub regularmente para que tu trabajo esté respaldado y accesible desde cualquier lugar.
- Usa nombres claros y significativos para tus ramas y commits.
- Si trabajas desde diferentes dispositivos, recuerda hacer un `git pull` antes de realizar un `git push` para evitar conflictos.
