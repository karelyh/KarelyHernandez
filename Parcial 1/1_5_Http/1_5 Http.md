## Protocolo
Es un conjunto de reglas que permite que los dispositivos se entiendan entre sí.

# <span style=Color:limegreen>HTTP
HTTP es el protocolo de comunicación que permite la transferencia de información en la web entre clientes (como navegadores) y servidores. Actúa como un lenguaje estándar para solicitar y entregar recursos como páginas HTML, imágenes, videos y archivos.  

Funciona bajo un modelo de petición-respuesta, donde el cliente solicita recursos y el servidor responde con los datos correspondientes.

## Características 
- Es un protocolo de nivel de aplicación.
- Utiliza el modelo cliente-servidor: el navegador realiza una *request* y el servidor envía una *response*.
- Opera sobre el protocolo TCP/IP.
- Usa el puerto 80 por defecto (HTTP) y el puerto 443 para HTTPS.
- Es sin estado (*stateless*), lo que significa que no guarda información entre peticiones (aunque puede complementarse con cookies o sesiones).
- Su versión segura, HTTPS, añade cifrado mediante SSL/TLS.
- La versión más utilizada actualmente es HTTP/2, que mejora la velocidad y eficiencia.

## Como funciona 
- El navegador (cliente) envía una solicitud
 (request) al servidor.
- El servidor procesa la petición.
- El servidor envía una respuesta (response): código de estado + contenido (ej. página web)

| Característica            | HTTP            |HTTPS  |
|---------------------------|------------------|-------|
| **Significado**           | Protocolo de transferencia de hipertexto | Protocolo seguro de transferencia de hipertexto |
| **Protocolos subyacentes**| HTTP/1 y HTTP/2 utilizan TCP/IP. HTTP/3 usa QUIC | Utiliza HTTP/2 con SSL/TLS para cifrar las solicitudes y respuestas|
| **Puerto predeterminado** | 80 | 443|
| **Uso típico**            | Sitios web antiguos basados en texto | Todos los sitios web modernos |
| **Seguridad**             | Sin funciones de seguridad adicionales | Utiliza certificados SSL para cifrado de clave pública|
| **Beneficios**            | Hizo posible la comunicación a través de Internet | Mejora autoridad, confianza y posicionamiento en buscadores|
# <span style=Color:limegreen>Métodos mas usados
Son verbos de acción que indican la operación que un cliente desea realizar sobre un recurso en un servidor.
 
| Método   | Descripción |
|----------|-------------|
| GET      | Solicita datos sin modificar el servidor.|
| POST     | Envía datos al servidor, como formularios (causa cambios al servidor).|
| PUT      | Reemplaza un recurso existente y si no existe lo crea.|
| DELETE   | Elimina un recurso.|
| HEAD     | Igual que GET pero sin cuerpo de respuesta.|
| PATCH    | Modifica parcialmente un recurso.|
| OPTIONS  | Consulta métodos permitidos para un recurso.|

![Métodos](https://camo.githubusercontent.com/d7ef94fd327673039c69152d06cdbb0beed4ece8e96701e1df4a72d96ffbd86d/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313031382f302a5842357a774832464d6e734f683774632e706e67)
# <span style=Color:limegreen>Estructura de una petición
**¿Qué es una solicitud HTTP?**  
Una solicitud HTTP es la forma en que las plataformas de comunicación de Internet, como los navegadores web, piden la información que necesitan para cargar un sitio web.
Cada solicitud HTTP realizada por Internet lleva consigo una serie de datos codificados que contienen diferentes tipos de información. Una solicitud HTTP típica contiene:

- El tipo de versión de HTTP
- Una URL
- Un método HTTP
- Encabezados de solicitud HTTP
- Un cuerpo HTTP opcional.
![Estructura](https://image1.slideserve.com/1854653/slide25-l.jpg)
# <span style=Color:limegreen>Códigos de estado
El servidor envía diferentes tipos de respuestas HTTP en forma de códigos numéricos y datos.  Son respuestas de tres dígitos que un servidor web envía al cliente para indicar el resultado de una solicitud.

A continuación, se indican varios ejemplos:
  > Las "xx" hacen referencia a diferentes números entre 00 y 99.
- **1xx:** Informativo, La solicitud ha sido recibida y el proceso continua
    - **100 Continue:** Se continua con la solicitud.
- **2xx:** La solicitud fue recibida, entendida y aceptada. 
    - **200 OK:** La solicitud fue exitosa.
    - **201 Created:** La solicitud fue exitosa y se ha creado un nuevo recurso.
    - **204 No Content:** Exitosa, La solicitud
 fue exitosa, pero no hay
 contenido que enviar en el
 cuerpo de la respuesta.
- **3xx:** Redirección, Se necesita una acción adicional por parte del cliente para completar la solicitud.
    - **301 Moved Permanently:** El recurso solicitado se ha movido permanentemente a una nueva URL.
   - **304 Not Modified:** El recurso no ha sido modificado desde la última solicitud. El cliente puede usar la versión en caché.
- **4xx:** Error del Cliente, La solicitud contiene una sintaxis incorrecta o no puede ser procesada.
    - **400 Bad Request:** El servidor no pudo entender la solicitud debido a una sintaxis incorrecta.
    - **401 Unauthorized:** La solicitud requiere autenticación.
    - **403 Forbidden:** El cliente no tiene permisos para acceder al recurso.
    - **404 Not Found:** El recurso solicitado no se encuentra en el servidor. 
    - **405 Method Not Allowed:** El método de la solicitud no es soportado por el recurso.

![Códigos de estado](https://www.henriqueguimaraes.com/wp-content/uploads/2022/04/Criacao-de-Sites-O-que-significa-o-erro-1xx-2xx-3xx-4xx-5xx-Lista-de-codigos-de-status-HTTP.jpg)
# <span style=Color:limegreen>Encabezados
Los encabezados HTTP son datos adicionales que acompañan a cada petición y respuesta dentro del protocolo HTTP. Están formados por pares clave-valor (nombre: valor) y siempre se leen antes que el contenido principal.

Su función es comunicar información esencial entre cliente y servidor, como:

- El navegador o dispositivo que hace la petición.
- El tipo de contenido que se está enviando o solicitando (por ejemplo, HTML, JSON, imágenes).
- Preferencias de idioma o codificación.
- Datos de autenticación y control de seguridad.
- Indicaciones para mejorar el rendimiento (caché, compresión, etc.).

En pocas palabras, los encabezados son los que permiten que cliente y servidor “se entiendan” y establezcan cómo deben enviarse, interpretarse y protegerse los datos en la web.

**Ejemplo** de encabezados de respuesta HTTP de la pestaña de red de Google Chrome:
![Ejemplo encabezado respuesta](https://www.cloudflare.com/img/learning/ddos/glossary/hypertext-transfer-protocol-http/http-response-headers.png)

## Utilidad
Es una parte fundamental de la comunicación entre el cliente y servidor, ya que controlan cuestiones de seguridad, rendimiento, formatos y compatibilidad

## Tipos 
- **General:** Información sin relación con los datos del cuerpo.
![General]()
- **De consulta:** Información adicional sobre el contenido a obtenerse o sobre el cliente.
![De consulta]()
- **De respuesta:** Información adicional sobre el origen o servidor del contenido.
![De respuesta]()
- **De entidad:**  Información sobre el cuerpo de la entidad, como el tamaño o su formato.
![De entidad]()
# <span style=Color:limegreen>Mensajes HTTP
La web funciona a través de un diálogo constante entre el cliente y el servidor. Esta comunicación se realiza mediante mensajes HTTP.
Existen dos tipos de mensajes: la Petición (Request) y la Respuesta (Response)  
![Mensajes HTTP](https://tse3.mm.bing.net/th/id/OIP.RblUj6ZyCbFt3jvVoXw2iwHaDI?r=0&cb=thfc1ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3)

## Petición 
Mensaje que el cliente envía al servidor para iniciar una acción, como solicitar un documento o enviar datos.
- Línea de inicio
- Cabeceras (Headers)
- Cuerpo (Body)

> Peticiones como GET, HEAD, DELETE, o OPTIONS no suelen llevar cuerpo

## Respuesta 
Mensaje que el servidor envía de vuelta al cliente tras procesar su petición.
- Línea de estado
- Cabeceras (Headers)
- Cuerpo (Body)
# <span style=Color:limegreen>Estructura de una URL 
URL significa Uniform Resource Locator, es una secuencia específica de caracteres que identifica y permite localizar y recuperar una información determinada en internet
![Estructura URL](https://static.semrush.com/blog/uploads/media/1c/61/1c6180e4294fd6f5f51be7067be9b2ef/original.png)
### Protocolo
El protocolo indica a tu navegador cómo conectarse a una página. Puede ser HTTP (Hypertext Transfer Protocol, o “protocolo de transferencia de hipertextos”) o HTTPS (HTTP seguro)
![Protocolo](https://static.semrush.com/blog/uploads/media/92/8c/928c75ed66c8ec62ac9e9bf86e2030d8/965d312d51ac4711e7e61b1b86c86d01/ES-URL-Structure-https.webp)

Las webs que muestran un icono de candado en la barra de direcciones están utilizando HTTPS.
![Sguro](https://static.semrush.com/blog/uploads/media/01/9f/019f0ddd11e0da0fb5958f52106b5261/ES-URL-Structure-lock.webp)

Por el contrario, las webs con una advertencia de **"No seguro"** en la barra de direcciones están utilizando HTTP.
![No seguro](https://static.semrush.com/blog/uploads/media/85/0e/850e2f920417b4828052b78e9797fe56/ES-URL-Structure-not-secure.webp)

### Subdominio
Un subdominio es una cadena de letras o una palabra completa que aparece antes del primer punto de una URL. El subdominio más popular es www., que significa World Wide Web, comunicando que la URL es una dirección web. 

**Ejemplo:**
Wix utiliza el subdominio "soporte" para todos sus artículos de ayuda.
![Subdominio](https://static.semrush.com/blog/uploads/media/57/c9/57c9d9c5c27d8fd431f7705965f3fa37/e9bdc75018d2791845fdfdc532cc071c/ES-URL-Structure-browser.webp)

### Dominio 
Un dominio es la parte principal de la URL que identifica a la web. Como eBay, Expedia o Semrush
![Dominio](https://static.semrush.com/blog/uploads/media/21/f5/21f50095d186a0bd154fe0fc733ada6e/11cb4a948965a3b255d7e8bf3e70f504/ES-URL-Structure-domain.webp)

### TLD (Dominio de primer nivel)
(“Top level domain” en inglés, también llamado extensión de dominio) es la parte que va después del nombre de tu web, como ".com".

**Tipos**  
- **.com:** webs comerciales.
- **.org:** organizaciones sin ánimo de lucro.
- **.net:** empresas de software y alojamiento.
- **.edu:** instituciones educativas (universidades, colegios, escuelas, etc.).
- **.gov:** instituciones del gobierno, como ministerios o departamentos (no en todos los países).

### Dominios de nivel superior de código del país (ccTLD)
Los ccTLD son extensiones de dominio de dos letras que indican la asociación de una web con un país o territorio concreto.
- **.es** para España
- **.uk** para Reino Unido
- **.cn** para China
- **.mx** para México
Utilizar ccTLDs tiene sentido cuando el público objetivo de una web se encuentra sobre todo en un país determinado. 
Al utilizar ccTLD, la web indica una relación con esa ubicación, lo que ayuda a generar confianza y credibilidad para los usuarios de esa región.


### SubCarpeta
Una subcarpeta es una carpeta o directorio que se encuentra dentro del directorio superior (o directorio raíz) en la jerarquía de tu web.
![Subcarpeta](https://static.semrush.com/blog/uploads/media/a1/12/a1128514d5b8699763d7554e5a5836c1/7dce93d13e59688a6f1e043fcfbbe8c3/ES-URL-Structure-domain-2.webp)

Por ejemplo, en la URL "www.dominio.com/zapatos/", la subcarpeta "zapatos" se encuentra dentro del directorio principal de la web, que es "www.dominio.com".
De forma similar a los subdominios, las subcarpetas se utilizan para separar el contenido en secciones lógicas.
Así, se facilita que los visitantes sepan en qué parte de la web se encuentran.


### Slug
El slug es la parte de una URL que identifica una página específica o una entrada de una web. Ayuda a los usuarios a comprender el contexto y el contenido de una página
![Slug](https://static.semrush.com/blog/uploads/media/fc/a0/fca02708422ab8105155b1fd5b230c1b/ec7e03ee9d1007a7ecf9b12b734421c5/ES-URL-Structure-domain-3.webp)

**Ejemplo:** En la URL "/mejores-champus-para-bebes/", los usuarios pueden hacerse una idea de qué trata la página.

### Parámetros
Los parámetros de URL (o cadenas de consulta) son partes de una URL que van después de un signo de interrogación (?). Se componen de claves y valores, separados por un signo igual (=). 
![Parametros](https://static.semrush.com/blog/uploads/media/d2/50/d250c219d5b75ceb750504195e5519ac/24f83ce2b12319d76495926c08408be1/ES-URL-Structure-domain-4.webp)

**Ejemplo:** En la URL de abajo, "color" es la clave y "azul" es el valor. Este parámetro aplicará un filtro a una página para mostrar solo productos azules.
Puedes añadir varios parámetros a una URL separándolos con un ampersand (&)

![Ejemplo parametros](https://static.semrush.com/blog/uploads/media/75/50/755077259369f0ffafb7d8b21bcaaa69/c9b197653c0ff56006053361c6febb83/ES-Domain.webp)
Siguiendo con el ejemplo, hay dos parámetros: "color" con el valor "azul" y "ordenar" con el valor "más reciente".
Con estos parámetros, se aplica un filtro que muestra los productos azules y los ordena primero por los más nuevos.
# <span style=Color:limegreen>Referencias
- [HTTP](https://developer.mozilla.org/es/docs/Web/HTTP)
- [HTTP 2](https://www.cloudflare.com/es-es/learning/ddos/glossary/hypertext-transfer-protocol-http/)
- [Métodos](https://github.com/Fernanda-Ba/Tareas/blob/main/Metodos_HTTP/README.md)
- [Estructura](https://blog.makeitreal.camp/el-protocolo-http/)
- [Códigos de Estado](/es.semrush.com/blog/codigos-de-estado-http/)
- [Estructura URL](https://es.semrush.com/blog/que-es-una-url/)