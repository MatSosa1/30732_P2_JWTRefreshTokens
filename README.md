# Sistema de Autenticación Stateless con JWT y Refresh Tokens

Estudiante
: Mateo Sosa

NRC
: 30732

## Capturas Pruebas Postman

### Autenticación

![Generación de Token mediante ruta `/auth/token`](./resources/auth_token.png)

### Alpha

![Obtención de Datos de ruta `/v1/service-alpha/private` con token](./resources/alpha.png)

![Error de ruta `/v1/service-alpha/private` sin token](./resources/alpha_error.png)

### Beta

![Obtención de Datos de ruta `/v1/service-beta/private` con token](./resources/beta.png)

![Error de ruta `/v1/service-beta/private` sin token](./resources/beta_error.png)

## Investigación Teórica

### ¿Cómo un Refresh Token mejora la experiencia del usuario sin comprometer la seguridad?

El motivo de utilizar un _Refresh Token_ es para poder recargar el mismo _Access Token_ utilizado al iniciar sesión.
Este generalmente tiene un tiempo límite de tiempo, en nuestro caso, 1 minuto, por lo que este token morirá al salir de ese rango de tiempo, cerrando sesión e inhabilitando todas las funcionalidades que se estaban realizando.

Sin embargo, el uso de un _Refresh Token_ permite solicitar automáticamente un nuevo _Access Token_ sin requerir que el usuario introduzca sus credenciales, logrando así que los microservicios no dejen de operar.

### ¿Dónde se debe almacenar y gestionar el ciclo de vida del Refresh Token?

Las buenas prácticas de seguridad modernas recomiendan que el _Refresh Token_ sea almacenado en una cookie segura gestionada por el navegador en lugar de _localStorage_ o _sessionStorage_.
Esto evita que se puedan utilizar scripts en JavaScript para obtenerlos, modificarlos o hasta robarlos.

Aunque físicamente la cookie resida en el cliente, su ciclo de vida como el control del mismo sigue manteniéndose en el servidor.
