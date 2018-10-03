# Where you can try this

go to jscomplete.com/repl and paste the code of this folder

mountNode is the zone where the JS in the page is going to be rendered (just works in jscomplete.com/repl)


## Your first component (bit.ly/psreact1)

### props

props passed in the definition of the component (see first_function_component.js) has the things that you are adding in the rendering (see `label` first_function_component.js)


### state

Las funciones son inmutables por lo que se necesita pasar de un componente de funcion a clase para poder cambiar su estado (mirar el first_class_component.js)

En el constructor se define el state y se inicializa.


OJO: Para cambiar el state es necesario llamar a setState() pero dentro hay que definir a prevState como funcion que retorne el objeto del state que quieres cambiar para que no haya condiciones de carrera (por eso se pone entre parentesis las llaves por que llama a la funcion) (mirar el first_class_component.js).


## Reusable Components (bit.ly/psreact2)

