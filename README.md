# Proyecto-DWFS-Equipo5

# Bazaar!

**Bazaar!** es una plataforma de marketplace que provee servicios centralizados para la compra-venta de artículos, colaborando con los usuarios creando un ambiente de valor para llevar a cabo trueques y compra-venta de forma segura y responsable.

#### Temática del proyecto

> El proyecto a desarrollar será un Marketplace, con la finalidad de permitir a distintos usuarios comprar y vender artículos dentro de una misma plataforma. Los vendedores podrán ofrecer productos que necesiten vender y los compradores obtener productos que se encuentren dentro del sitio.

##### Alcance

- Establecer una **_plataforma tipo marketplace_** con dos actores principales (Comprador y Vendedor), quienes podrán interactúar entre sí una vez formalizado la acción de compra sobre el artículo de interés publicado por el vendedor.
- Se espera que en la plataforma se consulten artículos aún sin ser miembro identificado.

#### Fuera del alcance

- Chat de comunicación de forma interna, sólo se compartirán los datos de contacto.
- Servicio externo ó interno de sistema de pago.

## Teammates 5

| Antonio Labra Guerrero                                                                                           | Ian Axel Cuevas Olvera                                                                                            | David Dorantes Torres                                                                                               | Diego Domínguez Melo                                                | Rogelio Magaña Tapia                                         |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| ![alabra](https://user-images.githubusercontent.com/85530193/132101712-16503a94-45f5-46a6-815c-78a74d256fe0.png) | ![acuevas](https://user-images.githubusercontent.com/85530193/132101749-5594e6e2-669d-475f-8cfa-daca31b0411e.png) | ![ddorantes](https://user-images.githubusercontent.com/85530193/132101764-061aadee-064e-4f48-8f20-43f8e2066c7a.png) | ![ddominguez](https://diegomelo.me/static/media/coder.95b0cf3d.jpg) | ![rmagana](https://tasteu.netlify.app/img/about_rogelio.jpg) |

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

- **_Comprador:_** Usuario logueado dentro de la plataforma Bazaar! que puede realizar busqueda de artículos de su interés y formalizar una compra de artículos publicados, así como escribir reseñas sobre el evento de compra y su historial de compras.
- **_Vendedor:_** Usuario logueado dentro de la plataforma Bazaar! que puede gestionar sus datos de contacto y publicar artículos para su venta, generando un catálogo de artículos que podrá gestionar cuando sea requerido, así como también consultar su historial de ventas realizadas.
- **_Publico en general:_** Usuario NO logueado en la plataforma Bazaar! que puede consultar la página principal y realizar búsqueda de artículos publicados en la plataforma.

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

- Las tecnologías para la implementación de la plataforma Bazaar! son las siguientes:
  - HTML5
  - Javascript
  - CSS
  - Bootstrap
  - Github
  - Node
  - HandleBarsjs (para manejo de views en hbs)
- Herramientas:
  - Adobe Xd
  - Visual Studio Code
  - Mongo DB
- Dependencias:
  - Bodyparser
  - cors
  - express

* Para ejecutar el proyecto se requiere las siguientes actividades:

  1. Clonar el repositorio [Repo Bazaar!](https://github.com/axelcoevas/Proyecto-DWFS-Equipo8 'Repo Bazaar!')
  2. Cargar las dependencias de modulos, los cuáles se encuentran dentro de package.json:
     `npm install`

  - O en su defecto descargarlas directamente:
    `npm install express body-parser cors`

    3.- Ejecutar el servidor para que la API pueda resolver las peticiones:
    `npm run dev`

    4.- URL base para el llamado de la API `http://localhost:4001/api/v1/`

## Estructura del proyecto

![image](https://user-images.githubusercontent.com/85530193/132157902-40c7f40a-b245-466b-9ef4-34557d287a92.png)
![image](https://user-images.githubusercontent.com/85530193/132158059-14d7f2ea-60e9-458c-925b-d8c8e6a39d94.png)

## API Documentation Swagger

La documentación de los servicios se encuentran dentro de swagger-API_Bazaar.txt
Que se puede observar dentro dentro del editor de swagger `https://editor.swagger.io/`
