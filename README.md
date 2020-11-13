# BoxiSleep
Programa de prueba de BoxiSleep, con back hecho en Node.js y fron en Angular.js

##Instalación
Para poder utilizar este proyecto, debe primero clonar este repositorio en la carpeta que desee en su ordenador.
Luego debe ir a la carpeta Backend e instalar las dependencias correspondientes y podra poner en funcionamiento el servidor en el localhost:3000
Realice las siguientes instrucciones en la consola de comandos
```
npm i
npm start
```
Igualmente por parte del Front dirigirnos a Frontend/boxisleep e instalar las dependencias con npm. Y luego utilizar la consola de angular ng para poner en funcionamiento la pagina.
```
npm i
ng serve
```
##Modificar Correo de llegada de notificaciones
En la parte del backend se puede dirigir a routes/products.js y en la función sendEmail puede hacer la configuración para el envio de los remitentes del correo asi mismo si desea cambiar el servidor con el cual se hacen los envios.
