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

#### Hito 5

- [x] Instalado y configurado `React Router Dom`.
- [x] Traslada los componentes Home, Register, Login, Cart y Pizza a la carpeta pages.
- [x] Crea las rutas necesarias para los componentes:
  - `/` debe mostrar el componente Home.
  - `/register` debe mostrar el componente Register.
  - `/login` debe mostrar el componente Login.
  - `/cart` debe mostrar el componente Cart.
  - `/pizza/p001` debe mostrar el componente Pizza.
  - `/profile` debe mostrar un componente Profile.
  - `/404` debe mostrar un componente NotFound.
- [x] Implementa un componente `NotFound` que se muestre cuando una ruta no exista.
- [x] Implementa un componente `Profile` que muestre un email de un usuario y un botón para cerrar sesión.
- [x] Crea uncomponente `Navbar` que contenga un menú de navegación con enlaces a las rutas anteriores (utilizando Link) y el botón `total` lleve a la ruta `/cart`.

#### Hito 6

- [x] Implementar un Context que te permita manejar el carrito de compras de la aplicación.
- [x] El Navbar consume el Cart Context para mostrar el precio total de los productos en el carrito.
- [x] Consumir el Cart Context para que el usuario pueda agregar productos al carrito desde la página de Home (botón añadir de cada card).
- [x] En la página Cart mostrar los productos que el usuario ha agregado al carrito (utilizando Cart Context), permite agregar y eliminar productos del carrito.
- [x] El total de la compra debe ser calculado y mostrado en la página Cart, además este tiene que ser el mismo que se muestra en el navbar.
- [x] Llevar el consumo de las pizzas (fetch de Home y Pizza) a un Context.

#### Hito 7

- [x] Implementa useParams para obtener el id de la pizza en la página de Pizza.jsx y realiza una petición a la API para obtener la información de la pizza y mostrarla en la página.
- [x] Crea un UserContext para almacenar el token (simulado). Por ahora este context tiene que tener las siguientes características:
  - Un estado que almacene el token, por defecto, estará en true.
  - Un método logout que cambie el estado del token a false.
- [x] Utiliza el UserContext en el Navbar.jsx, al hacer click en el botón de logout, se debe ejecutar el método logout.
- [x] Utiliza el UserContext en la página de Cart.jsx, deshabilita el botón "pagar" en caso de que el token sea false.
- [x] Implementa la ruta protegida para "/profile". Si el token es false, redirige a "/login". Además, si el token es true, los usuarios no deberían poder acceder a la página de login y register (los puedes redirigir al home).

#### Hito 8 y Prueba Final

- [x] En el UserContext, implementa los métodos para hacer login y register, consumiendo las rutas /api/auth/login y /api/auth/register respectivamente y se almacenan token y email en respectivos estados.
- [x] En el UserContext, implementa un método para hacer logout, este método debe eliminar el token y el email del estado.
- [x] En el UserContext, implementa un método para obtener el perfil del usuario autenticado, consumiendo la ruta /api/auth/me.
- [x] Tanto la página de Login como la de Register, deben implementar los métodos creados en UserContext para acceder al sistema.
- [x] En la página profile, muestra el email del usuario autenticado y un botón para cerrar sesión.
- [x] El botón logout del navbar debe cerrar la sesión del usuario.
- [x] En la página de Cart.jsx, implementa el método para enviar el carrito de compras al backend, consumiendo la ruta /api/checkouts.
- [x] En la página de Cart.jsx, muestra un mensaje de éxito cuando se haya realizado la compra.
