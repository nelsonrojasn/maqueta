# Dog CEO Challenge

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/badges/quality-score.png?b=refactorizacion-funciones-utilitarias)](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/?branch=refactorizacion-funciones-utilitarias)
[![Build Status](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/badges/build.png?b=refactorizacion-funciones-utilitarias)](https://scrutinizer-ci.com/g/nelsonrojasn/maqueta/build-status/refactorizacion-funciones-utilitarias)

Este proyecto trata sobre consumir el API provisto por Dog CEO como parte del desafío de desarrollo de una solución utilizando React JS.

Se han utilizado Hooks y el Context para la persistencia de los estados en la aplicación.

Las peticiones de datos se han basado en la librería estándar, apoyado de async y await.

En cuanto a la maquetación, se ha utilizado Bootstrap 5 por cuestiones de familiaridad.

## Patrones utilizados
Al realizar este proyecto se ha podido implementar el uso de los siguientes patrones:
- Module pattern: puede verse reflejado en el uso de los servicios (src/services) y en el context dentro de App (src/App/context).
- Container/Presentational pattern: aunque no es una versión pura con clases, se ha hecho uso de este patrón implementando Hooks y Context para mantener el estado de la lista de imágenes que debe renderizar el componente Gallery. La inicialización se realizó en App, y la actualización de la lista de imágenes se gatilla desde SearchButton.
- Observer pattern: se ha utilizado useEffect en el componente Search para refactorizar la gestión de estados para los filtros y la lista de subRazas en reemplazo de las funciones de eventos desde los controles.


## Test suites
Se han creado tests sencillos para la mayoría de los componentes, con excepción de los componentes Gallery y Selector que implementan escenarios de acuerdo al uso de datos provistos en los mismos.



