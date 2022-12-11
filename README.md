# Dog CEO Challenge

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/badges/quality-score.png?b=main)](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/?branch=main)
[![Build Status](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/badges/build.png?b=main)](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/build-status/main)

Este proyecto trata sobre consumir el API provisto por Dog CEO como parte del desafío de desarrollo de una solución utilizando React JS.

Se han utilizado Hooks y el Context para la persistencia de los estados en la aplicación.

Las peticiones de datos se han basado en la librería estándar, apoyado de async y await.

En cuanto a la maquetación, se ha utilizado Bootstrap 5 por cuestiones de familiaridad.

## Patrones utilizados
Al realizar este proyecto se ha podido implementar el uso de los siguientes patrones:
- Module pattern: puede verse reflejado en el uso de los servicios (src/services) y en el context dentro de App (src/App/context).
- Container/Presentational pattern: aunque no es una versión pura con clases, se ha hecho uso de este patrón implementando Hooks y Context para mantener el estado de la lista de imágenes que debe renderizar el componente Gallery. La inicialización se realizó en App, y la actualización de la lista de imágenes se gatilla desde SearchButton.
- Observer pattern: se ha utilizado useEffect en el componente Search para refactorizar la gestión de estados para los filtros y la lista de subRazas en reemplazo de las funciones de eventos desde los controles.

En términos generales se ha procurado seguir los principios DRY, KISS y aplicar SOLID en la creación de los componentes y en su refactorización.


## Test suites
Se han creado tests sencillos para la mayoría de los componentes, con excepción de los componentes Gallery, ListImages y Selector que implementan escenarios de acuerdo al uso de datos provistos en los mismos.

## Instalar el repositorio localmente
1. Hacer un clon de este repositorio localmente (usando git clone https://github.com/nelsonrojasn/maqueta)
2. Entrar en el directorio descargado en el paso anterior (cd maqueta por ejemplo)
3. Ejecutar npm install para cargar las dependencias.
4. Ejecutar los tests usando npm run test.
5. Ejecutar la aplicación usando npm start.




