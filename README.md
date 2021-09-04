# Proyecto-DWFS-Equipo8

# Bazaar!
**Bazaar!** es una plataforma de marketplace que provee servicios centralizados para la compra-venta de artículos, colaborando con los usuarios creando un ambiente de valor para llevar a cabo trueques y compra-venta de forma segura y responsable.

### Temática del proyecto
> El proyecto a desarrollar será un Marketplace, con la finalidad de permitir a distintos usuarios comprar y vender artículos dentro de una misma plataforma. Los vendedores podrán ofrecer productos que necesiten vender y los compradores obtener productos que se encuentren dentro del sitio.

#### Alcance
- Establecer una ***plataforma tipo marketplace*** con dos actores principales (Comprador y Vendedor), quienes podrán interactúar entre sí una vez formalizado la acción de compra sobre el artículo de interés publicado por el vendedor.
- Se espera que en la plataforma se consulten artículos aún sin ser miembro identificado.

#### Fuera del alcance
- Chat de comunicación de forma interna, sólo se compartirán los datos de contacto.
- Servicio externo ó interno de sistema de pago.

# Teammates 8

Antonio Labra Guerrero  | Ian Axel Cuevas Olvera  | David Dorantes Torres  | Luis Alonso Marañón Solorio  | Brayan Eleazar Cabrera Lejona  |
----------------------- | ----------------------- | ----------------------- |  ----------------------- |  ----------------------- |
![alabra](https://user-images.githubusercontent.com/85530193/132101712-16503a94-45f5-46a6-815c-78a74d256fe0.png) | ![acuevas](https://user-images.githubusercontent.com/85530193/132101749-5594e6e2-669d-475f-8cfa-daca31b0411e.png) | ![ddorantes](https://user-images.githubusercontent.com/85530193/132101764-061aadee-064e-4f48-8f20-43f8e2066c7a.png) | ![amaranon](https://user-images.githubusercontent.com/85530193/132101768-d200b8ee-5ec8-4909-a4d9-96adb8dcf028.png) | ![bcabrera](https://user-images.githubusercontent.com/85530193/132101775-019284cd-3ea1-4697-9113-8e6d1ea8afdf.png)

## Requerimientos
> **Vendedor**
- Permitir a los usuarios interesados en vender, registrarse y documentar su información de tienda y contacto.
- Publicar artículos para su venta a los vendedores.
> **General**
- Visualizar artículos en venta, público en general.
> **Comprador**
- Permitir a los usuarios interesados en comprar, registrarse y poder realizar compras de artículos.
- Permitir escribir reseñas del artículo post-venta a compradores.

### Actores
- ***Comprador:*** Usuario logueado dentro de la plataforma Bazaar! que puede realizar busqueda de artículos de su interés y formalizar una compra de artículos publicados, así como escribir reseñas sobre el evento de compra y su historial de compras.
- ***Vendedor:*** Usuario logueado dentro de la plataforma Bazaar! que puede gestionar sus datos de contacto y publicar artículos para su venta, generando un catálogo de artículos que podrá gestionar cuando sea requerido, así como también consultar su historial de ventas realizadas.
- ***Publico en general:*** Usuario NO logueado en la plataforma Bazaar! que puede consultar la página principal y realizar búsqueda de artículos publicados en la plataforma. 

## Historias de Usuario
- Como comprador deseo buscar artículos en venta que me interesen y ver su rating de revisión.
- Como comprador realizaría compras de artículos publicados por otras personas.
- Como comprador me gustaría escribir valoraciones de las compras realizadas.
- Como comprador me gustaría consultar mi historial de compras.
- Como vendedor deseo que compradores potenciales vean mis productos.
- Como vendedor quiero reflejar la reputación de mis artículos en la plataforma.
- Como vendedor quiero realizar publicaciones de artículos para su venta.
- Como vendedor quiero actualizar las publicaciones de artículos generadas.
- Como vendedor me gustaría consultar mi historial de ventas.

## Casos de Uso
![Casos_de_Uso_1](https://user-images.githubusercontent.com/85530193/132103736-aa485cc4-c40a-4f94-9466-d52b3e29d85b.jpeg)


## UML diagrama
![Bazaar!_v_jpg](https://user-images.githubusercontent.com/85530193/132103493-b09c2e41-1776-4ab9-ae4b-1c036afee826.jpg)

## Descripción técnica
+ Las tecnologías para la implementación de la plataforma Bazaar! son las siguientes:
  + HTML5
  + Javascript
  + CSS
  + Bootstrap
  + Github
  + Node
+ Herramientas:
  + Adobe Xd
  + Visual Studio Code
  + Mongo DB
+ Dependencias:
  + Bodyparser
  + cors
  + express
- Para ejecutar el proyecto se requiere las siguientes actividades:
  1. Clonar el repositorio [Repo Bazaar!](https://github.com/axelcoevas/Proyecto-DWFS-Equipo8 "Repo Bazaar!")
  2. Cargar las dependencias de modulos, los cuáles se encuentran dentro de package.json:
  ` npm install `

  - O en su defecto descargarlas directamente:
  ` npm install express body-parser cors `

  3.- Ejecutar el servidor para que la API pueda resolver las peticiones:
  ` npm run dev `

## Estructura del proyecto
***REEMPLAZAR ESTE TEXTO Y PEGAR AQUÍ EVIDENCIA DE COMO TENEMOS ESTRUCTURADO EL SITIO, DONDE SE VEAN LOS ROUTE, CONTROLLER, MODEL E INDEX***
