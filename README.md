# FormsDaw

Para esta actividad se ha trabajado con servicios, Firebase como base de datos, y manejo en general de Angular Material. La parte más pesada ha sido sin duda la importanción constante de diferentes módulos, hasta llegó el punto que busqué todos los existentes e hice copia-pega de estos en el archivo correspondiente de los módulos de Angular Material. Irónicamente, esto hacía que el proyecto fuera demasiado pesado, así que acabé quitando algunos. Una solución que, sin embargo, de poco sirvió, y tuve que modificar los parámetros para que al buildear la aplicación, esta no diera error por el tamaño del proyecto.

Se ha elaborado un formulario reactivo que implementa todas las funcionalidades CRUD: crear, modificar, y borrar un elemento. Seguí un tutorial online que explicara como trabajar con la base de datos Firebase e implementarla para que interactúe el usuario con ella. Sin embargo, el tutorial tenía la versión de Angular 9, por lo que tuve que "buscarme la vida" para que funcionase con la versión 13, puesto que ya tan avanzado en el proyecto no iba a empezar de cero y buscar otro. Ahí fue cuando la iluminación que viene denominada por: documentación de Angular y documentación de Firebase, demostró que existe un módulo de compatibilidad entre versiones.

Para el despliegue se ha utilizado Vercel. Puede acceder a la aplicación en el siguiente enlace:
> https://daw-2-forms.vercel.app/
