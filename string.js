//Todas las funciones para una cadena de texto
//La primera es substr la cual sirve para devolver los caracteres de una cadena que comienzan en una localización especificada y de acuerdo al numero de caracteres que se especifiquen:

let cadena= "Programando con cadenas y sus funciones"
console.log("Cadena con la que se está trabajando: " +cadena)
console.log(cadena.substr(5,10))

//aqui se comenzo a tomar caracteres desde la posición 5 y se tomaron 10 caracteres incluyendo los espacios

//ahora sigue substring, hace básicamente lo mismo que substr solo que en vez de tomar 10 caracteres, toma del caractel inicial hasta el segundo caracter que se ingresa:

console.log(cadena.substring(7,14))

//replace sirve para remplazar una parte de la cadena por otra:

console.log(cadena.replace("Programando",'Trabajando'))

//toLocaleLowerCase y toUpperCase sirve para cambiar de mayusculas a minusculas y viceversa:

console.log(cadena.toLocaleLowerCase())
console.log(cadena.toUpperCase())

//indexOf devuelve el índice, dentro de la cadena buscando desde el valor de caracter que se le da:

console.log(cadena.indexOf("con",10))

//includes es una indicacion que determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false:

console.log(cadena.includes("sus funciones", 16))

//slice extrae los elementos de una cadena y devuelve otra cadena:

console.log(cadena.slice(4,-9))

//concat combina dos o más cadenas de texto y devuelve una nueva cadena

let cadena2=", todo esto haciendolo en javascript"

console.log(cadena.concat('', cadena2 ))

//search ayuda a buscar una expresión en la cadena

console.log(cadena.search("funciones"))

//lastIndexOf devuelve la posición del objeto buscado dentro de la cadena, es casi lo mismo que indexOf:

console.log(cadena.lastIndexOf("sus"))

//charCodeAt devuelve un  número indicando el calor unicode del carácter proporcionado:

console.log(cadena.charCodeAt(3))

//trim elimina los espacios en blanco en los extremos de la cadena:

let cadena3= "          cadena con espaciosss          "
console.log(cadena3)
console.log(cadena3.trim())

//charAt devuelve el caracter que está en la posición que se ingreso

console.log(cadena.charAt(12))

//valueOf devuelve el valor primitivo de un caracter en la cadena:

console.log(cadena.valueOf())

//split divine una cadena convirtiendola en arreglo:

console.log(cadena.split(1,10))

//toString devuelve una cadena que representa el objeto especificado:

console.log(cadena2.toString())

//y por ultimo, match devuelve ciertos valores buscados:

console.log(cadena2.match("todo"))

