# Desestruturacion en parametros de funciones

Cuando tienes funciones que esperan recibir una caja(por ejemplo, un objeto) con multiples datos, puedes desempaquetar directamente sus propiedades en los parametros. Esto es util para no tener que acceder a la propiedad dentro de la funcion.

```javascript
const person = {
  name: "Lucy",
  age: 40,
  profession: "programmer",
};

function greet({ name, profession }) {
  console.log(`Hi, my name is ${name} and I am ${profession}`);
}

greet(person);
```

## Desestruturacion anidada

Cuando tienes cajas dentro de cajas(objetos anidados o arrays dentro de objetos), puedes desempaquetar cada nivel. Por ejemplo, imagina un perfil de usuario que tiene una direccion dentro de una propiedad.

```javascript
const completeUser = {
  name: "Lucy",
  age: 50,
  address: {
    city: "Lima",
    country: "United states",
  },
};

const {
  name: userName,
  address: { city: userCity, country: userCountry },
} = completeUser;

console.log(userCity);
console.log(userCountry);
```
