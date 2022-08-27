# Proyecto Final | Programacion 1
 
 Nombre del proyecto: Maestros ITLA
 
 Creador/es: Hamashia Sosa Reyes, John Enmanuel Guzman Baez
 
 Seccion: 8
 
 Matricula: 2021-2128, 2021-2378
 
 Lenguajes utilizados: HTML, CSS, JavaScript.
 
 Motor de templates: Handlebars
 
 Gestor de Base de datos: MongoDB en linea
 
 Descripcion del proyecto:
 Maestros ITLA, es una pagina web con la intencion de ser una herramienta para estudiantes nuevos y activos de documentacion a la hora de elegir maestros para su proxima seleccion, de modo que esten debidamente informados y esten consientes a lo que se enfrentaran en cuando al tiempo compartido con el maestro.
 La pagina y el codigo estan ambientados en el idiomas Ingles (English-US) para que de la misma forma puedan reformar el idioma.

Partes de la pagina detalle por detalle:

Empecemos por el "Register": La pagina de registro conectada a la base de datos permitiendo que los usuarios nuevos puedan formar parte de los usuarios de la aplicacion. El register esta conformado por: Una peticion de correo electronico, una peticion de usario, contraseña y fecha de nacimiento luego de llenar la informacion debidamente consta de un boton que envia la informacion a la base datos, almacenandola alli. De igual forma posee la opcion de loguearse en caso de poseer una cuenta en la pagina web, el cual clickeando "Have an account already" redicciona automaticamente al "Log In"

Mostrando imagen:
![Register](https://user-images.githubusercontent.com/107286049/186790682-8767f2c7-6248-440d-93a1-8d4cbcf733ac.png)

Seguidamente tenemos el "Log In": Que permite que los usuarios puedan ingresar a la pagina sin necesidad de "logearse" nuevamente, sino que pueden introducir sus datos ya almacenados en la base de datos para introducirse en la pagina web. El "Log In: Consta de un peticion de correo y de la contraseña del usuario. 

Mostrando imagen:

![image](https://user-images.githubusercontent.com/107286049/186791611-ea5fb769-b83b-4277-8e19-50e0e7ee39eb.png)

Luego de que el usuario ha ingresado sus datos tantos como en el "register" o "Log in" las rutas los redirecciona a la pagina "Home" del proyecto. El posee una barra de navacion que contiene el logo del proyecto, el cual clickeando redirige a la pagina principal en todas las secciones del proyecto (Exceptuando en el register y log in); el nombre del proyecto, dos botones de navegacion: "Home" Y "About" que rediccionan a las secciones que corresponden y al final contiene una barra de navegacion (decorativa).

Luego tenemos el cuerpo de la pagina el cual presenta el titulo "Categories. Select your career" para que el usario vea las opciones de carreras disponibles hasta el momento (Por el momento tres) igual que presenta la opcion de loguearse y registrarse en caso de ingresar a la pagina "home" directamente sin haberse pasado por alguna de las secciones ya detalladas. Luego se presentan los tres bloques que se generan automaticamente segun la cantidad ingresada de en este caso, la cantidad de categorias. Esto gracias al motor de templates. Estos bloques presentan una imagen ilustrativa de la carrera en cuestion junto con el nombre de la categoria, un boton que permite ver lo que se almacena en el interior de cada categoria y al lado de este el nombre de la pagina de forma decorativa.

Mostrando imagen:

![image](https://user-images.githubusercontent.com/107286049/186796927-f32c3d1e-afa5-43b7-bcd7-d346a4d15609.png)


Cada bloque consta de un boton llamado "Explore" el cual en cada bloque redirecciona a una seccion diferente, asi que explicaremos la funcion del "Explore": Este boton le permite al usario ingresar al apartado donde segun la carrera mostrara los maestros junto con las materias que imparten activamente en el instituto. Estos bloques son generados automaticamente segun la cantidad de maestros expresada en el codigo gracias al motor de templates, haciendo que el codigo este mas organizado sin repeticiones innecesarias y molestas. En cada bloque se encuentra el nombre del maestro, sus materias impartidas y un puntuacion de estrellas segun la opinion popular orientada a cinco estrellas (A mayor cantidad de estrellas mayor aceptacion del publico estudiantil. Estos bloques son generados de igual forma en cada seccion o categoria con la informacion debidamente distribuida, la barra de navegacion funcion de la misma forma que ya hemos explicado antes.

Mostrando imagenes:

![image](https://user-images.githubusercontent.com/107286049/186797814-57c82cff-6804-4009-bc14-be55c2a5738b.png)

![image](https://user-images.githubusercontent.com/107286049/186797922-fac022a2-ebc5-4226-8573-ef778346603f.png)

![image](https://user-images.githubusercontent.com/107286049/186797971-10d2613e-a651-48a2-acfe-b014ff0c7218.png)

Finalmente que hemos llegado a la ultima seccion de la paginan, el "about us" donde cuenta un poco sobre la razon de la creacion del sitio web y una palabras motivacionales al quien pueda interesar.

Mostrando imagen:

![image](https://user-images.githubusercontent.com/107286049/187048049-d3610234-431f-437a-a2f3-945cff221313.png)

Luego de haber detallado seccion por seccion nuestro proyecto espero que haya sido del agrado del maestro y aquien pueda interesar, de modo que pueda cumplir con los requerimeintos impuestos a la hora de calificar este proyecto.

Es cuanto, muchas gracias.

Nota-1: No se si habia que detallar el codigo, en si pero trate de documentarlo en si mismo de modo que sea bien entendible.
Nota-2: Ya no se si realmente amo u odio la programacion pero aqui esta el proyecto



