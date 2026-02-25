# Tripleten web_project_around_express

# Around the U.S. - Backend Server

## Descripción del proyecto

Este proyecto es el backend de **Around the U.S.**, una aplicación web que permite gestionar usuarios y tarjetas (cards) con imágenes. Los usuarios pueden crear tarjetas, actualizar su perfil y avatar, y dar o quitar likes a las tarjetas. La funcionalidad principal incluye:

- Crear y listar usuarios.
- Crear, listar y eliminar tarjetas.
- Actualizar perfil y avatar de usuario.
- Dar y quitar likes a tarjetas.
- Manejo de errores consistente (códigos 400, 404, 500).

El backend se conecta a una base de datos **MongoDB** llamada `aroundb`, donde se almacenan todos los datos de usuarios y tarjetas.

## Tecnologías y técnicas utilizadas

- **Node.js**: Entorno de ejecución del backend.
- **Express.js**: Framework para construir la API REST.
- **MongoDB & Mongoose**: Base de datos NoSQL y ODM para modelado de datos y validaciones.
- **Postman**: Para probar las rutas de la API.
- **Nodemon**: Para reiniciar automáticamente el servidor durante el desarrollo.
- **Validaciones**: Se usan expresiones regulares para validar URLs y validaciones de longitud para strings.
- **Middleware**: Para parsear JSON y para autorización temporal (`req.user._id` hardcodeado).
- **Operadores Mongo**: `$addToSet` y `$pull` para manejar likes únicos en las tarjetas.
- **Manejo de errores**: Se devuelven códigos HTTP correctos según el tipo de error.
