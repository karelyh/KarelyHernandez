# $Arquitectura$ $de$ $aplicaciones$ $web$
La arquitectura de una aplicación web define las interacciones entre las interfases de usuario, bases de datos, componentes y middleware.
Describe el flujo estándar de datos entre el cliente y el servidor y proporciona un conjunto de reglas para la transmisión de información entre dos extremos.

---

> ## <span style="color:#008080"> De acuerdo a como se comunican las partes que componen la app

## **Modelo Cliente-Servidor**
Es un modelo informático que divide el trabajo en servidores (proveedores de servicios) y clientes (consumidores de servicios).
+ **Cliente:** ordenador o aplicación que pide servicios (ej. navegadores web, apps móviles, correo electrónico).
+ **Servidor:** equipo o software que ofrece servicios (ej. servidores web, de archivos, de bases de datos).

**Funcionamiento:**
1. **Solicitud del cliente:** El cliente envía una petición al servidor (ejemplo: un navegador pide abrir una página web).
2. **Procesamiento en el servidor:** El servidor recibe la solicitud, la procesa (busca datos, ejecuta programas o valida información) y prepara la respuesta.
3. **Respuesta del servidor:** El servidor devuelve el resultado al cliente (ejemplo: la página web solicitada).
4. **Interacción continua:** Mientras el cliente siga solicitando servicios, el servidor continuará respondiendo, manteniendo la comunicación activa.

![Cliente servidor](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivaVtG-G6nOBLHPum_zpXzylx0fvG_d7Y5j3Pveg-UQ7ML5nWvuKZqEy7D1QwPp63LWnIwTv8n1AiLIwbUSKDiyL4jEzi1SoxTpVgbQnIwu1tfpGA8zodSyrB7LDEmiotMKkqWPfIDIbQ/s1600/aaaaaaaaaa.JPG)

## **Modelo punto a punto**
La arquitectura punto a punto es un modelo donde todos los equipos actúan como cliente y servidor al mismo tiempo. Esto significa que cada dispositivo puede ofrecer recursos y servicios, y a la vez consumir los de otros.

**Funcionamiento**
1. **Conexión directa:** Los dispositivos (nodos) se conectan entre sí sin depender de un servidor central.
2. **Compartición de recursos:** cada nodo puede compartir archivos, impresoras, potencia de cómputo, etc.
3. **Intercambio:** cuando un nodo necesita algo, lo solicita a otro que lo tenga disponible.

**Ventajas**
- **Menor costo:** no requiere servidores dedicados.
- **Facilidad de implementación:** basta con conectar los dispositivos.
- **Escalabilidad simple:** se pueden añadir más nodos sin grandes cambios.
- **Distribución de la carga:** el trabajo se reparte entre todos los equipos. 

![Punto a punto](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qvAf9YqeNIN4HCLX-LQTEDpRCDNq_shAH56jo2wXYmBBao7glKOvPh8ZX2P-fmR79OE&usqp=CAU)
---
> ## <span style="color:#008080"> De acuerdo como se organiza el código de la app
## **MONOLITO**

Es un modelo tradicional donde toda la aplicación se construye como una sola unidad, integrando todos los componentes (interfaz de usuario, lógica de negocio y acceso a datos) e implementándolos conjuntamente.
* **Ventajas**
    + Facilita el desarrollo y el mantenimiento.
    + Es ideal para  aplicaciones pequeñas y que no requieren escalonamiento extenso.
* **Desventajas**
    + No es eficaz para aplicaciones complejas debido a que es dificil de escalar.
    + Es dificil de mantener.

![Monolito ](https://codeandosimple.com/assets/img/images/arquitectura-de-software/modelo-monolitico.png)

## **SISTEMA EN CAPAS**  
En este sistema la aplicación se divide en capas, cada una de las cuales gestiona una función específica. La mayoría de las aplicaciones utilizan de tres a cinco capas; algunas de las más comunes son las de presentación, lógica de negocio y acceso a datos. 

+ Ejemplo de 3 etapas: 
    1. **Presentación**. Es la interfaz (lo que ve el usuario).
    2. **Lógica de negocio**. En esta capa se reciben las solucitudes (peticiones) tanto del cliente como del servidor.
    3. **Acceso de datos**. En esta capa se realizan las peticiones solicitadas y se realizan (en algunos casos dividen esta etapa en dos).
* **Ventajas**
    + Facilita la gestión, actualización, pruebas y resolución de problemas de partes de la aplicación de forma independiente.
    + Permite escalar cada capa y reutilizar el código sin afectar la funcionalidad principal.

* **Desventajas**
    + Puede tener sobrecarga de capas si no se sabe dividir.  
    
![Sistema en capas](https://blog.walthercuro.com/wp-content/uploads/2024/11/image-1.png)

## **MICROSERVICIOS**  
En este la aplicación se divide en servicios más pequeños e independientes, cada uno con una función específica.un modelo tradicional donde toda la aplicación se construye como una sola unidad, integrando todos los componentes (interfaz de usuario, lógica de negocio y acceso a datos) e implementándolos conjuntamente.
* **Ventajas**
    + Permite a los desarrolladores actualizar o escalar servicios individuales sin afectar a toda la aplicación.
    + Es ideal para aplicaciones a gran escala con equipos de desarrollo independientes que requieren una entrega más rápida de funciones.
* **Desventajas**
    + Se necesitan muchas aplicaciones y conocer muchos protocolos para poder conectarse entre si.
    + Puede generar problemas de integridad de los datos a medida que el sistema se vuelve más complejo.

![Microservicios](https://jugnicaragua.org/wp-content/uploads/2024/05/Microserviicos.png)

## **SERVERLESS**  
Este tipo de arquitectura de aplicaciones es popular por su rentabilidad. El proveedor de la nube administra automáticamente los servidores y los escala según la demanda, por lo que solo pagas por lo que usas.
* **Ventajas**
    + Más flexibilidad.
    + Mayor escalabilidad.
    + Facíl implmentación.
    + Costos más bajos.
* **Desventajas**
    + Dependencia del proveedor por lo que el control y la flexibilidad pueden ser limitados.
    + Preocupaciones de seguridad.
    + Para procesos largos los costos pueden ser costosos.

![Serverless](https://dc722jrlp2zu8.cloudfront.net/media/uploads/2021/09/17/1.jpg)

--- 

## Referencias 
+ [Acerca de Guía de arquitectura de aplicaciones web: qué es y componentes clave](https://www.hostinger.com/tutorials/web-application-architecture#Client_side_front_end)
+ [Acerca de aplicaciones de computadoras web](https://radixweb.com/blog/web-application-architecture-guide)
+ [¿Cuál es la diferencia entre la arquitectura monolítica y la de microservicios?](https://aws.amazon.com/es/compare/the-difference-between-monolithic-and-microservices-architecture/) 
+ [Todo sobre la arquitectura cliente-servidor](https://www.arsys.es/blog/todo-sobre-la-arquitectura-cliente-servidor)
+ [¿Qué es la arquitectura cliente-servidor?](https://www.supermicro.com/es/glossary/client-server-architecture)
+ [Que es una arquitectura de aplicaciones](https://www.redhat.com/es/topics/application-development-and-delivery/que-es-una-arquitectura-de-aplicaciones#:~:text=de%20las%20inferiores.-,Arquitectura%20monol%C3%ADtica,comercial%20para%20proporcionar%20m%C3%A1s%20agilidad.)