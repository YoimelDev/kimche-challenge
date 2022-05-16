# Desafío para Software Engineers

Nombre postulante: Yoimel Rojas

Link a la app en producción: [Kimche Challenge](https://YoimelDev.github.io/kimche-challenge/)

## Pregunta

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

## Respuesta

Una solución a la problemática planteada seria separar la lógica de la tabla de asistencia diaria (si es posible hacerlo y no afecta la lógica del sistema) y crear una tabla de asistencia diaria por asignatura, materia o razón por la cual el niño asiste al colegio, de esta manera evitamos sobrecargar una sola tabla con todas las asistencias diarias y la separamos en varias tablas por asignatura, materia o razón.

Evitando tener una única tabla con millones de filas, y de esta forma optimizando las consultas que se hagan a las nuevas tablas, reduciendo el tiempo de servicio del Backend.

También se debería optimizar el cómo se hacen las consultas SQL para que sean más rápidas y eficientes, tratándose de una tabla de asistencia diaria, se estará tomando la fecha actual para insertarla o actualizarla en la base de datos, MySQL tiene su propia funciona para obtener la fecha, pero esto impide cachear la consulta provocando que se ejecute la función en cada consulta, una solución optima seria obtener la fecha en el lenguaje del Backend que se esté utilizando.

Otra solución seria cambiar el motor de almacenamiento de la base de datos a InnoDB, ya que InnoDB tiene como característica el bloqueo a nivel de fila para nuestras tablas, permitiendo que consultas como Inserts, updates y deletes sean más rápidas y eficientes y para el problema presentando donde se actualiza o inserta nueva información este motor de almacenamiento sería una opción a considerar.

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

<!-- Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png) -->

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
