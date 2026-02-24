# Integrantes:

**Daniel Antonio Orellana Zelaya SMSS086223**

**Andrea Yamileth Rodriguez Hernandez SMSS073124**

# Situación Problemática:

 # Sistema Web de Cotización de Reparación de Computadoras
 
**Enunciado**

**Muchos clientes no saben cuánto podría costar la reparación de su computadora antes de llevarla al taller. Esto genera desconfianza y pérdida de tiempo.**

**Se propone crear una aplicación web interactiva que permita al usuario seleccionar el tipo de reparación,
el nivel de urgencia y calcular automáticamente el costo estimado sin recargar la página.**

 # Sector:

**Sector tecnológico**

**Talleres de reparación**

**Servicios informáticos**

# PREGUNTAS:

**o ¿Qué valor agregado tiene el uso de webcomponents a su proyecto?**

**R/ En el Sistema de Cotización de Reparación, el uso de WebComponents permitió crear un elemento personalizado llamado <resultado-cotizacion>, el cual encapsula la estructura y el diseño del resultado generado.
Esto aporta organización y reutilización, ya que la lógica y el estilo del resultado están contenidos dentro de un componente independiente. 
Además, gracias al Shadow DOM, el diseño del componente no interfiere con el resto del CSS de la página, haciendo el proyecto más limpio, modular y fácil de mantener.**

**o ¿De qué forma manipularon los datos sin recargar la página?**

**R/ Los datos se manipularon utilizando JavaScript mediante el evento submit del formulario. Se utilizó event.preventDefault() para evitar que la página se recargara al enviar el formulario.
Luego, se capturaron los valores ingresados (nombre del cliente, tipo de reparación y nivel de urgencia),
se realizó el cálculo del total en tiempo real y finalmente se creó dinámicamente el componente <resultado-cotizacion> para mostrar el resultado en pantalla. 
Todo este proceso se realizó directamente en el DOM sin necesidad de actualizar la página.**

**o ¿De qué forma validaron las entradas de datos? Expliquen brevemente**

**R/ Las entradas fueron validadas verificando que ninguno de los campos obligatorios estuviera vacío antes de realizar el cálculo.
Se utilizó una estructura condicional if para comprobar que el nombre del cliente, el tipo de reparación y el nivel de urgencia tuvieran valores válidos. 
Si alguno de los campos estaba vacío, se mostraba un mensaje de alerta y el proceso se detenía, evitando generar una cotización incorrecta o incompleta.**

**o ¿Cómo manejaría la escalabilidad futura en su página?**

**R/ Para mejorar la escalabilidad del Sistema de Cotización, se podría integrar una base de datos para almacenar el historial de cotizaciones, 
implementar autenticación de usuarios para talleres y clientes, y conectar el sistema a un servidor mediante una API.
También sería recomendable modularizar el código en varios archivos JavaScript y utilizar un framework moderno para facilitar la expansión del sistema, 
permitiendo agregar nuevas opciones de reparación, reportes y gestión de clientes sin afectar la estructura principal.**
