# DESAFIO LATAM - _Curso Fullstack Javascript G92_

## Modulo 4 - React

**_Desarrollado por Vladimir Faundez_**
> Nota: `Esto realizado con propósitos académicos y de enseñanza. Favor no realizar copias directas del material aqui subido.`

### * Desafio 1 - Pizzeria MammaMia 🍕

Desarrollado con `React` y `Bootstrap`, consiste en el desarrollo de una `plantilla para una pizzeria`, utilizando la metodología de componentes reutilizables y modularidad.

### Logros ✅  

#### Hito 1

- [x] Crear estructura solicitada para el desafio.
- [x] Generar componente `Navbar` e implementar menu dinamico, segun estado de `token`.
- [x] Generar componente `Header` y establecerlo dentro de componente `Home`.
- [x] Establecer elementos `Home` y `Total` en `Navbar`.
- [x] Generar componente `CardPizza` y pasar valores a este (img, name, price, ingredients).
- [x] Repetir 3 veces el componente `CardPizza` dentro de `Home`.
- [x] Generar componente `Footer`.

#### Hito 2

- [x] Crear componente `Login`. Agregado formulario, validaciones y mensajes de alerta.
- [x] Crear componente `Register`. Agregado formulario, validaciones y mensajes de alerta.

#### Hito 3

- [x] Importado archivo `pizza.js` y utilizado array `pizzas` en componente `Home`, renderizamos de forma dinámica el componente `CardPizza`.
- [x] Generado componente `Cart` e importamos `pizza.js` para utilizar array `pizzaCart` y renderizarlo dinámicamente en el carrito, incluyendo imagen, nombre, precio, cantidad y botones para aumentar y disminuir. Aparte el precio total y un boton de pago sin funcionalidad abajo de esta renderización.
- [x] Generado estados y funciones para aumentar y disminuir cantidad de pizzas, calcular el total y en caso que una pizza su cantidad sea cero, se elimina del listado.

#### Hito 4

- [x] En componente `Home` lograr consumir la API de pizzas y renderizar las tarjetas de pizza e utilizar el hook useEffect para consumir la API.
- [x] Crear el componente `Pizza`, lograr consumir la API de pizzas y renderizar la información de la pizza, utilizar el hook useEffect para consumir la API, mostrar la información de la pizza: nombre, precio, ingredientes, imagen y descripción y agregar el boton "Agregar a Carrito".
