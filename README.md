# Proyecto Angular en AWS ECS con CI/CD

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con Angular 17 y desplegada en AWS ECS utilizando GitHub Actions para la integración y entrega continua (CI/CD). El flujo automatizado de CI/CD incluye la construcción de la aplicación, creación de una imagen Docker, publicación de la imagen en Amazon ECR y despliegue en Amazon ECS. La aplicación también muestra dinámicamente la rama de Git en la página principal, utilizando variables de entorno establecidas durante el proceso de despliegue.

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación Angular.
- **Dockerfile**: Define el proceso de construcción de la imagen Docker para la aplicación.
- **ecs-task-def.json**: Define la tarea de ECS utilizada para el despliegue del contenedor.
- **.github/workflows/deploy.yml**: Define el flujo de trabajo de GitHub Actions para CI/CD.

## Prerrequisitos

- Cuenta de AWS con permisos para utilizar ECS, ECR y IAM.
- Repositorio de GitHub.
- Node.js v18 y Angular CLI instalados en la máquina local para desarrollo.

## Explicación de los Pasos

1. **Checkout**: Se realiza el checkout del código del repositorio.
2. **Set up Node.js**: Configura la versión de Node.js necesaria.
3. **Install dependencies**: Instala las dependencias del proyecto usando `npm ci`.
4. **Extract branch name**: Extrae el nombre de la rama actual y lo guarda en una variable de entorno.
5. **Build Angular project**: Construye el proyecto Angular para producción.
6. **Replace IMAGE_URL in ECS task definition**: Reemplaza la variable `IMAGE_URL` en el archivo `ecs-task-def.json`.
7. **Assume IAM Role**: Configura las credenciales de AWS usando el rol IAM.
8. **Login to Amazon ECR**: Inicia sesión en Amazon ECR.
9. **Build, tag, and push image to Amazon ECR**: Construye, etiqueta y sube la imagen Docker a ECR.
10. **Deploy to Amazon ECS**: Despliega la tarea en Amazon ECS y espera a que el servicio esté estable.
11. **Get task ID**: Obtiene el ID de la tarea desplegada.
12. **Get public IP**: Obtiene la IP pública del contenedor desplegado.
13. **Print public IP**: Imprime la IP pública del contenedor.

## Realizar Cambios y Pruebas

Para realizar cambios en el proyecto:

1. **Modificar el código fuente**:
   - Realiza los cambios necesarios en el código fuente dentro del directorio `src/`.

2. **Probar localmente**:
   - Ejecuta `npm start` para probar la aplicación localmente.

3. **Actualizar la configuración del despliegue**:
   - Si necesitas cambiar configuraciones específicas de despliegue, modifica el archivo `ecs-task-def.json` o el flujo de trabajo de GitHub Actions (`deploy.yml`).

4. **Hacer un commit y push**:
   - Realiza un commit de tus cambios y haz push a la rama correspondiente (`master`, `develop`, `staging`).

5. **Verificar el despliegue**:
   - El flujo de trabajo de GitHub Actions se activará automáticamente en el push. Revisa la pestaña de Actions en GitHub para monitorear el progreso del despliegue.

6. **Acceder a la aplicación**:
   - Una vez desplegada, puedes acceder a la aplicación utilizando la IP pública impresa en los logs de GitHub Actions.

## Contacto y Soporte

Para cualquier duda o problema, puedes contactar conmigo o consultar la documentación de AWS y GitHub Actions.

Contacto: [avataredson@gmail.com](mailto:avataredson@gmail.com)
