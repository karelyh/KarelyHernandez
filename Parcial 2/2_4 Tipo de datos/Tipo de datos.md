## Tipos definidos por ECMAScript

El último estándar ECMAScript define nueve tipos de datos.

### Tipos primitivos (controlados por `typeof`)

| Tipo | Resultado de `typeof` | Descripción |
| :--- | :--- | :--- |
| **Undefined** | `"undefined"` | Valor asignado automáticamente a una variable no inicializada. |
| **Boolean** | `"boolean"` | Representa un valor lógico: `true` o `false`. |
| **Number** | `"number"` | Representa valores numéricos, enteros o decimales. |
| **String** | `"string"` | Representa texto o cadenas de caracteres. |
| **BigInt** | `"bigint"` | Representa números enteros muy grandes con precisión arbitraria. |
| **Symbol** | `"symbol"` | Valor único e inmutable usado como identificador de propiedades. |
| **Null** | `"object"` | Tipo primitivo especial que representa la ausencia intencional de un valor. |

### Tipos estructurales

| Tipo | Resultado de `typeof` | Descripción |
| :--- | :--- | :--- |
| **Object** | `"object"` | Tipo estructural que agrupa datos y funciones. Ej: `Object`, `Array`, `Map`. |
| **Function**| `"function"` | Subtipo especial de objeto que representa código ejecutable. |

---
## Valores primitivos

Todos los tipos, excepto los objetos, definen valores inmutables (no se pueden cambiar). Los valores primitivos son:
**Undefined, Boolean, Number, BigInt, String, Symbol, Null**

## Tipo Boolean

Representa una entidad lógica con dos valores posibles: `true` o `false`.

```javascript
let activo = true;
let terminado = false;

## Tipo Null
Tiene exactamente un valor: `null`.  
Representa la ausencia intencional de un valor.

```javascript
let persona = null;
```

## Tipo Undefined
Una variable declarada pero no inicializada tiene el valor `undefined`.

```javascript
let x;
console.log(x); // undefined
```

## Tipo Number
El tipo `Number` representa números en formato de doble precisión de 64 bits IEEE 754.  
Puede representar valores entre `-(2^53 - 1)` y `(2^53 - 1)`.

También tiene tres valores especiales:
- `+Infinity`
- `-Infinity`
- `NaN` (Not a Number)

Constantes útiles:
```javascript
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
```

Ejemplo:
```javascript
let n = 3.14;
let infinito = Infinity;
let noNumero = NaN;
```

## Tipo BigInt
Permite representar números enteros muy grandes más allá del límite de `Number`.  
Se crea agregando una `n` al final del número o usando el constructor `BigInt()`:

```javascript
let grande = 12345678901234567890n;
let otro = BigInt(999999999999999999);
```

## Tipo String
Representa datos textuales formados por elementos de 16 bits.  
Las cadenas son inmutables.

```javascript
let saludo = "Hola";
let nombre = 'Mundo';
let completo = saludo + " " + nombre; // "Hola Mundo"
```

Puedes crear nuevas cadenas con:
- Concatenación: `+` o `String.concat()`
- Subcadenas: `substr()`, `slice()`, etc.

## Tipo Symbol
Un símbolo es un valor primitivo único e inmutable,  
usado frecuentemente como clave de propiedades de objetos.

```javascript
let id = Symbol("id");
let user = {
  [id]: 123
};
```

---

## Tabla general de tipos de datos

| Tipo de dato   | Descripción                                         | Ejemplo                              |
| :------------- | :-------------------------------------------------- | :----------------------------------- |
| **String**     | Representa texto o cadenas de caracteres.           | `"Hola"`, `'Mundo'`, `` `Hola` ``   |
| **Number**     | Representa valores numéricos, enteros o decimales.  | `42`, `3.14`, `-7`                  |
| **BigInt**     | Permite trabajar con números enteros muy grandes.   | `12345678901234567890n`             |
| **Boolean**    | Representa valores lógicos: verdadero o falso.      | `true`, `false`                     |
| **Undefined**  | Valor asignado a una variable no inicializada.      | `let x;`                            |
| **Null**       | Representa la ausencia intencional de un valor.     | `let y = null;`                     |
| **Symbol**     | Valor único e inmutable, usado como identificador.  | `Symbol('id')`                      |
| **Object**     | Estructura que agrupa datos y funciones.            | `{nombre: "Ana", edad: 25}`         |
| **Function**   | Objeto que representa un bloque de código ejecutable.| `function saludar() { ... }`        |
| **Array**      | Colección ordenada de elementos.                    | `[1, 2, 3, 4]`                      |

---

# Referencias
[https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Data_structure](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Data_structure)