# Tipos definidos por ECMAScript

El último estándar ECMAScript define nueve tipos de datos.

## Tipos primitivos (controlados por `typeof`)

| Tipo | Resultado de `typeof` | Descripción |
| :--- | :--- | :--- |
| **Undefined** | `"undefined"` | Valor asignado automáticamente a una variable no inicializada. |
| **Boolean** | `"boolean"` | Representa un valor lógico: `true` o `false`. |
| **Number** | `"number"` | Representa valores numéricos, enteros o decimales. |
| **String** | `"string"` | Representa texto o cadenas de caracteres. |
| **BigInt** | `"bigint"` | Representa números enteros muy grandes con precisión arbitraria. |
| **Symbol** | `"symbol"` | Valor único e inmutable usado como identificador de propiedades. |
| **Null** | `"object"` | Tipo primitivo especial que representa la ausencia intencional de un valor. |

## Tipos estructurales

| Tipo | Resultado de `typeof` | Descripción |
| :--- | :--- | :--- |
| **Object** | `"object"` | Tipo estructural especial que no es de datos pero para cualquier instancia de objeto construido que también se utiliza como estructuras de datos: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date y casi todo lo hecho con la palabra clave new.  |
| **Function**| `"function"` |  Una estructura sin datos,  es simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor Object |

# Referencias
[https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Data_structure](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Data_structure)