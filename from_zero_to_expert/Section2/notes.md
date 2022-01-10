# Que es React

Una librería, no un framework. Declarativa, eficiente, predecible, componentes.

Componentes son piezas de código que mantienen el código limpio y ordenado.

Puede usarse en servidor con Node y se pueden crear aplicaciones móviles con React Native.

`const h1Tag = <h1>Hola Mundo </h1>` -> Esto es JSX (JS + XML)


## 01-intro-react apuntes

Si pone `!` en un HTML vacío y pulsas tab te crea una template con un código HTML

`type="text/babel"` para que babel lea que es JSX


# Que es Babel

Compilador de JavaScript moderno que funcione en nevagdores que aun no lo soporten (eg JSX).

```
const respApi = {
    //personajes: ['Goku', 'Vegeta']
};
console.log(respApi.personajes?.length)
```

Esto debería dar un error, por que no hay personajes, y un length de undefined no funciona. Pero poniendo ? es como si fuera un if, y va a devolver undefined.